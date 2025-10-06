import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const trend = [
  { w: "W1", r: 68 },
  { w: "W2", r: 62 },
  { w: "W3", r: 65 },
  { w: "W4", r: 59 },
  { w: "W5", r: 63 },
  { w: "W6", r: 57 },
];

export default function StudentProfile() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
          C
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Chris Connor</h3>
          <p className="text-xs text-gray-500">Academic Risk Trends</p>
        </div>
      </div>

      <div className="h-28 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trend}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="w" />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="r" stroke="#2563eb" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-gray-700 mb-2">
        <strong className="text-gray-900">Current Risk:</strong>{" "}
        <span className="text-red-600 font-semibold">High</span>
      </p>

      <ul className="text-sm text-gray-600 space-y-1">
        <li>• Attendance</li>
        <li>• Coursework</li>
        <li>• Engagement</li>
      </ul>

      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
        Schedule Meeting
      </button>
    </div>
  );
}
