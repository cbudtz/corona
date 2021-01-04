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
                    <ReferenceLine x="13/3" stroke="yellow" label={{ value: 'Ny grænse for testning', angle: -45}}/>
                    <ReferenceLine x="15/4" stroke="blue" label={{ value: 'vuggestuer, børnehaver og 0-5 klasse åbner', angle: -45}}/>
                    <ReferenceLine x="20/4" stroke="blue" label={{ value: 'Frisører, massører, mfl åbner', angle: -45}}/>
                    <ReferenceLine x="18/5" stroke="blue" label={{ value: 'Fase 2 genåbning: restauranter, storcentre, mfl', angle: -45}}/>
                    <ReferenceLine x="8/6" stroke="blue" label={{ value: 'Fase 3 genåbning:Kultur + 50 forsamlede, m.m.', angle: -45}}/>
                    <ReferenceLine x="17/6" stroke="yellow" label={{ value: 'Ny opgørelsesmetode for indlagte', angle: -45}}/>
                    <ReferenceLine x="18/8" stroke="blue" label={{ value: 'Fase 4 genåbning:Barer + 100 forsamlede, m.m', angle: -45}}/>
                    <ReferenceLine x="19/9" stroke="orange" label={{ value: '50 Pers forsamlingsforbud', angle: -45}}/>
                    <ReferenceLine x="26/10" stroke="orange" label={{ value: '10 Pers forsamlingsforbud + Ingen alkohol efter 22', angle: -45}}/>
                    <ReferenceLine x="9/12" stroke="orange" label={{ value: 'Restriktioner Hovedstaden', angle: -45}}/>
                    <ReferenceLine x="15/12" stroke="orange" label={{ value: 'Restriktioner Hele landet', angle: -45}}/>
                    <ReferenceLine x="25/12" stroke="orange" label={{ value: 'Al detailhandel lukket', angle: -45}}/>

                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{r: 2}}/>
                    {children}
                </LineChart>
            </ResponsiveContainer>
        )
    }
;