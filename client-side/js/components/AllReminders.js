export default function AllReminders(reminders) {
    return `
    <div class="api-page-container">
    <p>Reminder info</p>
    <ul>
    ${reminders.map(reminder => {
    return `
    <li class="reminder">${reminder.name}
        <input type='hidden' id="reminder-id" value="${reminder.id}"</li>
        `;
    }).join('')}
    </ul> 
    </div>
    <div class="">
    <div class="">
        <div class=""></div>
            <form id="frmReminder"">
                <label>Enter a Reminder</label>
                <input type="text" class="add-reminder__name" placeholder="Enter Name">
                <input type="text" class="add-reminder__category" placeholder="Enter Category">
                <input type="text" class="add-reminder__priority" placeholder="Enter Priority">
                <input type="text" class="add-reminder__description" placeholder="Enter Description">
                <button type="submit" class="add-reminder__submit">SUBMIT</button>
            </form>
    </div>
    </div>  
    `;
}
