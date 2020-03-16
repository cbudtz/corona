import {computed, observable} from "mobx";


class CoronaStore {
    constructor (){
        this.fetchData();
    }
    @observable data = [{date:"", content:"NOT ready",row:"0",col:"0"}];

    fetchData = async ()=>{
        let result;
        result = await fetch("https://spreadsheets.google.com/feeds/cells/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/1/public/full?alt=json");
        let json = await result.json();
        const newData =json.feed.entry.map((entry: any)=>{
            const dataDate = entry.gs$cell.row > 31 ? entry.gs$cell.row-31  + "/4" : entry.gs$cell.row + "/3";
            return {date: dataDate, content:entry.content.$t,row:entry.gs$cell.row,col:entry.gs$cell.col}
            }
        );
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