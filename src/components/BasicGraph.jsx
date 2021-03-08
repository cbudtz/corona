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
import {coronaStore} from "../stores/CoronaStore";

export const BasicGraph = ({data,dataKey,domain,height,children}) => {
    height = height ? height:600;
        return (
            <ResponsiveContainer width="90%" height={height} minWidth={2*coronaStore.EstimatedInfected.length}>
                <LineChart
                    data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="row"/>
                    <YAxis domain={domain}/>
                    <Tooltip/>
                    <Legend/>
                    <ReferenceLine x="13/3/20" stroke="yellow" label={{ value: 'Ny grænse for testning', angle: -45}}/>
                    <ReferenceLine x="15/4/20" stroke="blue" label={{ value: 'vuggestuer, børnehaver og 0-5 klasse åbner', angle: -45}}/>
                    <ReferenceLine x="20/4/20" stroke="blue" label={{ value: 'Frisører, massører, mfl åbner', angle: -45}}/>
                    <ReferenceLine x="18/5/20" stroke="blue" label={{ value: 'Fase 2 genåbning: restauranter, storcentre, mfl', angle: -45}}/>
                    <ReferenceLine x="8/6/20" stroke="blue" label={{ value: 'Fase 3 genåbning:Kultur + 50 forsamlede, m.m.', angle: -45}}/>
                    <ReferenceLine x="17/6/20" stroke="yellow" label={{ value: 'Ny opgørelsesmetode for indlagte', angle: -45}}/>
                    <ReferenceLine x="18/8/20" stroke="blue" label={{ value: 'Fase 4 genåbning:Barer + 100 forsamlede, m.m', angle: -45}}/>
                    <ReferenceLine x="19/9/20" stroke="orange" label={{ value: '50 Pers forsamlingsforbud', angle: -45}}/>
                    <ReferenceLine x="26/10/20" stroke="orange" label={{ value: '10 Pers forsamlingsforbud + Ingen alkohol efter 22', angle: -45}}/>
                    <ReferenceLine x="9/12/20" stroke="orange" label={{ value: 'Restriktioner Hovedstaden', angle: -45}}/>
                    <ReferenceLine x="15/12/20" stroke="orange" label={{ value: 'Restriktioner Hele landet', angle: -45}}/>
                    <ReferenceLine x="25/12/20" stroke="orange" label={{ value: 'Al detailhandel lukket', angle: -45}}/>
                    <ReferenceLine x="5/1/21" stroke="orange" label={{ value: 'Lockdown 2', angle: -45}}/>
                    <ReferenceLine x="8/2/21" stroke="blue" label={{ value: 'Små klasser starter igen', angle: -45}}/>
                    <ReferenceLine x="20/2/21" stroke="yellow" label={{ value: 'B117 udgør 50%', angle: -45}}/>

                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{r: 2}}/>
                    {children}
                </LineChart>
            </ResponsiveContainer>
        )
    }
;