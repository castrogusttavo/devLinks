/* == Button Section == */

import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'a'> {
children: string;
}

export function Button(props: ButtonProps) {
  return (
    <a {...props} className="flex items-center justify-center py-4 px-6 bg-[#ffffff0d] dark:bg-[#0000000d] border border-[#ffffff80] dark:border-[#00000080] border-solid rounded-lg backdrop-blur-sm font-medium transition-all hover:bg-[#ffffff05] dark:hover:bg-[#00000005] hover:border-solid hover:border-[#FFFFFF] dark:hover:border-[#121212]">
      {props.children}
    </a>
  )
}