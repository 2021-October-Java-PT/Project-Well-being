export default function JournalEntry(journal){
    return `
    <div class="resources_container">    
        <div class="individual-journal">
            <h1 class="journal-date">${journal.date}</h1>
            <h2 class="journal-content">${journal.content}</h2>
            
        </div>
        <div class="journal-buttons">
            <button class="return-all-journals">Return to Journal</button>
            <button class="journal-delete" id="journal-delete">Delete Entry</button>
            <input class="journal-id" type="hidden" value=${journal.id}>
        </div>
    </div>
     `;
}