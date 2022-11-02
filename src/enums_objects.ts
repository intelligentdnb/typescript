//Enum Pueden ser numeros o de cadena de texto
enum Roles {
    User = 1,
    Admin = "ADMIN",
//    SuperAdmin = true ERROR
    SuperAdmin = 3
};

// console.log("Roles", Roles.User)

// Objects siguen aceptando booleanos

const roles = {
    User: 0,
    Admin: true,
    SuperAdmin: 2
};

console.log("roles", roles.User);