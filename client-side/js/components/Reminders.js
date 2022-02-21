export default function Reminders(reminders){
    return `
    ${reminders
        .map((reminder) => {
          const classNames = reminder.selected ? 'item-name-selected' : 'item-name';
          return `
              <section>
                <p class=${classNames}>${reminder.name}
                 <input type='hidden' id="reminder-id" class="reminder-id" value="${reminder.id}">
                 <input class='item-nameInput' type='hidden' value=${reminder.name}>
                </p>
              </section>
          `;
          // }
        })
        .join('')}
     `;
}


