//console.log('Client Side is wired up!');

import About from "./components/About";
import AllReminders from "./components/AllReminders";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Journal from "./components/Journal";
import Reminders from "./components/Reminders";
import apiHelpers from "./api-helpers.js/apiHelpers";
import crud from "./crud/crud";

const app = document.querySelector("#app");

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
    app.innerHTML=Home();
}

function navHome(){
    const homeElem = document.querySelector(".nav-list__home");
    homeElem.addEventListener("click", () => {
       app.innerHTML = Home();
    });   
}

function navReminders(){
    const remindersElem = document.querySelector(".nav-list__reminders");
    remindersElem.addEventListener("click", () => {
        crud.getRequest("http://localhost:8080/api/reminders", reminders => {
            console.log(reminders);
            app.innerHTML = AllReminders(reminders);
        }
        );
    });   
}

function navJournal(){
    const journalElem = document.querySelector(".nav-list__journal");
    journalElem.addEventListener("click", () => {
       app.innerHTML = Journal();
    });   
}

function navAbout(){
    const aboutElem = document.querySelector(".nav-list__about");
    aboutElem.addEventListener("click", () => {
       app.innerHTML = About();
    });   
}

function navContact(){
    const contactElem = document.querySelector(".nav-list__contact");
    contactElem.addEventListener("click", () => {
       app.innerHTML = Contact();
    });   
}