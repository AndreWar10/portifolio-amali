import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { tccProject } from "@/lib/site";

export function TccSection() {
  return (
    <section id="tcc" aria-labelledby="tcc-heading" className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-dark py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-rose/30 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/4 top-20 h-[400px] w-[400px] rounded-full bg-rose/[0.05] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-1/4 bottom-20 h-[400px] w-[400px] rounded-full bg-gold/[0.06] blur-[100px]" aria-hidden="true" />

      <div className="container-section relative">
        <SectionHeading eyebrow="Conclusão de curso" title="TCC" description="A síntese do percurso acadêmico e profissional da agência Amáli em Publicidade e Propaganda na UNIFRAN." align="center" accent="rose" />

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-rose-dark via-rose to-rose-light ring-1 ring-rose/20 sm:mt-16">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src="/images/tcc-cover.png"
                  alt="Capa do TCC — Redescubra Ana B"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-center bg-white/95 px-8 py-10 backdrop-blur-sm sm:px-12 sm:py-14">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-rose">Amáli · UNIFRAN 2025</span>
                <h3 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{tccProject.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-ink/50">
                  Apresentação completa do trabalho de conclusão de curso — da pesquisa à execução criativa, reunindo tudo que a agência construiu ao longo da graduação.
                </p>
                <a
                  href={tccProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-gradient-to-r from-rose to-rose-dark px-8 text-[13px] font-semibold uppercase tracking-wider text-cream shadow-lg shadow-rose/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose/35"
                  aria-label="Ver apresentação do TCC no Canva"
                >
                  Ver apresentação
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
