import {
  PromptFieldContainer,
  PromptField,
  PromptFieldContent,
  PromptFieldItem,
  PromptFieldTrigger,
} from "@/components/ui/prompt-field"

import { ArrowUp } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

import { cn } from "@/lib/utils"

import { Textarea } from "@/components/ui/textarea"

export default function PromptBuilder(className: any) {

    return (
        <PromptFieldContainer
            title="Structure and build"
            className={cn("bg-neutral-100/40", className)}
          >
            <PromptField
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <PromptFieldItem value="item-1">
                <PromptFieldTrigger>Main subject</PromptFieldTrigger>
                <PromptFieldContent className="flex flex-col gap-4 text-balance">

                    <p className="w-fit px-3 py-1 bg-neutral-100/80 text-neutral-600 border-[0.5px] hover:line-through rounded-md text-sm font-normal tracking-normal shadow-xs">
                        A furry lion cub
                    </p>
                    <InputGroup>
                        <InputGroupInput placeholder="A brief detail or description of the main subject" className=""/>
                        <InputGroupAddon align="inline-end">
                            <ArrowUp className="w-2 h-2 cursor pointer" />
                        </InputGroupAddon>
                    </InputGroup>

                </PromptFieldContent>
              </PromptFieldItem>

              <PromptFieldItem value="item-2">
                <PromptFieldTrigger>Background</PromptFieldTrigger>
                <PromptFieldContent className="flex flex-col gap-4 text-balance">
                  <p>Some UI elements for adding styles by typing or template</p>
                </PromptFieldContent>
              </PromptFieldItem>

              <PromptFieldItem value="item-3">
                <PromptFieldTrigger>Lighting</PromptFieldTrigger>
                <PromptFieldContent className="flex flex-col gap-4 text-balance">
                  <p>Some UI elements for adding styles by typing or template</p>
                </PromptFieldContent>
              </PromptFieldItem>

              <PromptFieldItem value="item-4">
                <PromptFieldTrigger>Camera angle</PromptFieldTrigger>
                <PromptFieldContent className="flex flex-col gap-4 text-balance">
                  <p>Some UI elements for adding styles by typing or template</p>
                </PromptFieldContent>
              </PromptFieldItem>

               <PromptFieldItem value="item-5">
                <PromptFieldTrigger>Modifiers</PromptFieldTrigger>
                <PromptFieldContent className="flex flex-col gap-4 text-balance">
                  <p>Some UI elements for adding styles by typing or template</p>
                </PromptFieldContent>
              </PromptFieldItem>

              <PromptFieldItem value="item-6">
                <PromptFieldTrigger>Text</PromptFieldTrigger>
                <PromptFieldContent className="flex flex-col gap-4 text-balance">
                  <p>Some UI elements for adding styles by typing or template</p>
                </PromptFieldContent>
              </PromptFieldItem>

            </PromptField>
          </PromptFieldContainer>
    )

}