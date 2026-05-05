"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", userBaru: 2400, userAktif: 2210 },
  { month: "Feb", userBaru: 1398, userAktif: 2290 },
  { month: "Mar", userBaru: 9800, userAktif: 2000 },
  { month: "Apr", userBaru: 3908, userAktif: 2181 },
  { month: "May", userBaru: 4800, userAktif: 2500 },
  { month: "Jun", userBaru: 3800, userAktif: 2100 },
  { month: "Jul", userBaru: 4300, userAktif: 2100 },
  { month: "Aug", userBaru: 2400, userAktif: 2210 },
  { month: "Sep", userBaru: 1398, userAktif: 2290 },
  { month: "Oct", userBaru: 9800, userAktif: 2000 },
  { month: "Nov", userBaru: 3908, userAktif: 2181 },
  { month: "Dec", userBaru: 4800, userAktif: 2500 },
];

export default function UserStatsChart() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px] w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f1f2" />
            <XAxis dataKey="month" tick={{ fill: "#8a7266", fontSize: 12 }} />
            <YAxis tick={{ fill: "#8a7266", fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#f8f9fa", 
                border: "1px solid #edeeef",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
              formatter={(value) => [`${value}`, ""]}
            />
            <Legend 
              wrapperStyle={{ paddingTop: "20px" }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="userBaru" 
              stroke="#00b7e7" 
              strokeWidth={3}
              dot={{ fill: "#00b7e7", r: 5 }}
              activeDot={{ r: 7 }}
              name="User Baru"
            />
            <Line 
              type="monotone" 
              dataKey="userAktif" 
              stroke="#ba1a1a" 
              strokeWidth={3}
              dot={{ fill: "#ba1a1a", r: 5 }}
              activeDot={{ r: 7 }}
              name="User Aktif"
              opacity={0.6}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
