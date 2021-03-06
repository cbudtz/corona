import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {coronaStore} from './stores/CoronaStore';
import {observer} from "mobx-react-lite";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {ButtonGroup, Container, Nav, Navbar, ToggleButton} from "react-bootstrap";
import {BasicGraph} from "./components/BasicGraph";

function CalculationText() {
    return <>
        <p>Beregnet ud fra 10 dage fra smitte til hospitalisering, {(100/coronaStore.FractionHospitalized).toFixed(2)}% Hospitalisering og tilvækst på {coronaStore.RegressionGrowthRate[0]} (Estimeret ud fra {coronaStore.RegressionGrowthRate[1]}) - Der er taget højde for immunitet </p>
        <h5>Advarsel - Spekulativt</h5>
    </>;
}

function App() {
    const maxVacc = Math.max(...coronaStore.Vaccinated?.map((e)=>e.content));
    const regGrowth = parseFloat(coronaStore.RegressionGrowthRate[0].replace(",","."));
    return (
        <div className="App">
            <Container fluid>
                <Navbar fixed={"top"} style={{backgroundColor: "white"}}>
                    <Nav>
                        <Nav.Link href={"#Tal"}>Dagens Tal</Nav.Link>
                        {/*<Nav.Link href={"#Kort"}>Dagens Kort</Nav.Link>*/}
                        <Nav.Link href={"#Udsigt"}>CoronaUdsigten</Nav.Link>
                        <Nav.Link href={"#Interaktiv"}>Den interaktive udsigt</Nav.Link>
                    </Nav>

                </Navbar>
            </Container>

            <Container fluid style={{marginTop: 70}}>
                <h5>Tal kommer fra: <a href={"https://docs.google.com/spreadsheets/d/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/edit#gid=0"}>Dette regneark</a></h5>
                <div>
                    <div id={"Tal"} style={{paddingTop: 70}}/>
                    <h2>Antal smittede - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph domain={[0,maxVacc]}
                        data={coronaStore.Infected.map((entry,key) => {
                        return {"Kumulerede tilfælde pr. dag": parseInt(entry.content), row: entry.date,
                            "Kumulerede vaccinerede":coronaStore.Vaccinated[key]?.content || 0}
                    })}
                                dataKey={"Kumulerede tilfælde pr. dag"}
                    >

                        <Line type="monotone" dataKey={"Kumulerede vaccinerede"} stroke="green" activeDot={{r:2}}/>
                    </BasicGraph>

                    <h2>Antal nye tilfælde - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.NewCases.map((entry,key) => {
                            return {"nye tilfælde pr. dag": parseInt(entry.content), row: entry.date, "7 dages gns.":coronaStore.AvgNewInfected[key-4]?.content}
                        })}
                        dataKey="nye tilfælde pr. dag"
                    >
                        <Line type="monotone" dataKey={"7 dages gns."} stroke="green" activeDot={{r: 2}}/>
                    </BasicGraph>
                    <h2>Antal døde - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.Deaths.map((entry) => {
                            return {"kumulerede dødsfald": parseInt(entry.content), row: entry.date}

                        })}
                        dataKey="kumulerede dødsfald"
                    />
                    <h2>Antal nye dødsfald - officielle danske tal - siden 1/3-2020</h2>

                    <BasicGraph
                        data={coronaStore.NewDeaths.map((entry) => {
                            return {"Nye dødsfald pr. dag": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Nye dødsfald pr. dag"
                    />
                    <h2>Patienter i remission - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.Remission.map((entry) => {
                            return {"Overstået infektion": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Overstået infektion"
                    />

                    <h2>Nuværende antal inficerede - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.Active.map((entry) => {
                            return {"Aktiv Infektion": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Aktiv Infektion"
                    />

                    {/*<h2>Antal Raskmeldte - officielle danske tal - siden 1/3-2020</h2>*/}
                    {/*<BasicGraph*/}
                    {/*    data={coronaStore.Remission.map((entry) => {*/}
                    {/*        return {"Blevet raske": parseInt(entry.content), row: entry.date}*/}
                    {/*    })}*/}
                    {/*    dataKey="Blevet raske"*/}
                    {/*/>*/}
                    <h2>Antal indlagte - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.Hospitalized.map((entry,key) => {
                            return {"Indlagte": parseInt(entry.content), row: entry.date, "7 dages gns.":coronaStore.AvgHospitalized[key+3]?.content}
                        })}
                        dataKey="Indlagte">
                        <Line type="monotone" dataKey={"7 dages gns."} stroke="green" activeDot={{r: 2}}/>
                    </BasicGraph>

                    <h2>Tilvækst i indlagte - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.GrowthHospitalized.map((entry) => {
                            return {"Tilvækst i indlagte - 7 dages gns.": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Tilvækst i indlagte - 7 dages gns.">
                    </BasicGraph>


                    <h2>Antal kritisk syge - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.Critical.map((entry,key) => {
                            return {"Kritisk syge": parseInt(entry.content), row: entry.date,
                                "Respiratorpatienter":coronaStore.Ventilator[key]?.content}
                        })}
                        dataKey="Kritisk syge"
                    >
                        <Line type="monotone" dataKey={"Respiratorpatienter"} stroke="green" activeDot={{r: 2}}/>
                    </BasicGraph>
                    <div id={"Kort"} style={{paddingTop: 70}}/>

                    {/*<CoronaMap/>*/}
                    <div id={"Udsigt"} style={{paddingTop: 70}}/>



                    <h1> Corona Udsigten - Prognose ud fra dagens tal - Spekulativt</h1>
                    <h2>Coronaudsigten - Estimeret antal smittede</h2>
                    <CalculationText/>
                    <BasicGraph
                        data={coronaStore.EstimatedInfected.map((entry, key) => {
                            const diff = coronaStore.EstimatedInfected.length-coronaStore.EstimatedB117Infected.length
                            return {"Estimeret antal smittede": parseInt(entry.content), row: entry.date,
                            "Estimeret antal B117 smittede":coronaStore.EstimatedB117Infected[key-diff]?.content || null}
                        })}
                        dataKey="Estimeret antal smittede"
                    >
                        <Line type="monotone" dataKey={"Estimeret antal B117 smittede"} stroke="green" activeDot={{r: 2}}/>
                    </BasicGraph>

                    <h2>Coronaudsigten - Estimeret tilvækst i antal smittede</h2>
                    <CalculationText/>
                    <BasicGraph
                        data={coronaStore.EstimatedNewInfected.map((entry) => {
                            return {"Estimeret tilvækst i antal smittede": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Estimeret tilvækst i antal smittede"
                    >
                    </BasicGraph>

                    {/*<h2>Coronaudsigten - Estimeret Kumuleret antal hospitaliserede</h2>*/}
                    {/*<CalculationText/>*/}
                    {/*<BasicGraph*/}
                    {/*    data={coronaStore.EstimatedCumulatedHospitalized.map((entry) => {*/}
                    {/*        return {"Estimeret antal hospitaliserede": parseInt(entry.content), row: entry.date}*/}
                    {/*    })}*/}
                    {/*    dataKey="Estimeret antal hospitaliserede"*/}
                    {/*>*/}
                    {/*</BasicGraph>*/}

                    <h2>Coronaudsigten - Estimeret tilvækst i antal hospitaliserede</h2>
                    <CalculationText/>

                    <BasicGraph
                        data={coronaStore.EstimatedNewHospitalized.map((entry) => {
                            return {"Estimeret tilvækst i antal hospitaliserede": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Estimeret tilvækst i antal hospitaliserede"
                    >

                    </BasicGraph>

                    <h2>Coronaudsigten - Estimeret antal indlagte</h2>
                    <CalculationText/>

                    <BasicGraph
                        data={coronaStore.EstimatedCurrentHospitalized.map((entry,key) => {

                            return {"Estimeret antal hospitaliserede": parseInt(entry.content), row: entry.date, "Reelle hospitaliserede": coronaStore.Hospitalized[key+22]?.content}
                        })}
                        dataKey="Estimeret antal hospitaliserede"
                        domain={[0,1500]}
                    >
                        <Line type="monotone" dataKey={"Reelle hospitaliserede"} stroke="green" activeDot={{r: 2}}/>
                    </BasicGraph>



                    <h2>Coronaudsigten - Estimeret antal respiratorpatienter</h2>
                    <CalculationText/>

                    <BasicGraph
                        data={coronaStore.EstimatedCurrentRespiratorPatients.map((entry,key) => {
                            return {"Estimeret antal respiratorpatienter": parseInt(entry.content), row: entry.date, "Reelle respiratorpatienter": coronaStore.Ventilator[key+22]?.content}
                        })}
                        dataKey="Estimeret antal respiratorpatienter"
                        domain={[0,1300]}
                        height={800}
                    >
                        <Line type="monotone" dataKey={"Reelle respiratorpatienter"} stroke="green" activeDot={{r: 2}}/>
                        <ReferenceLine y="1238" stroke="red" label="Respirator kapacitet (Absolut max)" />
                    </BasicGraph>

                    <h2>Coronaudsigten - Den interaktive </h2>
                    <div align={"left"}>Afprøv betydningen af at reducere Vækst/smitteraten
                        <ul>
                            <li>Der er rapporteret hospitaliseringsgrader mellem 1% og 10% af smittede</li>
                            <li>Der er beregnet ud fra gennemsnitligt 14 dages indlæggelse</li>
                            <li>Der kan ses et negativt antal indlæggelser ved overgang fra faktuelle tal til estimater - det er et artefakt fra når reelle indlæggelser overstiger estimerede
                            </li>
                        </ul>
                        <i>Kun til illustration - Se i øvrigt <br/>
                            <h5><a href={"http://gabgoh.github.io/COVID/index.html?fbclid=IwAR2bEVDY-nIDvqAbQ-siUthGSxlk5TL2QscdX8VTp004nnv6dw9Yh0XRGIU"}>Epidemic calculator</a></h5>
                            , for et mere avanceret værktøj
                        </i>
                    </div>
                    <div id={"Interaktiv"} style={{paddingTop: 70}}/>
                    <div>
                        Tilvækst pr. dag {Math.round((coronaStore.growthRate-1)*100)} % <br/>
                        R(t) = {(Math.pow(coronaStore.growthRate,4.7)).toFixed(3)} <br/>
                    </div>
                    <div>
                        <ButtonGroup toggle type="checkbox" value={coronaStore.growthRate} onChange={(e)=>{coronaStore.growthRate=e.target.value}}>

                            <ToggleButton checked={coronaStore.growthRate===regGrowth?regGrowth:1} type="radio" value={regGrowth?regGrowth:1}>Nuværende Vækstrate {regGrowth}</ToggleButton>
                            <ToggleButton checked={coronaStore.growthRate===1.075} type="radio" value={1.02}>1.02 - R(t):1.10</ToggleButton>
                            <ToggleButton checked={coronaStore.growthRate===1.10} type="radio" value={1.03}>1.03 - R(t):1.15</ToggleButton>
                            <ToggleButton checked={coronaStore.growthRate===1.05} type="radio" value={1.05}>1.05 - R(t):1.26</ToggleButton>

                        </ButtonGroup>
                    </div>
                    <ResponsiveContainer width="90%"  height={800}>
                        <LineChart
                            data={coronaStore.InteractiveNumbers}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="dato" />
                            <YAxis domain={[0, 5000]}/>
                            <Tooltip />
                            <Legend />
                            {/*<ReferenceLine x="13/3" stroke="red" label="Ny grænse for testning" />*/}
                            <Line type="monotone" dataKey={"indlagte"} stroke="green" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey={"respiratorPt"} stroke="red" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Container>
        </div>

    );
}

export default observer(App);
