import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from "./mock-data.json"

export default function Barchart (){


    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
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
          <Bar dataKey="quantity" fill="#e60000" />
            <Bar dataKey="inStock" fill="#f76700" />
            <Bar dataKey="spoilt" fill="#f7bc00" />
            <Bar dataKey="buyingPrice" fill="#009e3b" />
            <Bar dataKey="sellingPrice" fill="#5546cc" />
        </BarChart>
      </ResponsiveContainer>
    );
}
