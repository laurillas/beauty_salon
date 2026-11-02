import {getPayload} from "payload";
import config from "@payload-config";
import dayjs from "dayjs";

export async function getAppointmentDates() {
  const payload = await getPayload({config})

  console.log(dayjs().startOf('month').toDate())

  const appointmentDates = await payload.find({
    collection: 'appointment-dates',
    pagination: false,
    where: {
      date: {
        greater_than_equal: dayjs().startOf('month').toDate()
      }
    },
    sort: 'date'
  });

  return appointmentDates.docs;
}

export async function getServices() {
  const payload = await getPayload({config})

  const services = await payload.find({
    collection: 'services',
    pagination: false
  });

  return services.docs;
}