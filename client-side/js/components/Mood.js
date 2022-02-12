export default function Mood(){
    return `
    <div id="myModal" class="modal">
        <div class="modal-content mood-content">
            <span class="close">&times;</span>
            <i class="material-icons" id="emoji">
            sentiment_satisfied
            </i>
            <input type="range" min="0" max="4" value="2" id="slider">
            <br><br>
            <button class="nextCheckin">Next</button>
        </div>
    </div>
    `;
}



/*<div class="mood-container" id="">
    <div class="mood-content">
        <i class="material-icons" id="emoji">
        sentiment_satisfied
        </i>
        <input type="range" min="0" max="4" value="2" id="slider">
    </div>
</div>
</div>
</div> */