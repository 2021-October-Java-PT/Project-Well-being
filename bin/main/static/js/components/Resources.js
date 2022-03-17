const picture = "/images/DSC03254.jpg";

export default function Resources(){
    return `
        <div class="container-about">
            <div class="search-container">
                <h1 class="search-header">Additional Resources<h1>
                <h2>Search Topics</h2>
                <br>
                    <div>
                        <input type="text" id="search-bar" placeholder="Enter keyword" onfocus="this.value=''">
                        <button type="button" id="search-submit"><i class="fa fa-search"></i></button>
                    </div>
            </div>
            <div class="search-list" id="search-list"></div>
            <div>
                <img class="resources-image" src="${picture}" alt="Resources Image"
            </div>
            <div class="mindfulness_resource">
                <br><hr><br>
                <h2 class="mindful-header">Mindfulness</h2>
            <p class="mindfulness_line">Psychology Today states that in order to live mindfully, one must live in the moment and reawaken oneself to the present, rather than dwelling on the past or anticipating the future. To be mindful is to observe and label thoughts, feelings, and sensations in the body in an objective manner. 
            Mindfulness can be a tool to avoid self-criticism and judgment while identifying and managing difficult emotions.</p>
            <button class="practice-mindfulness">Start Practicing Mindfulness</button>
            </div>
            <div class="resources_list">
                <br><hr><br>
                <h2 class="links-main-header">Quick links</h2>
                    <h3 class="links-subheader">Resources on Anxiety</h3>
                        <ul>
                            <li><a href="https://www.mayoclinic.org/diseases-conditions/anxiety/diagnosis-treatment/drc-20350967">Anxiety Disorders by the Mayo clinic</a>
                            <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573566/">Treatment of Anxiety Disorders by the US National Institutes of Health</a>
                            <li><a href="https://www.mayoclinic.org/diseases-conditions/generalized-anxiety-disorder/diagnosis-treatment/drc-20361045">Generalized Anxiety Disorder by the Mayo Clinic</a>
                            <li><a href="https://www.webmd.com/anxiety-panic/natural-remedies-for-anxiety">Natural Remedies to Alleviate Anxiety by WebMD</a>
                        </ul>
                    <h3 class="links-subheader">Resources on Depression</h3>
                        <ul>
                            <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK279282/">Treatments for Depression by the National Institutes of Health</a>
                            <li><a href="https://www.apa.org/depression-guideline/treatments/">Depression Treatments by the American Psychology Association</a>
                            <li><a href="https://www.mayoclinic.org/diseases-conditions/depression/diagnosis-treatment/drc-20356013">Depression (Major Depressive Disorder) by the Mayo Clinic</a>
                            <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3181767/">Treatments in Depression by the National Institutes of Health</a>
                        </ul>
                        <h3 class="links-subheader">Resources on Post Tramatic Stress Disorder</h3>
                        <ul>
                            <li><a href="https://www.ptsd.va.gov/">United States Veterans Affairs National Center for Post Tramatic Stress Disorder Mental Health Information</a>
                            <li><a href="http://www.ptsdalliance.org/about-ptsd/">Post Tramatic Stress Disorder Alliance: You are not alone - About PTSD mental health information</a>
                            <li><a href="https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd">Post Tramatic Stress Disorder Mental Health Information by the National Institute of Mental Health</a>
                            <li><a href="https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd">Understanding Post Tramatic Stress Disorder by the Anxiety and Depression Association of America</a>
                            <li><a href="https://nami.org/About-Mental-Illness/Mental-Health-Conditions/Posttraumatic-Stress-Disorder/Treatment">Post Traumatic Stress Disorder Treatment by the National Alliance on Mental Illness</a>
                        </ul>    
                    <h3 class="links-subheader">Game to help with Depression</h3>
                    <h4><a href="https://www.sparx.org.nz/home">SPARX - AntiDepression Game</a></h4>

                    <h3 class="links-subheader">Video Resources </h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/04yBH7q1Zc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4OEdacorqgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    
    `;
}