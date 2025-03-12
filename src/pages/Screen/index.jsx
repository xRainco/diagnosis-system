import { useEffect, useRef } from 'react'
import './css/index.css'
import './js/flexible.js'
import * as echarts from 'echarts'

export default function Screen() {
  const stackedBarChartRef = useRef(null)
  const radioChartRef = useRef(null)
  const ringChartRef = useRef(null)
  const thermalChartRef = useRef(null)
  const pieChartRef = useRef(null)
  const scrollChartRef = useRef(null)

  useEffect(() => {
    const stackedBarChart = echarts.init(stackedBarChartRef.current)
    stackedBarChart.setOption(
      {
        color: ["#58a7b3", "#d1eaf2"],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['男性', '女性'] // 图例显示男性和女性
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['0-18', '19-35', '36-50', '51+'] // 年龄分组
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '男性', // 男性患者数据
            type: 'bar',
            stack: '性别', // 堆叠组名
            emphasis: {
              focus: 'series'
            },
            data: [120, 200, 150, 80] // 男性患者数量
          },
          {
            name: '女性', // 女性患者数据
            type: 'bar',
            stack: '性别', // 堆叠组名
            emphasis: {
              focus: 'series'
            },
            data: [100, 180, 130, 90] // 女性患者数量
          }
        ]
      }
    )

    // 监听窗口大小变化，调整图表大小
    const handleResize = () => {
      stackedBarChart.resize()
    }
    window.addEventListener('resize', handleResize)

    // 清理函数：移除事件监听器并销毁图表
    return () => {
      window.removeEventListener('resize', handleResize)
      stackedBarChart.dispose()
    }
  }, [])

  return (
    <div className="screen-container">
      {/* 头部标题 */}
      <div className='header'>
        <h1>医疗数据可视化大屏</h1>
      </div>

      {/* 底部图表 */}
      <div className='charts'>
        {/* 左侧 */}
        <div className='charts-left'>
          <div className="panel age-sex-stacked-bar-chart">
            <h2>患者年龄性别分布图</h2>
            <div className='chart stacked-bar-chart' ref={stackedBarChartRef}>

            </div>
          </div>
          <div className="panel feedback-radio-chart">
            <h2>患者反馈与满意度</h2>
            <div className='chart radio-chart'>

            </div>
          </div>
        </div>

        {/* 中间 */}
        <div className='charts-center'>
          <div className="panel diagnostic-data-ring-chart">
            <h2>诊断数据</h2>
            <div className='chart ring-chart'></div>
          </div>

          <div className="panel pedestrian-flow-thermal-chart">
            <h2>患者流量分析</h2>
            <div className='chart thermal-chart'></div>
          </div>
        </div>

        {/* 右侧 */}
        <div className='charts-right'>
          <div className="panel real-time-diagnostic-data-pie-chart">
            <h2>实时诊断数据</h2>
            <div className='chart pie-chart'></div>
          </div>
          <div className="panel real-time-warning-scroll-chart">
            <h2>病情实时预警</h2>
            <div className='chart scroll-chart'></div>
          </div>


        </div>
      </div>

    </div>
  )
}