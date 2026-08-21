'use client';

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {Field, FieldGroup} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button";
import {AppointmentDate, Slot} from "@/payload-types";
import {useState} from "react";
import dayjs from "dayjs";

export default function AppointmentForm({slot, appointmentDate}: {
  slot: Slot | null,
  appointmentDate: AppointmentDate | null
}) {
  const numeroWhatsApp = "5354316743";
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  function handleClick() {
    const formData = new FormData();
    formData.append("_payload", JSON.stringify({
      customerName: name,
      customerPhone: phone,
      slot: slot?.id,
      'appointment-dates': appointmentDate?.id,
    }));

    fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/appointments`, {
      method: 'POST',
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          return res.json();
        } else {
          return new Error(res.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
          `Hola, quiero agendar una cita.\n\n` +
          `Nombre: ${name}\n` +
          `Teléfono: ${phone}\n` +
          `Fecha: ${dayjs(appointmentDate?.date).format('DD-MM-YYYY')}\n` +
          `Turno: ${slot?.startTime} - ${slot?.endTime}\n`
        )}`
        window.open(url, '_blank');
      })
      .catch((error) => console.error(error))
  }

  return (
    <form>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Agendar Cita</DialogTitle>
          <DialogDescription>
            Rellene los campos a continuación para agendar su cita.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </Field>
          <Field>
            <Label htmlFor="phoneNumber">Teléfono</Label>
            <Input id="phoneNumber" name="phoneNumber" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </Field>
        </FieldGroup>
        <DialogFooter>
          <DialogClose render={<Button type="button" variant="outline">Cancel</Button>}/>
          <Button type="button" onClick={handleClick}>Agendar</Button>
        </DialogFooter>
      </DialogContent>
    </form>
  )
}