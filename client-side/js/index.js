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
    navAllReminders();
    navJournal();
    navAbout();
    navContact();
    navResources();
}

function renderHome() {
    app.innerHTML = Home();
    //   app.insertAdjacentHTML("beforeend", Mood());
    //   app.insertAdjacentHTML("beforeend", FormTypes());
    checkin();
}

function navHome() {
    const homeElem = document.querySelector(".nav-list__home");
    homeElem.addEventListener("click", () => {
        app.innerHTML = Home();
        // app.insertAdjacentHTML("beforeend", Mood());
        // app.insertAdjacentHTML("beforeend", FormTypes());
        checkin();
        location.reload();
    });
}

//Checkin
// Get the modal
const modal = document.querySelector("#myModal");
const modalBody = document.querySelector(".modal-body");

// Get the <span> element that closes the modal
const btn = document.getElementById("modal-close");

// When the user clicks on <span> (x), close the modal
btn.onclick = function () {
    modal.style.display = "none";
}

function checkin() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("checkin")) {
            //const checkin = document.querySelector(".checkin");
            // When the user clicks on the button, open the modal
            //checkin.onclick = function() {
            modal.style.display = "block";
            modalBody.innerHTML = Mood();


            /*slider*/
            const slider = document.getElementById("slider");
            const emoji = document.getElementById("emoji");
            const emoticons = ["mood_bad",
                "sentiment_very_dissatisfied",
                "sentiment_satisfied",
                "sentiment_satisfied_alt",
                "sentiment_very_satisfied"
            ];

            slider.oninput = function () {
                emoji.innerHTML = emoticons[slider.value];
                console.log(slider.value);
            }
        }
        formTypes();
    });
}


function formTypes() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("nextCheckin")) {
            //const nextCheckin = document.querySelector(".");
            // nextCheckin.onclick = function() {
            modal.style.display = "block";
            modalBody.innerHTML = FormTypes();
        }
        displayForm();
    });
}

function displayForm() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("anxiety-short")) {
            modalBody.innerHTML = ShortAnxiety();
        } else if (event.target.classList.contains("anxiety-long")) {
            modalBody.innerHTML = LongAnxiety();
        } else if (event.target.classList.contains("depression-short")) {
            modalBody.innerHTML = ShortDepression();
        } else if (event.target.classList.contains("depression-long")) {
            modalBody.innerHTML = LongDepression();
        } else if (event.target.classList.contains("ptsd")) {
            modalBody.innerHTML = Ptsd();
        }
        displayJournal();
    });
}

function displayJournal() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("lastCheckin")) {
            modalBody.innerHTML = Journal();
        }
    });
}

function navAllReminders() {
    const remindersElem = document.querySelector(".nav-list__reminders");
    remindersElem.addEventListener("click", () => {
        apiHelpers.getRequest("http://localhost:8080/api/reminders", reminders => {
            app.innerHTML = AllReminders(reminders);
        });
        renderReminder();
        addReminder();
        deleteReminder();
    });
}

function renderReminder() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("reminder")) {
            const id = event.target.querySelector("#reminder-id").value;
            apiHelpers.getRequest(`http://localhost:8080/api/reminders/${id}`, reminder => {
                app.innerHTML = Reminders(reminder);
            });
            returnToAllReminders();
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
                reminders => {
                    app.innerHTML = AllReminders(reminders);
                });
        }
    });
}

function deleteReminder(){
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("reminder-delete")){
            apiHelpers.deleteRequest(`http://localhost:8080/api/reminders/${id}/delete-reminder`, reminders => {
                app.innerHTML = AllReminders(reminders);
            });
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