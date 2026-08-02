import {CollectionConfig} from "payload";

export const Appointments: CollectionConfig = {
  slug: 'appointments',
  labels: {
    singular: 'Cita',
    plural: 'Citas'
  },
  access: {
    create: () => true
  },
  admin: {},
  fields: [
    {
      name: 'customerName',
      type: 'text',
      required: true,
      label: 'Nombre del cliente',
    },
    {
      name: 'customerPhone',
      type: 'text',
      required: true,
      label: 'Número del cliente',
    },
    {
      name: 'slot',
      type: 'relationship',
      relationTo: 'slots',
      required: true,
      admin: {
        allowEdit: false,
        allowCreate: false
      }
    },
    {
      name: 'appointment-dates',
      type: 'relationship',
      relationTo: 'appointment-dates',
    },
  ]
}