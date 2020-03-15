import React from "react";
import logo from './logo.svg';
import './App.css';
import {coronaStore} from './stores/CoronaStore';
import {observer} from "mobx-react-lite";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

function App() {
  let data = coronaStore.data;
  return (
    <div className="App">
      <ResponsiveContainer width="90%"  height={500}>
            <LineChart
          data={coronaStore.Infected.map((entry)=>{
            return {content: parseInt(entry.content), row:entry.row}
          })}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="row" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="content" stroke="#8884d8" activeDot={{ r: 8 }} />

          </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default observer(App);
