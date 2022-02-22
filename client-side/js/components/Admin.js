import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg"

export default function Admin(){
    console.log('Admin Page');
    return `
    <div class="container-contact">
    <h1>Admin Page</h1>
    <div id="services">
        <div class="services-div">
            <div class="services-item" id="service-one">
                <article class="section-one">
                <h2 class="subheading">User 1</h2>
                <img class=articleImg id="user1" src="${user1}" alt="Img One">
                <p class="infoPara"></p>
                </article> 
            </div>
            <div class="services-item" id="service-two">
                <article class="section-two">
                <h2 class="subheading">User 2</h2>
                <img class=articleImg id="user2" src="${user2}" alt="Img Two">
                <p class="infoPara"></p>
                </article> 
            </div>
        </div>
    </div>
    `;
}