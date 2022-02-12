export default function Mood(){
    return `
    <div class="container" id="app">
    <div class="wrapper">
    <div class="mood-container" id="">
        <div class="mood-content">
            <i class="material-icons" id="emoji">
            sentiment_satisfied
            </i>
            <input type="range" min="0" max="4" value="2" id="slider">
            <button class="nextCheckin">Next</button>
        </div>
    </div>
    </div>
    </div>
    `;
}


