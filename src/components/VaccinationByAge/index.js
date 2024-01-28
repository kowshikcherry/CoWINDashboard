import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const Byage = props => {
  const {byage} = props

  return (
    <div className="cover">
      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={byage}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#fecba6" />
          <Cell name="45-60" fill="#b3d23f" />
          <Cell name="Above 60" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </div>
  )
}
export default Byage
