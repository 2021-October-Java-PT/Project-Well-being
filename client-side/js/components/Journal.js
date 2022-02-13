import journal from "../../assets/journaling.jpg";

export default function Journal(){
    return `
    <div class="container" id="app">
        <h1 class="journal">Journal Entry</h1>
        <p class="journal">Description of journaling</p>
        <img  class="journal-entry-img" src="${journal}" alt="journal">
        <form class="journal">
            <label for="date">Date:</label><br>
            <input id="date" type="date"><br><br>
            <label for="journal-entry">Journal Entry:</label><br>
            <textarea id="journal-entry" name="content" rows="5" cols="66">Type your journal entry here...</textarea><br>
            <input type="submit">
        </form>
    </div>
    `
}