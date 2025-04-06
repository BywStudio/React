import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const Home = () => {
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
  },[])
  // 准备 main 节点，必须有宽高
  return <div><div ref={chartRef} style={{width: '500px', height: '400px'}}></div></div>
}

export default Home