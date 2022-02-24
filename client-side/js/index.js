//console.log('Client Side is wired up!');

import About from "./components/About";
import AdminHome from "./components/AdminHome";
import AdminUser from "./components/AdminUser";
import AllReminders from "./components/AllReminders";
import Contact from "./components/Contact";
import FormTypes from "./components/FormTypes";
import Home from "./components/Home";
import Journal from "./components/Journal";
import JournalEntry from "./components/JournalEntry";
import Login from "./components/Login";
import LongAnxiety from "./components/LongAnxiety"
import LongDepression from "./components/LongDepression"
import Mood from "./components/Mood";
import Ptsd from "./components/Ptsd"
import Reminder from "./components/Reminder";
import ResourceSearch from "./components/ResourceSearch";
import Resources from "./components/Resources";
import ShortAnxiety from "./components/ShortAnxiety";
import ShortDepression from "./components/ShortDepression"
import apiHelpers from "./api-helpers.js/apiHelpers";

const app = document.querySelector("#app");
let userLoggedIn = "";
let loggedIn = "false";
console.log(userLoggedIn);

buildPage();

function buildPage() {
    renderHome();
    navHome();   
    // navAllReminders();
    navJournal();
    navAbout();
    navContact();
    navResources();
    navForms();
    navLogin();
    navAdmin();
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
        // location.reload();
    });
}


function checkin() {
    const checkinSubmit = document.querySelector(".checkin")
    checkinSubmit.addEventListener("click", () => {
        //modal
        const modal = document.querySelector("#myModal");
        const modalBody = document.querySelector(".modal-body");
        const btn = document.getElementById("modal-close");
            btn.onclick = function () {
                modal.style.display = "none";
            }
                       
        //  if (event.target.classList.contains("checkin")) {
        if (loggedIn == "false") {
            modal.style.display = "block";
            modalBody.innerHTML = `  
                <div class="modal-body mood-content">
                    <h3>Please login to continue.</h3>
                </div>
              `;
            return;
        }
            
        // When the user clicks on the button, open the modal
        modal.style.display = "block";
        modalBody.innerHTML = Mood();
            
        // mood slider
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
            // console.log(slider.value);
        }
        formTypes();
    });
}

function formTypes() {
    const nextCheckin = document.querySelector(".nextCheckin");
    nextCheckin.addEventListener("click", () => {
        //modal
        const modal = document.querySelector("#myModal");
        const modalBody = document.querySelector(".modal-body");
        const btn = document.getElementById("modal-close");
            btn.onclick = function () {
                modal.style.display = "none";
            }
            
        // if (event.target.classList.contains("nextCheckin")) {
        const moodValue = document.getElementById("slider").value;
        // console.log(moodValue);
            
        apiHelpers.postRequest(
            `http://localhost:8080/api/mood/add-mood`, {
                    value: moodValue,
            },
                () =>
                 console.log(moodValue));
        modal.style.display = "block";
        modalBody.innerHTML = FormTypes();
        displayForm();
        });
    }


function displayForm() {
    const typeButtons = document.querySelector(".typeButtons");
    typeButtons.addEventListener("click", (event) => {
        //modal
        const modal = document.querySelector("#myModal");
        const modalBody = document.querySelector(".modal-body");
        const btn = document.getElementById("modal-close");
            btn.onclick = function () {
                modal.style.display = "none";
            }
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
    const lastCheckin = document.querySelector(".lastCheckin");
    lastCheckin.addEventListener("click", () => {
        //modal
        const modal = document.querySelector("#myModal");
        const modalBody = document.querySelector(".modal-body");
        const btn = document.getElementById("modal-close");
            btn.onclick = function () {
                modal.style.display = "none";
            }
        if (event.target.classList.contains("lastCheckin")) {
            apiHelpers.getRequest("http://localhost:8080/api/journal-entries", (journals) => {
            modalBody.innerHTML = Journal(journals);
            document.getElementById("all-journals__div").style.display = "none";
        });
        }
    });
}

function navAllReminders() {
    const remindersElem = document.querySelector(".nav-list__reminders");
    remindersElem.addEventListener("click", () => {
        apiHelpers.getRequest(`http://localhost:8080/api/reminders`, (reminders) => {
                app.innerHTML = AllReminders(reminders);
              });
        //   }
        renderReminder();
        addReminder(); 
    });     
}

function renderReminder() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("reminder")) {
            const id = event.target.querySelector("#reminder-id").value;
            apiHelpers.getRequest(`http://localhost:8080/api/reminders/${id}`, reminder => {
                app.innerHTML = Reminder(reminder);
            });
            returnToAllReminders();
            deleteReminder();
        }
    });
}

function addReminder() {
    // const addReminderElem = document.querySelector(".add-reminder__submit");
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
                `http://localhost:8080/api/reminders/add-reminder`, {
                    name: addResourceName,
                    category: addResourceCategory,
                    priority: addResourcePriority,
                    description: addResourceDescription,
            },
            () => {
                console.log(userLoggedIn);
            //   if (userLoggedIn) {
                apiHelpers.getRequest(`http://localhost:8080/api/reminders`, (reminders) => {
                    app.innerHTML = AllReminders(reminders);
            });
            // }
        });
    }
 });
}

function deleteReminder(){
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("reminder-delete")){
            const deleteReminderId = event.target.parentElement.querySelector(".reminder-id").value;
            apiHelpers.deleteRequest(`http://localhost:8080/api/reminders/${deleteReminderId}/delete-reminder`, () => {
                //console.log(reminders);
                apiHelpers.getRequest(`http://localhost:8080/api/reminders`, (reminders) => {
                    app.innerHTML = AllReminders(reminders);
            });
          });
        }
    });
}

