

// Validador de contraseñas seguras

const userInputPassword = prompt(`Por favor ingresa tu contraseña segura, esta debe cumplir con las siguientes condiciones:\n1.Al menos 8 caracteres\n2.Al menos un numero\n3.Al menos una letra\n4.Al menos un caracter especial: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \\ ~ \``);

// chequeo de caracteres
const lengthChecker = (el) => el.length >= 8; // -> boolean

// chequeo de numeros
const stringNumberChecker = (el) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return el.split("").some(e => numbers.includes(e));
}

// chequeo de letras
const letterChecker = (el) => {
    const lettersLowerCase = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ]
    const lettersUpperCase = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y',
        'Z'
    ]
    return el.split("").some(e => {
        return lettersLowerCase.includes(e) || lettersUpperCase.includes(e)
    })
}

const specialCharacterChecker = (el) => {
    const specialCharacters = `! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \ ~ \``
    const specialCharacterList = specialCharacters.split(' ');


    return el.split("").some(e => specialCharacterList.includes(e))
}

const isLengthCorrect = lengthChecker(userInputPassword)



const hasALetter = letterChecker(userInputPassword)


const hasANumber = stringNumberChecker(userInputPassword)


const hasSpecialCharacter = specialCharacterChecker(userInputPassword)

const onlyLowerCaseLetters = new RegExp("[a-z]"); // Los corchetes indican que se puede buscar cualquier caracter dentro de ellos
const onlyLowerUpperCaseLetters = /[a-zA-Z]/ // Tambien se puede hacer sin new RegExp
const onlyNumbers = new RegExp("[0-9]"); // Los corchetes indican que se puede buscar cualquier caracter que cumpla dentro de ellos


const firstWay = /[a-z]/
const secondWay = new RegExp("/[a-z]/")

const onlySpecialCharacters = new RegExp("[!@#$%^&*()+=_\-{}[\]:;\"'<>|/\\~`]");


const passwordChecker = (el) => {
    return (/[a-zA-Z0-9!@#$%^&*()+=_\-{}[\]:;"'<>|/\\~`].{8,}/).test(el);
}



const isValid = passwordChecker(userInputPassword)
console.log(`Contraseña ${isValid ? '' : 'in'}segura`)