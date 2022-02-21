export default function JournalEntry(journal){
    console.log('journal entry page')
    return `
    <div class="resources_container">    
        <div class="individual-journal">
            <h1 class="journal-date">${journal.date}</h1>
            <h2 class="journal-content">Category: ${journal.content}</h2>
            
        </div>
        <div class="journal-buttons">
            <button class="return-all-journals">Return to Journal</button>
            <button class="journal-delete">Delete Entry</button>
            <input class = "journal-id" type="hidden" value=${journal.id}/>
        </div>
    </div>
     `;
}