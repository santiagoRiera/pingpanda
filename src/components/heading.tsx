import { cn } from "@/utils"
import { HTMLAttributes, ReactNode } from "react"

//Can take any prop that you can pass to an heading tag
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800",
        className
      )}
      {...props} //Las otras props de heading
    >
      {children}
    </h1>
  )
}
