export default function Ptsd(){
    return `
      <div class="form-container">
      <h1>PTSD Questionnaire</h1>
      
      <p>Sometimes things happen to people that are unusually or especially frightening, horrible, or traumatic.
      
      For Example:
      </p>
      <ul>
        <li>a serious accident of fire</li>
        <li>a physical or sexual assault or abuse</li>
        <li>an earthquake or flood</li>
        <li>a war</li>
        <li>seeing someone be killed or seriously injured</li>
        <li>having a loved one die through homicide or suicide</li>
      </ul>
      
      <h3>If you have ever experienced this type of event, please answer the following: </h3>
      
      <h3>In the past month, have you: </h3>
      
        <ul>
          <li>Had nightmares about the event(s) or thought about the event(s) when you did not want to?</li>
          <input type="radio" name="rating1" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating1" id="yes" value="yes">
            <label for="yes">Yes</label><br>

            <li>Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?</li>
          <input type="radio" name="rating2" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating2" id="yes" value="yes">
            <label for="yes">Yes</label><br>

            <li>Been constantly on guard, watchful, or easily startled?</li>
          <input type="radio" name="rating3" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating3" id="yes" value="yes">
            <label for="yes">Yes</label><br>

            <li>Felt numb or detached from people, activities, or your surroundings?</li>
          <input type="radio"name="rating4" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating4" id="yes" value="yes">
            <label for="yes">Yes</label><br>

            <li>Felt guilty or unable to stop blaming yourself or others for the events(s) or any problems the event(s) may have caused?</li>
          <input type="radio" name="rating5" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" name="rating5" id="yes" value="yes">
            <label for="yes">Yes</label><br>
        
        
        
        </ul>
        <button class="lastCheckin">Next</button>
      </div>
    
    
    
    `;
  }