import Calendar from '@/components/dashboard/cards/Calendar'
import Statistical from '@/components/dashboard/cards/Statistical'
import { QuizLogsDataTable } from '@/components/dashboard/tables/QuizLogsDataTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileQuestionIcon, Wallet } from 'lucide-react'
import React from 'react'

export default function QuizzesDashboard() {
  return (
    <div className='w-full grid gap-8'>
        {/*  */}
        <div className='w-full grid lg:grid-cols-2 gap-8'>
            <div className='w-full grid sm:grid-cols-3 gap-8'>
                <Statistical count={73098} color="purple" title="Total Questions" icon={<FileQuestionIcon className='w-12 h-12' />} />
                <Statistical count={498} color="pink" title="Attempted Questions" icon={<FileQuestionIcon className='w-12 h-12' />} />
                <Statistical count={500} color="green" title="Wallet Balance" icon={<Wallet className='h-12 w-12' />} />
            </div>
            <Calendar />
        </div>
        <Card className='w-full'>
            <CardHeader>
                <CardTitle>
                    Recent Quiz Attempts
                </CardTitle>
            </CardHeader>
            <CardContent className='w-full'>
                <QuizLogsDataTable />
            </CardContent>
        </Card>
    </div>
  )
}
