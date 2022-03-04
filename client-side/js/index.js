//console.log('Client Side is wired up!');

import About from "./components/About";
import AdminHome from "./components/AdminHome";
import AdminUser from "./components/AdminUser";
import AllReminders from "./components/AllReminders";
import Charts from "./components/ChartDisplay";
import Contact from "./components/Contact";
import FormTypes from "./components/FormTypes";
import Home from "./components/Home";
import Journal from "./components/Journal";
import JournalEntry from "./components/JournalEntry";
import Login from "./components/Login";
import LongAnxiety from "./components/LongAnxiety"
import LongDepression from "./components/LongDepression"
import Mindfulness from "./components/Mindfulness"
import Mood from "./components/Mood";
import NavFormTypes from "./components/NavFormTypes";
import Ptsd from "./components/Ptsd";
import Reminder from "./components/Reminder";
import ResourceSearch from "./components/ResourceSearch";
import Resources from "./components/Resources";
import ShortAnxiety from "./components/ShortAnxiety";
import ShortDepression from "./components/ShortDepression";
import apiHelpers from "./api-helpers.js/apiHelpers";

const app = document.querySelector("#app");
const mySounds = document.querySelector("#nature-sounds");
let userLoggedIn = "";
let loggedIn = "false";
let userProfile = "";

buildPage();

function buildPage() {
    renderHome();
    navHome();   
    navJournal();
    navAbout();
    navContact();
    navResources();
    navForms();
    navLogin();
    navAdmin();
    playSounds();
}

function renderHome() {
    app.innerHTML = Home();
    checkin();
}

function navHome() {
    const homeElem = document.querySelector(".nav-list__home");
    homeElem.addEventListener("click", () => {
        userProfile = "";
        app.innerHTML = Home();
        checkin();
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
                       
        if (loggedIn == "false") {
            modal.style.display = "block";
            modalBody.innerHTML = `  
                <div class="modal-body mood-content">
                    <h3>Please login to continue checking in.</h3>
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
            
        const moodValue = document.getElementById("slider").value;
            
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
        modalSubmit();
    });
    
}

function modalSubmit() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("journal-submit-button")) {
            var journalEntryDate = event.target.parentElement.querySelector("#date").value;
            const journalEntryContent = event.target.parentElement.querySelector("#journal-entry").value;
            apiHelpers.postRequest(
                "http://localhost:8080/api/journals/add-journal-entry", {
                    date: journalEntryDate,
                    content: journalEntryContent,
                }, 
                () => {
                  app.innerHTML = Home();
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
                if (userLoggedIn.includes("admin")) {
                    document.getElementById("reminder-delete").style.display = "none";
                }
            });
        returnToAllReminders();
        deleteReminder(); 
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
                `http://localhost:8080/api/reminders/add-reminder`, {
                    name: addResourceName,
                    category: addResourceCategory,
                    priority: addResourcePriority,
                    description: addResourceDescription,
            },
            () => {
                apiHelpers.getRequest(`http://localhost:8080/api/reminders`, (reminders) => {
                    app.innerHTML = AllReminders(reminders);
            });
        });
    }
 });
}

function deleteReminder(){
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("reminder-delete")){
            const deleteReminderId = event.target.parentElement.querySelector(".reminder-id").value;
            apiHelpers.deleteRequest(`http://localhost:8080/api/reminders/${deleteReminderId}/delete-reminder`, () => {
                apiHelpers.getRequest(`http://localhost:8080/api/reminders`, (reminders) => {
                    app.innerHTML = AllReminders(reminders);
            });
          });
        }
    });
}

