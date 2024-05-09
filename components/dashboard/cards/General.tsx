"use client"
import React from 'react'
import { ResponsiveBump } from '@nivo/bump'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBump = (props: any) => (
    <ResponsiveBump
        data={props.data}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        margin={{ top: 20, right: 60, bottom: 20, left: 20 }}
        axisRight={null}
    />
)

export default function General() {
    const data = [
        {
          "id": "Serie 1",
          "data": [
            {
              "x": "2000",
              "y": 12
            },
            {
              "x": "2001",
              "y": 11
            },
            {
              "x": "2002",
              "y": 12
            },
            {
              "x": "2003",
              "y": 9
            },
            {
              "x": "2004",
              "y": 3
            }
          ]
        },
        {
          "id": "Serie 2",
          "data": [
            {
              "x": "2000",
              "y": 1
            },
            {
              "x": "2001",
              "y": 3
            },
            {
              "x": "2002",
              "y": 8
            },
            {
              "x": "2003",
              "y": 6
            },
            {
              "x": "2004",
              "y": 5
            }
          ]
        },
        {
          "id": "Serie 3",
          "data": [
            {
              "x": "2000",
              "y": 7
            },
            {
              "x": "2001",
              "y": 1
            },
            {
              "x": "2002",
              "y": 11
            },
            {
              "x": "2003",
              "y": 11
            },
            {
              "x": "2004",
              "y": 9
            }
          ]
        }
    ]

    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle>This week</CardTitle>
                <CardDescription>These are the results for this week</CardDescription>
            </CardHeader>
            <CardContent className='w-full h-[400px]'>
                <MyResponsiveBump data={data} />
            </CardContent>
        </Card>
    )
}
