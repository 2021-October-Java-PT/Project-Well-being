export default function FormResponses(forms){
    return `
    <div class="styling_container"> 
    <div class="forms-header">
        <h1>Form Response Scores</h1>
    </div>
    <div class-"form-responses">
            <ul class="form-response_list">
                ${forms.map(form => {
                    return `
                <li class="entry">Date: ${form.date}, Type: ${form.type}, Score: ${form.score}
                     <input type='hidden' id="form-id" value="${form.id}">
                </li>
                     `;
              }).join('')}        
            </ul>
    </div>
    </div>
    `;
}