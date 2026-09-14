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
import {AppointmentDate, Service, Slot} from "@/payload-types";
import {useState} from "react";
import dayjs from "dayjs";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Alert, AlertTitle} from "@/components/ui/alert";
import {InfoIcon} from "lucide-react";

export default function AppointmentForm({slot, services, appointmentDate}: {
    slot: Slot | null,
    services: Service[],
    appointmentDate: AppointmentDate | null
}) {
    const numeroWhatsApp = "5354316743";
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [serviceId, setServiceId] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    function handleClick() {
        if (!name || !phone || !serviceId) {
            setError('Debe llenar todos los campos');
            return;
        }

        setLoading(true);

        const formData = new FormData();

        formData.append("_payload", JSON.stringify({
            customerName: name,
            customerPhone: phone,
            slot: slot?.id,
            'appointment-dates': appointmentDate?.id,
            service: serviceId
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
                    `Servicio: ${services.find(({id}) => id === serviceId)!.serviceName}\n` +
                    `Fecha: ${dayjs(appointmentDate?.date).format('DD-MM-YYYY')}\n` +
                    `Turno: ${slot?.startTime} - ${slot?.endTime}\n`
                )}`
                window.open(url, '_blank');
                window.location.reload();
            })
            .catch((error) => setError('Ha ocurrido un error'))
            .finally(() => setLoading(false));
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
                        <Input id="phoneNumber" name="phoneNumber" value={phone}
                               onChange={(e) => setPhone(e.target.value)}/>
                    </Field>
                    <Field>
                        <Label htmlFor="service">Servicio</Label>
                        <Select
                            id="service"
                            value={serviceId}
                            onValueChange={(id) => setServiceId(id)}
                            items={services.map((service) => ({label: service.serviceName, value: service.id}))}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecciona"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Servicios</SelectLabel>
                                    {services.map((item) => (
                                        <SelectItem key={item.id} value={item.id}>
                                            {item.serviceName}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                </FieldGroup>
                {error && (
                    <Alert className="border-destructive bg-red-50 text-destructive">
                        <InfoIcon/>
                        <AlertTitle>{error}</AlertTitle>
                    </Alert>
                )}
                <DialogFooter>
                    <DialogClose render={<Button type="button" variant="outline">Cancel</Button>}/>
                    <Button
                        type="button"
                        disabled={loading || !name || !phone || !serviceId}
                        onClick={handleClick}>
                        {loading
                            ? (<span className="flex items-center gap-2">
                                <span
                                    className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"/>
                                Agendando
                            </span>)
                            : 'Agendar'
                        }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </form>
    )
}