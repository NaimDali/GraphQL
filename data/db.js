export const db = {
    students : [
        {
            id: 1,
            name: 'Fatma Laribi',
            age: 22,
            gender: "FEMALE",
            classroom: 1
        },
        {
            id: 2,
            name: 'Ahmed Mahfoudhi',
            age: 22,
            gender: "MALE",
            classroom: 2
        },
        {
            id: 3,
            name: 'Nadine Boukadida',
            age: 22,
            gender: "FEMALE",
            classroom: 3
        },
        {
            id: 4,
            name: 'Mohamed Aziz Khayati',
            age: 22,
            gender: "MALE",
            classroom: 1
        }
    ],
    classroom: [
        {
            id: 1,
            designation: 'GL3'
        },{
            id: 2,
            designation: 'GL2'
        },{
            id: 3,
            designation: 'GL4'
        },
    ],
    todos : [
        {
            id: "1",
            name:"test1",
            content:"content 1",
            status : "WAITING",
            user: "2"
        },
        {
            id: "2",
            name:"test 2",
            content:"content 2",
            status : "WAITING",
            user : "1"
        },
        {
            id: "3",
            name:"test 3",
            content:"content 3",
            status : "IN_PROGRESS",
            user: "1"
        }
    ],
    users : [
        {
            id: "1",
            name: "Ahmed",
            email: "ahmed@gmail.com",
            todos: ["2","3"]
        },
        {
            id: "2",
            name: "mazen",
            email: "mazen@gmail.com",
            todos: ["1"]
        }
    ]
}
