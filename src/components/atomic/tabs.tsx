/* == Tabs == */

import { Button } from "./button";

export function Tabs() {
  return (
    <>
      <ul className="list-none flex flex-col gap-4 py-6 px-0">
        <li className="h-=[50.4px]">
        <Button href="">
          Sobre
        </Button>
        </li>
        <li>
        <Button href="">
          Stack
        </Button>
        </li>
        <li>
        <Button href="https://gusttavocastro-com.vercel.app/" target="_blank">
          Portfólio
        </Button>
        </li>
        <li>
        <Button href="https://linkedin.com/in/castrogusttavo" target="_blank">
          LinkedIn
        </Button>
        </li>
      </ul>
    </>
  );
}
