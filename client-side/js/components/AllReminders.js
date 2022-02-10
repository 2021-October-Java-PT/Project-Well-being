export default function Reminders(reminder){
    return `
    <div class="api-page-container">
    <p>Reminder info</p>
    <ul>
    ${reminder.map(reminder => {
        return `
        <li class="">${reminder.name}
            <input type="hidden" id="" value="${reminder.id}"</li>
            `;
    }).join('')}
    </ul>
    
    <section class="add-reminder">
        <input class="add-reminder__name" type="text" placeholder="Add a Reminder" />
        <button class="add-reminder__submit">Add</button>
        <input type="hidden" id="reminderId" value="${reminder.id}"/>
        </section>
        
    `;
}