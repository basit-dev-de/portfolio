import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github color="black" size={18} />,
      href: "https://github.com/basit-dev-de",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin color="black" size={18} />,
      href: "https://linkedin.com/in/basit-ali-b61425354",
    },
    {
      name: "Email",
      icon: <Mail color="black" size={18} />,
      href: "mailto:basit.ali@toptal.com",
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-accent/50 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-border pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-foreground">
              <span className="text-gradient">Basit Ali</span>
            </h3>
            <p className="text-foreground/70 mt-1">{t("common.role")}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <button
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={handleScrollToTop}
            >
              <span>{t("common.backToTop")}</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>
            © {currentYear} Basit Ali. {t("footer.allRightsReserved")}
          </p>
          <p className="mt-2 md:mt-0">{t("footer.developedBy")} Basit Ali</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
