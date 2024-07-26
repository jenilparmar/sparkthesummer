import Image from 'next/image'
import React from 'react'

function InforComp() {
  return (
    <div className='self-center w-9/12 py-4 mt-5 rounded-3xl shadow-2xl  flex flex-row gap-1 justify-center'>
            <Image src={'/mentalhealth.jpg'} width={180} height={300} className='border-2 p-2 border-black self-center rounded-xl hover:rounded-3xl transition-all  duration-220' />
        </div>
  )
}

export default InforComp
