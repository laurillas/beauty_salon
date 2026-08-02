"use client"

import {useState} from "react"
import dayjs from "dayjs"
import {Calendar} from "@/components/ui/calendar"
import {Card, CardContent, CardFooter} from "@/components/ui/card"
import {Appointment, AppointmentDate, Slot} from "@/payload-types";
import {Button} from "@/components/ui/button";
import AppointmentForm from "@/components/appointment-form";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CalendarCustomDays({appointmentsDates}: { appointmentsDates: AppointmentDate[] }) {
  const [showSlotsContainer, setShowSlotsContainer] = useState(false);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [appointmentDate, setAppointmentDate] = useState<AppointmentDate | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const appointmentDateSet = new Set(
    appointmentsDates.map(({date}) => {
      const d = new Date(date);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    })
  );
  const bookedDates = Array.from(
    {length: 15},
    (_, i) => new Date(new Date().getFullYear(), 0, 12 + i)
  );

  function handleDayClick(selectedDate: Date) {
    setShowSlotsContainer(true);

    const appointmentDate = appointmentsDates
      .find(({date}) => {
        return dayjs(new Date(date).toDateString()).isSame(dayjs(selectedDate.toDateString()));
      });

    if (appointmentDate) {
      setSlots((appointmentDate.slots as Slot[]));
      setAppointments((appointmentDate.appointments?.docs as Appointment[]));
      setAppointmentDate(appointmentDate);
    } else {
      setSlots([]);
      setAppointments([]);
      setAppointmentDate(null);
    }
  }

  function handleClick(selectedSlot: Slot) {
    setSlot(selectedSlot);
  }

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          onDayClick={handleDayClick}
          mode="single"
          fixedWeeks
          captionLayout="dropdown"
          className="[--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          disabled={(date) => {
            const normalized = new Date(date);
            normalized.setHours(0, 0, 0, 0);
            return !appointmentDateSet.has(normalized.getTime());
          }}
          startMonth={dayjs().toDate()}
          endMonth={dayjs(Math.max(...appointmentDateSet)).toDate()}
          modifiers={{
            booked: bookedDates,
          }}
          modifiersClassNames={{
            booked: "[&>button]: opacity-100",
          }}
        />
      </CardContent>

      {showSlotsContainer &&
        (<CardFooter className="bg-background">
          <Dialog>
            <div>
              {slots.length > 0 ? slots.map(slot => (
                  <DialogTrigger key={slot.id}
                                 render={
                                   <Button variant="outline" className="rounded-2xl p-4"
                                           disabled={appointments.map(({slot}) => slot).includes(slot.id)}
                                           onClick={() => handleClick(slot)}> {slot.startTime} - {slot.endTime}
                                   </Button>
                                 }/>
                )) :
                (<div>No hay turnos disponibles</div>)}
            </div>
            <AppointmentForm slot={slot} appointmentDate={appointmentDate} />
          </Dialog>
        </CardFooter>)}
    </Card>
  )
}
