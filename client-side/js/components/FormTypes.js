export default function FormTypes() {
  return `
      <div class="modal-body form-content">
         
        <div class="forms-headers">
          <h1 class="survey-header">Well-being Surveys</h1>
          <h2>Choose the best survey that meets your needs</h2>
          </div>
      
          <div class="typeButtons">
            <button type="button" class="anxiety-short" id="typeButton1">Daily Anxiety</button>
            <button type="button" class="anxiety-long" id="typeButton2">Weekly Anxiety</button>
            <button type="button" class="depression-short" id="typeButton3">Daily Depression</button>
            <button type="button" class="depression-long" id="typeButton4">Weekly Depression</button>
            <button type="button" class="ptsd" id="typeButton5">PTSD</button>
            </div>
            
    `;
}
