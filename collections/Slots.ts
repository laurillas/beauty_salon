import {CollectionConfig} from "payload";

export const Slots: CollectionConfig = {
  slug: 'slots',
  labels: {
    singular: 'Turno',
    plural: 'Turnos'
  },
  admin: {
    defaultColumns: ['startTime', 'endTime']
  },
  fields: [
    {
      name: 'startTime',
      type: 'text',
      required: true,
      label: 'Hora inicio',
    },
    {
      name: 'endTime',
      type: 'text',
      required: true,
      label: 'Hora fin',
    },
  ],
  defaultSort: ['startTime']
}