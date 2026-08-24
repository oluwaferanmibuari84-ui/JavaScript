console.log("Hello, World! Feranmi");
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const value = event.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        
        else if (value === "AC") {
            string = "";
            input.value = "";
        } 
        
        else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } 
        
        else if (value === "%") {
            string = String(Number(string) / 100);
            input.value = string;
        } 
        
        else {
            string += value;
            input.value = string;
        }
    });
});