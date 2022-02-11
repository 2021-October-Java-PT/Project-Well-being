//console.log('Client Side is wired up!');

import About from "./components/About";
import AllReminders from "./components/AllReminders";
import Contact from "./components/Contact";
import Form from "./components/Form";
import FormTypes from "./components/FormTypes"
import Home from "./components/Home";
import Journal from "./components/Journal";
import Mood from "./components/Mood";
import Reminders from "./components/Reminders";
import Resources from "./components/Resources";
import apiHelpers from "./api-helpers.js/apiHelpers";
import crud from "./crud/crud";

const app = document.querySelector("#app");

buildPage();

function buildPage() {
    renderHome();
    navHome();
    navReminders();
    navJournal();
    navAbout();
    navContact();
    navResources();
}

function renderHome() {
    app.innerHTML = Home();
    checkin();
  };


function navHome() {
    const homeElem = document.querySelector(".nav-list__home");
    homeElem.addEventListener("click", () => {
        app.innerHTML = Home();
        checkin();
    });
}

function checkin() {
    const checkin = document.querySelector(".checkin");
    checkin.addEventListener("click", () => {
        app.innerHTML = Mood();
        var slider=document.getElementById("slider");
        var emoji=document.getElementById("emoji");
        var emoticons=["mood_bad",
        "sentiment_very_dissatisfied",
        "sentiment_satisfied",
        "sentiment_satisfied_alt",
        "sentiment_very_satisfied"
        ];

        slider.oninput=function(){
            emoji.innerHTML=emoticons[slider.value];
            console.log(slider.value);
        }
    });
}

function navReminders() {
    const remindersElem = document.querySelector(".nav-list__reminders");
    remindersElem.addEventListener("click", () => {
        crud.getRequest("http://localhost:8080/api/reminders", reminders => {
            console.log(reminders);
            app.innerHTML = AllReminders(reminders);
        });
    });
}

function navJournal() {
    const journalElem = document.querySelector(".nav-list__journal");
    journalElem.addEventListener("click", () => {
        app.innerHTML = Journal();
    });
}

function navResources() {
    const journalElem = document.querySelector(".nav-list__resources");
    journalElem.addEventListener("click", () => {
        app.innerHTML = Resources();
    });
}

function navAbout() {
    const aboutElem = document.querySelector(".nav-list__about");
    aboutElem.addEventListener("click", () => {
        app.innerHTML = About();
    });
}

function navContact() {
    const contactElem = document.querySelector(".nav-list__contact");
    contactElem.addEventListener("click", () => {
        app.innerHTML = Contact();
    });
}
