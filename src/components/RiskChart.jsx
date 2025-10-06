import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "High", value: 4 },
  { name: "Medium", value: 7 },
  { name: "Low", value: 9 },
];

export default function RiskChart() {
  return (
    <div className="h-48"> {/* Adjusted height */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#fbbf24" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
