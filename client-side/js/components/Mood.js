export default function Mood(){
    return `
    <div id="myModal" class="modal">
    <div class="modal-content" id="modal-mood-content">
      <div class="modal-header">
        <span class="close">&times;</span>
        <h3>Modal Header</h3>
      </div>
      <div class="modal-body mood-content">
        <i class="material-icons" id="emoji">sentiment_satisfied</i>
        <input type="range" min="0" max="4" value="2" id="slider">
        <br><br>
        <button class="nextCheckin">Next</button>
      </div>
      <div class="modal-footer">
        <h3>Modal Footer</h3>
      </div>
    </div>
    </div>
    `;
}