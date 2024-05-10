"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { bgColor, textColor } from '@/lib/color-helper'
import React, { ReactNode } from 'react'

export default function Statistical(props: {color: string,count: number, title: string, icon: ReactNode}) {

    return (
        <Card className={`${bgColor[props.color]}`} style={{ border: 'none' }}>
            {/*  */}
            <CardHeader>            
                <CardTitle className={`flex justify-center items-center ${textColor[props.color]}`}>
                    {props.icon}
                </CardTitle>
            </CardHeader>
            <CardContent className='w-full flex flex-col justify-center items-center gap-4 text-center'>
                {/*  */}
                <h1 className={`text-2xl font-bold ${textColor[props.color]}`}>
                    {props.count}
                </h1>
            </CardContent>
            <CardFooter className='w-full'>                
                <h3 className='w-full text-center text-sm font-semibold text-neutral-600'>
                    {props.title}
                </h3>
            </CardFooter>
        </Card>
    )
}
