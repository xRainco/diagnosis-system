
import { useEffect  } from 'react';
import * as echarts from 'echarts';
import { Input, Calendar, theme } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./index.less"


const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};


export default function MyBody(){

 
  useEffect(()=> { 
    // 时钟
    const piedata = 67
    const colckDom = document.getElementById('clockcontainer')
    const clockChart = echarts.init(colckDom)
    const clockOption = {
      series: [
                {
                  type: "pie",
                  radius: ["65", "80"], //环形图的内外半径（大小）
                  center: ["50%", "50%"], //整个图形的位置
                  avoidLabelOverlap: false,     
                  label: {
                  show: false,
                  position: "center",
                  },
                  labelLine: {
                    show: false,
                  },
                data: [
                    {
                      value:piedata, //数据 按比例显示的
                      selected: false,
                      itemStyle: {
                        color: "#53f0bd", //图形颜色#fc5328
                        borderWidth: 2,
                        borderRadius: 25,
                      },
                      label: {
                        // 是显示标签
                        show: true,
                        position: "center",
                        fontSize: 28,
                        // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                        formatter: "{d}%",
                      },
                    },
                    {
                      value: 100-piedata,  //数据 按比例显示的
                      name: "",
                      itemStyle: {
                        color: "#ffffff",
                      },
                      label: {
                        show: false,
                      },
                  },
              ],
            },
          ],
        }
    clockChart.setOption(clockOption)
  }, [])


  const { token } = theme.useToken();
  const wrapperStyle = {
    width: '95%',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div className="mybox">
      <div className="mybody">
        <div className='searchicon'>
          <Input placeholder="Search Doctor" prefix={<SearchOutlined />} style={{border: 'none',borderRadius: '10px'}}/>
        </div>
        <div className='clock' id='clockcontainer'></div>
        {/* <div className='time' style={wrapperStyle}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div> */}
      </div>
    </div>
  )
}