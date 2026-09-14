import {CollectionConfig} from "payload";

export const Services: CollectionConfig = {
    slug: 'services',
    labels: {
        singular: 'servicio',
        plural: 'servicios'
    },
    access: {
        create: () => true
    },
    admin: {
        useAsTitle: 'serviceName'
    },
    fields: [
        {
            name: 'serviceName',
            type: 'text',
            required: true,
            label: 'Servicio',
        },
        {
            name: 'servicePrice',
            type: 'number',
            required: true,
            label: 'Precio',
        }
    ]
}