enum Role {
    ADMIN = "ADMIN",
    AUTHOR = "AUTHOR",
    READ_ONLY = "READ ONLY",
}

const { ADMIN, AUTHOR, READ_ONLY } = Role;

const person = {
    name: "Javano Collins",
    degree: "Computer Science",
    age: 24,
    hobbies: ["Reading", "Running", "Mixed Martial Arts", "Gaming"],
    role: AUTHOR,
};

const { age, degree, role, hobbies } = person;

for (let hobby of hobbies) {
    console.log(hobby);
}

if (role === "ADMIN") {
    console.log(`${person.name} has authorized access to this server`);
} else {
    console.log(`${person.name} does not have authorized access to this server`)
}

if (role === "AUTHOR") {
    console.log(`${person.name} has authorized access to this server`);
} else {
    console.log(`${person.name} does not have authorized access to this server`)
}
