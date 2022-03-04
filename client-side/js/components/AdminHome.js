import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg"

export default function AdminHome(){
    return `
    <div class="container-contact">
    <h1>Administrator Homepage</h1>
    <br>
    <div id="services">
        <div class="services-div">
            <div class="services-item" id="service-one">
                <article class="section-one">
                <h2 class="subheading">User 1</h2>
                <p class=""><img class="articleImg articleImg1" id="" src="${user1}" alt="Img One"">
                    <input type='hidden' id="user1" class="" value="user1">
                </p>               
                <p class="infoPara"></p>
                </article> 
            </div>
            <div class="services-item" id="service-two">
                <article class="section-two">
                <h2 class="subheading">User 2</h2>
                <p class=""><img class="articleImg articleImg2" id="" src="${user2}" alt="Img Two">
                    <input type='hidden' id="user2" class="" value="user2">
                </p>
                </article> 
            </div>
        </div>
    </div>
    `;
}