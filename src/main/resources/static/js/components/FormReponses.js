export default function FormResponses(forms){
    return `
    <div class="forms-header">
        <h1>Form Response Scores</h1>
        <br>
    </div>
    <div class-"form-responses">
            <ul class="form-response_list">
                ${forms.map(form => {
                    return `
                <li class="entry">Date: ${form.date}<br>Type: ${form.type}, Score: ${form.score}
                     <input type='hidden' id="form-id" value="${form.id}">
                </li><br>
                     `;
              }).join('')}        
            </ul>
    </div>
    `;
}