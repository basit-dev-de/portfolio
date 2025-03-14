import React from "react";
import { GraduationCap, Award, Users, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Education() {
  const { t } = useTranslation();
  return (
    <section
      id="education"
      className="section-padding px-6 md:px-10 bg-gradient-to-b from-background to-accent/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              className="inline-block mb-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
              data-aos="fade-up"
            >
              {t("education.title")}
            </div>
            <h2
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("education.subtitle")}
            </h2>

            <div className="mt-8 space-y-8">
              <div
                className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {t("education.card1.title")}
                    </h3>
                    <p className="text-foreground/80">
                      {t("education.card1.subtitle")}
                    </p>
                    <p className="mt-4 text-foreground/80">
                      {t("education.card1.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {t("education.card2.title")}
                    </h3>
                    <p className="text-foreground/80">
                      {t("education.card2.subtitle")}
                    </p>
                    <p className="mt-4 text-foreground/80">
                      {t("education.card2.description")}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {t("education.card3.title")}
                    </h3>
                    <p className="text-foreground/80">
                      {t("education.card3.subtitle")}
                    </p>
                    <p className="mt-4 text-foreground/80">
                      {t("education.card3.description")}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {t("education.card4.title")}
                    </h3>
                    <p className="text-foreground/80">
                      {t("education.card4.subtitle")}
                    </p>
                    <p className="mt-4 text-foreground/80">
                      {t("education.card4.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[110px]">
            <h3 className="text-2xl font-bold mb-6">{t("common.languages")}</h3>

            <div className="space-y-6">
              <div
                className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <h4 className="text-lg font-semibold mb-4">
                  {t("common.english")}
                </h4>
                <div className="space-y-2">
                  <p className="text-foreground/80 text-sm">
                    {t("common.fluent")}
                  </p>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-blue-500 w-[95%] rounded-full animate-slide-in-right"
                      style={{ animationDelay: "0.7s" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div
                className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <h4 className="text-lg font-semibold mb-4">
                  {t("common.german")}
                </h4>
                <div className="space-y-2">
                  <p className="text-foreground/80 text-sm">
                    {t("common.beginner")}
                  </p>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-blue-500 w-[30%] rounded-full animate-slide-in-right"
                      style={{ animationDelay: "0.8s" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div
                className="glass-card p-6 rounded-xl opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <h4 className="text-lg font-semibold mb-4">
                  {t("common.urdu")}
                </h4>
                <div className="space-y-2">
                  <p className="text-foreground/80 text-sm">
                    {t("common.native")}
                  </p>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-blue-500 w-[100%] rounded-full animate-slide-in-right"
                      style={{ animationDelay: "0.9s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
