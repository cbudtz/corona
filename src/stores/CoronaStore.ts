import {computed, observable} from "mobx";


class CoronaStore {
    constructor (){
        this.fetchData();
    }
    @observable data = [{date:"", content:"NOT ready",row:"0",col:"0"}];
    @observable structuredData = [{Dato:"",
        "Tilfælde":"",
        "Nye Tilfælde":"NOT ready",
        "Faktisk døde":"NOT ready",
        "Faktisk nye døde":"NOT ready",
        "Remission":"NOT ready",
        "Aktive tilfælde":"",
        "Faktisk på intensiv":"",
        "Faktisk indlagte":"",
        "Faktisk i respirator":"",
        "Estimat antal smittede":"",
        "Estimat antal nye smittede":"",
        "Estimat kumuleret antal indlagte":"",
        "Estimat antal nye indlagte":"",
        "Estimat antal indlagte":""
    }]
    @observable constants ={pop:0,fractionHospitalized:0,growthRate:0,growthRateText:"",fractionRespirator:0}
    @observable growthRate = 1.1;
    @observable hospitalizationRate = 0.02;

    fetchData = async ()=>{
        let result;
        result = await fetch("https://spreadsheets.google.com/feeds/cells/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/1/public/full?alt=json");
        let json = await result.json();
        const newData =json.feed.entry.map((entry: any)=>{
                let month = 3;
                let day = parseInt(entry.gs$cell.row);
                if (day >31){
                    day -= 31;
                    month++;
                    if (day >30 ){
                        day -=30;
                        month++;
                    }
                }

                const dataDate = day + "/" + month;
                return {date: dataDate, content:entry.content.$t,row:entry.gs$cell.row,col:entry.gs$cell.col}
            }
        );
        this.data = newData;
        this.structureData(json);
        this.growthRate = parseFloat(this.RegressionGrowthRate[0].replace(",","."))
    };

    private structureData(json: { feed: { entry: any[]; }; }) {
        this.structuredData = [];
        let rowindices: string[] = [];
        let forEach = json.feed.entry.forEach((entry: any) => {
            if (entry.gs$cell.row == 1) {
                rowindices[parseInt(entry.gs$cell.col)]=entry.content.$t;
            } else {
                if (parseInt(entry.gs$cell.col)===1){
                    this.structuredData.push({
                        "Tilfælde": "",
                        "Estimat antal nye smittede": "",
                        "Estimat antal smittede": "",
                        "Estimat antal indlagte": "",
                        "Estimat antal nye indlagte": "",
                        "Estimat kumuleret antal indlagte": "",
                        "Faktisk indlagte": "",
                        "Faktisk i respirator": "",
                        "Faktisk på intensiv": "",
                        "Nye Tilfælde": "",
                        "Dato": entry.content.$t,
                        "Aktive tilfælde": "",
                        "Faktisk døde": "",
                        "Faktisk nye døde": "",
                        "Remission": ""
                    })
                }

                let key = rowindices[parseInt(entry.gs$cell.col)];
                // @ts-ignore
                this.structuredData[this.structuredData.length-1][key] = entry.content.$t;


            }

        });
    }

    @computed
    get Infected(){
        return this.data.filter((entry)=>entry.col==="2" && entry.row!=="1");
    }

    @computed
    get NewCases(){
        return this.data.filter((entry)=>entry.col==="3" && entry.row!=="1");
    }
    @computed
    get Deaths(){
        return this.data.filter((entry)=>entry.col==="4" && entry.row!=="1");
    }
    @computed
    get NewDeaths(){
        return this.data.filter((entry)=>entry.col==="5" && entry.row!=="1");
    }
    @computed
    get Remission(){
        return this.data.filter((entry)=>entry.col==="6" && entry.row!=="1");
    }
    @computed
    get Active(){
        return this.data.filter((entry)=>entry.col==="7" && entry.row!=="1");
    }
    @computed
    get Critical(){
        return this.data.filter((entry)=>entry.col==="8" && entry.row!=="1");
    }
    @computed
    get Hospitalized(){
        return this.data.filter((entry)=>entry.col==="9" && entry.row!=="1")
    }

    @computed
    get EstimatedInfected(){
        return this.data.filter((entry)=>entry.col==="10" && entry.row!=="1")
    }

    @computed
    get EstimatedNewInfected(){
        return this.data.filter((entry)=>entry.col==="11" && entry.row!=="1")
    }

    @computed
    get EstimatedCumulatedHospitalized(){
        return this.data.filter((entry)=>entry.col==="12" && entry.row!=="1")

    }
    @computed
    get EstimatedNewHospitalized(){
        return this.data.filter((entry)=>entry.col==="13" && entry.row!=="1")
    }
    @computed
    get EstimatedCurrentHospitalized(){
        return this.data.filter((entry)=>entry.col==="21" && entry.row!=="1");
    }
    @computed
    get EstimatedCurrentRespiratorPatients(){
        return this.data.filter((entry)=>entry.col==="22" && entry.row!=="1");
    }

    @computed
    get RegressionGrowthRate(){
        let growthRate = this.data.filter((entry)=>entry.col=="17")[1]?.content;
        let growthText = this.data.filter((entry)=>entry.col=="18")[1]?.content;
        if (growthRate){
            return [growthRate,growthText];
        }
        return ["loading...","loading"];
    }
    @computed
    get FractionHospitalized(){
        return this.data.filter((entry)=>entry.col=="16")[1]?.content ?? "Loading";
    }

    @computed
    get InteractiveNumbers(){
        const latency =10;
        let data = [];
        const start = this.Hospitalized[this.Hospitalized.length-1]
        if(!start){
            return[{}];
        }
        console.log(start);
        let hospitalized = parseInt(start.content);
        let infected = hospitalized*1/this.hospitalizationRate;
        data.push({
            dato: 0,
            kumuleretHospitaliserede:hospitalized,
            nyeIndlæggelser:0,
            infected:infected,
            newInfected: 0,
            indlagte:0
        });
        for (let i = 0; i < 90; i++) {
            let prevInfected = infected;
            infected = infected*this.growthRate*(1-(infected/(6000000-infected)));
            let prevHospitalized = hospitalized;
            if (data[i-latency]){
                hospitalized = data[i-latency].infected*this.hospitalizationRate;
            }
            let date = new Date();
            date.setDate(date.getDate()+i-latency);
            let newPoint = {
                dato: date.getDate() + "/" + (date.getMonth()+1) ,
                kumuleretHospitaliserede:Math.round(hospitalized),
                nyeIndlæggelser: Math.round(hospitalized-prevHospitalized),
                infected:infected,
                newInfected: infected-prevInfected,
                indlagte: parseInt(start.content),
                respiratorPt: 0

            };
            let indlagte = 0;
            for (let j = i;j>0 && i-j<14;j--) {
                newPoint.indlagte += data[j].nyeIndlæggelser;
            }
            newPoint.respiratorPt = Math.round(newPoint.indlagte*0.20);
            data.push(newPoint);
        }
        return data.splice(latency+1);
    }

    @computed
    get Titles (){
        console.log("computing titles");
        console.log(this.data);
        if (this.data.length< 2){
            return "NOT Ready"
        }
        return this.data[0].content;
    }

}

export const coronaStore = new CoronaStore();