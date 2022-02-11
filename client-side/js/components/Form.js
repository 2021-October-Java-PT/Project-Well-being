export default function Form(forms) {
  if (forms.type == "anxiety-short") {
    return `
    <div class="form-container">
    <h1>Short Anxiety Questionnaire</h1>
     <h3>Over the last 24 hours, how often have you been bothered by the following problems?</h3>
        <ul>
            <li>Feeling nervous, anxious or on edge</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several hours</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the day</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All day</label><br>

            <li>Not being able to stop or control worrying</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several hours</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the day</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All day</label><br>

        </ul>
        
    
    </div>  
    `;
  }
  if (forms.type == "anxiety-long") {
    return `
    <div class="form-container">
    <h1>Long Anxiety Questionnaire</h1>
     <h3>Over the last Week, how often have you been bothered by the following problems?</h3>
        <ul>
            <li>Feeling nervous, anxious or on edge</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Not being able to stop or control worrying</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>
            
            <li>Worrying too much about different things</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Trouble relaxing</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Being so restless that it is hard to sit still</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Becoming easily annoyed or irritable</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>
            
            <li>Feeling afraid as if something awful might happen</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>






        </ul>
        
    
    </div>  
    `;
  }
  if (forms.type == "depression-short") {
    return `
  <div class="form-container">
  <h1>Short Depression Questionnaire</h1>
   <h3>Over the last 24 hours, how often have you been bothered by the following problems?</h3>
      <ul>
      <li>Little interest or pleasure in doing things</li>
      <input type="radio" id="0" value="0">
      <label for="0">Not at all</label><br>

      <input type="radio" id="1" value="1">
      <label for="1">Several hours</label><br>

      <input type="radio" id="2" value="2">
      <label for="2">Half the day</label><br>

      <input type="radio" id="3" value="3">
      <label for="3">All day</label><br>

      <li>Feeling down, depressed or hopeless</li>
      <input type="radio" id="0" value="0">
      <label for="0">Not at all</label><br>

      <input type="radio" id="1" value="1">
      <label for="1">Several hours</label><br>

      <input type="radio" id="2" value="2">
      <label for="2">Half the day</label><br>

      <input type="radio" id="3" value="3">
      <label for="3">All day</label><br>
  
  
  
  `;
  }
  if (forms.type == "depression-long") {
    return `
    <div class="form-container">
    <h1>Long Depression Questionnaire</h1>
     <h3>Over the last Week, how often have you been bothered by the following problems?</h3>
        <ul>
            <li>Little interest or pleasure in doing things</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Feeling down, depressed or hopeless</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>
            
            <li>Trouble falling asleep, staying asleep, or sleeping too much</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Feeling tired or having little energy</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Poor appetite or overeatingl</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Feeling bad about yourself - or that you’re a failure or have let yourself or your family down</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>
            
            <li>Trouble concentrating on things, such as reading the newspaper or watching television</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Moving or speaking so slowly that other people could have noticed. Or, the opposite - being so fidgety or restless that you have been moving around a lot more than usual</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>

            <li>Thoughts that you would be better off dead or of hurting yourself in some way</li>
            <input type="radio" id="0" value="0">
            <label for="0">Not at all</label><br>

            <input type="radio" id="1" value="1">
            <label for="1">Several days</label><br>

            <input type="radio" id="2" value="2">
            <label for="2">Half the week</label><br>

            <input type="radio" id="3" value="3">
            <label for="3">All week</label><br>
        </ul>       
    
    </div>  
    `;
  }

  if (forms.type == "ptsd") {
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
          <input type="radio" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" id="yes" value="yes">
            <label for="yes">Yes</label><br>

            <li>Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?</li>
          <input type="radio" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" id="yes" value="yes">
            <label for="yes">Yes</label><br>

            <li>Been constantly on guard, watchful, or easily startled?</li>
          <input type="radio" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" id="yes" value="yes">
            <label for="yes">Yes</label><br>

            <li>Felt numb or detached from people, activities, or your surroundings?</li>
          <input type="radio" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" id="yes" value="yes">
            <label for="yes">Yes</label><br>

            <li>Felt guilty or unable to stop blaming yourself or others for the events(s) or any problems the event(s) may have caused?</li>
          <input type="radio" id="no" value="no">
            <label for="no">No</label><br>

            <input type="radio" id="yes" value="yes">
            <label for="yes">Yes</label><br>
        
        
        
        </ul>
      </div>
    
    
    
    `;
  }
}
