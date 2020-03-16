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
            return {"kumulerede tilfælde pr. dag": parseInt(entry.content), row:entry.row}
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
                    return {"nye tilfælde pr. dag": parseInt(entry.content), row:entry.row}
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
    </div>
  );
}

export default observer(App);
