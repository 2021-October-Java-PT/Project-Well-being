export default function LongAnxiety(){

return `
<h1 class="formType">Weekly Anxiety Questionnaire</h1>
<div class="form-container">
 <h3>Over the last week, how often have you been bothered by the following problems?</h3>
    <ul class=form-list>
        <li>Feeling nervous, anxious or on edge:</li>
        <br>
        <input type="radio" name="rating1" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating1" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating1" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating1" id="3" value="3">
        <label for="3">All week</label><br>
        <br>
        <li>Not being able to stop or control worrying:</li>
        <br>
        <input type="radio" name="rating2" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating2" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating2" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating2" id="3" value="3">
        <label for="3">All week</label><br>
        <br>
        <li>Worrying too much about different things:</li>
        <br>
        <input type="radio" name="rating3" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating3" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating3" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating3" id="3" value="3">
        <label for="3">All week</label><br>
        <br>
        <li>Trouble relaxing:</li>
        <br>
        <input type="radio" name="rating4" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating4" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating4" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating4" id="3" value="3">
        <label for="3">All week</label><br>
        <br>
        <li>Being so restless that it is hard to sit still:</li>
        <br>
        <input type="radio" name="rating5" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating5" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating5" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating5" id="3" value="3">
        <label for="3">All week</label><br>
        <br>
        <li>Becoming easily annoyed or irritable:</li>
        <br>
        <input type="radio" name="rating6" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating6" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating6" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating6" id="3" value="3">
        <label for="3">All week</label><br>
        <br>
        <li>Feeling afraid as if something awful might happen:</li>
        <br>
        <input type="radio" name="rating7" id="0" value="0">
        <label for="0">Not at all</label><br>

        <input type="radio" name="rating7" id="1" value="1">
        <label for="1">Several days</label><br>

        <input type="radio" name="rating7" id="2" value="2">
        <label for="2">Half the week</label><br>

        <input type="radio" name="rating7" id="3" value="3">
        <label for="3">All week</label><br>





    </ul>
    <button class="lastCheckin" id="saveForm">Next</button>

</div>  
`;
}