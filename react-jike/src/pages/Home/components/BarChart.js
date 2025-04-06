import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

// 使用 props 参数 title
const BarChart = ({ title }) => {
  const chartRef = useRef(null)
  // 使用 useEffect 钩子函数渲染
  useEffect(() => {
    // 保证 main DOM 可用，然后再渲染图表
    // 获取渲染图表的 DOM 节点, 使用 useRef 操作
    const chartDom = chartRef.current
    // 图表初始化生成图表实例对象
    const myChart = echarts.init(chartDom)
    // 准备图表参数
    const option = {
      title: {
        // 将 title 使用 props 参数
        text: title
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        tyoe: 'value'
      },
      series: [
        {
          data: [10000, 12000, 9000],
          type: 'bar'
        }
      ]
    }
    // 使用图表参数完成图表的渲染
    option && myChart.setOption(option)
  },[title])

  // 准备 main 节点，必须有宽高
  return <div ref={chartRef} style={{width: '500px', height: '400px'}}></div>
}

export default BarChart