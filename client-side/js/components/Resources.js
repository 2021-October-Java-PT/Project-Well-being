export default function Resources(){
    return `
        <div class="container-about" id="app">
            <div class="search-container">
                <h1 class="search-header">Search for additional resources</h1>
                    <div>
                        <input type="text" id="search-bar" placeholder="Search.." onfocus="this.value=''">
                        <button type="button" id="search-submit"><i class="fa fa-search"></i></button>
                    </div>
            </div>
            <div class="search-list id="search-list"></div>
            <div class="resources_list">
                <h2 class="links-header">Or select from these quick links</h2>
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
            </div>
        </div>
    
    `;
}