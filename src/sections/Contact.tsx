import googleGmail from "@iconify/icons-logos/google-gmail";
import instagramIcon from "@iconify/icons-skill-icons/instagram";
import linkedinIcon from "@iconify/icons-skill-icons/linkedin";
import { Icon } from "@iconify/react";
import { AnimateComponent } from "../components/AnimateComponent";
import useLocales from "../hooks/useLocales";
import "../styles/sections/contact.scss";

export function Contact({ isMobile }: { isMobile?: boolean }) {
  const { t } = useLocales();

  const socials = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/julio-sergio-ferreira-silva",
      icon: <Icon icon={linkedinIcon} height={22} />,
    },
    {
      name: "juliosecondary@gmail.com",
      link: `mailto:juliosecondary@gmail.com?subject=${t(
        "sections.contact.subjects.email"
      )}`,
      icon: <Icon icon={googleGmail} height={22} />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/julio_sergiofs/",
      icon: <Icon icon={instagramIcon} height={22} />,
    },
  ];

  const socialsMobile = [socials[0], socials[3], socials[2], socials[1]];

  return (
    <div className="content contact">
      <AnimateComponent
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 },
          },
          hidden: { opacity: 0, y: 70 },
        }}
      >
        <h4 className="title-variant">Contact</h4>
      </AnimateComponent>
      <div className="socials">
        {(isMobile ? socialsMobile : socials).map((social, index) => (
          <AnimateComponent
            key={social.name}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 * ((index + 1) / 4) },
              },
            }}
          >
            <a href={social.link} target="_blank">
              {social.icon}
              <p className="redirect-link">{social.name}</p>
            </a>
          </AnimateComponent>
        ))}
      </div>
    </div>
  );
}