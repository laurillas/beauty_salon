import {CollectionConfig} from "payload";

export const Slots: CollectionConfig = {
  slug: 'slots',
  labels: {
    singular: 'Turno',
    plural: 'Turnos'
  },
  admin: {
    defaultColumns: ['startTime', 'endTime'],
    useAsTitle: 'timeRange'
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
    {
      name: 'timeRange',
      type: 'text',
      admin: {
        hidden: true
      },
      hooks: {
        beforeChange: [
          ({siblingData}) => {
            return `${siblingData.startTime} - ${siblingData.endTime}`;
          }
        ],
      }
    }
  ],
  defaultSort: ['startTime']
}