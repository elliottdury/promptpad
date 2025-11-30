import {
  PromptFieldContainer,
  PromptField,
  PromptFieldContent,
  PromptFieldItem,
  PromptFieldTrigger,
} from "@/components/ui/prompt-field"

import { cn } from "@/lib/utils"

export default function PromptPreview(className: any) {

    return (
          <PromptFieldContainer
            title="Generate preview"
            className={cn("bg-neutral-100/40", className)}
          >
            <p className="text-sm">Generate a preview</p>
          </PromptFieldContainer>
    )
}