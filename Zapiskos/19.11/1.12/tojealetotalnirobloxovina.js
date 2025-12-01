//hello world
console.log("Hello, World");
console.warn("Hello World!");
console.error("Hello World!");
console.table({greeting: "Hello, World"});
 
//soucet 2 cisel pomoci prompt()
 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("promptForm").addEventListener("submit", function(event) {
let a = parseFloat(prompt("Zadejte první číslo:"));
let b = parseFloat(prompt("Zadejte druhé číslo:"));
let sum = a + b;
console.log(`Součet ${a} a ${b} je ${sum}`);
document.getElementById("result-prompt").textContent = `Součet: ${sum}`;
alert(`Součet ${a} a ${b} je ${sum}`);
});
});
 
//soucet 2 cisel
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sumForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const sum = num1 + num2;
        document.getElementById("result-soucet2cisel").textContent = `Součet: ${sum}`;
    });
});
 
 
//zjisteni jestli je cislo sude/liche
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("evenOddForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const cislo = parseFloat(document.getElementById("cislo").value);
        if (cislo % 2 === 0) {
            const result = "Číslo je sudé.";
        }
        else {
            const result = "Číslo je liché.";
        }
        document.getElementById("result-sude-liche").textContent = result;
    });
});
//Celsius na Fahrenheit
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("temperatureForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const celsius = parseFloat(document.getElementById("celsius").value);
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("result-teplota").textContent = `${fahrenheit}°F`;
    });
});
//kladne/zaporne/0
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("kladne/zaporne/0").addEventListener("submit", function(event) {
        event.preventDefault();
        const number = parseFloat(document.getElementById("cislo").value);
        let result;
        if (number > 0) {
            result = "Číslo je kladné.";
        }
        else if (number < 0) {
            result = "Číslo je záporné.";
        }
        else {
            result = "Číslo je nula.";
        }
        document.getElementById("result-kladne-zaporne-0").textContent = result;
    });
});
//jestli obsahuje a
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("obsahujeAForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const text = document.getElementById("word").value;
        let result;
        if(text.toLowerCase().includes('a')) {
            result = "Text obsahuje písmeno 'a'.";
        }
        else {
            result = "Text neobsahuje písmeno 'a'.";
        }
        document.getElementById("result-obsahuje-a").textContent = result;
    });
});
//pocitani pismen
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("PocitaniPismenForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const text = document.getElementById("word_to_count").value;
        const letterCount = {};
       
        for (let char of text.toLowerCase()) {
            if (char >= 'a' && char <= 'z') {
                letterCount[char] = (letterCount[char] || 0) + 1;
            }
        }
       
        let result = "Počet písmen:\n";
        for (let i = 0; i < 26; i++) {
            const char = String.fromCharCode(97 + i);
            result += `${char}: ${letterCount[char] || 0}\n`;
        }
       
        document.getElementById("result-obsahuje-pismenek").textContent = result;
        console.log(result);
    });
});
//overeni jestli je cislo prvocislo
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("PrvocisloForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const number = parseInt(document.getElementById("prvocislo").value);
        let x=2;
        let y=0;
        for(let i=2; i<=Math.sqrt(number); i++) {
            if(number%i===0) {
                y=y+1;
                break;
            }}
        if(y==0) {
            result = "Číslo je prvočíslo.";
        }
        else {
            result = "Číslo není prvočíslo.";
        }
        document.getElementById("result-prvocisla").textContent = result;
 
    });
});
 
 
let x = 10; // globální scope
 
function prikladScope() {
    let x = 5; // lokální scope – zastínění globální x
    console.log("Lokální x: " + x); // 5
}
 
prikladScope();
console.log("Globální x: " + x); // 10
 
var a = 5;
var a = 10; // var umožňuje redeklaraci
console.log(a); // 10
 
// let b = 5;
// let b = 10; // chybové, let neumožňuje redeklaraci
 
// # 🔹 Rozdíl mezi `==` a `===`
console.log(5 == "5");  // true -> porovnává hodnotu, typ ignoruje
console.log(5 === "5"); // false -> porovnává hodnotu i typ
 