//console.log('Client Side is wired up!');

import About from "./components/About";
import AllReminders from "./components/AllReminders";
import Contact from "./components/Contact";
import Form from "./components/Form";
import FormTypes from "./components/FormTypes"
import Home from "./components/Home";
import Journal from "./components/Journal";
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

function displayForm(){
  const formElem = document.querySelector("#app");
  formElem.addEventListener("click", (event)=>{
    if(event.target.classList.contains("anxiety-short")) {
      app.innerHTML = Form();
    }
  })
}
