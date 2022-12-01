function addTwo(num: number): number {
    return num + 2
    //return 'hello'
}

function getUpper(val: string) {
    return val.toLowerCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

let myValue = addTwo(5);
getUpper('yash');
signUpUser("yash", 'yash@test.com', false);
loginUser('h', 'h@h.com');


/* function getValue(myValue: number): boolean {
    if (myValue > 5) {
        return true
    }
    return "200 ok"
} */


const getHello = (s: string): string => {
    return '';
}

const heros = ['thor', 'spiderman', 'ironman']
//const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`;
})

function cosoleError(errMsg: string): void {
    console.log(errMsg);
}

function handleError(errMsg: string): never {
    throw new Error(errMsg);
}



export { }