import React from 'react'
import Amazon from '../assets/asset 3.png'
import Google from '../assets/asset 4.png'
import TaskRabbit from '../assets/asset 5.png'
import Airtable from '../assets/asset 6.png'
import Box from '../assets/asset 7.png'
import Godaddy from '../assets/asset 8.svg'
import Asana from '../assets/asset 9.png'

const Subscribe = () => {
  return (
    <section className='mx-[110px] max-md:mx-3 mt-[10px] flex flex-col gap-y-[25px] justify-between'>

      <div className='mt-[40px] max-sm:mt-8 flex justify-center'>
        <p className='text-primary text-[16px] font-normal'>The worlds best companies rely on UsabilityHub to make better design decisions.</p>
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-x-2 mb-[5px]'>
        <img src={Amazon} alt="Amazon" className='w-[95px] h-[46px]'/>
        <img src={Google} alt="Google" className='w-[105px] h-[46px]'/>
        <img src={TaskRabbit} alt="TaskRabbit" className='w-[170px] h-[46px]'/>
        <img src={Airtable}  alt="Airtable" className='w-[145px] h-[46px]'/>
        <img src={Box} alt="Box" className='w-[45px] h-[46px]'/>
        <img src={Godaddy} alt="Godaddy" className='w-[156px] h-[46px]'/>
        <img src={Asana} alt="Asana" className='w-[104px] h-[46px]'/>
      </div>

      <div>

      </div>
    </section>
  )
}

export default Subscribe