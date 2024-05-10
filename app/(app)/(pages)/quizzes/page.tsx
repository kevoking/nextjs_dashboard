import { QuizzesDataTable } from '@/components/dashboard/tables/QuizzesDataTable'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function Quizzes() {
  return (
    <div className='w-full grid gap-8'>
        <Card>
            <CardContent>
                <QuizzesDataTable />
            </CardContent>
        </Card>
    </div>
  )
}
