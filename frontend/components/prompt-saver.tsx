import {
  PromptFieldContainer,
  PromptField,
  PromptFieldContent,
  PromptFieldItem,
  PromptFieldTrigger,
} from "@/components/ui/prompt-field"

import { cn } from "@/lib/utils"

export default function PromptSaver(className: any) {

    return (
          <PromptFieldContainer
            title="Save prompt"
            className={cn("bg-neutral-100/40", className)}
          >
            <p className="text-sm">Save your prompt to local storage</p>
          </PromptFieldContainer>
    )
}