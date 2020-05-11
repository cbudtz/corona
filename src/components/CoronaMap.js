import {Fade} from 'react-slideshow-image';
import React, {useState} from "react";

const CoronaMap = ()=>{
    const [autorun, setAutorun] = useState(false)
    const properties = {
        duration:3000,
        autoplay:autorun,
        transitionDuration: 200,
        pauseOnHover: true,
        infinite: true,
        indicators: true,
        arrows: true,
    }
    const images = [];
    let cur = new Date(2020,4,4);
    let today = new Date();
    today = today.setHours(today.getHours()-14);
    while (cur < today) {
        let day = cur.getDate()
        let month = cur.getMonth()+1
        if (day<10){ day = "0" + day}
        if (month<10){ month = "0" + month}
        images.push(""+day+month);

        cur.setDate(cur.getDate()+1);
    }

    const baseUrl = "https://www.sst.dk/-/media/Udgivelser/2020/Corona/Overv%C3%A5gningsdata/Data-"
    const coronaUrl = "https://cbudtz.github.io/corona/map_kommune_7_days"
    const coronaEndUrl =".png"
    const endUrl ="/map_kommune_7_days.ashx"

    return (
        <>
        <h2>Kumuleret antal smittede pr. kommune over de sidste 7 dage.</h2>
            <div>(hold musen over for pause)</div>
        <Fade {...properties}>
        {images.map((element)=>
            <div onMouseOver={()=>setAutorun(false)} onMouseOut={()=>setAutorun(true)}>

                <img style={{maxWidth:"100%"}} src={coronaUrl + element + coronaEndUrl} alt={element+ ": Ikke kommet endnu"}/>
                <h3>Smittede pr. {element}-2020</h3>
            </div>
        )}

    </Fade></>)
}
export default CoronaMap;