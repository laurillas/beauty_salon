import {CalendarCustomDays} from "@/components/calendar";
import {getAppointmentDates} from "@/app/(app)/actions";

export default async function Appointment() {
  const appointmentDates = await getAppointmentDates();
  return (
    <div>
      <CalendarCustomDays appointmentsDates={appointmentDates}/>
    </div>
  )
}