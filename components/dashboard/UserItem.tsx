import React from 'react'

export default function UserItem() {
  return (
    <div className='flex items-center justify-between gap-2 border rounded-[8px] p-2'>
        <div className='avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-extrabold flex items-center justify-center'>
            <p>KM</p>
        </div>
        <div className='grow'>
            <p className='font-bold'>Kelvin Mwangi</p>
            <p className='text-sm text-neutral-500'>ufalmeart@gmail.com</p>
        </div>
    </div>
  )
}
