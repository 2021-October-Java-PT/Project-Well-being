console.log('Client Side is wired up!');

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Journal from "./components/Journal";
import Reminders from "./components/Reminders";

buildPage();

function buildPage(){
    home();
    navHome();
    navReminders();
    navJournal();
    navAbout();
    navContact();
}

function home(){
    const homeElem = document.querySelector(".nav-list__home");
    const app = document.querySelector("#app");
    app.innerHTML=Home();
}

function navHome(){
    const homeElem = document.querySelector(".nav-list__home");
    homeElem.addEventListener("click", () => {
       const app = document.querySelector("#app");
       app.innerHTML = Home();
    });   
}

function navReminders(){
    const remindersElem = document.querySelector(".nav-list__reminders");
    remindersElem.addEventListener("click", () => {
       const app = document.querySelector("#app");
       app.innerHTML = Reminders();
    });   
}

function navJournal(){
    const journalElem = document.querySelector(".nav-list__journal");
    journalElem.addEventListener("click", () => {
       const app = document.querySelector("#app");
       app.innerHTML = Journal();
    });   
}

function navAbout(){
    const aboutElem = document.querySelector(".nav-list__about");
    aboutElem.addEventListener("click", () => {
       const app = document.querySelector("#app");
       app.innerHTML = About();
    });   
}

function navContact(){
    const contactElem = document.querySelector(".nav-list__contact");
    contactElem.addEventListener("click", () => {
       const app = document.querySelector("#app");
       app.innerHTML = Contact();
    });   
}