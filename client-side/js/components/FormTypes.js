export default function FormTypes() {
  return `
      <div class="modal-body form-content">
        <div class="styling_container"> 
        <div class="forms-headers">
          <h1 class="survey-header">Well-being Surveys</h1>
          <h2>Choose the best survey that meets your needs</h2>
          </div>
      
          <div class="typeButtons">
            <button type="button" class="anxiety-short" id="typeButton">Daily Anxiety</button>
            <button type="button" class="anxiety-long" id="typeButton">Weekly Anxiety</button>
            <button type="button" class="depression-short" id="typeButton">Daily Depression</button>
            <button type="button" class="depression-long" id="typeButton">Weekly Depression</button>
            <button type="button" class="ptsd" id="typeButton">PTSD</button>
            </div>
          </div>  
        
    `;
}