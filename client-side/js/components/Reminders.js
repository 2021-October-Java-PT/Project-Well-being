export default function Reminders(reminder) {
    return `
    <div class="container" id="app">
    <h1>Reminder test</h1>

    <h1>${reminder.name}</h1>
    <h2>${reminder.category}</h2>
    <h2>${reminder.priority}</h2>
    <h2>${reminder.description}</h2>
    <button class="returnReminders">Return</button>
    <button class="reminder-delete">Delete Reminder</button>
    <input type='hidden' id="reminder-id" value="${reminder.id}"/>
    </div>
     `;
}