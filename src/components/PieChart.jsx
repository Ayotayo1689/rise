import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const data = [
  { Year: '2016', userGain: 80000, userLoss: 300 },
  { Year: '2017', userGain: 45000, userLoss: 390 },
  { Year: '2019', userGain: 15000, userLoss: 500 },
  { Year: '2020', userGain: 30000, userLoss: 700 },
  { Year: '2021', userGain: 5000, userLoss: 1300 },
];

const renderTooltipContent = ({ payload }) => {
  if (payload && payload.length > 0) {
    const { Year, userGain, userLoss } = payload[0].payload;
    return (
      <>
        <p style={{padding:"5px 10px", background:'#0087fe69', color:"white", fontWeight:"400"}} >Year: {Year}</p>
        <p style={{padding:"5px 10px", background:'#0087fe69', color:"white", fontWeight:"400"}} >Profits: {userGain}</p>
        <p style={{padding:"5px 10px", background:'#0087fe69', color:"white", fontWeight:"400"}} >Loss: {userLoss}</p>
      </>
    );
  }
  return null;
};

const PieChartWithTooltip = () => {
  return (
    <PieChart width={300} height={320}>
      <Pie
       data={data}
       cx="50%"
       cy="50%"
       startAngle={0}
       endAngle={360}
       innerRadius={80}
       outerRadius={120}
       fill="#8884d8"
       paddingAngle={5}
       dataKey="userGain"
        // data={data}
        // dataKey="userGain"
        // nameKey="name"
        // cx="50%"
        // cy="50%"
        // outerRadius={80}
        // labelLine={true}
        // fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={renderTooltipContent} style={{border:"none"}}/>
    </PieChart>
  );
};

export default PieChartWithTooltip;
