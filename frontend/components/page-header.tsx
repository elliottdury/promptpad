import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function PageHeader({ className }: { className?: string }) {
    return (
        <header className={cn("w-full bg-zinc-50 flex flex-row justify-between items-center h-fit", className)}>
            <Link className='flex flex-row gap-1.5 cursor-pointer' href="/prompts">
                <Image src="/promptpad.svg" width={28} height={28} alt="" />
                <h6 className="text-xl font-semibold tracking-tight">Promptpad</h6>
            </Link>
        </header>
    )
}