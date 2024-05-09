import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='w-full p-12'>
        <div className='w-full min-h-screen max-w-7xl mx-auto grid gap-12 mt-24'>
            <div className='w-full max-w-5xl mx-auto flex flex-col justify-center items-center gap-8'>
                <h1 className='text-3xl md:text-7xl font-bold md:font-extrabold'>
                    Next JS Dashboard
                </h1>
                <h4 className='text-xl md:text-2xl'>
                    A fully customizable starter template built with NextJS, ShadCN UI and Nivo.
                </h4>
            </div>
            <Card className='w-full max-h-[75vh] overflow-hidden'>
                <Image
                    src="/dash.png"
                    alt=''
                    objectFit="cover"
                    className='w-full'
                    width={1024}
                    height={1024}
                    />
            </Card>
        </div>
    </section>
  )
}
