import clearPage from "./clear-page";
import './style.css';
import loadIndex from ".";

const content = document.querySelector("#content");

export default function loadMenu(){

    clearPage();

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

//Items
    const menuContainer = document.createElement("div")
    menuContainer.className = "menu-container"
    body.append(menuContainer)

    const pizzaContainer = document.createElement("div")
    pizzaContainer.className = "pizza-container"
    menuContainer.append(pizzaContainer)

    const item1 = document.createElement("div")
    item1.textContent = "Chicken Alfredo Pizza"
    item1.className = "item"
    pizzaContainer.append(item1)

    const item2 = document.createElement("div")
    item2.textContent = "Margherita Pizza"
    item2.className = "item"
    pizzaContainer.append(item2)

    const item3 = document.createElement("div")
    item3.textContent = "Classic Pepperoni Pizza"
    item3.className = "item"
    pizzaContainer.append(item3)

    const item4 = document.createElement("div")
    item4.textContent = "Meat-Lover's Pizza"
    item4.className = "item"
    pizzaContainer.append(item4)

    const item5 = document.createElement("div")
    item5.textContent = "Cheese Pizza"
    item5.className = "item"
    pizzaContainer.append(item5)

    const item6 = document.createElement("div")
    item6.textContent = "Basil n' Pesto Pizza"
    item6.className = "item"
    pizzaContainer.append(item6)

    const priceContainer = document.createElement("div")
    priceContainer.className = "price-container"
    menuContainer.append(priceContainer)

    const price1 = document.createElement("div")
    price1.textContent = "$16"
    price1.className = "item"
    priceContainer.append(price1)

    const price2 = document.createElement("div")
    price2.textContent = "$12"
    price2.className = "item"
    priceContainer.append(price2)

    const price3 = document.createElement("div")
    price3.textContent = "$14"
    price3.className = "item"
    priceContainer.append(price3)

    const price4 = document.createElement("div")
    price4.textContent = "$18"
    price4.className = "item"
    priceContainer.append(price4)

    const price5 = document.createElement("div")
    price5.textContent = "$14"
    price5.className = "item"
    priceContainer.append(price5)

    const price6 = document.createElement("div")
    price6.textContent = "$16"
    price6.className = "item"
    priceContainer.append(price6)
};