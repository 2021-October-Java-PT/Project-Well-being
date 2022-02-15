export default function Reminders(reminder) {
    return `
    <div class="container" id="app">
    
    
    
    <h1>${reminder.name}</h1>
    <h2>${reminder.category}</h2>
    <h2>${reminder.priority}</h2>
    <h2>${reminder.description}</h2>
    <button class="returnReminders">Return to Reminders</button>
    <button class="reminder-delete">Delete Reminder</button>
    <input class = "reminder-id" type="hidden" value=${reminder.id}/>
    </div>
    
     `;
}