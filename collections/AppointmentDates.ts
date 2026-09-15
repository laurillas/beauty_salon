import {CollectionConfig} from "payload";
import {revalidatePath, revalidateTag} from "next/cache";

export const AppointmentDates: CollectionConfig = {
  slug: 'appointment-dates',
  labels: {
    singular: 'Fecha',
    plural: 'Fechas',
  },
  admin: {
    defaultColumns: ['date', 'slots'],
    useAsTitle: 'date',
  },
  hooks: {
    afterChange: [() => revalidatePath('/appointment')]
  },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Fecha',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        }
      }
    },
    {
      name: 'slots',
      type: 'relationship',
      relationTo: 'slots',
      required: true,
      hasMany: true,
      label: 'Turnos',
    },
    {
      name: 'appointments',
      type: 'join',
      collection: 'appointments',
      on: 'appointment-dates',
      hasMany: true,
      admin: {
        allowCreate: false,
        hidden: true
      }
    },
  ]
}