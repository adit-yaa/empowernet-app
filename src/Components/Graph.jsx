import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
const data = [
  {
    month: "Jan",
    tasks: 5
  },
  {
    month: "Feb",
    tasks: 9
  },
  {
    month: "Mar",
    tasks: 12
  },
  {
    month: "Apr",
    tasks: 27
  },
  {
    month: "May",
    tasks: 18
  },
  {
    month: "June",
    tasks: 23
  },
  {
    month: "July",
    tasks: 34
  }
];

function Graph() {
  return (
    <>
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width={400} height="80%">
        <AreaChart
          width={730}
          height={750}
          data={data}
          margin={{ top: 10, right: 5, left: -20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="tasks"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default Graph;
