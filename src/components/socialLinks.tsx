import { SocialLink } from "./atomic/socialLink";
import { FaGithub, FaInstagram, FaFigma, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

export function SocialLinks() {
  return (
    <>
      <IconContext.Provider
        value={{ className: "color-[#00000005] dark:color-[ffffff0d]" }}
      >
        <div className="flex justify-center py-6 px-0 text-2xl">
          <SocialLink href="https://github.com/castrogusttavo/" target="_blank">
            <FaGithub />
          </SocialLink>

          <SocialLink href="https://www.instagram.com/castrogusttavo.dev/" target="_blank">
            <FaInstagram />
          </SocialLink>

          <SocialLink href="https://www.linkedin.com/in/castrogusttavo/" target="_blank">
            <FaLinkedin />
          </SocialLink>

          <SocialLink href="https://www.figma.com/@castrogusttavo" target="_blank">
            <FaFigma />
          </SocialLink>
        </div>
      </IconContext.Provider>
    </>
  );
}
