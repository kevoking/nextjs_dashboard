"use client"
import SimpleTile from '@/components/dashboard/cards/SimpleTile'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Quiz({ params }: {params: { id: string }}) {

    return (
        <div className='w-full grid gap-8'>
            <Card>
                <CardHeader>
                    <CardTitle className='flex justify-between items-center gap-8'>
                        <h4 className=''>
                            10 Questions
                        </h4>
                        <Button asChild>
                            <Link href={`/quizzes/${params.id}/do-quiz`}>
                                Attempt Quiz
                            </Link>
                        </Button>
                    </CardTitle>
                    <CardDescription>
                        {/*  */}
                    </CardDescription>
                </CardHeader>
                <CardContent className='w-full grid gap-8'>
                    {/*  */}
                    <div className='w-full grid sm:grid-cols-2 gap-8'>
                        <SimpleTile title='Lower Primary' label='Level' color='purple' />
                        <SimpleTile title='Grade 3' label='Class' color='purple' />
                        <SimpleTile title='Mathematics' label='Subject' color='purple' />
                        <SimpleTile title='Algebra' label='Topic' color='purple' />
                        <SimpleTile title='Addition' label='Sub Topic' color='purple' />
                        <SimpleTile title='' label='Strand' color='purple' />
                    </div>
                </CardContent>
                <CardFooter>
                    {/*  */}
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Previous Attempts
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}
