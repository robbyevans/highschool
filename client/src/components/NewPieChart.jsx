import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell,Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Milk', value: 300 },
  { name: 'Coffe', value: 200 },
  { name: 'Maize', value: 500 },
  { name: 'Wheat', value: 400 },
  { name: 'Potatoes', value: 150 },
  { name: 'Barley', value: 50 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function NewPieChart(){
 
    return (
      <PieChart width={800} height={400} className="new-primary-chart" >
        <Pie
          data={data}
          cx={120}
          cy={200}

          innerRadius={50}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip/>
      </PieChart>
    );
}
