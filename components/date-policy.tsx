import { CalendarCheck, Clock3, CreditCard, Heart, Sparkles, UserRoundX, XCircle } from 'lucide-react'

const policies = [
    { icon: CalendarCheck, title: 'RESERVA', text: 'Tu cita queda confirmada al realizar el depósito.' },
    { icon: Clock3, title: 'REAGENDACIONES', text: 'Puedes reagendar tu cita con al menos 24 horas de anticipación.', badge: '24h' },
    { icon: XCircle, title: 'CANCELACIONES', text: 'Las cancelaciones deben realizarse con al menos 24 horas de anticipación.' },
    { icon: Sparkles, title: 'VENIR DESMAQUILLADA', text: 'Por favor, ven sin maquillaje en ojos y rostro.' },
    { icon: UserRoundX, title: 'NO SE ADMITEN ACOMPAÑANTES', text: 'Para garantizar tu privacidad y la mejor experiencia.' },
    { icon: Clock3, title: 'PUNTUALIDAD', text: 'Por respeto a tu tiempo y al de las demás clientas, te pedimos llegar puntual.' },
    { icon: CreditCard, title: 'NO SHOW', text: 'La inasistencia sin previo aviso implica la pérdida del depósito.' },
    { icon: Heart, title: 'AGRADECEMOS', text: 'tu comprensión y compromiso.' },
]


function PolicyItem({ icon: Icon, title, text, badge }: (typeof policies)[number]) {
    return (
        <div className="flex min-h-25.5 items-center gap-5.5  py-2.5 max-[760px]:min-h-[90px] max-[760px]:gap-[14px]">
            <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-[#b99045] text-[#b99045]"><Icon className="h-6 w-6" strokeWidth={1.35} /></div>
            <div><h2 className="mb-1 font-sans text-[17px] font-bold leading-[1.05] max-[760px]:text-[14px]">{title}</h2><p className="font-sans text-[15px] leading-[1.25] max-[760px]:text-[13px]">{text}</p></div>
        </div>
    )
}

export default function DatePolicy() {
    return (
    <section className="notice-card mb-16" aria-labelledby="page-title">
        <div className="card-inner">
            <h1 className="text-center" id="page-title"><strong>POLÍTICA DE CITAS</strong></h1>
            <div className="md:grid md:grid-cols-2">
                <div className="md:col-span-1">{policies.slice(0, 4).map((item) => <PolicyItem key={item.title} {...item} />)}</div>
                <div className="md:col-span-1">{policies.slice(4).map((item) => <PolicyItem key={item.title} {...item} />)}</div>
            </div>
        </div>
    </section>
    )
}