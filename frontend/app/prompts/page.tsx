import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator"

import Link from 'next/link'

export default function Home() {
  return (
    <section className="w-full">
      <Link href="/new" className="flex flex-row gap-2 items-center justify-start hover:opacity-75 ease-in-out cursor-pointer">
        <Plus className="w-7 h-7 p-1 bg-neutral-900 text-neutral-50 rounded-full"/>
        <h3 className="text-3xl font-semibold tracking-tight hover:scale-[1.002]">New prompt</h3>
      </Link>
      <Separator className="my-4"/>
      <div className="flex flex-col gap-2">
        <div className="w-fit flex flex-row gap-3 first:mt-1 p-2 hover:bg-neutral-200 ease-in-out rounded-md cursor-pointer bg-neutral-100">
          <p className="text-sm font-normal tracking-normal text-neutral-600">A tall shiny scyscraper, polished windows...</p>
          <p className="text-sm font-normal tracking-normal text-neutral-600">24 October 2025</p>
        </div>
        <div className="w-fit flex flex-row gap-3 first:mt-1 p-2 hover:bg-neutral-200 ease-in-out rounded-md cursor-pointer bg-neutral-100">
          <p className="text-sm font-normal tracking-normal text-neutral-600">Lush meadows swept in a warm evening sun, light breeze...</p>
          <p className="text-sm font-normal tracking-normal text-neutral-600">2 November 2025</p>
        </div>
      </div>
    </section>
  );
}
