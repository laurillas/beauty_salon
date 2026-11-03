import Gwendolyn from "@/components/gwendolyn";
import { Check } from 'lucide-react'


export default function Curse() {
    const courses = [
        {
            number: '01',
            eyebrow: 'Certificación internacional',
            title: 'Técnica clásica avanzada',
            description:
                'Eleva tu técnica al máximo nivel con una formación presencial, práctica y acompañada por expertas de la industria.',
            tone: 'rose',
            tags: ['Presencial', 'Nivel avanzado'],
            highlights: [
                'Triple certificación internacional',
                'Opción SEP RED CONOCER',
                'Kit de trabajo completo',
                'Seguimiento personalizado indefinido',
            ],
        },
        {
            number: '02',
            eyebrow: 'Ideal para principiantes',
            title: 'Blanqueamiento dental',
            description:
                'Aprende paso a paso cómo crear sonrisas más brillantes, con protocolos claros y sin tecnicismos.',
            tone: 'rose',
            tags: ['Presencial', 'Nivel básico'],
            highlights: [
                'Fundamentos del blanqueamiento',
                'Técnicas y productos profesionales',
                'Protocolo clínico explicado fácil',
                'Marketing, seguridad y legalidad',
            ],
        },
        {
            number: '03',
            eyebrow: 'Formación profesional',
            title: 'Diseño y tratamientos de cejas',
            description:
                'Domina el diseño, la colorimetría y los tratamientos más buscados trabajando sobre un modelo real.',
            tone: 'rose',
            tags: ['Teoría + práctica', 'Modelo real'],
            highlights: [
                'Mapeo y diseño de cejas',
                'Depilación con cera y pinzas',
                'Henna, laminación y colorimetría',
                'Materiales incluidos en clase',
            ],
        },
    ]

    return (
        <div>
            <Gwendolyn/>
            <section id="cursos" className="px-6 py-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-6 lg:grid-cols-3">{courses.map((course) => {
                        return <article key={course.number}
                                        className={`group mb-6 flex flex-col rounded-[2rem] border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-[#f0d9dc] bg-[#fff3f2]`}>
                            <p className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#b76e83]`}>{course.eyebrow}</p>
                            <h3 className={`mb-4 font-serif text-2xl leading-tight ${course.tone === 'dark' ? 'text-white' : 'text-[#4d2e3f]'}`}>{course.title}</h3>
                            <p className={`mt-4 mb-8 text-sm leading-relaxed ${course.tone === 'dark' ? 'text-white/70' : 'text-[#806d73]'}`}>{course.description}</p>
                            <div className="flex flex-wrap gap-2">{course.tags.map(tag => <span key={tag}
                                                                                                     className={`rounded-full px-3 py-1 text-[0.68rem] font-semibold ${course.tone === 'dark' ? 'bg-white/10 text-white/80' : 'bg-white/75 text-[#806d73]'}`}>{tag}</span>)}</div>
                            <div className={`my-7 h-px ${course.tone === 'dark' ? 'bg-white/15' : 'bg-[#e7d9d5]'}`}/>
                            <ul className="flex flex-col gap-3">{course.highlights.map(highlight => <li key={highlight}
                                                                                                        className={`flex gap-2 text-sm ${course.tone === 'dark' ? 'text-white/85' : 'text-[#5f4d55]'}`}>
                                <Check aria-hidden="true"
                                       className={`mt-0.5 shrink-0 ${course.tone === 'dark' ? 'text-[#e6b9a9]' : 'text-[#b76e83'}`}/>{highlight}
                            </li>)}</ul>
                        </article>
                    })}</div>
                </div>
            </section>
        </div>
    )
}