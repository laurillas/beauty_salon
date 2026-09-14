import {CalendarCustomDays} from "@/components/calendar";
import {getAppointmentDates, getServices} from "@/app/(app)/actions";
import Image from "next/image";
import {LinkButton} from "@/components/link-button";
import DatePolicy from "@/components/date-policy";
import Gwendolyn from "@/components/gwendolyn";

export default async function Appointment() {
    const appointmentDates = await getAppointmentDates();
    const services = await getServices();

    return (
        <div className="flex justify-center flex-col max-w-7xl mx-auto">
            <div className="mx-8">
                <Gwendolyn/>
                <section className="mb-12">
                    <p className="mb-4 text-justify">Hola

                        Mi nombre es Wendy Presilien Isaac, tengo 29 años, Odontóloga de profesión y CEO de
                        @gwendolyn_beautystudio.
                        Soy Lash Artist con más de dos años de experiencia. Instructora de belleza certificada por
                        @ameb_cuba , Lash Master Star @lashmaster.eu , y certificada en Lash Trends 2025 por
                        @lashacademy_bymaria . Certificada en Técnica Clásica por Niemon Academy Internacion y Raev
                        Academy. Embajadora y Asesora Autorizada de Internacional Lash Academy.

                    </p>
                    <p className="mb-4 text-justify">No elegí este camino por casualidad, lo elegí con el corazón. Mi misión va más allá de lo
                        económico: se trata de transformar vidas, de sembrar confianza, de despertar el amor propio en
                        cada mujer que confía en mí.

                        Cada paso ha sido un aprendizaje, cada reto una oportunidad para crecer.</p>
                    <p className="mb-4 text-justify">No ha sido fácil, pero cuando trabajas con pasión y entrega, el universo conspira a tu favor.
                        Porque cuando hay amor en lo que haces, lo se vuelve cotidiano.

                        Gracias por ser parte de este espacio, donde cada detalle se cuida con dedicación, y cada día se
                        construye con intención. Aquí, tú eres el centro, y este proyecto late con el propósito de verte
                        brillar.</p>
                </section>
                <DatePolicy/>
            </div>
            <CalendarCustomDays services={services} appointmentsDates={appointmentDates}/>
        </div>
    )
}