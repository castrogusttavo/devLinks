/* == Tabs == */

import { Button } from "./button";

export function Tabs() {
  return (
    <>
      <ul className="list-none flex flex-col gap-4 py-6 px-0">
        <li>
          <Button href="https://gusttavocastro-com.vercel.app/articles" target="_blank">
            Artigos
          </Button>
        </li>
        <li>
          <Button href="" target="_blank">
            Stack
          </Button>
        </li>
        <li>
          <Button href="https://gusttavocastro-com.vercel.app/projects" target="_blank">
            Projetos
          </Button>
        </li>
        <li>
          <Button href="https://gusttavocastro-com.vercel.app/" target="_blank">
            Portfólio
          </Button>
        </li> 
      </ul>
    </>
  );
}
