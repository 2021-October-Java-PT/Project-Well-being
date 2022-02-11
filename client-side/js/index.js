//console.log('Client Side is wired up!');

import About from "./components/About";
import AllReminders from "./components/AllReminders";
import Contact from "./components/Contact";
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
    navAllReminders();
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
        var emoticons = ["mood_bad",
            "sentiment_very_dissatisfied",
            "sentiment_satisfied",
            "sentiment_satisfied_alt",
            "sentiment_very_satisfied"
        ];

        slider.oninput = function () {
            emoji.innerHTML = emoticons[slider.value];
            console.log(slider.value);
        }
    });
}

function navAllReminders() {
    const remindersElem = document.querySelector(".nav-list__reminders");
    remindersElem.addEventListener("click", () => {
        apiHelpers.getRequest("http://localhost:8080/api/reminders", reminders => {
            app.innerHTML = AllReminders(reminders);
        });
        renderReminders();
    });
}

function renderReminders() {
    app.addEventListener("click", (event) => {

        if (event.target.classList.contains("reminder")) {
            const id = event.target.querySelector("#reminder-id").value;
            apiHelpers.getRequest(`http://localhost:8080/api/reminders/${id}`, (reminder) => {
                app.innerHTML = Reminders(reminder);

            });
            returnToAllReminders();
            addReminder();
        }
    });
}

function addReminder() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-reminder__submit")) {
            const addResourceName = event.target.parentElement.querySelector(
                ".add-reminder__name"
            ).value;
            const addResourceCategory = event.target.parentElement.querySelector(
                ".add-reminder__category"
            ).value;
            const addResourcePriority = event.target.parentElement.querySelector(
                ".add-reminder__priority"
            ).value;
            const addResourceDescription = event.target.parentElement.querySelector(
                ".add-reminder__description"
            ).value;

            apiHelpers.postRequest(
                "http://localhost:8080/api/reminders/add-reminder", {
                    name: addResourceName,
                    category: addResourceCategory,
                    priority: addResourcePriority,
                    description: addResourceDescription,
                },
                (reminders) =>
                (app.innerHTML = AllReminders(reminders))
            );
        }
    });
}


function returnToAllReminders() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("returnReminders")) {
            apiHelpers.getRequest(
                "http://localhost:8080/api/reminders",
                (reminders) => {
                    app.innerHTML = AllReminders(reminders);
                }
            );
        }
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