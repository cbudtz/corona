(this.webpackJsonpwebreact=this.webpackJsonpwebreact||[]).push([[0],{193:function(e,t,a){e.exports=a(385)},198:function(e,t,a){},199:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},200:function(e,t,a){},385:function(e,t,a){"use strict";a.r(t);var r,n,o,i,l=a(1),c=a.n(l),s=a(33),d=a.n(s),p=(a(198),a(199),a(200),a(201),a(92)),u=a.n(p),m=a(146),f=a(66),y=a(147),g=a(148),h=a(12),E=(a(203),a(8)),w=new(r=function(){function e(){var t=this;Object(y.a)(this,e),Object(f.a)(this,"data",n,this),Object(f.a)(this,"structuredData",o,this),Object(f.a)(this,"growthRate",i,this),this.fetchData=Object(m.a)(u.a.mark((function e(){var a,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://spreadsheets.google.com/feeds/cells/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/1/public/full?alt=json");case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n=r.feed.entry.map((function(e){return{date:e.gs$cell.row>31?e.gs$cell.row-31+"/4":e.gs$cell.row+"/3",content:e.content.$t,row:e.gs$cell.row,col:e.gs$cell.col}})),t.data=n;case 8:case"end":return e.stop()}}),e)}))),this.fetchData()}return Object(g.a)(e,[{key:"Infected",get:function(){return this.data.filter((function(e){return"2"===e.col&&"1"!==e.row}))}},{key:"NewCases",get:function(){return this.data.filter((function(e){return"3"===e.col&&"1"!==e.row}))}},{key:"Deaths",get:function(){return this.data.filter((function(e){return"4"===e.col&&"1"!==e.row}))}},{key:"NewDeaths",get:function(){return this.data.filter((function(e){return"5"===e.col&&"1"!==e.row}))}},{key:"Remission",get:function(){return this.data.filter((function(e){return"6"===e.col&&"1"!==e.row}))}},{key:"Active",get:function(){return this.data.filter((function(e){return"7"===e.col&&"1"!==e.row}))}},{key:"Critical",get:function(){return this.data.filter((function(e){return"8"===e.col&&"1"!==e.row}))}},{key:"Hospitalized",get:function(){return this.data.filter((function(e){return"9"===e.col&&"1"!==e.row}))}},{key:"EstimatedInfected",get:function(){return this.data.filter((function(e){return"10"===e.col&&"1"!==e.row}))}},{key:"EstimatedNewInfected",get:function(){return this.data.filter((function(e){return"11"===e.col&&"1"!==e.row}))}},{key:"EstimatedHospitalized",get:function(){return this.data.filter((function(e){return"12"===e.col&&"1"!==e.row}))}},{key:"EstimatedNewHospitalized",get:function(){return this.data.filter((function(e){return"13"===e.col&&"1"!==e.row}))}},{key:"InteractiveNumbers",get:function(){var e=[],t=this.Hospitalized[this.Hospitalized.length-1];if(!t)return[{}];console.log(t);var a=parseInt(t.content),r=20*a;e.push({dato:0,hospitalized:a,infected:r,newInfected:0});for(var n=0;n<90;n++){var o=r;r=r*this.growthRate*(1-r/(6e6-r));var i=a;e[n-10]&&(a=.05*e[n-10].infected);var l=new Date;l.setDate(l.getDate()+n-10);var c={dato:l.getDate()+1+"/"+(l.getMonth()+1),kumuleretHospitaliserede:Math.round(a),"nyeIndl\xe6ggelser":Math.round(a-i),infected:r,newInfected:r-o};e.push(c)}return e}},{key:"Titles",get:function(){return console.log("computing titles"),console.log(this.data),this.data.length<2?"NOT Ready":this.data[0].content}}]),e}(),n=Object(h.a)(r.prototype,"data",[E.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{date:"",content:"NOT ready",row:"0",col:"0"}]}}),o=Object(h.a)(r.prototype,"structuredData",[E.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{Dato:"","Nye Tilf\xe6lde":"NOT ready","D\xf8de":"NOT ready","Nye D\xf8de":"NOT ready",Remission:"NOT ready",Aktive:"",Intensiv:"",Indlagte:"","Estimerede tilf\xe6lde":"","Estimerede nye tilf\xe6lde":"","Estimeret antal indlagte":"","Estimeret antal nye indlagte":"",Respiratorbehandlede:"",row:"0",col:"0"}]}}),i=Object(h.a)(r.prototype,"growthRate",[E.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1.3}}),Object(h.a)(r.prototype,"Infected",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"Infected"),r.prototype),Object(h.a)(r.prototype,"NewCases",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"NewCases"),r.prototype),Object(h.a)(r.prototype,"Deaths",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"Deaths"),r.prototype),Object(h.a)(r.prototype,"NewDeaths",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"NewDeaths"),r.prototype),Object(h.a)(r.prototype,"Remission",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"Remission"),r.prototype),Object(h.a)(r.prototype,"Active",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"Active"),r.prototype),Object(h.a)(r.prototype,"Critical",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"Critical"),r.prototype),Object(h.a)(r.prototype,"Hospitalized",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"Hospitalized"),r.prototype),Object(h.a)(r.prototype,"EstimatedInfected",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedInfected"),r.prototype),Object(h.a)(r.prototype,"EstimatedNewInfected",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedNewInfected"),r.prototype),Object(h.a)(r.prototype,"EstimatedHospitalized",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedHospitalized"),r.prototype),Object(h.a)(r.prototype,"EstimatedNewHospitalized",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"EstimatedNewHospitalized"),r.prototype),Object(h.a)(r.prototype,"InteractiveNumbers",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"InteractiveNumbers"),r.prototype),Object(h.a)(r.prototype,"Titles",[E.b],Object.getOwnPropertyDescriptor(r.prototype,"Titles"),r.prototype),r),b=a(149),k=a(11),O=a(389),v=a(391),D=a(392),I=a(390),j=a(393),N=function(e){var t=e.data,a=e.dataKey,r=e.children;return c.a.createElement(k.f,{width:"90%",height:300},c.a.createElement(k.d,{data:t},c.a.createElement(k.a,{strokeDasharray:"3 3"}),c.a.createElement(k.h,{dataKey:"row"}),c.a.createElement(k.i,null),c.a.createElement(k.g,null),c.a.createElement(k.b,null),c.a.createElement(k.e,{x:"13/3",stroke:"red",label:"Ny gr\xe6nse for testning"}),c.a.createElement(k.c,{type:"monotone",dataKey:a,stroke:"#8884d8",activeDot:{r:8}}),r))};function K(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Beregnet ud fra 8 dage fra infektion til hospitalisering, 5% Hospitalisering og tilv\xe6kst p\xe5 1.43 (Estimeret ud fra regression af indl\xe6ggelser siden 15/3) - Der er taget h\xf8jde for immunitet "),c.a.createElement("h5",null,"Advarsel - Spekulativt"))}var T=Object(b.a)((function(){return w.data,c.a.createElement("div",{className:"App"},c.a.createElement(O.a,null,c.a.createElement(v.a,{fixed:"top",style:{backgroundColor:"white"}},c.a.createElement(D.a,null,c.a.createElement(D.a.Link,{href:"#Tal"},"Dagens Tal"),c.a.createElement(D.a.Link,{href:"#Udsigt"},"CoronaUdsigten"),c.a.createElement(D.a.Link,{href:"#Interaktiv"},"Den interaktive udsigt")))),c.a.createElement(O.a,{style:{marginTop:70}},c.a.createElement("div",null,c.a.createElement("div",{id:"Tal",style:{paddingTop:70}}),c.a.createElement("h2",null,"Antal Smittede - officielle danske tal - siden 1/3-2020"),c.a.createElement(N,{data:w.Infected.map((function(e){return{"kumulerede tilf\xe6lde pr. dag":parseInt(e.content),row:e.date}})),dataKey:"kumulerede tilf\xe6lde pr. dag"}),c.a.createElement("h2",null,"Antal Nye Tilf\xe6lde - officielle danske tal - siden 1/3-2020"),c.a.createElement(N,{data:w.NewCases.map((function(e){return{"nye tilf\xe6lde pr. dag":parseInt(e.content),row:e.date}})),dataKey:"nye tilf\xe6lde pr. dag"}),c.a.createElement("h2",null,"Antal D\xf8de - officielle danske tal - siden 1/3-2020"),c.a.createElement(N,{data:w.Deaths.map((function(e){return{"kumulerede d\xf8dsfald":parseInt(e.content),row:e.date}})),dataKey:"kumulerede d\xf8dsfald"}),c.a.createElement("h2",null,"Antal Nye D\xf8dsfald - officielle danske tal - siden 1/3-2020"),c.a.createElement(N,{data:w.NewDeaths.map((function(e){return{"Nye d\xf8dsfald pr. dag":parseInt(e.content),row:e.date}})),dataKey:"Nye d\xf8dsfald pr. dag"}),c.a.createElement("h2",null,"Antal Indlagte - officielle danske tal - siden 1/3-2020"),c.a.createElement(N,{data:w.Hospitalized.map((function(e){return{Indlagte:parseInt(e.content),row:e.date}})),dataKey:"Indlagte"}),c.a.createElement("h2",null,"Antal kritisk syge - officielle danske tal - siden 1/3-2020"),c.a.createElement(N,{data:w.Critical.map((function(e){return{"Kritisk syge":parseInt(e.content),row:e.date}})),dataKey:"Kritisk syge"}),c.a.createElement("div",{id:"Udsigt",style:{paddingTop:70}}),c.a.createElement("h1",null," Corona Udsigten - Prognose ud fra dagens tal - Spekulativt"),c.a.createElement("h2",null,"Coronaudsigten - Estimeret antal smittede"),c.a.createElement(K,null),c.a.createElement(N,{data:w.EstimatedInfected.map((function(e){return{"Estimeret antal smittede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal smittede"}),c.a.createElement("h2",null,"Coronaudsigten - Estimeret antal nye smittede"),c.a.createElement(K,null),c.a.createElement(N,{data:w.EstimatedNewInfected.map((function(e){return{"Estimeret antal nye smittede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal nye smittede"}),c.a.createElement("h2",null,"Coronaudsigten - Estimeret antal hospitaliserede"),c.a.createElement(K,null),c.a.createElement(N,{data:w.EstimatedHospitalized.map((function(e){return{"Estimeret antal hospitaliserede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal hospitaliserede"}),c.a.createElement("h2",null,"Coronaudsigten - Estimeret Antal Nye Hospitaliserede"),c.a.createElement(K,null),c.a.createElement(N,{data:w.EstimatedNewHospitalized.map((function(e){return{"Estimeret antal nye hospitaliserede":parseInt(e.content),row:e.date}})),dataKey:"Estimeret antal nye hospitaliserede"}),c.a.createElement("h2",null,"Coronaudsigten - Den interaktive "),c.a.createElement("p",{align:"left"},"Afpr\xf8v betydningen af at reducere V\xe6kst/smitteraten",c.a.createElement("ul",null,c.a.createElement("li",null,"1.3 er raten i nye smittede indtil 12/3. "),c.a.createElement("li",null,"1.43 er raten i nye indl\xe6ggelser fra 14-19/3"),c.a.createElement("li",null,"1.1 og 1.2 er forh\xe5bentlig resultatet af vores nye tiltag ")),c.a.createElement("i",null,"Kun til illustration")),c.a.createElement("div",{id:"Interaktiv",style:{paddingTop:70}}),c.a.createElement(I.a,{toggle:!0,type:"checkbox",value:w.growthRate,onChange:function(e){w.growthRate=e.target.value}},c.a.createElement(j.a,{checked:1.1===w.growthRate,type:"radio",value:1.1},"V\xe6kstrate 1.1"),c.a.createElement(j.a,{checked:1.2===w.growthRate,type:"radio",value:1.2},"V\xe6kstrate 1.2"),c.a.createElement(j.a,{checked:1.3===w.growthRate,type:"radio",value:1.3},"V\xe6kstrate 1.3"),c.a.createElement(j.a,{checked:1.43===w.growthRate,type:"radio",value:1.43},"V\xe6kstrate 1.43")),c.a.createElement(k.f,{width:"90%",height:500},c.a.createElement(k.d,{data:w.InteractiveNumbers},c.a.createElement(k.a,{strokeDasharray:"3 3"}),c.a.createElement(k.h,{dataKey:"dato"}),c.a.createElement(k.i,{yAxisId:"left",domain:[0,7e4]}),c.a.createElement(k.i,{orientation:"right",domain:[0,1e4]}),c.a.createElement(k.g,null),c.a.createElement(k.b,null),c.a.createElement(k.c,{yAxisId:"left",type:"monotone",dataKey:"kumuleretHospitaliserede",stroke:"#8884d8",activeDot:{r:8}}),c.a.createElement(k.c,{type:"monotone",dataKey:"nyeIndl\xe6ggelser",stroke:"red",activeDot:{r:8}}))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[193,1,2]]]);
//# sourceMappingURL=main.ee98ec3f.chunk.js.map