function returnToAllReminders() {
    app.addEventListener("click", (event) => {
        if (userLoggedIn.includes("admin")) {
            if (userProfile === "User 1") {
                app.innerHTML = AdminUser(userProfile);
                const cal = document.getElementsByClassName("calendar");
                for (var i = 0; i < cal.length; i ++) {
                    cal[i].style.display = "none";
                }
            document.getElementById("frmReminder").style.display = "none";
            document.getElementById("journal-form").style.display = "none";
            renderChart();
            } else if (userProfile === "User 2") {
                app.innerHTML = AdminUser(userProfile);
                const info = document.getElementsByClassName("user-info");
                for (var j = 0; j < info.length; j ++) {
                    info[j].style.display = "none";
                }      
            }
        } else if (event.target.classList.contains("return-reminders")) {
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
        if (event.target.classList.contains("journal-entry")) {
            const id = event.target.querySelector("#journal-id").value;
            apiHelpers.getRequest(`http://localhost:8080/api/journal-entry/${id}`, journal => {
                app.innerHTML = JournalEntry(journal);
                if (userLoggedIn.includes("admin")) {
                    document.getElementById("journal-delete").style.display = "none";
                }
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
                () => {
                    apiHelpers.getRequest("http://localhost:8080/api/journal-entries", journals => {
                    app.innerHTML = Journal(journals);
                });
            });
        }
     });
    }

function deleteJournal() {
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
        if (userLoggedIn.includes("admin")) {
            if (userProfile === "User 1") {
                app.innerHTML = AdminUser(userProfile);
                const cal = document.getElementsByClassName("calendar");
                for (var i = 0; i < cal.length; i ++) {
                    cal[i].style.display = "none";
                }
            document.getElementById("frmReminder").style.display = "none";
            document.getElementById("journal-form").style.display = "none";
            renderChart();
            } else if (userProfile === "User 2") {
                app.innerHTML = AdminUser(userProfile);
                const info = document.getElementsByClassName("user-info");
                for (var j = 0; j < info.length; j ++) {
                    info[j].style.display = "none";
                }      
            }
        } else if (event.target.classList.contains("return-all-journals")) {
            apiHelpers.getRequest("http://localhost:8080/api/journal-entries", (journals) => {
                app.innerHTML = Journal(journals);
            });
        }
    });
}

function navForms() {
    const formsElem = document.querySelector(".nav-list__forms");
    formsElem.addEventListener("click", () => {
        app.innerHTML = NavFormTypes();
    });
    displayNavForms();
}

function displayNavForms() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("anxietyShort")) {
            app.innerHTML = ShortAnxiety();
            saveForm();
        } else if (event.target.classList.contains("anxietyLong")) {
            app.innerHTML = LongAnxiety();
            saveForm();
        } else if (event.target.classList.contains("depressionShort")) {
            app.innerHTML = ShortDepression();
            saveForm();
        } else if (event.target.classList.contains("depressionLong")) {
            app.innerHTML = LongDepression();
            saveForm();
        } else if (event.target.classList.contains("ptsdNav")) {
            app.innerHTML = Ptsd();
            saveForm();
        }
    });
}

function navResources() {
    const journalElem = document.querySelector(".nav-list__resources");
    journalElem.addEventListener("click", () => {
        app.innerHTML = Resources();
        search();
        navMindfulness();
    });
}

function navMindfulness() {
    app.addEventListener("click", (event) => {
        if (event.target.classList.contains("practice-mindfulness")) {
            app.innerHTML = Mindfulness();
            mySounds.volume = 0.5;
            mySounds.play();
            setTimeout(function(){
                mySounds.pause();
                mySounds.currentTime = 0;
            }, 5000);
        }
    });
}

function navAdmin() {
    const adminElem = document.querySelector(".admin");
    adminElem.addEventListener("click", () => {
        app.innerHTML = AdminHome();
        adminUser();
    });
}

