

import NavBar from './navBar'
import './index.less'
import { Outlet } from 'react-router-dom'
export default function Core(){
 
  return (
    <div className="core">   
      <div className='left'>
        <NavBar/> 
      </div>  
      <div className='right'>
        <Outlet />
      </div>
    </div>
  )
}