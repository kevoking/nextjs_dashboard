"use client"
import React from 'react'
import UserItem from './UserItem'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { User, Mail, CreditCard, Cog, Bell, Inbox, LogOut, HelpCircle, GraduationCap, LayoutDashboard, Grid2x2Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
  

export default function Sidebar() {
    const navigation = useRouter()
    const menuList = [
        {
            group: "Dashboards",
            items: [
                {
                    link: "/dashboard",
                    text: "Default",
                    icon: <LayoutDashboard />
                },
                {
                    link: "/quizzes-dashboard",
                    text: "Quizzes",
                    icon: <Grid2x2Check />
                }
            ]
        },
        {
            group: "Pages",
            items: [
                {
                    link: "/",
                    text: "Profile",
                    icon: <User />
                },
                {
                    link: "/quizzes",
                    text: "Quizzes",
                    icon: <GraduationCap />
                },
                {
                    link: "/",
                    text: "Inbox",
                    icon: <Inbox />
                },
                {
                    link: "/",
                    text: "Billing",
                    icon: <CreditCard />
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings",
                    icon: <Cog />
                },
                {
                    link: "/",
                    text: "Notifications",
                    icon: <Bell />
                }
            ]
        }
    ] as const

    const bottomMenuList = [
        {
            link: "/",
            text: "Logout",
            icon: <LogOut />
        },
        {
            link: "/",
            text: "Help",
            icon: <HelpCircle />
        }
    ]

    const logout = () => {
        navigation.push("/")
    }

    return (
        <div className='fixed min-h-screen p-4 flex flex-col gap-4 w-[300px] min-w-[300px] border-r'>
            <div className=''>
                <UserItem />
            </div>
            <div className='grow w-full flex flex-col gap-2'>
                {menuList.map((menu: any, key: number) => (
                    <div key={key} className='w-full grid gap-2'>
                        <h4 className='text-sm'>
                            {menu.group}
                        </h4>
                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                            {menu.items.map((item: any, itemKey: number) => (
                                <Button key={itemKey} variant="default" asChild className='w-full flex justify-start bg-background text-foreground hover:bg-violet-100 hover:text-violet-500'>
                                    <Link href={item.link} className='flex gap-2'>
                                        {item.icon}
                                        {item.text}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className=''>
                {/*  */}
                <Button className='w-full flex gap-2 justify-start' onClick={() => logout()} variant="outline">
                    <LogOut className='w-6 h-6' />
                    <span>Logout</span>
                </Button>
            </div>
        </div>
    )
}