function adminUser() {
    app.addEventListener("click", (event) => {  
        if (event.target.classList.contains("articleImg1")) {
            let user = "User 1"
            app.innerHTML = AdminUser(user);
            const cal = document.getElementsByClassName("calendar");
            for (var i = 0; i < cal.length; i ++) {
                cal[i].style.display = "none";
            }
            document.getElementById("frmReminder").style.display = "none";
            document.getElementById("journal-form").style.display = "none";
            userProfile = user;
        } else if (event.target.classList.contains("articleImg2")) {
            let user = "User 2"
            app.innerHTML = AdminUser(user);
            const info = document.getElementsByClassName("user-info");
            for (var j = 0; j < info.length; j ++) {
                info[j].style.display = "none";
            }
            userProfile = user;      
        }
        // addReminder();
        renderReminder();
        renderJournalEntry();
        returnAdminHome();
        renderChart();
    });
}

function renderChart() {
    const labels = ["January","February","March","April","May","June"];
    const barData = {
        labels: labels,
        datasets: [
            {
                label: 'Form Entries',
                fillColor: "rgb(48, 48, 48)",
                strokeColor: "rgb(48, 48, 48)",
                data: [3,7,1,0,0,0]
            },
            {
                label: 'Mood Entries',
                fillColor: "#a55344",
                strokeColor: "#a55344",
                data:  [4,3,1,0,0,0]
            }
        ]
    }
    // get bar chart canvas
    const trends = document.getElementById("trends").getContext("2d");
    // draw bar chart
    new Chart(trends).Bar(barData);
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
        contactFormSubmit();
    });
}

function contactFormSubmit() {
    const contactSub = document.querySelector("#contact-submit");
    contactSub.addEventListener("click", () => {
        app.innerHTML = Contact();
        contactFormSubmit();
    });
}

function search() {
    const searchBar = document.querySelector("#search-bar");
    searchBar.addEventListener("click", () => {
        document.getElementById("search-bar").value = "";
        let top = document.getElementById("search-list");
        while (top.firstChild) {
            top.removeChild(top.lastChild);
        }
    });    
    
    const searchSubmit = document.querySelector("#search-submit");
    searchSubmit.addEventListener("click", () => {
        let value = document.getElementById("search-bar").value;
        apiHelpers.getRequest(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword=${value}`, resources => {
            const list = document.querySelector(".search-list");    
            list.insertAdjacentHTML("beforeend", ResourceSearch(resources));
        });
    });
    
    searchBar.addEventListener("keyup", (event) => {
        if (event.keyCode === 13){
        let value = document.getElementById("search-bar").value;
        apiHelpers.getRequest(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?keyword=${value}`, resources => {
            const list = document.querySelector(".search-list");    
            list.insertAdjacentHTML("afterbegin", ResourceSearch(resources));
        });
    }});
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
            apiHelpers.getRequest(`http://localhost:8080/api/users/${name}`, (user) => {
                app.innerHTML = Home();
            navAllReminders();
            checkin();
            signOut();
        });
        loggedIn = "true"
        const icon = document.getElementById("login");
        icon.innerHTML = `<i class="material-icons" id="account-circle">account_circle</i>`;
        if (userLoggedIn.includes("admin")) {
            document.getElementById("admin").style.display = "initial";
            document.getElementById("signout").style.display = "initial";
        } else {
            document.getElementById("user").style.display = "initial";
            document.getElementById("signout").style.display = "initial";
        }
    }
    });
}

function signOut() {
    const logoutClick = document.querySelector("#signout");
    logoutClick.addEventListener("click", () => {
        window.location.reload();    
    });
}

function playSounds(){
    const playClick = document.querySelector("#play-button");
    const stopClick = document.querySelector("#stop-button");
    
    playClick.addEventListener("click", () => {
        mySounds.volume = 0.5;
        mySounds.play();
    });

    stopClick.addEventListener("click", () => {
        mySounds.pause();
        mySounds.currentTime = 0;
    })
}

function saveForm() {
    const formClick= document.querySelector(".lastCheckin");
    formClick.addEventListener("click", ()=> {
        const rating1 = document.querySelector('input[name="rating1"]:checked').value;
        const rating2 = document.querySelector('input[name="rating2"]:checked').value;
        const total = parseInt(rating1) + parseInt(rating2);
        console.log(total);
        renderHome();
    });     
 } 