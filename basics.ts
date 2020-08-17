enum Role {
    ADMIN,
    AUTHOR,
    READ_ONLY,
}

const { ADMIN, AUTHOR, READ_ONLY } = Role;

const person = {
    name: "Javano Collins",
    degree: "Computer Science",
    age: 24,
    role: AUTHOR,
};

console.log(person.role);
