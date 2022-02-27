import Hesan from "../../images/HesanH.png";
import Jacob from "../../images/JacobS.jpg";
import Matt from "../../images/WCCI12622-029.jpg";
import Razak from "../../images/Rsaka img.png";
import Ryan from "../../images/RyanW.jpg";
import gitHubImg from "../../images/GitHub.png";
import linkedInImg from "../../images/LinkedIn.png";
import Nicole from "../../images/NHofer_Headshot.jpg";

export default function About(){
    return `
    <div class="container-about">    
    <h1 class="margin" id="title">About Us</h1><br>
    <main class="bios">
        <section id="ryanWebster">
            <h2>Ryan Webster</h2>
            <img class="Ryan headshot" src="${Ryan}" alt="Profile Image" />
            <p class>I am a musician and play in a band with my wife. Together we started, and are directors of, a non-profit called Mission Love. I am a creative problem solver who likes to think outside the box. Aside from music I enjoy creating things out of wood and metal. My greatest joy in life are my two sons who are the center of my world..
            I am a detail oriented software developer with a passion for clean coding standards. I graduated from We Can Code IT Bootcamp in 2022. Along with being a self-motivated, natural leader, I have 10+ years of experience in management.
            In 2021 I decided to transition out of a job that had no opportunity for advancement. In deciding what direction I was going to take, I rediscovered my passion for creating with software and found We Can Code IT software development bootcamp. I learned a lot before attending the bootcamp, and a great deal more from the bootcamp itself. I feel that my previous management and problem solving experience will be an asset in my career as a software developer.
               
            </p>
            <a id="github" href="https://github.com/DevDad1">
                <img id="github" src="${gitHubImg}" alt="github" />
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/devdad">
                <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
            </a>
            </section>
        <section id="nicolehofer">
          <h2>Nicole Hofer </h2>
          <img class="headshot" src="${Nicole}" alt="Profile Image" />
          <p class> I am a rising software developer permanently curious about technology. I currently specialize in front-end applications and robotics. Front-end development allows me to be creative and analytical. I love robotics for the speed, consistency and, well, the coffee break.
           During my free time, I enjoy working on and building a homestead.
           
          </p>
          <a id="github" href="https://github.com/nichofer ">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="http://linkedin.com/in/nicole-hofer ">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="razaksaka">
          <h2>Razak Saka</h2>
          <img class="Razak headshot" src="${Razak}" alt="Profile Image" />
          <p class>  I have more than 10 years work experience across Accounting and
          Finance environment in the Financial Service industry. I earned a
          Bachelors degree in Accounting and MBA from Baldwin-Wallace
          University. I had always been interested in Information Technology. I intend to leverage my data analysis and project management experience in the IT arena.I enjoy travelling and out-door activities with our twin
          boys.
            
          </p>
          <a id="github" href="https://github.com/Razsaka">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="https://www.linkedin.com/in/razak-saka-34a183113/">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>

        <section id="hesanHaghnazar">
          <h2>Hesan Haghnazar </h2>
          <img class="headshot" src="${Hesan}" alt="Profile Image" />
          <p class> Results-driven Software Developer with 15+ years of professional Information Technology experience. Wide range of language experience from UNIX, HTML, and Full Stack JAVA. Experience in assisting with directing and managing IT departments for small to large companies and enterprises. Aided in migration to Cloud services including Cloud computing through web apps & mobile device backups through mobile data connections.
           
          </p>
          <a id="github" href="https://github.com/hhaghnazar ">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="http://www.linkedin.com/in/hha225">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>

        <section id="mattWelfley">
          <h2>Matt Welfley</h2>
          <img class="headshot" src="${Matt}" alt="Headshot" />
          <p class> Matt graduated from Kent State University in 2014 with a Bachelor of
          Arts in Organizational Communication. He enjoys playing disc golf,
          climbing, and backpacking in his freetime. He also enjoys working with
          raspberry pi's; specifically running pihole.
          </p>
          <a id="github" href="https://github.com/Matt1218">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="https://github.com/Matt1218">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>
        <section id="jacobstout">
          <h2>Jacob Stout</h2>
          <img class="Jacob headshot" src="${Jacob}" alt="Profile Image" />
          <p class> My passion with computer systems started a very young age. As I started growing up so did technologies all around me. I had to understand it all. So I started taking computers apart and putting them back together. I've installed and worked with countless different types of software from music tools like ProTools to POS systems like Micros. 
          I also enjoy reprogramming handheld game systems to unlock their full potential. More recently I have started my journey into software engineering and website development and have learned several new languages. Such as: Java, Javascript, HTML, CSS, and Spring. I also have experience in utilizing agile and scrum methodologies in a team environment.
           
          </p>
          <a id="github" href="https://github.com/JediJake66">
            <img  id="github" src="${gitHubImg}" alt="github" />
          </a>
          <a id="linkedin" href="https://www.linkedin.com/in/jacob-a-stout/">
            <img id="linkedin" src="${linkedInImg}" alt="linkedin" />
          </a>
        </section>        
    </div>
    `;
}