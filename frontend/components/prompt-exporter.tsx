import {
  PromptFieldContainer,
  PromptField,
  PromptFieldContent,
  PromptFieldItem,
  PromptFieldTrigger,
} from "@/components/ui/prompt-field"

import { cn } from "@/lib/utils"

export default function PromptExporter(className: any) {

    return (
          <PromptFieldContainer
            title="Export and refine"
            className={cn("bg-neutral-100/40", className)}
          >
            <PromptField
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <PromptFieldItem value="item-3">
                <PromptFieldTrigger>GPT Image</PromptFieldTrigger>
                <PromptFieldContent className="flex flex-col gap-4 text-balance">
                  <p>Some clever way of exporting ai generated prompt refinements</p>
                </PromptFieldContent>
              </PromptFieldItem>

              <PromptFieldItem value="item-4">
                <PromptFieldTrigger>Nano Banana Pro</PromptFieldTrigger>
                <PromptFieldContent className="flex flex-col gap-4 text-balance">
                  <p>Some clever way of exporting ai generated prompt refinements</p>
                </PromptFieldContent>
              </PromptFieldItem>
              
            </PromptField>
          </PromptFieldContainer>
    )
}