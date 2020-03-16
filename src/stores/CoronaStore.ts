import {computed, observable} from "mobx";


class CoronaStore {
    constructor (){
        this.fetchData();
    }
    @observable data = [{content:"NOT ready",row:"0",col:"0"}];

    fetchData = async ()=>{
        let result;
        result = await fetch("https://spreadsheets.google.com/feeds/cells/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/1/public/full?alt=json");
        let json = await result.json();
        const newData =json.feed.entry.map((entry: any)=>{
            return {content:entry.content.$t,row:entry.gs$cell.row,col:entry.gs$cell.col}
            }
        );
        this.data = newData;
    };
    @computed
    get Infected(){
        return this.data.filter((entry)=>entry.col==="2" && entry.row!=="0");
    }

    @computed
    get NewCases(){
        return this.data.filter((entry)=>entry.col==="3" && entry.row!=="0");
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