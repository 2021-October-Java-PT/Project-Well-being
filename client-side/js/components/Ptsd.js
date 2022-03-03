export default function Ptsd(){
    return `
    
      <h1 class="formType">PTSD Questionnaire</h1>
      <div class="form-container">
      <p class="ptsd-para">Sometimes things happen to people that are unusually or especially frightening, horrible, or traumatic.
      
      For Example:
      </p>
      <ul class=form-list>
        <li>A serious accident of fire</li>
        <br>
        <li>A physical or sexual assault or abuse</li>
        <br>
        <li>An earthquake or flood</li>
        <br>
        <li>A war</li>
        <br>
        <li>Seeing someone be killed or seriously injured</li>
        <br>
        <li>Having a loved one die through homicide or suicide</li>
        <br>
      </ul>
      
      <h3>If you have ever experienced this type of event, please answer the following: </h3>
      <br>
      <h3>In the past month, have you: </h3>
      
        <ul class=form-list>
          <li>Had nightmares about the event(s) or thought about the event(s) when you did not want to?</li>
          <br>
          <input type="radio" name="rating1" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating1" id="yes" value="yes">
            <label for="yes">Yes</label><br>
            <br>
            <li>Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?</li>
            <br>
          <input type="radio" name="rating2" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating2" id="yes" value="yes">
            <label for="yes">Yes</label><br>
            <br>
            <li>Been constantly on guard, watchful, or easily startled?</li>
            <br>
          <input type="radio" name="rating3" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating3" id="yes" value="yes">
            <label for="yes">Yes</label><br>
            <br>
            <li>Felt numb or detached from people, activities, or your surroundings?</li>
            <br>
          <input type="radio"name="rating4" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating4" id="yes" value="yes">
            <label for="yes">Yes</label><br>
            <br>
            <li>Felt guilty or unable to stop blaming yourself or others for the events(s) or any problems the event(s) may have caused?</li>
            <br>
          <input type="radio" name="rating5" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating5" id="yes" value="yes">
            <label for="yes">Yes</label><br>
            <br>
        
        
        </ul>
        <button class="lastCheckin" id="saveForm">Next</button>
      </div>
    
    
    
    `;
  }