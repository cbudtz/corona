(this.webpackJsonpwebreact=this.webpackJsonpwebreact||[]).push([[0],{196:function(e,t,a){e.exports=a(395)},201:function(e,t,a){},202:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},203:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var r,n,o,i,l,s,c=a(1),d=a.n(c),p=a(33),u=a.n(p),m=(a(201),a(202),a(203),a(204),a(95)),g=a.n(m),y=a(148),h=a(40),f=a(149),E=a(150),b=a(11),k=(a(206),a(5)),w=new(r=function(){function e(){var t=this;Object(f.a)(this,e),Object(h.a)(this,"data",n,this),Object(h.a)(this,"structuredData",o,this),Object(h.a)(this,"constants",i,this),Object(h.a)(this,"growthRate",l,this),Object(h.a)(this,"hospitalizationRate",s,this),this.fetchData=Object(y.a)(g.a.mark((function e(){var a,r,n,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://spreadsheets.google.com/feeds/cells/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/1/public/full?alt=json");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n=new Date(2020,2,1),o=r.feed.entry.map((function(e,t){var a;return(a=new Date(n.valueOf())).setDate(a.getDate()+parseInt(e.gs$cell.row)-1),{date:a.getDate()+"/"+(a.getMonth()+1),content:e.content.$t,row:e.gs$cell.row,col:e.gs$cell.col}})),t.data=o,t.structureData(r),t.growthRate=parseFloat(t.RegressionGrowthRate[0].replace(",","."));case 11:case"end":return e.stop()}}),e)}))),this.fetchData()}return Object(E.a)(e,[{key:"structureData",value:function(e){var t=this;this.structuredData=[];var a=[];e.feed.entry.forEach((function(e){if(1==e.gs$cell.row)a[parseInt(e.gs$cell.col)]=e.content.$t;else{1===parseInt(e.gs$cell.col)&&t.structuredData.push({"Tilf\xe6lde":"","Estimat antal nye smittede":"","Estimat antal smittede":"","Estimat antal indlagte":"","Estimat antal nye indlagte":"","Estimat kumuleret antal indlagte":"","Faktisk indlagte":"","Faktisk i respirator":"","Faktisk p\xe5 intensiv":"","Nye Tilf\xe6lde":"",Dato:e.content.$t,"Aktive tilf\xe6lde":"","Faktisk d\xf8de":"","Faktisk nye d\xf8de":"",Remission:""});var r=a[parseInt(e.gs$cell.col)];t.structuredData[t.structuredData.length-1][r]=e.content.$t}}))}},{key:"Infected",get:function(){return this.data.filter((function(e){return"2"===e.col&&"1"!==e.row}))}},{key:"NewCases",get:function(){return this.data.filter((function(e){return"3"===e.col&&"1"!==e.row}))}},{key:"Deaths",get:function(){return this.data.filter((function(e){return"4"===e.col&&"1"!==e.row}))}},{key:"NewDeaths",get:function(){return this.data.filter((function(e){return"5"===e.col&&"1"!==e.row}))}},{key:"Remission",get:function(){return this.data.filter((function(e){return"6"===e.col&&"1"!==e.row}))}},{key:"Active",get:function(){return this.data.filter((function(e){return"7"===e.col&&"1"!==e.row}))}},{key:"Critical",get:function(){return this.data.filter((function(e){return"8"===e.col&&"1"!==e.row}))}},{key:"Ventilator",get:function(){return this.data.filter((function(e){return"14"===e.col&&"1"!==e.row}))}},{key:"Hospitalized",get:function(){return this.data.filter((function(e){return"9"===e.col&&"1"!==e.row}))}},{key:"AvgHospitalized",get:function(){return this.data.filter((function(e){return"39"===e.col&&"1"!==e.row}))}},{key:"GrowthHospitalized",get:function(){return this.data.filter((function(e){return"40"===e.col&&"1"!==e.row}))}},{key:"EstimatedInfected",get:function(){return this.data.filter((function(e){return"10"===e.col&&"1"!==e.row}))}},{key:"EstimatedNewInfected",get:function(){return this.data.filter((function(e){return"11"===e.col&&"1"!==e.row}))}},{key:"EstimatedCumulatedHospitalized",get:function(){return this.data.filter((function(e){return"12"===e.col&&"1"!==e.row}))}},{key:"EstimatedNewHospitalized",get:function(){return this.data.filter((function(e){return"13"===e.col&&"1"!==e.row}))}},{key:"EstimatedCurrentHospitalized",get:function(){return this.data.filter((function(e){return"21"===e.col&&"1"!==e.row}))}},{key:"EstimatedCurrentRespiratorPatients",get:function(){return this.data.filter((function(e){return"22"===e.col&&"1"!==e.row}))}},{key:"RegressionGrowthRate",get:function(){var e,t,a=null===(e=this.data.filter((function(e){return"17"==e.col}))[1])||void 0===e?void 0:e.content,r=null===(t=this.data.filter((function(e){return"18"==e.col}))[1])||void 0===t?void 0:t.content;return a?[a,r]:["loading...","loading"]}},{key:"FractionHospitalized",get:function(){var e,t;return null!==(e=null===(t=this.data.filter((function(e){return"16"==e.col}))[1])||void 0===t?void 0:t.content)&&void 0!==e?e:"Loading"}},{key:"InteractiveNumbers",get:function(){var e=[],t=this.Hospitalized[this.Hospitalized.length-1];if(!t)return[{}];console.log(t);var a=parseInt(t.content),r=1*a/this.hospitalizationRate;e.push({dato:0,kumuleretHospitaliserede:a,"nyeIndl\xe6ggelser":0,infected:r,newInfected:0,indlagte:0});for(var n=0;n<90;n++){var o=r;r=r*this.growthRate*(1-r/(6e6-r));var i=a;e[n-10]&&(a=e[n-10].infected*this.hospitalizationRate);var l=new Date;l.setDate(l.getDate()+n-10);for(var s={dato:l.getDate()+"/"+(l.getMonth()+1),kumuleretHospitaliserede:Math.round(a),"nyeIndl\xe6ggelser":Math.round(a-i),infected:r,newInfected:r-o,indlagte:parseInt(t.content),respiratorPt:0},c=n;c>0&&n-c<14;c--)s.indlagte+=e[c].nyeIndl\u00e6ggelser;s.respiratorPt=Math.round(.2*s.indlagte),e.push(s)}return e.splice(11)}},{key:"Titles",get:function(){return console.log("computing titles"),console.log(this.data),this.data.length<2?"NOT Ready":this.data[0].content}}]),e}(),n=Object(b.a)(r.prototype,"data",[k.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{date:"",content:"NOT ready",row:"0",col:"0"}]}}),o=Object(b.a)(r.prototype,"structuredData",[k.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{Dato:"","Tilf\xe6lde":"","Nye Tilf\xe6lde":"NOT ready","Faktisk d\xf8de":"NOT ready","Faktisk nye d\xf8de":"NOT ready",Remission:"NOT ready","Aktive tilf\xe6lde":"","Faktisk p\xe5 intensiv":"","Faktisk indlagte":"","Faktisk i respirator":"","Estimat antal smittede":"","Estimat antal nye smittede":"","Estimat kumuleret antal indlagte":"","Estimat antal nye indlagte":"","Estimat antal indlagte":""}]}}),i=Object(b.a)(r.prototype,"constants",[k.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{pop:0,fractionHospitalized:0,growthRate:0,growthRateText:"",fractionRespirator:0}}}),l=Object(b.a)(r.prototype,"growthRate",[k.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1.1}}),s=Object(b.a)(r.prototype,"hospitalizationRate",[k.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.02}}),Object(b.a)(r.prototype,"Infected",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"Infected"),r.prototype),Object(b.a)(r.prototype,"NewCases",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"NewCases"),r.prototype),Object(b.a)(r.prototype,"Deaths",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"Deaths"),r.prototype),Object(b.a)(r.prototype,"NewDeaths",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"NewDeaths"),r.prototype),Object(b.a)(r.prototype,"Remission",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"Remission"),r.prototype),Object(b.a)(r.prototype,"Active",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"Active"),r.prototype),Object(b.a)(r.prototype,"Critical",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"Critical"),r.prototype),Object(b.a)(r.prototype,"Ventilator",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"Ventilator"),r.prototype),Object(b.a)(r.prototype,"Hospitalized",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"Hospitalized"),r.prototype),Object(b.a)(r.prototype,"AvgHospitalized",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"AvgHospitalized"),r.prototype),Object(b.a)(r.prototype,"GrowthHospitalized",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"GrowthHospitalized"),r.prototype),Object(b.a)(r.prototype,"EstimatedInfected",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedInfected"),r.prototype),Object(b.a)(r.prototype,"EstimatedNewInfected",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedNewInfected"),r.prototype),Object(b.a)(r.prototype,"EstimatedCumulatedHospitalized",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedCumulatedHospitalized"),r.prototype),Object(b.a)(r.prototype,"EstimatedNewHospitalized",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedNewHospitalized"),r.prototype),Object(b.a)(r.prototype,"EstimatedCurrentHospitalized",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedCurrentHospitalized"),r.prototype),Object(b.a)(r.prototype,"EstimatedCurrentRespiratorPatients",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedCurrentRespiratorPatients"),r.prototype),Object(b.a)(r.prototype,"RegressionGrowthRate",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"RegressionGrowthRate"),r.prototype),Object(b.a)(r.prototype,"FractionHospitalized",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"FractionHospitalized"),r.prototype),Object(b.a)(r.prototype,"InteractiveNumbers",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"InteractiveNumbers"),r.prototype),Object(b.a)(r.prototype,"Titles",[k.b],Object.getOwnPropertyDescriptor(r.prototype,"Titles"),r.prototype),r),v=a(151),O=a(10),D=a(399),R=a(401),j=a(402),I=a(400),z=a(403),H=function(e){var t=e.data,a=e.dataKey,r=e.domain,n=e.height,o=e.children;return n=n||400,d.a.createElement(O.f,{width:"90%",height:n},d.a.createElement(O.d,{data:t},d.a.createElement(O.a,{strokeDasharray:"3 3"}),d.a.createElement(O.h,{dataKey:"row"}),d.a.createElement(O.i,{domain:r}),d.a.createElement(O.g,null),d.a.createElement(O.b,null),d.a.createElement(O.e,{x:"13/3",stroke:"red",label:{value:"Ny gr\xe6nse for testning",angle:-45}}),d.a.createElement(O.e,{x:"15/4",stroke:"blue",label:{value:"vuggestuer, b\xf8rnehaver og 0-5 klasse \xe5bner",angle:-45}}),d.a.createElement(O.e,{x:"20/4",stroke:"blue",label:{value:"Fris\xf8rer, mass\xf8rer, mfl \xe5bner",angle:-45}}),d.a.createElement(O.c,{type:"monotone",dataKey:a,stroke:"#8884d8",activeDot:{r:2}}),o))},N=a(167),K=a(161),C=function(){var e=Object(c.useState)(!1),t=Object(N.a)(e,2),a=t[0],r=t[1],n={duration:3e3,autoplay:a,transitionDuration:200,pauseOnHover:!0,infinite:!0,indicators:!0,arrows:!0},o=[],i=new Date(2020,4,4),l=new Date;for(l=l.setHours(l.getHours()-14);i<l;){var s=i.getDate(),p=i.getMonth()+1;s<10&&(s="0"+s),p<10&&(p="0"+p),o.push(""+s+p),i.setDate(i.getDate()+1)}return d.a.createElement(d.a.Fragment,null,d.a.createElement("h2",null,"Kumuleret antal smittede pr. kommune over de sidste 7 dage."),d.a.createElement("div",null,"(hold musen over for pause)"),d.a.createElement(K.Fade,n,o.map((function(e){return d.a.createElement("div",{onMouseOver:function(){return r(!1)},onMouseOut:function(){return r(!0)}},d.a.createElement("img",{style:{maxWidth:"100%"},src:"https://cbudtz.github.io/corona/images/map_kommune_7_days"+e+".png",alt:e+": Ikke kommet endnu"}),d.a.createElement("h3",null,"Smittede pr. ",e,"-2020"))}))))};function P(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("p",null,"Beregnet ud fra 10 dage fra smitte til hospitalisering, ",(100/w.FractionHospitalized).toFixed(2),"% Hospitalisering og tilv\xe6kst p\xe5 ",w.RegressionGrowthRate[0]," (Estimeret ud fra ",w.RegressionGrowthRate[1],") - Der er taget h\xf8jde for immunitet "),d.a.createElement("h5",null,"Advarsel - Spekulativt"))}var T=Object(v.a)((function(){w.data;var e=parseFloat(w.RegressionGrowthRate[0].replace(",","."));return d.a.createElement("div",{className:"App"},d.a.createElement(D.a,{fluid:!0},d.a.createElement(R.a,{fixed:"top",style:{backgroundColor:"white"}},d.a.createElement(j.a,null,d.a.createElement(j.a.Link,{href:"#Tal"},"Dagens Tal"),d.a.createElement(j.a.Link,{href:"#Kort"},"Dagens Kort"),d.a.createElement(j.a.Link,{href:"#Udsigt"},"CoronaUdsigten"),d.a.createElement(j.a.Link,{href:"#Interaktiv"},"Den interaktive udsigt")))),d.a.createElement(D.a,{style:{marginTop:70}},d.a.createElement("h5",null,"Tal kommer fra: ",d.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/edit#gid=0"},"Dette regneark")),d.a.createElement("div",null,d.a.createElement("div",{id:"Tal",style:{paddingTop:70}}),d.a.createElement("h2",null,"Antal smittede - officielle danske tal - siden 1/3-2020"),d.a.createElement(H,{data:w.Infected.map((function(e){return{"kumulerede tilf\xe6lde pr. dag":parseInt(e.content),row:e.date}})),dataKey:"kumulerede tilf\xe6lde pr. dag"}),d.a.createElement("h2",null,"Antal nye tilf\xe6lde - officielle danske tal - siden 1/3-2020"),d.a.createElement(H,{data:w.NewCases.map((function(e){return{"nye tilf\xe6lde pr. dag":parseInt(e.content),row:e.date}})),dataKey:"nye tilf\xe6lde pr. dag"}),d.a.createElement("h2",null,"Antal d\xf8de - officielle danske tal - siden 1/3-2020"),d.a.createElement(H,{data:w.Deaths.map((function(e){return{"kumulerede d\xf8dsfald":parseInt(e.content),row:e.date}})),dataKey:"kumulerede d\xf8dsfald"}),d.a.createElement("h2",null,"Antal nye d\xf8dsfald - officielle danske tal - siden 1/3-2020"),d.a.createElement(H,{data:w.NewDeaths.map((function(e){return{"Nye d\xf8dsfald pr. dag":parseInt(e.content),row:e.date}})),dataKey:"Nye d\xf8dsfald pr. dag"}),d.a.createElement("h2",null,"Antal indlagte - officielle danske tal - siden 1/3-2020"),d.a.createElement(H,{data:w.Hospitalized.map((function(e,t){var a;return{Indlagte:parseInt(e.content),row:e.date,"7 dages gns.":null===(a=w.AvgHospitalized[t])||void 0===a?void 0:a.content}})),dataKey:"Indlagte"},d.a.createElement(O.c,{type:"monotone",dataKey:"7 dages gns.",stroke:"green",activeDot:{r:2}})),d.a.createElement("h2",null,"Tilv\xe6kst i indlagte - officielle danske tal - siden 1/3-2020"),d.a.createElement(H,{data:w.GrowthHospitalized.map((function(e){return{"Tilv\xe6kst i indlagte - 7 dages gns.":parseInt(e.content),row:e.date}})),dataKey:"Tilv\xe6kst i indlagte - 7 dages gns."}),d.a.createElement("h2",null,"Antal kritisk syge - officielle danske tal - siden 1/3-2020"),d.a.createElement(H,{data:w.Critical.map((function(e,t){var a;return{"Kritisk syge":parseInt(e.content),row:e.date,Respiratorpatienter:null===(a=w.Ventilator[t])||void 0===a?void 0:a.content}})),dataKey:"Kritisk syge"},d.a.createElement(O.c,{type:"monotone",dataKey:"Respiratorpatienter",stroke:"green",activeDot:{r:2}})),d.a.createElement("div",{id:"Kort",style:{paddingTop:70}}),d.a.createElement(C,null),d.a.createElement("div",{id:"Udsigt",style:{paddingTop:70}}),d.a.createElement("h1",null," Corona Udsigten - Prognose ud fra dagens tal - Spekulativt"),d.a.createElement("h2",null,"Coronaudsigten - Estimeret antal smittede"),d.a.createElement(P,null),d.a.createElement(H,{data:w.EstimatedInfected.map((function(e){return{"Estimeret antal smittede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal smittede"}),d.a.createElement("h2",null,"Coronaudsigten - Estimeret antal nye smittede"),d.a.createElement(P,null),d.a.createElement(H,{data:w.EstimatedNewInfected.map((function(e){return{"Estimeret antal nye smittede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal nye smittede"}),d.a.createElement("h2",null,"Coronaudsigten - Estimeret Antal Nye Hospitaliserede"),d.a.createElement(P,null),d.a.createElement(H,{data:w.EstimatedNewHospitalized.map((function(e){return{"Estimeret antal nye hospitaliserede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal nye hospitaliserede"}),d.a.createElement("h2",null,"Coronaudsigten - Estimeret antal indlagte"),d.a.createElement(P,null),d.a.createElement(H,{data:w.EstimatedCurrentHospitalized.map((function(e,t){var a;return{"Estimeret antal hospitaliserede":parseInt(e.content),row:e.date,"Reelle hospitaliserede":null===(a=w.Hospitalized[t+22])||void 0===a?void 0:a.content}})),dataKey:"Estimeret antal hospitaliserede"},d.a.createElement(O.c,{type:"monotone",dataKey:"Reelle hospitaliserede",stroke:"green",activeDot:{r:2}})),d.a.createElement("h2",null,"Coronaudsigten - Estimeret antal respiratorpatienter"),d.a.createElement(P,null),d.a.createElement(H,{data:w.EstimatedCurrentRespiratorPatients.map((function(e,t){var a;return{"Estimeret antal respiratorpatienter":parseInt(e.content),row:e.date,"Reelle respiratorpatienter":null===(a=w.Ventilator[t+22])||void 0===a?void 0:a.content}})),dataKey:"Estimeret antal respiratorpatienter",domain:[0,1300],height:500},d.a.createElement(O.c,{type:"monotone",dataKey:"Reelle respiratorpatienter",stroke:"green",activeDot:{r:2}}),d.a.createElement(O.e,{y:"1238",stroke:"red",label:"Respirator kapacitet (Absolut max)"})),d.a.createElement("h2",null,"Coronaudsigten - Den interaktive "),d.a.createElement("p",{align:"left"},"Afpr\xf8v betydningen af at reducere V\xe6kst/smitteraten",d.a.createElement("ul",null,d.a.createElement("li",null,"1.43 er raten i nye indl\xe6ggelser fra 14-19/3 - F\xf8r corona tiltag")),d.a.createElement("ul",null,d.a.createElement("li",null,"Der er rapporteret hospitaliseringsgrader mellem 1% og 10% af smittede"),d.a.createElement("li",null,"Der er beregnet ud fra gennemsnitligt 14 dages indl\xe6ggelse"),d.a.createElement("li",null,"Der kan ses et negativt antal indl\xe6ggelser ved overgang fra faktuelle tal til estimater - det er et artefakt fra n\xe5r reelle indl\xe6ggelser overstiger estimerede")),d.a.createElement("i",null,"Kun til illustration - Se i \xf8vrigt ",d.a.createElement("br",null),d.a.createElement("h5",null,d.a.createElement("a",{href:"http://gabgoh.github.io/COVID/index.html?fbclid=IwAR2bEVDY-nIDvqAbQ-siUthGSxlk5TL2QscdX8VTp004nnv6dw9Yh0XRGIU"},"Epidemic calculator")),", for et mere avanceret v\xe6rkt\xf8j")),d.a.createElement("div",{id:"Interaktiv",style:{paddingTop:70}}),d.a.createElement("div",null,"Tilv\xe6kst pr. dag ",Math.round(100*(w.growthRate-1))," % ",d.a.createElement("br",null),"R(t) = ",Math.pow(w.growthRate,2.5).toFixed(3)," ",d.a.createElement("br",null),"Hospitaliseringsgrad ",(100*w.hospitalizationRate).toFixed(2)," %"),d.a.createElement("p",null,d.a.createElement(I.a,{toggle:!0,type:"checkbox",value:w.growthRate,onChange:function(e){w.growthRate=e.target.value}},d.a.createElement(z.a,{checked:w.growthRate===e,type:"radio",value:e},"Nuv\xe6rende V\xe6kstrate ",e),d.a.createElement(z.a,{checked:1.01===w.growthRate,type:"radio",value:1.01},"1.01"),d.a.createElement(z.a,{checked:1.02===w.growthRate,type:"radio",value:1.02},"1.02"),d.a.createElement(z.a,{checked:1.05===w.growthRate,type:"radio",value:1.05},"1.05"),d.a.createElement(z.a,{checked:1.08===w.growthRate,type:"radio",value:1.08},"1.08"),d.a.createElement(z.a,{checked:1.1===w.growthRate,type:"radio",value:1.1},"1.10"),d.a.createElement(z.a,{checked:1.43===w.growthRate,type:"radio",value:1.43},"1.43"))),d.a.createElement("p",null,d.a.createElement(I.a,{toggle:!0,type:"checkbox",value:w.hospitalizationRate,onChange:function(e){w.hospitalizationRate=e.target.value}},d.a.createElement(z.a,{checked:.01===w.hospitalizationRate,type:"radio",value:.01},"1% hospitaliserede"),d.a.createElement(z.a,{checked:.0133===w.hospitalizationRate,type:"radio",value:.0133},"1,33% hospitaliserede"),d.a.createElement(z.a,{checked:.015===w.hospitalizationRate,type:"radio",value:.015},"1,5% hospitaliserede"),d.a.createElement(z.a,{checked:.02===w.hospitalizationRate,type:"radio",value:.02},"2% hospitaliserede"),d.a.createElement(z.a,{checked:.05===w.hospitalizationRate,type:"radio",value:.05},"5% hospitaliserede"))),d.a.createElement(O.f,{width:"90%",height:800},d.a.createElement(O.d,{data:w.InteractiveNumbers},d.a.createElement(O.a,{strokeDasharray:"3 3"}),d.a.createElement(O.h,{dataKey:"dato"}),d.a.createElement(O.i,{domain:[0,5e3]}),d.a.createElement(O.g,null),d.a.createElement(O.b,null),d.a.createElement(O.c,{type:"monotone",dataKey:"kumuleretHospitaliserede",stroke:"#8884d8",activeDot:{r:8}}),d.a.createElement(O.c,{type:"monotone",dataKey:"nyeIndl\xe6ggelser",stroke:"yellow",activeDot:{r:8}}),d.a.createElement(O.c,{type:"monotone",dataKey:"indlagte",stroke:"green",activeDot:{r:8}}),d.a.createElement(O.c,{type:"monotone",dataKey:"respiratorPt",stroke:"red",activeDot:{r:8}}))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(d.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[196,1,2]]]);
//# sourceMappingURL=main.1254f08e.chunk.js.map