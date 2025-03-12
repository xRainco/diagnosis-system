
import { useNavigate } from 'react-router-dom'
import { HomeOutlined, ShopOutlined, MailOutlined, NotificationOutlined, ReadOutlined, RightCircleOutlined } from '@ant-design/icons'
import './index.less'

export default function NavBar(){
  const navigate = useNavigate()
  return (
    <div className='navbar'>
      <div className='homeicon' onClick={()=> navigate('/')}>
        <HomeOutlined /> 
        {/* 医疗系统 */}
      </div>
      <div className='navbox'>
          <div className='itembox' onClick={()=>navigate('/core')}>
          <div className='item'>
          <ShopOutlined /> &nbsp;&nbsp;&nbsp;模型首页
          </div>
        </div>
        <div className='itembox' onClick={()=>navigate('/core/predicate')}>
          <div className='item'>
          <NotificationOutlined /> &nbsp;&nbsp;&nbsp;模型预测
          </div>
        </div>
        <div className='itembox' onClick={()=>navigate('/core/pdfexport')}>
          <div className='item'>
          <MailOutlined /> &nbsp;&nbsp;&nbsp;模型导出
          </div>
        </div>
        <div className='itembox' onClick={()=>navigate('/core/screen')}>
          <div className='item'>
          <ReadOutlined /> &nbsp;&nbsp;&nbsp;模型大屏
          </div>
        </div>
      </div>
      <div className='backrow'><RightCircleOutlined /></div>
    </div>
  )
}