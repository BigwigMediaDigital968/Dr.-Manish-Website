export default function DashboardPage() {
  const stats = [
    {
      title: "Total Leads",
      value: "124",
    },
    {
      title: "Published Blogs",
      value: "18",
    },
    {
      title: "Today's Enquiries",
      value: "12",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
          >
            <p className="text-slate-500 text-sm">{item.title}</p>

            <h3 className="mt-3 text-5xl font-extrabold bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-transparent">
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
