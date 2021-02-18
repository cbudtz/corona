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
        const date = new Date(2020,2,1);
        const newData =json.feed.entry.map((entry: any,key:number)=>{
                let now;
                now = new Date(date.valueOf());
                now.setDate(now.getDate()+parseInt(entry.gs$cell.row)-1);
                const dataDate = now.getDate() + "/" + (now.getMonth()+1);
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
    get Ventilator(){
        return this.data.filter((entry)=>entry.col==="14" && entry.row!=="1");
    }
    @computed
    get Hospitalized(){
        return this.data.filter((entry)=>entry.col==="9" && entry.row!=="1")
    }

    @computed
    get AvgHospitalized(){
        return this.data.filter((entry)=>entry.col==="39" && entry.row!=="1")
    }

    @computed
    get GrowthHospitalized(){
        return this.data.filter((entry)=>entry.col==="40" && entry.row!=="1")
    }

    @computed
    get AvgNewInfected(){
        return this.data.filter((entry)=>entry.col==="41" && entry.row!=="1")
    }

    @computed
    get EstimatedInfected(){
        return this.data.filter((entry)=>entry.col==="10" && entry.row!=="1")
    }

    @computed
    get EstimatedB117Infected(){
        return this.data.filter((entry)=>entry.col==="34" && entry.row!=="1");
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
    get Vaccinated(){
        return this.data.filter((entry)=>entry.col==="24" && entry.row!=="1")
    }
    @computed
    get BritishCumulatedInfected(){
        return this.data.filter((entry)=>entry.col==="28" && entry.row!=="1")
    }
    @computed
    get BritishEstimatedCumulatedInfected(){
        return this.data.filter((entry)=>entry.col==="29" && entry.row!=="1")
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
        console.log("START");
        console.log(JSON.stringify(start.content));

        data.push({
            dato: new Date().getDate()+ "/" + (new Date().getMonth()+1),
            infected:Number(this.Infected[this.Infected.length-1].content),
            newCases: Number(this.NewCases[this.NewCases.length-1].content),
            indlagte:Number(start.content),
            respiratorPt: Number(this.Ventilator[this.Ventilator.length-1].content)
        });
        console.log(data[0]);
        for (let i = 0; i < 120; i++) {

            let date = new Date();
            date.setDate(date.getDate()+i);
            // @ts-ignore
            let newPoint = {
                dato: date.getDate() + "/" + (date.getMonth()+1) ,
                infected: data[i].infected + data[i].newCases*this.growthRate,
                newCases: data[i].newCases*this.growthRate* ((5800000-data[i].infected)/(5800000-Number(this.Vaccinated[this.Vaccinated.length-1].content))), //Correction for available for infection
                indlagte: data[i].indlagte*this.growthRate* ((5800000-data[i].infected)/(5800000-Number(this.Vaccinated[this.Vaccinated.length-1].content))),
                respiratorPt: data[i].respiratorPt*this.growthRate * ((5800000-data[i].infected)/(5800000-Number(this.Vaccinated[this.Vaccinated.length-1].content)))

            };
            data.push(newPoint);
        }
        return data;
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