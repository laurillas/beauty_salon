import {CollectionConfig} from "payload";

export const AppointmentDates: CollectionConfig = {
  slug: 'appointment-dates',
  labels: {
    singular: 'Fecha',
    plural: 'Fechas',
  },
  admin: {
    defaultColumns: ['date', 'slots']
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