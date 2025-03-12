import './css/index.css'
import './js/flexible.js'

export default function Screen() {
  return (
    <div className="screen-container">
      {/* 头部标题 */}
      <div className='header'>
        <h1>医疗数据可视化大屏</h1>
      </div>

      {/* 底部图表 */}
      <div className='charts'>
        {/* 左侧 */}
        <div className='screen-left'>
          <div className="panel age-sex-stacked-bar-chart">
            <h2>患者年龄性别分布图</h2>
            <div className='chart stacked-bar-chart'>

            </div>
          </div>
          <div className="panel feedback-radio-chart">
            <h2>患者反馈与满意度</h2>
            <div className='chart radio-chart'></div>
          </div>

        </div>

        {/* 中间 */}
        <div className='screen-center'>
          <div className="panel diagnostic-data-pie-chart">
            <h2>诊断数据</h2>
            <div className='chart pie-chart'></div>
          </div>

          <div className="panel pedestrian-flow-analysis-thermodynamic-chart">
            <h2>患者流量分析</h2>
            <div className='chart thermodynamic-chart'></div>
          </div>
        </div>

        {/* 右侧 */}
        <div className='screen-right'>
          <div className="panel real-time-diagnostic-data">
            <h2>实时诊断数据</h2>
            <div className='chart'></div>
          </div>
          <div className="panel real-time-warning">
            <h2>病情实时预警</h2>
            <div className='chart'></div>
          </div>


        </div>
      </div>

    </div>
  )
}