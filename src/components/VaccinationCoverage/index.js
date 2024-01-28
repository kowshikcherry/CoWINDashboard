import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const Coverage = props => {
  const {last7days} = props
  console.log(last7days)
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="cover">
      <BarChart width={1000} height={300}>
        <XAxis
          dataKey="group_name"
          tick={{
            stroke: 'gold',
            strokeWidth: 1,
          }}
          data={last7days}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
      </BarChart>
    </div>
  )
}
export default Coverage
