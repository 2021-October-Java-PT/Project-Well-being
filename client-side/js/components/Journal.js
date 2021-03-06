import journaling from "../../assets/journaling.jpg";
import legalPad from "../../assets/legal-pad.png"

export default function Journal(journals){
    return `
            <h1 class="journal">Journal Entry</h1>
            <p class="journal">Journaling about your feelings is linked to decreased mental distress. In a study, 
            researchers found that those with various medical conditions and anxiety who wrote online for 15 minutes 
            three days a week over a 12-week period had increased feelings of well-being and fewer depressive symptoms 
            after one month. Their mental well-being continued to improve during the 12 weeks of journaling.
            <a href="https://www.webmd.com/mental-health/mental-health-benefits-of-journaling#091e9c5e8214c88b-2-4">
            Article</a>
            </p>
            <br>        
            <img  class="journal-entry-img" src="${journaling}" alt="journal">

            <div class="journal-form" id="journal-form">
                <form class="journal">
                    <label class="label-date" for="date">Date:</label><br>
                    <input id="date" type="date"><br><br>
                    <label class="label-journal-entry" for="journal-entry">Journal Entry:</label><br>
                    <textarea id="journal-entry" name="content" rows="6" cols="66" placeholder="Type your journal entry here..."></textarea><br>
                    <div class="btn journal-submit-button">SUBMIT</div>
                </form>
            </div>
         

        <div class="all-journals__div" id="all-journals__div">
            <ul class="all-journals__list">
                ${journals.map(journal => {
                    return `
                <li class="journal-entry">${journal.date}
                     <input type='hidden' id="journal-id" value="${journal.id}">
                </li>
                     `;
              }).join('')}
                      
            </ul>
        </div>
    `;
}