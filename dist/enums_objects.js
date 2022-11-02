"use strict";
//Enum Pueden ser numeros o de cadena de texto
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 1] = "User";
    Roles["Admin"] = "ADMIN";
    //    SuperAdmin = true ERROR
    Roles[Roles["SuperAdmin"] = 3] = "SuperAdmin";
})(Roles || (Roles = {}));
;
// console.log("Roles", Roles.User)
// Objects siguen aceptando booleanos
const roles = {
    User: 0,
    Admin: true,
    SuperAdmin: 2
};
console.log("roles", roles.User);
