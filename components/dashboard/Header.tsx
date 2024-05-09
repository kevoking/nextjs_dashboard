import React, { useState } from 'react'
import { HeaderCommand } from './HeaderCommand'
import { Button } from '../ui/button'
import { BellIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function Header() {
    const notifications = [
        {
            text: "Welcome to app",
            date: "02-05-2024",
            read: false
        },
        {
            text: "Welcome to app",
            date: "02-05-2024",
            read: true
        }
    ]

  return (
    <div className='grid grid-cols-2 gap-4 p-4 border-b'>
        <HeaderCommand />
        <div className='flex items-center justify-end'>
            
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button className='relative' variant="outline" size="icon">
                        <div className={`h-3 w-3 absolute -top-2 -right-1 rounded-full my-1 ${notifications.find((item: any) => item.read !== true) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                        <BellIcon className='h-4 w-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {notifications.map((notification: any, key: number) => (
                        <DropdownMenuItem key={key} className='p-1 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2'>                            
                            <div className={`h-3 w-3 rounded-full my-1 ${!notification.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                            <div>
                                <p>{notification.text}</p>
                                <p>{notification.date}</p>
                            </div>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </div>
  )
}
