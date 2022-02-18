export default function FormTypes() {
  return `
      <div class="modal-body form-content">
        <h3>Well-being Surveys</h3>
        <h3>Choose the best survey that meets your needs</h3>
        <div class="typeButtons">
        <button type="button" class="anxiety-short" id="typeButton">Daily Anxiety</button>
        <button type="button" class="anxiety-long" id="typeButton">Weekly Anxiety</button>
        <button type="button" class="depression-short" id="typeButton">Daily Depression</button>
        <button type="button" class="depression-long" id="typeButton">Weekly Depression</button>
        <button type="button" class="ptsd" id="typeButton">PTSD</button>
        </div>  
    `;
}