/* const user = {
    name: 'yash',
    email: 'yash@test.com',
    isActive: true,
}

function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: 'yash', isPaid: false, email: 'h@h.com' };

createUser(newUser)

function createCourse(): { name: string, price: number } {
    return { name: 'react.js', price: 399 }
} */


/* type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User{
    return { name: '', email: '', isActive: true }
}

createUser({name:'',email:'',isActive:true}) */


type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number;
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

let myUser: User = {
    _id: '123',
    name: 'h',
    email: 'h@H.com',
    isActive: false
}

let cardDetail: cardDetails = {
    cardnumber: '1234',
    carddate: '11/05/1994',
    cvv: 555
}

myUser.email = 'h@gamil.com'
//myUser._id = '45'












export { }