import DashboardCard from "../components/DashboardCard";
import RiskChart from "../components/RiskChart";
import StudentProfile from "../components/StudentProfile";

export default function Dashboard() {
  const atRiskStudents = [
    { name: "Chris Connor", risk: "High", color: "text-red-600" },
    { name: "Helen Brown", risk: "Medium", color: "text-yellow-500" },
    { name: "Lawrence Jones", risk: "Low", color: "text-green-600" },
    { name: "Emma Wilson", risk: "Medium", color: "text-yellow-500" },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2.2fr_1fr] gap-6 p-6">
      {/* ---------------- LEFT COLUMN ---------------- */}
      <div className="flex flex-col gap-6">
        {/* ---- Top Cards ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard title="At-Risk Students" value="25" />
          <DashboardCard title="Improved Risk Profile" value="12" />
        </div>

        {/* ---- Chart + List ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-[260px] flex flex-col justify-between">
            <h3 className="font-semibold text-gray-700 mb-3">At-Risk Students</h3>
            <RiskChart />
          </div>

          {/* Student List */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-700 mb-3">At-Risk Students</h3>
            <ul className="space-y-2">
              {atRiskStudents.map((student, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">{student.name}</span>
                  <span className={student.color}>{student.risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------- RIGHT COLUMN ---------------- */}
      <div>
        <StudentProfile />
      </div>
    </div>
  );
}
