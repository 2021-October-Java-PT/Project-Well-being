import Charts from "../components/ChartDisplay.js";
import Forms from "../components/FormReponses.js";
import Journals from "../components/Journal.js";
import Moods from "./MoodResponses.js";
import Reminders from "../components/AllReminders.js";
import apiHelpers from "../api-helpers.js/apiHelpers.js";

const [reminders, setReminders] = apiHelpers.useState();
apiHelpers.getRequest(`http://projectwellbeing-demo.herokuapp.com/api/reminders`, reminders => {
    setReminders(reminders);
});

const [journals, setJournals] = apiHelpers.useState();
apiHelpers.getRequest("http://projectwellbeing-demo.herokuapp.com/api/journal-entries", journals => {
    setJournals(journals);
});

const [forms, setForms] = apiHelpers.useState();
apiHelpers.getRequest("http://projectwellbeing-demo.herokuapp.com/api/forms", forms => {
    setForms(forms);
});

const [moods, setMoods] = apiHelpers.useState();
apiHelpers.getRequest("http://projectwellbeing-demo.herokuapp.com/api/mood", moods => {
    setMoods(moods);
});

export default function AdminUser(user) {
    return `
    <div class="container-contact">
    <h1>User Profile<h1>
    <h2>${user}</h2>
    <br>
    <div class="user-info services-div" id="">
        <div class="user-info-item" id="reminders">${Reminders(reminders())}</div>
        <div class="user-info-item" id="journals">${Journals(journals())}</div>
        <div class="user-info-item" id="forms">${Forms(forms())}</div>
        <div class="user-info-item" id="moods">${Moods(moods())}</div>
        <div>${Charts()}</div>
        <btn class="returnAdminHome btn btn-primary">Return to User List</btn>
    </div>
    </div>
    `;
}
