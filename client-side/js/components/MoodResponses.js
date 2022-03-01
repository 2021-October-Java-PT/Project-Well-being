const emoticons = ["mood_bad",
            "sentiment_very_dissatisfied",
            "sentiment_satisfied",
            "sentiment_satisfied_alt",
            "sentiment_very_satisfied"
            ];

export default function MoodResponses(moods) {
    return `
    <div class="styling_container"> 
    <div class="moods-header">
        <h1>Mood Trends</h1>
    </div>
    <div class="moods__list">
        ${moods.map(mood => {
        return `
        <i class="material-icons" id="emoji">${emoticons[mood.value]}</i>
            <input type="hidden" value="${mood.value}" id="face">
            `;
        }).join('')}
    </div>
    </div>
    `;
}
