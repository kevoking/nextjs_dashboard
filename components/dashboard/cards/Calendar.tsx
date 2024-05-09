"use client"
import React from 'react'
import { ResponsiveCalendar, ResponsiveTimeRange } from '@nivo/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveTimeRange = (props: any) => (
    <ResponsiveTimeRange
        data={props.data}
        from="2018-04-01"
        to="2018-08-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[]}
    />
)

export default function Calendar() {
    const data = [
        {
          "value": 333,
          "day": "2018-04-15"
        },
        {
          "value": 323,
          "day": "2018-06-26"
        },
        {
          "value": 49,
          "day": "2018-06-28"
        },
        {
          "value": 147,
          "day": "2018-05-27"
        },
        {
          "value": 75,
          "day": "2018-06-20"
        },
        {
          "value": 392,
          "day": "2018-04-12"
        },
        {
          "value": 35,
          "day": "2018-08-10"
        },
        {
          "value": 153,
          "day": "2018-05-09"
        },
        {
          "value": 6,
          "day": "2018-05-01"
        },
        {
          "value": 17,
          "day": "2018-07-30"
        },
        {
          "value": 9,
          "day": "2018-05-30"
        },
        {
          "value": 358,
          "day": "2018-07-17"
        },
        {
          "value": 180,
          "day": "2018-06-15"
        },
        {
          "value": 264,
          "day": "2018-04-01"
        },
        {
          "value": 273,
          "day": "2018-04-17"
        },
        {
          "value": 127,
          "day": "2018-05-11"
        },
        {
          "value": 182,
          "day": "2018-07-24"
        },
        {
          "value": 64,
          "day": "2018-05-13"
        },
        {
          "value": 30,
          "day": "2018-07-06"
        },
        {
          "value": 146,
          "day": "2018-04-25"
        },
        {
          "value": 67,
          "day": "2018-04-16"
        },
        {
          "value": 223,
          "day": "2018-04-20"
        },
        {
          "value": 109,
          "day": "2018-05-10"
        },
        {
          "value": 274,
          "day": "2018-08-01"
        },
        {
          "value": 77,
          "day": "2018-06-12"
        },
        {
          "value": 290,
          "day": "2018-07-11"
        },
        {
          "value": 226,
          "day": "2018-06-22"
        },
        {
          "value": 361,
          "day": "2018-07-16"
        },
        {
          "value": 179,
          "day": "2018-06-23"
        },
        {
          "value": 355,
          "day": "2018-06-19"
        },
        {
          "value": 321,
          "day": "2018-07-28"
        },
        {
          "value": 95,
          "day": "2018-06-03"
        },
        {
          "value": 397,
          "day": "2018-07-09"
        },
        {
          "value": 250,
          "day": "2018-04-08"
        },
        {
          "value": 325,
          "day": "2018-04-18"
        },
        {
          "value": 261,
          "day": "2018-05-07"
        },
        {
          "value": 158,
          "day": "2018-05-24"
        },
        {
          "value": 23,
          "day": "2018-05-04"
        },
        {
          "value": 233,
          "day": "2018-04-06"
        },
        {
          "value": 99,
          "day": "2018-05-19"
        },
        {
          "value": 41,
          "day": "2018-07-29"
        },
        {
          "value": 221,
          "day": "2018-06-02"
        },
        {
          "value": 134,
          "day": "2018-04-21"
        },
        {
          "value": 209,
          "day": "2018-05-18"
        },
        {
          "value": 344,
          "day": "2018-06-21"
        },
        {
          "value": 116,
          "day": "2018-08-11"
        },
        {
          "value": 57,
          "day": "2018-06-29"
        },
        {
          "value": 340,
          "day": "2018-07-10"
        },
        {
          "value": 314,
          "day": "2018-07-18"
        },
        {
          "value": 159,
          "day": "2018-08-05"
        },
        {
          "value": 34,
          "day": "2018-07-15"
        },
        {
          "value": 130,
          "day": "2018-04-09"
        },
        {
          "value": 211,
          "day": "2018-04-30"
        },
        {
          "value": 257,
          "day": "2018-04-02"
        }
    ]
    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle>This week</CardTitle>
                <CardDescription>These are the results for this week</CardDescription>
            </CardHeader>
            <CardContent className='w-full h-[140px]'>
                <MyResponsiveTimeRange data={data} />
            </CardContent>
        </Card>
    )
}
