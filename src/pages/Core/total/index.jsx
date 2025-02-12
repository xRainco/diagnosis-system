
import MyBody from '../body'
import MyContent from '../content'
import './index.less'


export default function Total(){
  return(
    <div className='right'>
    
        <div className='r-left'>
          <MyContent />
        </div>
        <div className='r-right'>
          <MyBody/>
        </div>

    </div>
  )
}