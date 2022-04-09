export interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

export function getPerson(): IPersonData {
    return {
        name: 'Petr',
        secondName: 'Smith',
        age: 7,
    };
}

export interface IStudentData {
    name: string;
    secondName: string;
    age: number;
    phone?: string;
}

export function getStudentsData(): IStudentData[] {
    return [
        {
            name: 'Ivan',
            secondName: 'Petrov',
            age: 20,
            phone: '+7(555)555-55-50',
        },
        {
            name: 'Stepan',
            secondName: 'Petrov',
            age: 19,
            phone: '+7(555)555-55-51',
        },
        {
            name: 'Petr',
            secondName: 'Ivanov',
            age: 19,
        },
    ];
}