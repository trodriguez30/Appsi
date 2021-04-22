import moment from "moment";

export const ServicesArray: Array<object> = [
    {
        id: 1,
        title: 'Escuela dominical',
        servicesArray: [
            '08:00am',
            '10:00am',
        ],
        max_assistanst: 70,
        total_assistants: 30,
        created_at: moment('13-04-2021', 'DD-MM-YYYY').format('dddd DD'),
        description: `Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer
            took a galley of type.`,
    },
    {
        id: 2,
        title: 'Culto de jóvenes',
        servicesArray: [
            '05:00pm',
        ],
        max_assistanst: 70,
        total_assistants: 23,
        created_at: moment('06-04-2021','DD-MM-YYYY').format('dddd DD'),
        description: `Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer
            took a galley of type.`, 
    },
    {
        id: 3,
        title: 'Oración Jueves',
        servicesArray: [
            '09:00am',
            '03:00pm',
        ],
        max_assistanst: 70,
        total_assistants: 20,
        created_at: moment('11-04-2021','DD-MM-YYYY').format('dddd DD'),
        description: `Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer
            took a galley of type.`, 
    },
]

export const AssistantsArray: Array<object> = [
    {
        id: 1,
        firstName: 'Tatiana',
        lastName: 'Rodríguez',
        phone: '3123433728',
        type: 'Asistente',
        servicesArray: [
            {
                id: 3,
                title: 'Oración Jueves',
                created_at: moment('11-04-2021','DD-MM-YYYY').format('dddd DD'),
                service_hour: '09:00am',
            }
        ],
    },
    {
        id: 2,
        firstName: 'Cecilia',
        lastName: 'Pacheco',
        phone: '3211232332',
        type: 'Bautizado',
        servicesArray: [
            {
                id: 1,
                title: 'Escuela dominical',
                created_at: moment('11-04-2021','DD-MM-YYYY').format('dddd DD'),
                service_hour: '10:00am',
            },
            {
                id: 3,
                title: 'Oración Jueves',
                created_at: moment('11-04-2021','DD-MM-YYYY').format('dddd DD'),
                service_hour: '03:00pm',
            }
        ],
    },
    {
        id: 3,
        firstName: 'John',
        lastName: 'Rodríguez',
        phone: '3212343234',
        type: 'Invitado',
        servicesArray: [
            {
                id: 1,
                title: 'Escuela dominical',
                created_at: moment('11-04-2021','DD-MM-YYYY').format('dddd DD'),
                service_hour: '10:00am',
            },
        ],
    },
]