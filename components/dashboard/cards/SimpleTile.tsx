import { Card, CardContent } from '@/components/ui/card'
import { bgColor } from '@/lib/color-helper'
import React from 'react'

export default function SimpleTile(props: {title: string, label: string, color: string}) {
  return (
    <Card className={`${bgColor[props.color]} border-none`}>
        <CardContent className='w-full h-full flex flex-col justify-center items-start space-y-1 py-2'>
            <span className='text-sm'>
                {props.label}
            </span>
            <span className='font-semibold'>
                {props.title}
            </span>
        </CardContent>
    </Card>
  )
}
