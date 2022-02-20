export default function Contact(){
    return`
    <div class="container-contact">
    <section class="contact-area" id="contact">
        
        <div class="contact-div">
            <h1>Contact Information</h1>
            <p>Phone: 555-555-5555</p>
            <p>Fax: 123-456-7890</p>
            <p>Email: unboxedthoughts@projectwellbeing.com</p>
    
            <p><a href="https://goo.gl/maps/NYFAA2ag9p4BAKRm8">2645 N High St, Columbus OH 43202</a><p>    
           
            <div class="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.6534975791105!2d-83.01442788435982!3d40.01618678782552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388ea08729618b%3A0x70ced8781fa94d9d!2sWe%20Can%20Code%20IT!5e0!3m2!1sen!2sus!4v1644095697631!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <div class="feedback-form">
            <h2>Send us your feedback</h2>
            <form>
                <br>
                    Your name: <br>
                        <input type="text" name="full-name"><br>
                        <br>
    
                    Your email: <br>
                        <input type="text" name="email"><br>
                        <br>
    
                    Your comments: <br>
                        <textarea name="comments" rows="15" cols="50"></textarea><br><br>
                        
                    <input type="submit" value="Submit">
            </form>
            </div>
        </div>
    </section>
    
    `
}