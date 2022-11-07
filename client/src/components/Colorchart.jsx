// import "./st.css";
import React from "react";
import { PieChart, Pie, Sector,Tooltip, Cell,ResponsiveContainer } from "recharts";

const data = [
  { name: "Chocolate", value: 400 },
  { name: "Cheese", value: 300 },
  { name: "cake", value: 300 },
  { name: "Steak", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Colorchart() {



  return (
      // <PieChart className="piechart">
    <ResponsiveContainer className="pie">
      <div className="piechart">
        <PieChart width={800} height={400}>
          <Pie
          //<<<<------pie chart lebel----->>>
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
              percent
            }) => {
              console.log("handling label?");
              const RADIAN = Math.PI / 180;
              // eslint-disable-next-line
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              // eslint-disable-next-line
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              // eslint-disable-next-line
              const y = cy + radius * Math.sin(-midAngle * RADIAN);
              return (
                <text
                  x={x}
                  y={y}
                  fill={COLORS[index % COLORS.length]}
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {data[index].name} ({value})
                  {/* {`${(percent * 100).toFixed(0)}%`} */}
                </text>
              );
            }}
            //<<<<-------end of pie chart label------>>>


            data={data}
            cx={200}
            cy={150}
      
            labelLine={true}
      
            innerRadius={40}
            outerRadius={80}
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
      </div>
    </ResponsiveContainer>
  );
}
