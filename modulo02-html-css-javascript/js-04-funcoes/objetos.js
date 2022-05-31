const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userID({ id }) {
    return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
    return `${first} ${last}`;
}

console.log(userID(user));
console.log(getFullName(user));