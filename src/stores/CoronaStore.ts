import {computed, observable} from "mobx";


class CoronaStore {
    constructor (){
        this.fetchData();
    }
    @observable data = [{date:"", content:"NOT ready",row:"0",col:"0"}];
    @observable structuredData = [{Dato:"",
        "Nye Tilfælde":"NOT ready",
        "Døde":"NOT ready",
        "Nye Døde":"NOT ready",
        "Remission":"NOT ready",
        "Aktive":"",
        "Intensiv":"",
        "Indlagte":"",
        "Estimerede tilfælde":"",
        "Estimerede nye tilfælde":"",
        "Estimeret antal indlagte":"",
        "Estimeret antal nye indlagte":"",
        "Respiratorbehandlede":"",
        row:"0",
        col:"0"}]
    @observable growthRate = 1.3;
    @observable hospitalizationRate = 0.05;

    fetchData = async ()=>{
        let result;
        result = await fetch("https://spreadsheets.google.com/feeds/cells/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/1/public/full?alt=json");
        let json = await result.json();
        const newData =json.feed.entry.map((entry: any)=>{
            const dataDate = entry.gs$cell.row > 31 ? entry.gs$cell.row-31  + "/4" : entry.gs$cell.row + "/3";
            return {date: dataDate, content:entry.content.$t,row:entry.gs$cell.row,col:entry.gs$cell.col}
            }
        );
        // const structuredData;
        this.data = newData;
    };
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
    get EstimatedHospitalized(){
        return this.data.filter((entry)=>entry.col==="12" && entry.row!=="1")

    }
    @computed
    get EstimatedNewHospitalized(){
        return this.data.filter((entry)=>entry.col==="13" && entry.row!=="1")

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
        let infected = hospitalized*20;
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
                dato: date.getDate()+1 + "/" + (date.getMonth()+1) ,
                kumuleretHospitaliserede:Math.round(hospitalized),
                nyeIndlæggelser: Math.round(hospitalized-prevHospitalized),
                infected:infected,
                newInfected: infected-prevInfected,
                indlagte: 0

            };
            let indlagte = 0;
            for (let j = i;j>0 && i-j<14;j--) {
                newPoint.indlagte += data[j].nyeIndlæggelser;
            }
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