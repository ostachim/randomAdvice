const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const input = document.querySelector("input");
const btnShowAdvice = document.querySelector(".showAdvice");
const btnShowOptions = document.querySelector(".showOptions");
const h1 = document.querySelector("h1");
const options = [];


const addOptions = (e) => {
    e.preventDefault();
    const newName = input.value;
    if(newName){
        for(option of options){
            if(option === newName){
                alert("już to dodałeś")
                return
            }
        }
        options.push(newName);
    }else{
        alert("nic nie dodałes");
    }
    input.value="";
    
}

const cleanOptions = (e) => {
    e.preventDefault();
    options.splice(0, options.length);
    h1.textContent="";

}

const showAdvice = () => {
    if(options == ""){
        alert("tablica jest pusta")
    }
    else{
        const index = Math.floor(Math.random() * options.length);
        const text = options[index];
        h1.textContent = text;

    }
    

}

const showOptions = () => {
    if(options == ""){
        alert("tablica jest pusta")
    }
    else{
        let text = "Dostępne porady:";
        for(option of options){
        
            text += option + ", ";
        }
        alert(text);
    }
}

btnAdd.addEventListener("click",addOptions);
btnClean.addEventListener("click",cleanOptions);
btnShowAdvice.addEventListener("click",showAdvice);
btnShowOptions.addEventListener("click",showOptions);