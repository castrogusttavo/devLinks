import { SocialLink } from "./atomic/socialLink";
import {
  LogoGithub,
  LogoInstagram,
  LogoYoutube,
  LogoLinkedin,
} from "react-ionicons";
import { useState, useEffect } from 'react';

export function SocialLinks() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const iconColor = isDarkMode ? "#000000" : "#FFFFFF";

  return (
    <>
      <div className="flex justify-center py-6 px-0 text-2xl">
        <SocialLink href="">
          <LogoGithub color={iconColor} />
        </SocialLink>

        <SocialLink href="">
          <LogoInstagram color={iconColor} />
        </SocialLink>

        <SocialLink href="">
          <LogoYoutube color={iconColor} />
        </SocialLink>

        <SocialLink href="">
          <LogoLinkedin color={iconColor} />
        </SocialLink>
      </div>
    </>
  );
}
