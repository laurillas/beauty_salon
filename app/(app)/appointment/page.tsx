import {CalendarCustomDays} from "@/components/calendar";
import {getAppointmentDates} from "@/app/(app)/actions";
import Image from "next/image";
import {LinkButton} from "@/components/link-button";

export default async function Appointment() {
    const appointmentDates = await getAppointmentDates();
    return (
        <div className="flex justify-center flex-col max-w-7xl mx-auto">
            <div className="mx-8">
                <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-5 py-12">
                    <div className="relative mb-5 h-48 w-48 overflow-hidden rounded-full shadow-xl">
                        <Image src="/profile.jpeg" alt="Sinela Studio" fill priority className="object-cover"/>
                    </div>

                    <h1 className="mb-2 text-balance font-serif text-3xl font-bold tracking-tight text-foreground">
                        Gwendolyn Beauty
                    </h1>
                    <h1 className="mb-4 text-balance font-serif text-3xl font-bold tracking-tight text-foreground">
                        Studio
                    </h1>
                </section>
                <section className="mb-12 flex flex-col justify-center">
                    <p className="mb-8">¡Hola! Estoy muy feliz de recibirte. Para que tu experiencia sea perfecta, por favor
                        toma nota de estos puntos:</p>
                    <p className="mb-8">🔌 Apaga tu VPN: La agenda usa la hora de Cuba (bloques de 10 am a 12m, 12m a 2pm y
                        2pm a 4pm). Si te salen horas distintas, es por la VPN; desactívala antes de reservar.</p>
                    <p className="mb-8">⏰ Tu tiempo es oro: Cada cita tiene una duración aproximada de 2 horas. Ven a tiempo
                        para que podamos trabajar cada detalle con calma y perfección.</p>
                    <p className="mb-8">📱 Mantente conectada: Te súper recomiendo descargar la app de Google Calendar y
                        activar las notificaciones de tu correo. Así no te perderás ningún recordatorio importante sobre tu
                        cita.</p>
                    <p className="text-center font-semibold">Aparta tu cita aquí detallando el servicio: ✨</p>
                </section>
                {/*<section className="mb-12">*/}
                {/*    <div className="mb-8">*/}
                {/*        <h2 className="font-semibold uppercase">Extensiones de Pestañas (Pelo a Pelo)</h2>*/}
                {/*        <ul>*/}
                {/*            <li>Clásicas</li>*/}
                {/*            <li>Pestañas 2D</li>*/}
                {/*            <li>Pestañas 3D</li>*/}
                {/*            <li>Pestañas 4D</li>*/}
                {/*            <li>Efecto híbridas</li>*/}
                {/*            <li>Efecto Rímel</li>*/}
                {/*            <li>Efecto Kim-K o wispy</li>*/}
                {/*            <li>Efecto Anime</li>*/}
                {/*            <li>Efecto Foxy</li>*/}
                {/*            <li>Efecto Aura</li>*/}
                {/*            <li>Megavolumen tecnológicas</li>*/}
                {/*            <li>Megavolumen artesanales</li>*/}
                {/*            <li>Pestañas color café</li>*/}
                {/*            <li>Pestañas de colores</li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    <div className="mb-8">*/}
                {/*        <h2 className="font-semibold uppercase">Servicios Adicionales</h2>*/}
                {/*        <ul>*/}
                {/*            <li>Lifting de pestañas</li>*/}
                {/*            <li>Laminado de cejas</li>*/}
                {/*            <li>Laminado + tinte + depilación</li>*/}
                {/*            <li>Depilación de cejas (cera o perfilado)</li>*/}
                {/*            <li>Depilación con hilo</li>*/}
                {/*            <li>Tinte henna en cejas</li>*/}
                {/*            <li>Retiro de extensiones de pestañas</li>*/}
                {/*            <li>Retoque de pestañas</li>*/}
                {/*            <li>Desmaquilla</li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    <div className="mb-8">*/}
                {/*        <h2 className="font-semibold uppercase">Micropigmentación</h2>*/}
                {/*        <ul>*/}
                {/*            <li>Microblading</li>*/}
                {/*            <li>Microshading o Efecto polvo</li>*/}
                {/*            <li>Técnica mixta</li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </div>
            <CalendarCustomDays appointmentsDates={appointmentDates}/>
        </div>
    )
}