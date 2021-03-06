

export default function ShortAnxiety() {
    return `
    <h1 class="formType">Daily Anxiety Questionnaire</h1>
    <div class="form-container">
     <h3>Over the last 24 hours, how often have you been bothered by the following problems?</h3>
        <ul class=form-list>
            <li>1. Feeling nervous, anxious or on edge:</li>
                <br>
                <input type="radio" name="rating1" id="zero" value="0">
                <label for="zero">Not at all</label><br>

                <input type="radio" name="rating1" id="one" value="1">
                <label for="one">Several hours</label><br>

                <input type="radio" name="rating1" id="two" value="2">
                <label for="two">Half the day</label><br>

                <input type="radio" name="rating1" id="three" value="3">
                <label for="three">All day</label><br>
            <br>
            <li>2. Not being able to stop or control worrying:</li>
                <br>
                <input type="radio" name="rating2" id="zero2" value="0">
                <label for="zero2">Not at all</label><br>

                <input type="radio" name="rating2" id="one2" value="1">
                <label for="one2">Several hours</label><br>

                <input type="radio" name="rating2" id="two2" value="2">
                <label for="two2">Half the day</label><br>

                <input type="radio" name="rating2" id="three2" value="3">
                <label for="three2">All day</label><br>
        </ul>
        <button class="lastCheckin" id="saveForm">Next</button>
    </div>  
    `;
  }
   
  
    
    

 
    

