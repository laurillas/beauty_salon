import {getPayload} from "payload";
import config from "@payload-config";

export async function getAppointmentDates() {
  const payload = await getPayload({ config })

  const appointmentDates = await payload.find({
    collection: 'appointment-dates',
  });

  return appointmentDates.docs;
}

export async function getServices() {
  const payload = await getPayload({ config })

  const services = await payload.find({
    collection: 'services',
  });

  return services.docs;
}