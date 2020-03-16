import React from "react";
import logo from './logo.svg';
import './App.css';
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

function App() {
  let data = coronaStore.data;
  return (
    <div className="App">
        <h2>Antal Smittede - officielle danske tal - siden 1/3-2020</h2>
      <ResponsiveContainer width="90%"  height={300}>
            <LineChart
          data={coronaStore.Infected.map((entry)=>{
            return {"kumulerede tilfælde pr. dag": parseInt(entry.content), row:entry.date}
          })}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="row" />
            <YAxis />
            <Tooltip />
            <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
            <Line type="monotone" dataKey="kumulerede tilfælde pr. dag" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
      </ResponsiveContainer>
        <h2>Antal Nye Tilfælde - officielle danske tal - siden 1/3-2020</h2>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.NewCases.map((entry)=>{
                    return {"nye tilfælde pr. dag": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="nye tilfælde pr. dag" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        <h2>Antal Døde - officielle danske tal - siden 1/3-2020</h2>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.Deaths.map((entry)=>{
                    return {"kumulerede dødsfald": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="kumulerede dødsfald" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        <h2>Antal Nye Dødsfald - officielle danske tal - siden 1/3-2020</h2>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.NewDeaths.map((entry)=>{
                    return {"Nye dødsfald pr. dag": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="Nye dødsfald pr. dag" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        <h2>Antal Raskmeldte - officielle danske tal - siden 1/3-2020</h2>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.Remission.map((entry)=>{
                    return {"Blevet raske": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="Blevet raske" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        <h2>Antal Indlagte - officielle danske tal - siden 1/3-2020</h2>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.Hospitalized.map((entry)=>{
                    return {"Indlagte": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="Indlagte" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        <h2>Antal Kritisk syge - officielle danske tal - siden 1/3-2020</h2>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.Critical.map((entry)=>{
                    return {"Kritisk syge": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="Kritisk syge" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        <h1> Corona Udsigten - Prognose ud fra dagens tal - Spekulativt</h1>

        <h2>Coronaudsigten - Estimeret Antal smittede</h2>
        <h4>Beregnet ud fra 8 dage fra infektion til hospitalisering, 10% Hospitalisering og tilvækst på 1.3 (tilvækst pr 12/3) - Der er taget højde for immunitet </h4>
        <h5>Advarsel - Spekulativt</h5>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.EstimatedInfected.map((entry)=>{
                    return {"Estimeret antal smittede": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="Estimeret antal smittede" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        <h2>Coronaudsigten - Estimeret Antal Nye Smittede</h2>
        <h4>Beregnet ud fra 8 dage fra infektion til hospitalisering, 10% Hospitalisering og tilvækst på 1.3 (tilvækst pr 12/3) - Der er taget højde for immunitet </h4>
        <h5>Advarsel - Spekulativt</h5>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.EstimatedNewInfected.map((entry)=>{
                    return {"Estimeret antal nye smittede": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="Estimeret antal nye smittede" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>

        <h2>Coronaudsigten - Estimeret Antal Hospitaliserede</h2>
        <h4>Beregnet ud fra 8 dage fra infektion til hospitalisering, 10% Hospitalisering og tilvækst på 1.3 (tilvækst pr 12/3) - Der er taget højde for immunitet </h4>
        <h5>Advarsel - Spekulativt</h5>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.EstimatedHospitalized.map((entry)=>{
                    return {"Estimeret antal hospitaliserede": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="Estimeret antal hospitaliserede" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
        <h2>Coronaudsigten - Estimeret Antal Nye Hospitaliserede</h2>
        <h4>Beregnet ud fra 8 dage fra infektion til hospitalisering, 10% Hospitalisering og tilvækst på 1.3 (tilvækst pr 12/3) - Der er taget højde for immunitet </h4>
        <h5>Advarsel - Spekulativt</h5>
        <ResponsiveContainer width="90%"  height={300}>
            <LineChart
                data={coronaStore.EstimatedNewHospitalized.map((entry)=>{
                    return {"Estimeret antal nye hospitaliserede": parseInt(entry.content), row:entry.date}
                })}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="row" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="13" stroke="red" label="Ny grænse for testning" />
                <Line type="monotone" dataKey="Estimeret antal nye hospitaliserede" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>

    </div>
  );
}

export default observer(App);
