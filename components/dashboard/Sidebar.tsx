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
import { User, Mail, CreditCard, Cog, Bell, Inbox } from 'lucide-react'
  

export default function Sidebar() {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    text: "Profile",
                    icon: <User />
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

    return (
        <div className='fixed min-h-screen p-4 flex flex-col gap-4 w-[300px] min-w-[300px] border-r'>
            <div className=''>
                <UserItem />
            </div>
            <div className='grow'>
                <Command style={{ overflow: 'visible' }}>
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group}>
                                {menu.items.map((item: any, itemKey: number) => (
                                    <CommandItem key={itemKey} className='flex gap-2 cursor-pointer'>
                                        {item.icon}
                                        {item.text}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>

            </div>
            <div className=''>
                {/*  */}
            </div>
        </div>
    )
}
