import React from 'react'
import RightArrow from '../assets/asset 10.svg'


const ServiceButton = ({text}) => {
  return (
    <button className='px-[25px] max-sm:px-[18px] py-[13px] max-sm:[10px] border-[1.5px] border-opacity-60 border-[#b9cde4] flex flex-row justify-center items-center gap-[7px] rounded-[4px]'>
        <p className='text-[#183b56] text-sm max-xs:text-[10px] leading-[18px] font-medium'>{text}</p>
        <img src={RightArrow} alt="RightArrow" className='mt-[5px]'/>
    </button>
  )
}

export default ServiceButton