function returnToAllReminders() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("return-reminders")) {
            apiHelpers.getRequest(`http://localhost:8080/api/reminders`, (reminders) => {
                app.innerHTML = AllReminders(reminders);
              });
        }
    });
}

function navJournal() {
    const journalElem = document.querySelector(".nav-list__journal");
    journalElem.addEventListener("click", () => {
        apiHelpers.getRequest("http://localhost:8080/api/journal-entries", journals => {
      app.innerHTML = Journal(journals);
    });
    renderJournalEntry();
    addJournal();
  });
}

function renderJournalEntry() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("journal-entry")){
        const id = event.target.querySelector("#journal-id").value;
        apiHelpers.getRequest(`http://localhost:8080/api/journal-entry/${id}`, journal => {
            app.innerHTML = JournalEntry(journal);
        });
        deleteJournal();
        returnToJournal();
    }
    });
}

function addJournal() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("journal-submit-button")) {
            var journalEntryDate = event.target.parentElement.querySelector("#date").value;
            const journalEntryContent = event.target.parentElement.querySelector("#journal-entry").value;
            apiHelpers.postRequest(
                "http://localhost:8080/api/journals/add-journal-entry", {
                    date: journalEntryDate,
                    content: journalEntryContent,
                },
            ) 
        }
    })
}

function deleteJournal(){
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("journal-delete")) {
            const deleteJournalId = event.target.parentElement.querySelector(".journal-id").value;
            apiHelpers.deleteRequest(`http://localhost:8080/api/journals/${deleteJournalId}/delete-journal-entry`, journals => {
                app.innerHTML = Journal(journals);
            });
            returnToJournal();
        }
    });
}

function returnToJournal() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("return-all-journals")) {
            apiHelpers.getRequest("http://localhost:8080/api/journal-entries", (journals) => {
                app.innerHTML = Journal(journals);
            });
        }
    });
}



function navForms() {
    const formsElem = document.querySelector(".nav-list__forms");
    formsElem.addEventListener("click", () => {
        app.innerHTML = FormTypes();

    });
    // displayForms();
}
// function displayForms() {
//     app.addEventListener("click", (event) => {
//         if (event.target.classList.contains("anxiety-short")) {
//             app.innerHTML = ShortAnxiety();
//         } else if (event.target.classList.contains("anxiety-long")) {
//             app.innerHTML = LongAnxiety();
//         } else if (event.target.classList.contains("depression-short")) {
//             app.innerHTML = ShortDepression();
//         } else if (event.target.classList.contains("depression-long")) {
//             app.innerHTML = LongDepression();
//         } else if (event.target.classList.contains("ptsd")) {
//             app.innerHTML = Ptsd();
//         }
//     });
// }

function navResources() {
    const journalElem = document.querySelector(".nav-list__resources");
    journalElem.addEventListener("click", () => {
        app.innerHTML = Resources();
        search();
    });
}

function navAdmin() {
    const adminElem = document.querySelector(".admin");
    adminElem.addEventListener("click", () => {
        app.innerHTML = AdminHome();
    });
    adminUser();
}

function adminUser() {
    // const adminUserElem = document.querySelector(".articleImg");
    // adminUserElem.addEventListener("click", () => {
    app.addEventListener("click", (event) => {  
        if (event.target.classList.contains("articleImg")) {
            app.innerHTML = AdminUser();
        }
        returnAdminHome();
    });
}

function returnAdminHome() {
    app.addEventListener("click", (event) => {
      if (event.target.classList.contains("returnAdminHome")) {
          app.innerHTML = AdminHome();
          }
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

function search() {
    const searchBar = document.querySelector("#search-bar");
    searchBar.addEventListener("click", () => {
        let top = document.getElementById("nested");
        if (top.parentNode) {
            top.parentNode.removeChild(top);
        }
    });    
    
    const searchSubmit = document.querySelector("#search-submit");
    searchSubmit.addEventListener("click", () => {
        let value = document.getElementById("search-bar").value;
        console.log(value);
        apiHelpers.getRequest(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword=${value}`, resources => {
            const list = document.querySelector(".search-list");    
            list.insertAdjacentHTML("beforeend", ResourceSearch(resources));
            //app.innerHTML = ResourceSearch(resources);
        });
    });
}

function navLogin() {
    const loginElem = document.querySelector(".nav-list__login");
    loginElem.addEventListener("click", () => {
     
        if (loggedIn == "true") {
            alert("Hello! You are already logged in.");
            return;
        }
        app.innerHTML = Login();
        userLogin();
    });
}

function userLogin() {
    const loginClick = document.querySelector("#login-btn");
    loginClick.addEventListener("click", (event) => {
        if (event.target.parentElement.classList.contains('login-form')) {
            const name = event.target.parentElement.querySelector('.loginName').value;
            userLoggedIn = name
            console.log(userLoggedIn);
            //from here instead of logging, you can send the user to the Account page and get the user's information, 
            //note this will only be possible for a user that is stored in your populator otherwise you will get null
            apiHelpers.getRequest(`http://localhost:8080/api/users/${name}`, (user) => {
              console.log(user);
              app.innerHTML = Home();
            //   if (user) {
            //     apiHelpers.getRequest(`http://localhost:8080/api/${name}/reminders`, (reminders) => {
            //       app.innerHTML = AllReminders(reminders);
            //     });
            // }
            navAllReminders();
            checkin();
        });
        loggedIn = "true"
        const icon = document.getElementById("login");
        icon.innerHTML = `<i class="material-icons" id="account-circle">account_circle</i>`;
        if (userLoggedIn.includes("admin")) {
            document.getElementById("admin").style.display = "initial";
        } else {
            document.getElementById("user").style.display = "initial";
        }
    }
    });
}