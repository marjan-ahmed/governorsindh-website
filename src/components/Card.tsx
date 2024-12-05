import Image from 'next/image'
import React from 'react'

interface ICard {
    img: string,
    text: string
}

function Card({img, text}: ICard) {
  return (
    <div className='w-[19em] mb-20 h-[17em] overflow-hidden bg-white shadow-gray-300 shadow-lg rounded-xl'>
        <div>
            <Image 
            src={img}
            alt='content-1'
            width={300}
            height={300}
            className='object-cover'
            />
        </div>
        <div className='text-center font-bold font-[inter] text-lg my-5'>
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default Card