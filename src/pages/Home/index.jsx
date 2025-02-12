
import { useNavigate } from 'react-router-dom'
import MyButton from './myButton'
import './index.less'
import HomePic from '/src/assets/home2.jpg'

export default function Home(){
  const navigate = useNavigate()
  const goCore = () => {
    navigate('/core')
  }
  return (
    <div className='home'>
      <div className='box'>

      <div className='top'>
        <div className='left'>眼科疾病智能诊断系统</div>
      </div>

        <div className='content'>
          <img className='img' src={HomePic} alt='none'/>
          <div className="mybtn" onClick={goCore}>
            <MyButton/>
          </div>
        </div>
      </div>

      <div className='copy'>&copy;All rights reserved.</div>
    </div>
    
  )
}