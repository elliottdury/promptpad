import { ChartNoAxesGantt } from "lucide-react"

import {
  PromptFieldContainer,
  PromptField,
  PromptFieldContent,
  PromptFieldItem,
  PromptFieldTrigger,
} from "@/components/ui/prompt-field"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"
import PromptBuilder from "@/components/prompt-builder"
import PromptExporter from "@/components/prompt-exporter"
import PromptSaver from "@/components/prompt-saver"
import PromptPreview from "@/components/prompt-preview"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-zinc-50 dark:bg-black sm:items-start">
        <section className="w-full">
          <input className="text-3xl text-neutral-800 font-semibold tracking-tight hover:scale-[1.002] focus:outline-none active:outline-none" placeholder="Prompt name"></input>
          <Separator className="my-4"/>
          <div className="w-fit my-3 flex flex-row ml-auto items-center gap-1 bg-neutral-100 p-2 border-[0.1] rounded-md py-1 cursor-pointer">
            <ChartNoAxesGantt className="w-3 h-3 text-neutral-600" />
            <p className="text-xs text-neutral-600 font-semibold tracking-normal ">Edit fields (coming soon)</p>
          </div>
          <PromptBuilder className="w-full"/>
          <div className="h-4 border-l-2 border-neutral-300 ml-[50%]"></div>
          <PromptSaver/>
          <div className="h-4 border-l-2 border-neutral-300 ml-[50%]"></div>
          <PromptPreview/>
          <div className="h-4 border-l-2 border-neutral-300 ml-[50%]"></div>
          <PromptExporter className="w-full"/>
        </section>
      </main>
    </div>
  );
}
