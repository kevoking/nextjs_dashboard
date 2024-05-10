interface Map {
    [key: string]: string
}

export const bgColor: Map = {
    purple: 'bg-purple-100',
    violet: 'bg-violet-100',
    pink: 'bg-pink-100',
    green: 'bg-green-100',
    emerald: 'bg-emerald-100',
} as const
export const textColor: Map = {
    purple: 'text-purple-500',
    violet: 'text-violet-500',
    pink: 'text-pink-500',
    green: 'text-green-500',
    emerald: 'text-emerald-500',
} as const