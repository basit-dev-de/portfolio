import React, { useState } from "react";
import { MapPin, Mail, Phone, Linkedin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "contact.location",
      details: "Berlin, Germany",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "contact.email",
      details: "basit.ali@toptal.com",
      link: "mailto:basit.ali@toptal.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "contact.phone",
      details: "+49 162 8510633",
      link: "tel:+491628510633",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      details: "linkedin.com/in/basit-ali-b61425354",
      link: "https://linkedin.com/in/basit-ali-b61425354",
    },
  ];

  return (
    <section id="contact" className="section-padding px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
            data-aos="fade-up"
          >
            {t("common.getInTouch")}
          </div>
          <h2
            className="section-heading"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("contact.title")}
          </h2>
          <p
            className="max-w-2xl mx-auto text-foreground/70"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="space-y-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold">{t("contact.contactInfo")}</h3>
            <p className="text-foreground/70">
              {t("contact.contactInfoDescription")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-xl flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{t(info.title)}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-foreground/70 hover:text-primary transition-colors"
                        target={
                          info.title === "LinkedIn" ? "_blank" : undefined
                        }
                        rel={
                          info.title === "LinkedIn"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-foreground/70">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-semibold mb-4">
                {t("contact.workingHours")}
              </h4>
              <div className="space-y-2 text-foreground/70">
                <div className="flex justify-between">
                  <span>
                    {t("contact.monday")} - {t("contact.friday")}:
                  </span>
                  <span>9:00 AM - 6:00 PM CET</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    {t("contact.saturday")} - {t("contact.sunday")}:
                  </span>
                  <span>{t("contact.closed")}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="glass-card p-8 rounded-xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-bold mb-6">
              {t("contact.sendMeAMessage")}
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full mx-auto flex items-center justify-center mb-4">
                  <Send size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  {t("contact.messageSent")}
                </h4>
                <p className="text-foreground/70">
                  {t("contact.messageSentDescription")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    {t("contact.yourName")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg text-black bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    {t("contact.yourEmail")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 text-black rounded-lg bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    {t("contact.yourMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 text-black rounded-lg bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                    value={formState.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      {t("contact.sendMessage")} <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
