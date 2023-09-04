import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts';

const studentData = [
  {
    name: 'Python',
    student: 13,
    fees: 10,
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12,
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10,
  },
  {
    name: 'Java',
    student: 10,
    fees: 5,
  },
  {
    name: 'C#',
    student: 9,
    fees: 4,
  },
  {
    name: 'C++',
    student: 10,
    fees: 8,
  },
];

const LineChartDemo = () => {
  return (
    <>
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={studentData}
          width={500}
          height={300}
          margin={{ top: 5, right: 60, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={'preserveStartEnd'}
            tickFormatter={(value) => value + ' Lan.'}
          />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#E4E5F1' }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="student"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="fees"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartDemo;
