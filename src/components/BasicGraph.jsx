import React from 'react';
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

export const BasicGraph = ({data,dataKey,children}) => (
    <ResponsiveContainer width="90%"  height={300}>
        <LineChart
            data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="row" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine x="13/3" stroke="red" label="Ny grænse for testning" />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
            {children}
        </LineChart>
    </ResponsiveContainer>
);