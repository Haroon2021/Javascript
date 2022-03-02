// const notifyByEmail = (email) => {
//     console.log(`Email sent to: ${email}` )
// }


// console.log(notifyByEmail('test@test.com'));

// const notifyByText = (phoneno) => {
//     console.log(`Text sent to: ${phoneno}`)
// }

// console.log(notifyByText('123456'));

const notifyByEmail = (email) => {
    console.log(`Email sent to: ${email}` );
}

const notifyByText = (phoneno) => {
    console.log(`Text sent to: ${phoneno}`);
}

console.log(notifyByText('123456'));
console.log(notifyByEmail('test@mail.com'));

const notify = (phoneOrEmail, notifyFunction) => {
    return notifyFunction(phoneOrEmail);
}

notify('+10000000000',notifyByText);

notify('hello@makers.tech.test', notifyByEmail)
