import pizza from './pizza.jpg';
import './style.css';
import clearPage from "./clear-page";
import loadMenu from "./menu-page"

const content = document.querySelector("#content");

export default function loadIndex(){
    clearPage()
    
//Header
    const header = document.createElement("div")
    header.textContent = "Mario's World Famous Pizzeria"
    header.className = "header"
    content.append(header);

//Body
    const body = document.createElement("div")
    body.className = "body"
    content.append(body);

//Buttons
    const btnContainer = document.createElement("div")
    btnContainer.className = "btn-container"
    body.append(btnContainer)

    const homeBtn = document.createElement("button")
    homeBtn.className = "homeBtn"
    homeBtn.textContent = "HOME"
    btnContainer.append(homeBtn)

    const menuBtn = document.createElement("button")
    menuBtn.className = "menuBtn"
    menuBtn.textContent = "MENU"
    btnContainer.append(menuBtn)

    homeBtn.addEventListener("click", loadIndex)
    menuBtn.addEventListener("click", loadMenu)

//Image
    const image = document.createElement("img")
    image.src = pizza
    body.append(image);

//Copy
    const copy1 = document.createElement("div")
    copy1.textContent = "You WILL NOT believe how good the pizza is."
    copy1.className = "copy"
    body.append(copy1)

    const copy2 = document.createElement("div")
    copy2.textContent = "If you don't like it, YOUR MONEY BACK GUARANTEED!"
    copy2.className = "copy"
    body.append(copy2)
};

loadIndex();
