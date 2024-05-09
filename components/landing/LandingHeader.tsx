"use client"
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'
  
export default function LandingHeader() {
  return (
    <div className='w-full flex flex-row justify-between items-center gap-4 fixed py-2 px-4 lg:px-12 bg-background backdrop-blur-2xl'>
        <div className=''>
            <div className='text-2xl font-black text-violet-700 flex flex-row justify-start items-center gap-1 rounded-full border border-violet-700'>
                <span className='bg-violet-700 text-neutral-50 min-w-8 h-8 flex justify-center items-center rounded-full'>N</span>
                <span className='h-8 flex justify-center items-center pr-4'>DASH</span>
            </div>
        </div>
        <div className='w-full flex flex-row justify-end items-center gap-2'>
            <div className='w-full grow flex flex-row justify-end items-center gap-2'>
                {/* <Link href="/">
                    Home
                </Link> */}
                <Button asChild>
                    <Link href="https://github.com/kevoking/nextjs_dashboard" target='_blank' className='flex gap-2 justify-center items-center'>
                        <Github className='w-6 h-6' />
                        GitHub
                    </Link>
                </Button>
            </div>
            <div className='flex flex-row justify-end items-center gap-2'>
                <Button asChild>
                    <Link href="/login">
                        Login
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}
