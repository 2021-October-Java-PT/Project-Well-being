export default function Reminders(reminders){
    console.log('reminder page')
    return `
    <div class="api-page-container">
    <p>Reminder info</p>
    <ul>
    ${reminders.map(reminders => {
        return `
        <li class="">${reminders.name}
            <input type='hidden' id="" value="${reminders.id}</li>`;
    }).join('')}
    </ul>  
    </div>  
    `;
}