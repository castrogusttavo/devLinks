import { ComponentProps } from "react";

interface SocialProps extends ComponentProps<'a'> {
}

export function SocialLink(props: SocialProps) {
  return (
    <a {...props} className="flex items-center justify-center p-4 rounded-full hover:bg-[#ffffff33] dark:hover:bg-[#00000033] transition-all">
      {props.children}
    </a>
  )
}