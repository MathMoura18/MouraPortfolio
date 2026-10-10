import {
  Camera,
  Code2,
  Coffee,
  Dumbbell,
  Gamepad2,
  Heart,
  Lightbulb,
  Music,
  Plane,
  BookOpen,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { SubHeading } from "../components/SubHeading";
import { Reveal } from "../components/Reveal";
import { ContactCTA } from "../components/ContactCTA";
import { DraftBadge } from "../components/DraftBadge";
import { trackSpotlight } from "../utils/spotlight";
import { pendingClass, useLocalize, visible } from "../utils/localize";
import { facts, hobbies } from "../data/content";
import MyImage from "../assets/me.jpg";

/** Ícones disponíveis para o campo `icon` dos hobbies em src/data/content.ts. */
const hobbyIcons: Record<string, LucideIcon> = {
  code: Code2,
  gamepad: Gamepad2,
  music: Music,
  book: BookOpen,
  camera: Camera,
  coffee: Coffee,
  dumbbell: Dumbbell,
  plane: Plane,
  heart: Heart,
};

const AboutMe = () => {
  const { t } = useTranslation();
  const l = useLocalize();
  const hobbyList = visible(hobbies);
  const factList = visible(facts);

  return (
    <PageShell>
      <main className="mx-auto max-w-6xl px-6 pt-36">
        <PageHeader
          kicker={l({ pt: "Além do código", en: "Beyond the code" })}
          title={l({ pt: "Sobre mim", en: "About me" })}
          subtitle={l({
            pt: "Quem eu sou fora do editor: o que me move, o que gosto de fazer e alguns fatos sobre mim.",
            en: "Who I am outside the editor: what drives me, what I enjoy doing, and a few facts about me.",
          })}
        />

        {/* Apresentação */}
        <Reveal className="mb-20">
          <div className="grid items-center gap-10 rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7 md:grid-cols-[auto_1fr] md:p-10">
            <div className="relative mx-auto">
              <div className="absolute -inset-4 rounded-full bg-indigo-600/25 blur-2xl" />
              <img
                src={MyImage}
                alt="Matheus Moura"
                className="relative h-44 w-44 rounded-[2rem] border border-white/10 object-cover md:h-56 md:w-56"
              />
            </div>
            <div>
              <p className="mb-3 font-mono text-sm text-indigo-300">{t("hero_greeting")}</p>
              <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-4xl">
                Matheus <span className="text-gradient">Moura</span>
              </h2>
              <div className="space-y-4 leading-relaxed text-slate-400">
                <p>{t("about.text_1")}</p>
                <p>{t("about.text_2")}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Fatos */}
        {factList.length > 0 && (
          <section className="mb-20">
            <SubHeading icon={Lightbulb} title={l({ pt: "Fatos sobre mim", en: "Facts about me" })} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {factList.map((fact, i) => (
                <Reveal key={fact.label.en + i} delay={i * 80}>
                  <div
                    onMouseMove={trackSpotlight}
                    className={`spotlight h-full rounded-3xl border border-white/[0.08] bg-ink-900/50 p-6 ${pendingClass(fact)}`}
                  >
                    <p className="text-gradient font-display text-3xl font-bold">{fact.value}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{l(fact.label)}</p>
                    <div className="mt-3">
                      <DraftBadge item={fact} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Hobbies */}
        {hobbyList.length > 0 && (
          <section className="mb-8">
            <SubHeading
              icon={Sparkles}
              title={l({ pt: "Hobbies e interesses", en: "Hobbies & interests" })}
              subtitle={l({ pt: "O que faço quando não estou programando (e às vezes quando estou).", en: "What I do when I'm not coding (and sometimes when I am)." })}
            />
            <div className="grid gap-5 md:grid-cols-3">
              {hobbyList.map((hobby, i) => {
                const Icon = hobbyIcons[hobby.icon] ?? Sparkles;
                return (
                  <Reveal key={hobby.title.en + i} delay={(i % 3) * 100}>
                    <div
                      onMouseMove={trackSpotlight}
                      className={`spotlight group h-full rounded-3xl border border-white/[0.08] bg-ink-900/50 p-7 ${pendingClass(hobby)}`}
                    >
                      <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                        <Icon size={24} />
                      </span>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-semibold text-white">{l(hobby.title)}</h3>
                        <DraftBadge item={hobby} />
                      </div>
                      <p className="text-sm leading-relaxed text-slate-400">{l(hobby.desc)}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        <ContactCTA />
      </main>
    </PageShell>
  );
};

export default AboutMe;
