export default function Mood() {
  return `
      <div class="modal-body mood-content">
        <h1>How are you feeling today?</h1>
        <i class="material-icons" id="emoji">sentiment_satisfied</i>
        <input type="range" min="0" max="4" value="2" id="slider">
        <br><br>
        <btn class="btn nextCheckin">Next</btn>
      </div>
    `;
}
