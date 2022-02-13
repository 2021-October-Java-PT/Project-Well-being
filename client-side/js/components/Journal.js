import journal from "../../assets/journaling.jpg";

export default function Journal(){
    return `
    <div class="container" id="app">
        <h1>Journal Entry</h1>
        <p>Description of journaling</p>
        <img class="journal-entry-img" src="${journal}" alt="journal">
        <form>
            <label for="date">Date:</label><br>
            <input id="date" type="date">
            <label for="journal-entry">Journal Entry:</label><br>
            <textarea id="journal-entry" name="content" rows="5" cols="66">Type your journal entry here...</textarea>
            <input type="submit">
        </form>
    </div>
    `
}