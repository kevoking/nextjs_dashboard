import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function AnswerCard(props: {label: string, answer: string, selected: boolean}) {
    return (
        <Card className={`w-full border-none ${props.selected ? 'py-3 bg-violet-400' : 'bg-violet-50'}`}>
            <CardContent className='w-full p-3 flex flex-row flex-nowrap justify-start items-center space-x-4'>
                <span className={`min-w-10 min-h-10 rounded-full text-xl font-extrabold flex justify-center items-center ${props.selected ? 'bg-violet-700 text-violet-50' : 'bg-violet-200'}`}>
                    {props.label}
                </span>
                <span className={`text-lg ${props.selected ? 'text-violet-100 font-bold' : ''}`}>
                    {props.answer}
                </span>
            </CardContent>
        </Card>
    )
}
