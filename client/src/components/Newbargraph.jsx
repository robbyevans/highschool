import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from "./mock-data.json"

export default function Newbargraph(){

  
 

    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" stackId="a" fill="#8884d8" />
          <Bar dataKey="inStock" stackId="a" fill="#82ca9d" />
          <Bar dataKey="spoilt" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    );
}
