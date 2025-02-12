
import * as echarts from 'echarts';
import { useEffect } from 'react';
import { BulbOutlined } from '@ant-design/icons';
import "./index.less"

export default function MyContent(){

  useEffect(() => {
  // 底部柱状图
  const bottomDom = document.getElementById('bottom');
  const bottomChart = echarts.init(bottomDom);
  const bottomOption = {
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        axisLine: {
            lineStyle: {
                color: '#ffffff',
            },
        },
        // 网格样式
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#262732'],
                width: 1,
                type: 'solid',
            },
        },
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#ffffff',
            },
        },
        // 网格样式
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#262732'],
                width: 1,
                type: 'solid',
            },
        },
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        barWidth: 15,
        itemStyle: {
            color: '#F43368',
            barBorderRadius: [5, 5, 0, 0], // （顺时针左上，右上，右下，左下）
        },
    }],
  }
  bottomChart.setOption(bottomOption);
  
  }, [])

  return (
    <div className="mycontent">
      <div className="mytop">
        <div className='mytext'>
          <div style={{fontSize: '10px', color: '#999'}}>Good Morning.</div>
          <div>Welcome System</div>
        </div>
        <div className='myicon'>
            <BulbOutlined style={{margin: '15px'}}/>
        </div>
      </div>

      <div className="mycenter">
        <div className='card1'></div>
        <div className='card2'></div>
        <div className='card3'></div>
      </div>
      <div className="mybottom" id='bottom'></div>
    </div>
  )
}