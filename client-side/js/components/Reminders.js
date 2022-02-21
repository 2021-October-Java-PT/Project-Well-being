export default function Reminders(reminder){
    console.log('reminder page')
    return `
    <div class="resources_container">    
        <div class="individual-reminder">
            <h1 class="reminder-name">${reminder.name}</h1>
            <h2 class="reminder-category">Category: ${reminder.category}</h2>
            <h2 class="reminder-description">Details: ${reminder.description}</h2>
            <h2 class="reminder-priority">Priority: ${reminder.priority}</h2>
        </div>
        <div class="reminder-buttons">
            <button class="return-reminders">Return to Reminders</button>
            <button class="reminder-delete">Delete Reminder</button>
            <input class = "reminder-id" type="hidden" value=${reminder.id}/>
        </div>
    </div>
     `;
}