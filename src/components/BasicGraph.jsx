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

export const BasicGraph = ({data,dataKey,domain,height,children}) => {
    height = height ? height:400;
        return (
            <ResponsiveContainer width="90%" height={height}>
                <LineChart
                    data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="row"/>
                    <YAxis domain={domain}/>
                    <Tooltip/>
                    <Legend/>
                    <ReferenceLine x="13/3" stroke="red" label={{ value: 'Ny grænse for testning', angle: -45}}/>
                    <ReferenceLine x="15/4" stroke="blue" label={{ value: 'vuggestuer, børnehaver og 0-5 klasse åbner', angle: -45}}/>
                    <ReferenceLine x="20/4" stroke="blue" label={{ value: 'Frisører, massører, mfl åbner', angle: -45}}/>
                    <ReferenceLine x="18/5" stroke="blue" label={{ value: 'Fase 2 genåbning: restauranter, storcentre, mfl', angle: -45}}/>
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{r: 2}}/>
                    {children}
                </LineChart>
            </ResponsiveContainer>
        )
    }
;