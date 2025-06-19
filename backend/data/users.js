import bcrypt from "bcryptjs";

const users = [
    {
        name : 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name : 'Ashwin Khadka',
        email: 'ashwin@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name : 'Hari User',
        email: 'hari@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:false,
    }
]


export default users;