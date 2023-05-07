import React from 'react'
import { HeroBg } from '../Assets'
import StaticsImages from './Statics'
import { data } from '../../utils/showcaseStatic'
const Right = () => {
  return (
    <div className="py-2 flex-1 flex items-center relative">
      <img src={HeroBg} alt="" className='ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto' />
      {/* <img src={tetete} alt="" className='ml-auto lg:h-[520px] h-auto w-full lg:w-auto' style={{ borderRadius: '10px',marginTop:'30px' }} /> */}

      <StaticsImages items = {data} />
    </div>
  )
}

export default Right