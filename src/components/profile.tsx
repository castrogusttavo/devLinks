/* == Profile == */

/* import { Switch } from "./atomic/switch"; */
import { Tabs } from "./atomic/tabs";
import { SocialLinks } from "./socialLinks";
import { SwitchMode } from './atomic/switchMode';

export function Profile() {
  return (
    <>
      <div className="font-['Albert Sans'] p-6 text-center">
        <img
          src="https://github.com/castrogusttavo.png"
          alt="Foto do Gusttavo Castro - Designer e Programador"
          className="rounded-full w-28 h-28 mx-auto 
          border-[#ffffff80] dark:border-[#00000080]
          border-2 border-solid"
        />

        <p className="mt-2 font-medium leading-6">
          @castrogusttavo
        </p>
      </div>

      <SwitchMode />

      <Tabs />   

      <SocialLinks />

      <footer className="pt-6 px-0 text-center text-sm text-slate-200 dark:text-slate-700">
      Todos os direitos reservados. <a href="https://gusttavocastro.mit-license.org/" className="font-medium text-slate-400 dark:text-slate-400">MIT LICENSE</a>  
      </footer>   
    </>
  );
}
