import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from "./mock-data.json"

export default function Linegraph() {

    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="buyingPrice" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sellingPrice" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
}
