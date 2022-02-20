export default function Mood(){
    return `
      <div class="modal-body mood-content">
        <h3>Feeling Scale</h3>
        <i class="material-icons" id="emoji">sentiment_satisfied</i>
        <input type="range" min="0" max="4" value="2" id="slider">
        <br><br>
        <button class="nextCheckin">Next</button>
      </div>
    `;
}
