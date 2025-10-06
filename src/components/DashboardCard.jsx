export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 text-center">
      <div className="text-gray-500">{title}</div>
      <div className="text-3xl font-extrabold mt-1">{value}</div>
    </div>
  );
}
