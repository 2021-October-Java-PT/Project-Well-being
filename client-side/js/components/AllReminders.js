export default function Reminders(reminders){
    console.log('reminder page')
    return `
    <div class="api-page-container">
    <p>Reminder info</p>
    <ul>
    ${reminders.map(reminder => {
        return `
        <li class="">${reminder.name}
            <input type='hidden' id="" value="${reminder.id}</li>`;
    }).join('')}
    </ul>    
    `;
}