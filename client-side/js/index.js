//console.log('Client Side is wired up!');

import About from "./components/About";
import AllReminders from "./components/AllReminders";
import Contact from "./components/Contact";
import FormTypes from "./components/FormTypes";
import Home from "./components/Home";
import Journal from "./components/Journal";
import LongAnxiety from "./components/LongAnxiety"
import LongDepression from "./components/LongDepression"
import Mood from "./components/Mood";
import Ptsd from "./components/Ptsd"
import Reminders from "./components/Reminders";
import Resources from "./components/Resources";
import ShortAnxiety from "./components/ShortAnxiety";
import ShortDepression from "./components/ShortDepression"
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
}

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
    var slider = document.getElementById("slider");
    var emoji = document.getElementById("emoji");
    var emoticons = [
      "mood_bad",
      "sentiment_very_dissatisfied",
      "sentiment_satisfied",
      "sentiment_satisfied_alt",
      "sentiment_very_satisfied",
    ];

    slider.oninput = function () {
      emoji.innerHTML = emoticons[slider.value];
      console.log(slider.value);
    };
    formTypes();
  });
}

function formTypes() {
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains("nextCheckin")) {
      app.innerHTML = FormTypes();
    }
    displayForm();
  });
}

function displayForm(){
    app.addEventListener("click", (event)=>{
        if (event.target.classList.contains("anxiety-short")){
            app.innerHTML = ShortAnxiety();
        }else if(event.target.classList.contains("anxiety-long")){
            app.innerHTML = LongAnxiety();
        }else if(event.target.classList.contains("depression-short")){
            app.innerHTML = ShortDepression();
        }else if(event.target.classList.contains("depression-long")){
            app.innerHTML = LongDepression();
        }else if(event.target.classList.contains("ptsd")){
            app.innerHTML = Ptsd();
        }
    });
}

function navReminders() {
  const remindersElem = document.querySelector(".nav-list__reminders");
  remindersElem.addEventListener("click", () => {
    crud.getRequest("http://localhost:8080/api/reminders", (reminders) => {
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
