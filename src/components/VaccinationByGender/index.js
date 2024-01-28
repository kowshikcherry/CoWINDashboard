import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const Bygender = props => {
  const {bygender} = props

  return (
    <div className="cover">
      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={bygender}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="# #2cc6c6" />
          <Cell name="Female" fill="#b3d23f" />
          <Cell name="Others" fill="#a44c9e" />
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
export default Bygender
