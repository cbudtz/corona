(this.webpackJsonpwebreact=this.webpackJsonpwebreact||[]).push([[0],{186:function(e,t,a){e.exports=a(378)},191:function(e,t,a){},192:function(e,t,a){},378:function(e,t,a){"use strict";a.r(t);var r,n,o,i,l,s,c=a(1),d=a.n(c),p=a(21),u=a.n(p),m=(a(191),a(192),a(193),a(89)),g=a.n(m),f=a(142),y=a(39),h=a(143),b=a(144),E=a(10),w=(a(195),a(5)),k=new(r=function(){function e(){var t=this;Object(h.a)(this,e),Object(y.a)(this,"data",n,this),Object(y.a)(this,"structuredData",o,this),Object(y.a)(this,"constants",i,this),Object(y.a)(this,"growthRate",l,this),Object(y.a)(this,"hospitalizationRate",s,this),this.fetchData=Object(f.a)(g.a.mark((function e(){var a,r,n,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://spreadsheets.google.com/feeds/cells/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/1/public/full?alt=json");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n=new Date(2020,2,1),o=r.feed.entry.map((function(e,t){var a;return(a=new Date(n.valueOf())).setDate(a.getDate()+parseInt(e.gs$cell.row)-1),{date:a.getDate()+"/"+(a.getMonth()+1),content:e.content.$t,row:e.gs$cell.row,col:e.gs$cell.col}})),t.data=o,t.structureData(r),t.growthRate=parseFloat(t.RegressionGrowthRate[0].replace(",","."));case 11:case"end":return e.stop()}}),e)}))),this.fetchData()}return Object(b.a)(e,[{key:"structureData",value:function(e){var t=this;this.structuredData=[];var a=[];e.feed.entry.forEach((function(e){if(1==e.gs$cell.row)a[parseInt(e.gs$cell.col)]=e.content.$t;else{1===parseInt(e.gs$cell.col)&&t.structuredData.push({"Tilf\xe6lde":"","Estimat antal nye smittede":"","Estimat antal smittede":"","Estimat antal indlagte":"","Estimat antal nye indlagte":"","Estimat kumuleret antal indlagte":"","Faktisk indlagte":"","Faktisk i respirator":"","Faktisk p\xe5 intensiv":"","Nye Tilf\xe6lde":"",Dato:e.content.$t,"Aktive tilf\xe6lde":"","Faktisk d\xf8de":"","Faktisk nye d\xf8de":"",Remission:""});var r=a[parseInt(e.gs$cell.col)];t.structuredData[t.structuredData.length-1][r]=e.content.$t}}))}},{key:"Infected",get:function(){return this.data.filter((function(e){return"2"===e.col&&"1"!==e.row}))}},{key:"NewCases",get:function(){return this.data.filter((function(e){return"3"===e.col&&"1"!==e.row}))}},{key:"Deaths",get:function(){return this.data.filter((function(e){return"4"===e.col&&"1"!==e.row}))}},{key:"NewDeaths",get:function(){return this.data.filter((function(e){return"5"===e.col&&"1"!==e.row}))}},{key:"Remission",get:function(){return this.data.filter((function(e){return"6"===e.col&&"1"!==e.row}))}},{key:"Active",get:function(){return this.data.filter((function(e){return"7"===e.col&&"1"!==e.row}))}},{key:"Critical",get:function(){return this.data.filter((function(e){return"8"===e.col&&"1"!==e.row}))}},{key:"Ventilator",get:function(){return this.data.filter((function(e){return"14"===e.col&&"1"!==e.row}))}},{key:"Hospitalized",get:function(){return this.data.filter((function(e){return"9"===e.col&&"1"!==e.row}))}},{key:"AvgHospitalized",get:function(){return this.data.filter((function(e){return"39"===e.col&&"1"!==e.row}))}},{key:"GrowthHospitalized",get:function(){return this.data.filter((function(e){return"40"===e.col&&"1"!==e.row}))}},{key:"AvgNewInfected",get:function(){return this.data.filter((function(e){return"41"===e.col&&"1"!==e.row}))}},{key:"EstimatedInfected",get:function(){return this.data.filter((function(e){return"10"===e.col&&"1"!==e.row}))}},{key:"EstimatedNewInfected",get:function(){return this.data.filter((function(e){return"11"===e.col&&"1"!==e.row}))}},{key:"EstimatedCumulatedHospitalized",get:function(){return this.data.filter((function(e){return"12"===e.col&&"1"!==e.row}))}},{key:"EstimatedNewHospitalized",get:function(){return this.data.filter((function(e){return"13"===e.col&&"1"!==e.row}))}},{key:"EstimatedCurrentHospitalized",get:function(){return this.data.filter((function(e){return"21"===e.col&&"1"!==e.row}))}},{key:"EstimatedCurrentRespiratorPatients",get:function(){return this.data.filter((function(e){return"22"===e.col&&"1"!==e.row}))}},{key:"Vaccinated",get:function(){return this.data.filter((function(e){return"24"===e.col&&"1"!==e.row}))}},{key:"RegressionGrowthRate",get:function(){var e,t,a=null===(e=this.data.filter((function(e){return"17"==e.col}))[1])||void 0===e?void 0:e.content,r=null===(t=this.data.filter((function(e){return"18"==e.col}))[1])||void 0===t?void 0:t.content;return a?[a,r]:["loading...","loading"]}},{key:"FractionHospitalized",get:function(){var e,t;return null!==(e=null===(t=this.data.filter((function(e){return"16"==e.col}))[1])||void 0===t?void 0:t.content)&&void 0!==e?e:"Loading"}},{key:"InteractiveNumbers",get:function(){var e=[],t=this.Hospitalized[this.Hospitalized.length-1];if(!t)return[{}];console.log(t);var a=parseInt(t.content),r=1*a/this.hospitalizationRate;e.push({dato:0,kumuleretHospitaliserede:a,"nyeIndl\xe6ggelser":0,infected:r,newInfected:0,indlagte:0});for(var n=0;n<120;n++){var o=r;r=r*this.growthRate*(1-r/(6e6-r));var i=a;e[n-10]&&(a=e[n-10].infected*this.hospitalizationRate);var l=new Date;l.setDate(l.getDate()+n-10);for(var s={dato:l.getDate()+"/"+(l.getMonth()+1),kumuleretHospitaliserede:Math.round(a),"nyeIndl\xe6ggelser":Math.round(a-i),infected:r,newInfected:r-o,indlagte:parseInt(t.content),respiratorPt:0},c=n;c>0&&n-c<14;c--)s.indlagte+=e[c].nyeIndl\u00e6ggelser;s.respiratorPt=Math.round(.2*s.indlagte),e.push(s)}return e.splice(11)}},{key:"Titles",get:function(){return console.log("computing titles"),console.log(this.data),this.data.length<2?"NOT Ready":this.data[0].content}}]),e}(),n=Object(E.a)(r.prototype,"data",[w.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{date:"",content:"NOT ready",row:"0",col:"0"}]}}),o=Object(E.a)(r.prototype,"structuredData",[w.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{Dato:"","Tilf\xe6lde":"","Nye Tilf\xe6lde":"NOT ready","Faktisk d\xf8de":"NOT ready","Faktisk nye d\xf8de":"NOT ready",Remission:"NOT ready","Aktive tilf\xe6lde":"","Faktisk p\xe5 intensiv":"","Faktisk indlagte":"","Faktisk i respirator":"","Estimat antal smittede":"","Estimat antal nye smittede":"","Estimat kumuleret antal indlagte":"","Estimat antal nye indlagte":"","Estimat antal indlagte":""}]}}),i=Object(E.a)(r.prototype,"constants",[w.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{pop:0,fractionHospitalized:0,growthRate:0,growthRateText:"",fractionRespirator:0}}}),l=Object(E.a)(r.prototype,"growthRate",[w.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1.1}}),s=Object(E.a)(r.prototype,"hospitalizationRate",[w.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.02}}),Object(E.a)(r.prototype,"Infected",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"Infected"),r.prototype),Object(E.a)(r.prototype,"NewCases",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"NewCases"),r.prototype),Object(E.a)(r.prototype,"Deaths",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"Deaths"),r.prototype),Object(E.a)(r.prototype,"NewDeaths",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"NewDeaths"),r.prototype),Object(E.a)(r.prototype,"Remission",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"Remission"),r.prototype),Object(E.a)(r.prototype,"Active",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"Active"),r.prototype),Object(E.a)(r.prototype,"Critical",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"Critical"),r.prototype),Object(E.a)(r.prototype,"Ventilator",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"Ventilator"),r.prototype),Object(E.a)(r.prototype,"Hospitalized",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"Hospitalized"),r.prototype),Object(E.a)(r.prototype,"AvgHospitalized",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"AvgHospitalized"),r.prototype),Object(E.a)(r.prototype,"GrowthHospitalized",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"GrowthHospitalized"),r.prototype),Object(E.a)(r.prototype,"AvgNewInfected",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"AvgNewInfected"),r.prototype),Object(E.a)(r.prototype,"EstimatedInfected",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedInfected"),r.prototype),Object(E.a)(r.prototype,"EstimatedNewInfected",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedNewInfected"),r.prototype),Object(E.a)(r.prototype,"EstimatedCumulatedHospitalized",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedCumulatedHospitalized"),r.prototype),Object(E.a)(r.prototype,"EstimatedNewHospitalized",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedNewHospitalized"),r.prototype),Object(E.a)(r.prototype,"EstimatedCurrentHospitalized",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedCurrentHospitalized"),r.prototype),Object(E.a)(r.prototype,"EstimatedCurrentRespiratorPatients",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedCurrentRespiratorPatients"),r.prototype),Object(E.a)(r.prototype,"Vaccinated",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"Vaccinated"),r.prototype),Object(E.a)(r.prototype,"RegressionGrowthRate",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"RegressionGrowthRate"),r.prototype),Object(E.a)(r.prototype,"FractionHospitalized",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"FractionHospitalized"),r.prototype),Object(E.a)(r.prototype,"InteractiveNumbers",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"InteractiveNumbers"),r.prototype),Object(E.a)(r.prototype,"Titles",[w.b],Object.getOwnPropertyDescriptor(r.prototype,"Titles"),r.prototype),r),v=a(145),O=a(11),D=a(382),j=a(383),I=a(384),R=function(e){var t=e.data,a=e.dataKey,r=e.domain,n=e.height,o=e.children;return n=n||400,d.a.createElement(O.f,{width:"90%",height:n},d.a.createElement(O.d,{data:t},d.a.createElement(O.a,{strokeDasharray:"3 3"}),d.a.createElement(O.h,{dataKey:"row"}),d.a.createElement(O.i,{domain:r}),d.a.createElement(O.g,null),d.a.createElement(O.b,null),d.a.createElement(O.e,{x:"13/3",stroke:"red",label:{value:"Ny gr\xe6nse for testning",angle:-45}}),d.a.createElement(O.e,{x:"15/4",stroke:"blue",label:{value:"vuggestuer, b\xf8rnehaver og 0-5 klasse \xe5bner",angle:-45}}),d.a.createElement(O.e,{x:"20/4",stroke:"blue",label:{value:"Fris\xf8rer, mass\xf8rer, mfl \xe5bner",angle:-45}}),d.a.createElement(O.e,{x:"18/5",stroke:"blue",label:{value:"Fase 2 gen\xe5bning: restauranter, storcentre, mfl",angle:-45}}),d.a.createElement(O.e,{x:"8/6",stroke:"blue",label:{value:"Fase 3 gen\xe5bning:Kultur + 50 forsamlede, m.m.",angle:-45}}),d.a.createElement(O.e,{x:"18/8",stroke:"blue",label:{value:"Fase 4 gen\xe5bning:Barer + 100 forsamlede, m.m",angle:-45}}),d.a.createElement(O.e,{x:"17/6",stroke:"green",label:{value:"Ny opg\xf8relsesmetode for indlagte",angle:-45}}),d.a.createElement(O.c,{type:"monotone",dataKey:a,stroke:"#8884d8",activeDot:{r:2}}),o))};a(155);function z(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("p",null,"Beregnet ud fra 10 dage fra smitte til hospitalisering, ",(100/k.FractionHospitalized).toFixed(2),"% Hospitalisering og tilv\xe6kst p\xe5 ",k.RegressionGrowthRate[0]," (Estimeret ud fra ",k.RegressionGrowthRate[1],") - Der er taget h\xf8jde for immunitet "),d.a.createElement("h5",null,"Advarsel - Spekulativt"))}var N=Object(v.a)((function(){return k.data,parseFloat(k.RegressionGrowthRate[0].replace(",",".")),d.a.createElement("div",{className:"App"},d.a.createElement(D.a,{fluid:!0},d.a.createElement(j.a,{fixed:"top",style:{backgroundColor:"white"}},d.a.createElement(I.a,null,d.a.createElement(I.a.Link,{href:"#Tal"},"Dagens Tal"),d.a.createElement(I.a.Link,{href:"#Udsigt"},"CoronaUdsigten"),d.a.createElement(I.a.Link,{href:"#Interaktiv"},"Den interaktive udsigt")))),d.a.createElement(D.a,{style:{marginTop:70}},d.a.createElement("h5",null,"Tal kommer fra: ",d.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/edit#gid=0"},"Dette regneark")),d.a.createElement("div",null,d.a.createElement("div",{id:"Tal",style:{paddingTop:70}}),d.a.createElement("h2",null,"Antal smittede - officielle danske tal - siden 1/3-2020"),d.a.createElement(R,{data:k.Infected.map((function(e,t){var a;return{"Kumulerede tilf\xe6lde pr. dag":parseInt(e.content),row:e.date,"Kumulerede vaccinerede":(null===(a=k.Vaccinated[t])||void 0===a?void 0:a.content)||0}})),dataKey:"Kumulerede tilf\xe6lde pr. dag"},d.a.createElement(O.c,{type:"monotone",dataKey:"Kumulerede vaccinerede",stroke:"green",activeDot:{r:2}})),d.a.createElement("h2",null,"Antal nye tilf\xe6lde - officielle danske tal - siden 1/3-2020"),d.a.createElement(R,{data:k.NewCases.map((function(e,t){var a;return{"nye tilf\xe6lde pr. dag":parseInt(e.content),row:e.date,"7 dages gns.":null===(a=k.AvgNewInfected[t-4])||void 0===a?void 0:a.content}})),dataKey:"nye tilf\xe6lde pr. dag"},d.a.createElement(O.c,{type:"monotone",dataKey:"7 dages gns.",stroke:"green",activeDot:{r:2}})),d.a.createElement("h2",null,"Antal d\xf8de - officielle danske tal - siden 1/3-2020"),d.a.createElement(R,{data:k.Deaths.map((function(e){return{"kumulerede d\xf8dsfald":parseInt(e.content),row:e.date}})),dataKey:"kumulerede d\xf8dsfald"}),d.a.createElement("h2",null,"Antal nye d\xf8dsfald - officielle danske tal - siden 1/3-2020"),d.a.createElement(R,{data:k.NewDeaths.map((function(e){return{"Nye d\xf8dsfald pr. dag":parseInt(e.content),row:e.date}})),dataKey:"Nye d\xf8dsfald pr. dag"}),d.a.createElement("h2",null,"Patienter i remission - officielle danske tal - siden 1/3-2020"),d.a.createElement(R,{data:k.Remission.map((function(e){return{"Overst\xe5et infektion":parseInt(e.content),row:e.date}})),dataKey:"Overst\xe5et infektion"}),d.a.createElement("h2",null,"Nuv\xe6rende antal inficerede - officielle danske tal - siden 1/3-2020"),d.a.createElement(R,{data:k.Active.map((function(e){return{"Aktiv Infektion":parseInt(e.content),row:e.date}})),dataKey:"Aktiv Infektion"}),d.a.createElement("h2",null,"Antal indlagte - officielle danske tal - siden 1/3-2020"),d.a.createElement(R,{data:k.Hospitalized.map((function(e,t){var a;return{Indlagte:parseInt(e.content),row:e.date,"7 dages gns.":null===(a=k.AvgHospitalized[t+3])||void 0===a?void 0:a.content}})),dataKey:"Indlagte"},d.a.createElement(O.c,{type:"monotone",dataKey:"7 dages gns.",stroke:"green",activeDot:{r:2}})),d.a.createElement("h2",null,"Tilv\xe6kst i indlagte - officielle danske tal - siden 1/3-2020"),d.a.createElement(R,{data:k.GrowthHospitalized.map((function(e){return{"Tilv\xe6kst i indlagte - 7 dages gns.":parseInt(e.content),row:e.date}})),dataKey:"Tilv\xe6kst i indlagte - 7 dages gns."}),d.a.createElement("h2",null,"Antal kritisk syge - officielle danske tal - siden 1/3-2020"),d.a.createElement(R,{data:k.Critical.map((function(e,t){var a;return{"Kritisk syge":parseInt(e.content),row:e.date,Respiratorpatienter:null===(a=k.Ventilator[t])||void 0===a?void 0:a.content}})),dataKey:"Kritisk syge"},d.a.createElement(O.c,{type:"monotone",dataKey:"Respiratorpatienter",stroke:"green",activeDot:{r:2}})),d.a.createElement("div",{id:"Kort",style:{paddingTop:70}}),d.a.createElement("div",{id:"Udsigt",style:{paddingTop:70}}),d.a.createElement("h1",null," Corona Udsigten - Prognose ud fra dagens tal - Spekulativt"),d.a.createElement("h2",null,"Coronaudsigten - Estimeret antal smittede"),d.a.createElement(z,null),d.a.createElement(R,{data:k.EstimatedInfected.map((function(e){return{"Estimeret antal smittede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal smittede"}),d.a.createElement("h2",null,"Coronaudsigten - Estimeret antal nye smittede"),d.a.createElement(z,null),d.a.createElement(R,{data:k.EstimatedNewInfected.map((function(e){return{"Estimeret antal nye smittede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal nye smittede"}),d.a.createElement("h2",null,"Coronaudsigten - Estimeret Antal Nye Hospitaliserede"),d.a.createElement(z,null),d.a.createElement(R,{data:k.EstimatedNewHospitalized.map((function(e){return{"Estimeret antal nye hospitaliserede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal nye hospitaliserede"}),d.a.createElement("h2",null,"Coronaudsigten - Estimeret antal indlagte"),d.a.createElement(z,null),d.a.createElement(R,{data:k.EstimatedCurrentHospitalized.map((function(e,t){var a;return{"Estimeret antal hospitaliserede":parseInt(e.content),row:e.date,"Reelle hospitaliserede":null===(a=k.Hospitalized[t+22])||void 0===a?void 0:a.content}})),dataKey:"Estimeret antal hospitaliserede",domain:[0,1500]},d.a.createElement(O.c,{type:"monotone",dataKey:"Reelle hospitaliserede",stroke:"green",activeDot:{r:2}})),d.a.createElement("h2",null,"Coronaudsigten - Estimeret antal respiratorpatienter"),d.a.createElement(z,null),d.a.createElement(R,{data:k.EstimatedCurrentRespiratorPatients.map((function(e,t){var a;return{"Estimeret antal respiratorpatienter":parseInt(e.content),row:e.date,"Reelle respiratorpatienter":null===(a=k.Ventilator[t+22])||void 0===a?void 0:a.content}})),dataKey:"Estimeret antal respiratorpatienter",domain:[0,1300],height:800},d.a.createElement(O.c,{type:"monotone",dataKey:"Reelle respiratorpatienter",stroke:"green",activeDot:{r:2}}),d.a.createElement(O.e,{y:"1238",stroke:"red",label:"Respirator kapacitet (Absolut max)"})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(d.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[186,1,2]]]);
//# sourceMappingURL=main.b3ae6ef6.chunk.js.map