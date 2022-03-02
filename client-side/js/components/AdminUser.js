import Charts from "../components/ChartDisplay";
import Forms from "../components/FormReponses";
import Journals from "../components/Journal";
import Moods from "./MoodResponses";
import Reminders from "../components/AllReminders";
import apiHelpers from "../api-helpers.js/apiHelpers";

const [reminders, setReminders] = apiHelpers.useState();
apiHelpers.getRequest(`http://localhost:8080/api/reminders`, reminders => {
    setReminders(reminders);
});

const [journals, setJournals] = apiHelpers.useState();
apiHelpers.getRequest("http://localhost:8080/api/journal-entries", journals => {
    setJournals(journals);
});

const [forms, setForms] = apiHelpers.useState();
apiHelpers.getRequest("http://localhost:8080/api/forms", forms => {
    setForms(forms);
});

const [moods, setMoods] = apiHelpers.useState();
apiHelpers.getRequest("http://localhost:8080/api/mood", moods => {
    setMoods(moods);
});

export default function AdminUser(user) {
    return `
    <div class="container-contact">
    <h1>User Profile<h1>
    <h2>${user}</h2>
    <div class="user-info" id="">
        <div class="user-info-item" id="reminders">${Reminders(reminders())}</div>
        <div class="user-info-item" id="journals">${Journals(journals())}</div>
        <div class="user-info-item" id="forms">${Forms(forms())}</div>
        <div class="user-info-item" id="moods">${Moods(moods())}</div>
    </div>
    <div>${Charts()}</div>
    <btn class="returnAdminHome btn btn-primary">Return to User List</btn>
    </div>
    `;
}
