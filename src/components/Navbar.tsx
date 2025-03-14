import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail, LanguagesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";

export function Navbar() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, SetLanguage] = useState(i18n.language);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    SetLanguage(code);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    createChat({
      webhookUrl:
        "https://n8n.rest/webhook/78f1134c-f527-4114-9ae6-dd32f434df19/chat",
      showWelcomeScreen: false,
      // @ts-expect-error setting default language
      defaultLanguage: `${language}`,
      initialMessages:
        language === "en"
          ? ["Hi there! 👋", "My name is Basit. How can I assist you today?"]
          : [
              "Hallo! 👋",
              "Mein Name ist Basit. Wie kann ich Ihnen heute helfen?",
            ],
      i18n: {
        // @ts-expect-error setting english language
        en: {
          title: "",
          subtitle: "Start a chat. I'm here to help you 24/7.",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your question..",
        },
        // @ts-expect-error setting german language
        de: {
          title: "",
          subtitle:
            "Starte eine Konversation. Ich bin hier, um Ihnen 24/7 zu helfen.",
          footer: "",
          getStarted: "Neue Konversation",
          inputPlaceholder: "Geben Sie Ihre Frage ein..",
        },
      },
    });
  }, [language]);

  const navLinks = [
    { name: "header.home", href: "#home" },
    { name: "header.about", href: "#about" },
    { name: "header.experience", href: "#experience" },
    { name: "header.skills", href: "#skills" },
    { name: "header.projects", href: "#projects" },
    { name: "header.contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={18} />,
      href: "https://github.com/basit-dev-de",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com/in/basit-ali-b61425354",
    },
    {
      name: "Email",
      icon: <Mail size={18} />,
      href: "mailto:basit.ali@toptal.com",
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-3 px-6 md:px-10",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-foreground"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-gradient">Basit Ali</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors link-hover"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {t(link.name)}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <span
              onClick={() => changeLanguage(language === "en" ? "de" : "en")}
              className="flex items-center cursor-pointer justify-center w-8 h-8 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
            >
              <span className="mr-1">{language === "en" ? "EN" : "DE"}</span>
              <span>
                <LanguagesIcon size={18} />
              </span>
            </span>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-center w-8 h-8 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full px-6 py-20">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu();
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto mb-10 flex space-x-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
