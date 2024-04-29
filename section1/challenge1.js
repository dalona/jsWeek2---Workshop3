
const domain = "totustuus.com"
const users= {}
const fullName = prompt("Enter your full name:").toLowerCase();

let flag=true;


while(flag){


    const fullName = prompt("Enter your full name:").toLowerCase();
       
    if (!fullName) {
        console.log("Empty inputs are not allowed")
        continue;
    }
    
    const splitFullName = fullName.split(" ")
    if (splitFullName.length > 2) {
        console.log("Por favor ingresa un nombre y un apellido valido")
        continue;// jump to the next iteration (cycle)
    }else{

        const firstThreeName = splitFullName[0].slice(0,3);
        const firstThreeLastName =splitFullName[1].slice(0,3);
        let userName = `${firstThreeName}${firstThreeLastName}`;
        
        const userKeys = Object.keys(users)// ¨["danlop", "clanar"]
        let counter = 0
        userKeys.forEach(username => {
            let semiMatch = ""
            for (let i = 0; i < username.length; i++) {
                semiMatch = semiMatch + username[i];
                if (semiMatch === userName) { // "danlop" === "danlop"
                    counter++
                    }
                 }
        })
    }

    if (counter) {
        username = userName + counter
    }

    let email = `${userName}@${domain}`;    
    Object.assign(users,{
        [userName]:email
    })

    console.log(users);
    
}



// Verifica si el nombre de usuario generado ya existe en el objeto 'users'. Utiliza Object.keys() para obtener un array con las claves del objeto. Utiliza includes() para verificar si el nombre de usuario ya existe.
// Si el nombre de usuario ya existe, agrega un número al final del nombre de usuario y actualiza el correo electrónico correspondiente. Por ejemplo, si 'johndoe' ya existe, el nuevo nombre de usuario será 'johndoe1' y el correo electrónico será 'johndoe1@myDomain.com'.




//  let nombre = prompt("Ingrese nombre completo")
//  let nombreCompleto = nombre.split(" ") 

// //  The array method (split) converts the variable into an ARRAY (lista)
// // and put the value into the index 0,1,2,3.

// //  [ "Daniel" "Lopez" "Naranjo"]

// console.log(nombreCompleto.length)