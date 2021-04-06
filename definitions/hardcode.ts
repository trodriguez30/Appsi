import moment from "moment";

export const ServicesArray: Array<object> = [
    {
        id: 1,
        title: 'Escuela dominical',
        servicesArray: [
            '08:00pm',
            '10:00pm',
        ],
        max_assistanst: 70,
        total_assistants: 30,
        created_at: moment('03-04-2021', 'DD-MM-YYYY').format('dddd DD'),
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