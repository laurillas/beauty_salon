import {getPayload} from "payload";
import config from "@payload-config";

export async function getAppointmentDates() {
  const payload = await getPayload({ config })

  const appointmentDates = await payload.find({
    collection: 'appointment-dates',
  });

  return appointmentDates.docs;
}