export default function FormTypes() {
  return `
  <div id="myModal1" class="modal">
  <div class="modal-content" id="modal-form-content">
      <div class="modal-header">
        <span class="close">&times;</span>
        <h3>Daily Questionnaires</h3>
      </div>
      <div class="modal-body form-content">
        <h3>Choose the best survey that meets your needs</h3>
        <div class="typeButtons">
        <button type="button" class="anxiety-short" id="typeButton">Daily Anxiety</button>
        <button type="button" class="anxiety-long" id="typeButton">Weekly Anxiety</button>
        <button type="button" class="depression-short" id="typeButton">Daily Depression</button>
        <button type="button" class="depression-long" id="typeButton">Weekly Depression</button>
        <button type="button" class="ptsd" id="typeButton">PTSD</button>
        </div>  
      </div>
      <div class="modal-footer">
        <h3>Modal Footer</h3>
      </div>
  </div>
  </div>
    `;
}

/* <h1>Daily Questionnaires</h1>
<h3>Choose the best survey that meets your needs</h3>

<div class="typeButtons">
<button type="button" class="anxiety-short" id="typeButton">Daily Anxiety</button>
<button type="button" class="anxiety-long" id="typeButton">Weekly Anxiety</button>
<button type="button" class="depression-short" id="typeButton">Daily Depression</button>
<button type="button" class="depression-long" id="typeButton">Weekly Depression</button>
<button type="button" class="ptsd" id="typeButton">PTSD</button>
</div>  */