export default function ShortAnxiety() {
    return `
    <div class="form-container">
    <h1>Daily Anxiety Questionnaire</h1>
     <h3>Over the last 24 hours, how often have you been bothered by the following problems?</h3>
        <ul>
            <li>Feeling nervous, anxious or on edge</li>
            <input type="radio" name="rating1" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" name="rating1" id="1" value="1">
            <label for="1">Several hours</label><br>

            <input type="radio" name="rating1" id="2" value="2">
            <label for="2">Half the day</label><br>

            <input type="radio" name="rating1" id="3" value="3">
            <label for="3">All day</label><br>

            <li>Not being able to stop or control worrying</li>
            <input type="radio" name="rating2" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" name="rating2" id="1" value="1">
            <label for="1">Several hours</label><br>

            <input type="radio" name="rating2" id="2" value="2">
            <label for="2">Half the day</label><br>

            <input type="radio" name="rating2" id="3" value="3">
            <label for="3">All day</label><br>

        </ul>
        
        <button class="lastCheckin">Next</button>
    </div>  
    `;
  }
   
  
    
    

 
    

