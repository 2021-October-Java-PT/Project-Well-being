

export default function Resources(){
    return `
    <div class="container" id="app">
    <div class="search-container">
    <h2>Search for additional resources</h2>
        <div>
        <input type="text" id="search-bar" placeholder="Search.." onfocus="this.value=''">
        <button type="button" id="search-submit"><i class="fa fa-search"></i></button>
        </div>
        <div class="search-list id="search-list"></div>
    </div>
    <div class="resources_list">
    <h2>Or select from these quick links</h2>
        <h3>Resources on Anxiety</h3>
            <ul>
            <li><a href="https://www.mayoclinic.org/diseases-conditions/anxiety/diagnosis-treatment/drc-20350967">Anxiety Disorders by the Mayo clinic</a>
            <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5573566/">Treatment of Anxiety Disorders by the US National Institutes of Health</a>
            <li><a href="https://www.mayoclinic.org/diseases-conditions/generalized-anxiety-disorder/diagnosis-treatment/drc-20361045">Generalized Anxiety Disorder by the Mayo Clinic</a>
            <li><a href="https://www.webmd.com/anxiety-panic/natural-remedies-for-anxiety">Natural Remedies to Alleviate Anxiety by WebMD</a>
            </ul>
        <h3>Resources on Depression</h3>
            <ul>
            <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK279282/">Treatments for Depression by the National Institutes of Health</a>
            <li><a href="https://www.apa.org/depression-guideline/treatments/">Depression Treatments by the American Psychology Association</a>
            <li><a href="https://www.mayoclinic.org/diseases-conditions/depression/diagnosis-treatment/drc-20356013">Depression (Major Depressive Disorder) by the Mayo Clinic</a>
            <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3181767/">Treatments in Depression by the National Institutes of Health</a>
            </ul>
        <h3><a href="https://www.sparx.org.nz/home">SPARX - AntiDepression Game</a></h3>
    </div>
    </div>
    `
}