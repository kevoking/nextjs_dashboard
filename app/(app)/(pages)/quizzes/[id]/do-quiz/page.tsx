import AnswerCard from '@/components/dashboard/cards/AnswerCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, X } from 'lucide-react'
import React from 'react'

export default function DoQuiz({params} : {params: {id: string}}) {
  return (
    <section className='fixed top-0 right-0 left-0 bottom-0 p-12 bg-background w-full h-screen flex justify-center items-center'>

        <div className='fixed top-0 w-full flex flex-row justify-end items-center p-4'>
            <Button size="icon" variant="destructive">
                <X />
            </Button>
        </div>
        {/*  */}
        <Card className='w-full max-w-5xl mx-auto'>
            <div className='w-full h-2 bg-green-100'>
                <div className='w-[50%] h-2 bg-green-500' />
            </div>
            <CardHeader className='w-full text-center'>
                <CardDescription className='font-semibold'>
                    Question 5/10
                </CardDescription>
            </CardHeader>
            <CardContent className='w-full grid gap-8 text-center py-8 max-h-[75vh] overflow-y-scroll'>
                <div>
                    <p className='text-lg sm:text-2xl leading-10'>
                        If you have 10 oranges and you give three to Mary, how many oranges are you left with?
                    </p>
                </div>
                <div className='w-full max-w-lg mx-auto flex flex-col justify-center items-center space-y-4'>
                    <AnswerCard label='A' answer='5 Oranges' selected={false} />
                    <AnswerCard label='B' answer='3 Oranges' selected={false} />
                    <AnswerCard label='C' answer='7 Oranges' selected={true} />
                    <AnswerCard label='D' answer='10 Oranges' selected={false} />
                </div>
            </CardContent>
            <CardFooter className='w-full flex flex-row justify-center items-center space-x-8 border-t py-8'>
                <Button variant="outline">
                    Skip
                </Button>
                <Button className='flex gap-2'>
                    Next
                    <ArrowRight className='h-4' />
                </Button>
            </CardFooter>
        </Card>
    </section>
  )
}
