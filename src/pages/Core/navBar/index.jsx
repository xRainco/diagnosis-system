
import { useNavigate } from 'react-router-dom'
import { HomeOutlined, PhoneOutlined, RadarChartOutlined, PieChartOutlined, RightCircleOutlined,UnorderedListOutlined } from '@ant-design/icons'
import './index.less'

export default function NavBar(){
  const navigate = useNavigate()
  return (
    <div className='navbar'>
      <div className='homeicon' onClick={()=> navigate('/')}>
        <RightCircleOutlined /> 
        {/* 医疗系统 */}
      </div>
      <div className='navbox'>
          <div className='itembox' onClick={()=>navigate('/core')}>
          <div className='item'>
          <HomeOutlined /> &nbsp;&nbsp;&nbsp;首页
          </div>
        </div>
        <div className='itembox' onClick={()=>navigate('/core/predicate')}>
          <div className='item'>
          <RadarChartOutlined /> &nbsp;&nbsp;&nbsp;模型诊断
          </div>
        </div>
        <div className='itembox' onClick={()=>navigate('/core/pdfexport')}>
          <div className='item'>
          <PhoneOutlined /> &nbsp;&nbsp;&nbsp;在线咨询
          </div>
        </div>
        <div className='itembox' onClick={()=>navigate('/core/screen')}>
          <div className='item'>
          <PieChartOutlined /> &nbsp;&nbsp;&nbsp;可视化大屏
          </div>
        </div>
      </div>
      <div className='backrow'><UnorderedListOutlined /></div>
    </div>
  )
}