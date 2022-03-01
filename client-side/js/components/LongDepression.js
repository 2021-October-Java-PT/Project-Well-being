export default function LongDepression(){
    return `
    <div class="form-container">
    <h1 class="formType">Weekly Depression Questionnaire</h1>
     <h3>Over the last Week, how often have you been bothered by the following problems?</h3>
        <ul class=form-list>
            <li>Little interest or pleasure in doing things</li>
            <input type="radio" name="rating1" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating1" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating1" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating1" id="3" value="3">
        <label for="3">All week</label><br>

            <li>Feeling down, depressed or hopeless</li>
            <input type="radio" name="rating2" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating2" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating2" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating2" id="3" value="3">
        <label for="3">All week</label><br>
            
            <li>Trouble falling asleep, staying asleep, or sleeping too much</li>
            <input type="radio" name="rating3" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating3" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating3" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating3" id="3" value="3">
        <label for="3">All week</label><br>

            <li>Feeling tired or having little energy</li>
            <input type="radio" name="rating4" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating4" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating4" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating4" id="3" value="3">
        <label for="3">All week</label><br>

            <li>Poor appetite or overeatingl</li>
            <input type="radio" name="rating5" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating5" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating5" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating5" id="3" value="3">
        <label for="3">All week</label><br>

            <li>Feeling bad about yourself - or that you’re a failure or have let yourself or your family down</li>
            <input type="radio" name="rating6" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating6" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating6" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating6" id="3" value="3">
        <label for="3">All week</label><br>
            
            <li>Trouble concentrating on things, such as reading the newspaper or watching television</li>
            <input type="radio" name="rating7" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating7" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating7" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating7" id="3" value="3">
        <label for="3">All week</label><br>

            <li>Moving or speaking so slowly that other people could have noticed. Or, the opposite - being so fidgety or restless that you have been moving around a lot more than usual</li>
            <input type="radio" name="rating8" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating8" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating8" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating8" id="3" value="3">
        <label for="3">All week</label><br>

            <li>Thoughts that you would be better off dead or of hurting yourself in some way</li>
            <input type="radio" name="rating9" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating9" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating9" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating9" id="3" value="3">
        <label for="3">All week</label><br>
        </ul>       
        <button class="lastCheckin" id="saveForm">Next</button>
    </div>  
    `;
  }