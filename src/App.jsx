import React from "react";
import logo from './logo.svg';
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
import {ButtonGroup, Container, InputGroup, Nav, Navbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {BasicGraph} from "./components/BasicGraph";

function CalculationText() {
    return <>
        <p>Beregnet ud fra 8 dage fra smitte til hospitalisering, {100/coronaStore.FractionHospitalized}% Hospitalisering og tilvækst på {coronaStore.RegressionGrowthRate[0]} (Estimeret ud fra {coronaStore.RegressionGrowthRate[1]}) - Der er taget højde for immunitet </p>
        <h5>Advarsel - Spekulativt</h5>
    </>;
}

function App() {
    let data = coronaStore.data;
    const regGrowth = parseFloat(coronaStore.RegressionGrowthRate[0].replace(",","."));
    return (
        <div className="App">
            <Container fluid>
                <Navbar fixed={"top"} style={{backgroundColor: "white"}}>
                    <Nav>
                        <Nav.Link href={"#Tal"}>Dagens Tal</Nav.Link>
                        <Nav.Link href={"#Udsigt"}>CoronaUdsigten</Nav.Link>
                        <Nav.Link href={"#Interaktiv"}>Den interaktive udsigt</Nav.Link>
                    </Nav>

                </Navbar>
            </Container>

            <Container style={{marginTop: 70}}>
                <h5>Tal kommer fra: <a href={"https://docs.google.com/spreadsheets/d/1PmXIb0k0dpImmQbeZFYAZ1fIKl8OVlTIyAZNk4M3DK4/edit#gid=0"}>Dette regneark</a></h5>
                <div>
                    <div id={"Tal"} style={{paddingTop: 70}}/>
                    <h2>Antal Smittede - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph data={coronaStore.Infected.map((entry) => {
                        return {"kumulerede tilfælde pr. dag": parseInt(entry.content), row: entry.date}
                    })}
                                dataKey={"kumulerede tilfælde pr. dag"}
                    />

                    <h2>Antal Nye Tilfælde - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.NewCases.map((entry) => {
                            return {"nye tilfælde pr. dag": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="nye tilfælde pr. dag"
                    >
                    </BasicGraph>
                    <h2>Antal Døde - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.Deaths.map((entry) => {
                            return {"kumulerede dødsfald": parseInt(entry.content), row: entry.date}

                        })}
                        dataKey="kumulerede dødsfald"
                    />
                    <h2>Antal Nye Dødsfald - officielle danske tal - siden 1/3-2020</h2>

                    <BasicGraph
                        data={coronaStore.NewDeaths.map((entry) => {
                            return {"Nye dødsfald pr. dag": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Nye dødsfald pr. dag"
                    />

                    {/*<h2>Antal Raskmeldte - officielle danske tal - siden 1/3-2020</h2>*/}
                    {/*<BasicGraph*/}
                    {/*    data={coronaStore.Remission.map((entry) => {*/}
                    {/*        return {"Blevet raske": parseInt(entry.content), row: entry.date}*/}
                    {/*    })}*/}
                    {/*    dataKey="Blevet raske"*/}
                    {/*/>*/}
                    <h2>Antal Indlagte - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.Hospitalized.map((entry) => {
                            return {"Indlagte": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Indlagte">
                    </BasicGraph>

                    <h2>Antal kritisk syge - officielle danske tal - siden 1/3-2020</h2>
                    <BasicGraph
                        data={coronaStore.Critical.map((entry) => {
                            return {"Kritisk syge": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Kritisk syge"
                    />

                    <div id={"Udsigt"} style={{paddingTop: 70}}/>
                    <h1> Corona Udsigten - Prognose ud fra dagens tal - Spekulativt</h1>

                    <h2>Coronaudsigten - Estimeret antal smittede</h2>
                    <CalculationText/>
                    <BasicGraph
                        data={coronaStore.EstimatedInfected.map((entry) => {
                            return {"Estimeret antal smittede": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Estimeret antal smittede"
                    />
                    <h2>Coronaudsigten - Estimeret antal nye smittede</h2>
                    <CalculationText/>
                    <BasicGraph
                        data={coronaStore.EstimatedNewInfected.map((entry) => {
                            return {"Estimeret antal nye smittede": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Estimeret antal nye smittede"
                    >
                    </BasicGraph>

                    <h2>Coronaudsigten - Estimeret Kumuleret antal hospitaliserede</h2>
                    <CalculationText/>
                    <BasicGraph
                        data={coronaStore.EstimatedCumulatedHospitalized.map((entry) => {
                            return {"Estimeret antal hospitaliserede": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Estimeret antal hospitaliserede"
                    >
                    </BasicGraph>

                    <h2>Coronaudsigten - Estimeret Antal Nye Hospitaliserede</h2>
                    <CalculationText/>

                    <BasicGraph
                        data={coronaStore.EstimatedNewHospitalized.map((entry) => {
                            return {"Estimeret antal nye hospitaliserede": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Estimeret antal nye hospitaliserede"
                    >
                    </BasicGraph>

                    <h2>Coronaudsigten - Estimeret antal indlagte</h2>
                    <CalculationText/>

                    <BasicGraph
                        data={coronaStore.EstimatedCurrentHospitalized.map((entry) => {
                            return {"Estimeret antal hospitaliserede": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Estimeret antal hospitaliserede"
                    >
                    </BasicGraph>
                    <h2>Coronaudsigten - Estimeret antal respiratorpatienter</h2>
                    <CalculationText/>

                    <BasicGraph
                        data={coronaStore.EstimatedCurrentRespiratorPatients.map((entry) => {
                            return {"Estimeret antal respiratorpatienter": parseInt(entry.content), row: entry.date}
                        })}
                        dataKey="Estimeret antal respiratorpatienter"
                    >
                    </BasicGraph>

                    <h2>Coronaudsigten - Den interaktive </h2>
                    <p align={"left"}>Afprøv betydningen af at reducere Vækst/smitteraten
                        <ul>
                            <li>1.3 er raten i nye smittede indtil 12/3. </li>
                            <li>1.43 er raten i nye indlæggelser fra 14-19/3</li>
                            <li>1.1 og 1.2 er forhåbentlig resultatet af vores nye tiltag </li>
                        </ul>
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
                    </p>
                    <div id={"Interaktiv"} style={{paddingTop: 70}}/>
                    <div>
                        Tilvækst pr. dag {Math.round((coronaStore.growthRate-1)*100)} %
                        Hospitaliseringsgrad {coronaStore.hospitalizationRate*100} %
                    </div>
                    <p>
                        <ButtonGroup toggle type="checkbox" value={coronaStore.growthRate} onChange={(e)=>{coronaStore.growthRate=e.target.value}}>

                            <ToggleButton checked={coronaStore.growthRate===regGrowth} type="radio" value={regGrowth}>Nuværende Vækstrate {regGrowth}</ToggleButton>

                            <ToggleButton checked={coronaStore.growthRate===1.1} type="radio" value={1.1}>Vækstrate 1.1</ToggleButton>
                            <ToggleButton checked={coronaStore.growthRate===1.2} type="radio" value={1.2}>Vækstrate 1.2</ToggleButton>
                            <ToggleButton checked={coronaStore.growthRate===1.3} type="radio" value={1.3}>Vækstrate 1.3</ToggleButton>
                            <ToggleButton checked={coronaStore.growthRate===1.43} type="radio" value={1.43}>Vækstrate 1.43</ToggleButton>
                        </ButtonGroup>
                    </p>
                    <p>
                        <ButtonGroup toggle type="checkbox" value={coronaStore.hospitalizationRate} onChange={(e)=>{coronaStore.hospitalizationRate=e.target.value}}>
                            <ToggleButton checked={coronaStore.hospitalizationRate===0.01} type="radio" value={0.01}>1% hospitaliserede</ToggleButton>
                            <ToggleButton checked={coronaStore.hospitalizationRate===0.02} type="radio" value={0.02}>2% hospitaliserede</ToggleButton>
                            <ToggleButton checked={coronaStore.hospitalizationRate===0.05} type="radio" value={0.05}>5% hospitaliserede</ToggleButton>
                            <ToggleButton checked={coronaStore.hospitalizationRate===0.10} type="radio" value={0.10}>10% hospitaliserede</ToggleButton>
                        </ButtonGroup>
                    </p>
                    <ResponsiveContainer width="90%"  height={800}>
                        <LineChart
                            data={coronaStore.InteractiveNumbers}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="dato" />
                            <YAxis domain={[0, 15000]}/>
                            <Tooltip />
                            <Legend />
                            {/*<ReferenceLine x="13/3" stroke="red" label="Ny grænse for testning" />*/}
                            <Line type="monotone" dataKey={"kumuleretHospitaliserede"} stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey={"nyeIndlæggelser"} stroke="yellow" activeDot={{ r: 8 }} />
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
