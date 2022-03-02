import mindfulness from "../../assets/mindfulness_pic.png";


export default function Mindfulness(){
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

            <img  class="mindfulness-entry-img" src="${mindfulness}" alt="a picture showing thousands of monks meditating at the same time">

            <br>
            <br>
            <br>
            <br>
            <div class="mindfulness_container">
                <h1 class="search-header">Mindfulness</h1>

                <p class="mindfulness_line">Psychology Today states that in order to live mindfully, one must live in the moment and reawaken oneself to the present, rather than dwelling on the past or anticipating the future. To be mindful is to observe and label thoughts, feelings, sensations in the body in an objective manner. Mindfulness can therefore be a tool to avoid self-criticism and judgment while identifying and managing difficult emotions.
                Mindfulness is rooted in ancient teachings that include a journey toward enlightenment, and the concept of “sati,”—which encompasses attention, awareness, and being present—is considered the first step toward enlightenment. The term was roughly translated from an ancient language (Pali) into the term “mindfulness.”</p>
                <p class="mindfulness_line">As mindfulness has shifted into mainstream science and medicine, it has become a pivotal therapeutic technique; including integration into Mindfulness-Based Cognitive Therapy, Dialectical Behavior Therapy, and Acceptance and Commitment Therapy, among others.</p>

                <h2 class="mindfulness-header">How do I practice mindfulness?</h2>
                <p class="mindfulness_line">To cultivate awareness, observe your thoughts and emotions and explore why those specific ideas might be surfacing. To cultivate acceptance, avoid judging or pushing away unpleasant thoughts. Emotions are natural and everyone has them—acknowledging them can help you understand yourself better and move forward.</p>
                

                <h2 class="mindfulness-header">What is Mindfulness</h2>
                <p class="mindfulness_line">Mindfulness encompasses two key ingredients: awareness and acceptance. Awareness is the knowledge and ability to focus attention on one’s inner processes and experiences, such as the experience of the present moment. Acceptance is the ability to observe and accept—rather than judge or avoid—those streams of thought.</p>
                
                <h2 class="mindfulness-header">What is the purpose of Mindfulness</h2>
                <p class="mindfulness_line">The goal of mindfulness is to cultivate perspective on one’s consciousness and identity that can bring greater peace mentally and relationally. Mindfulness may also be used in mindfulness-based therapies, to address stress, anxiety, or pain, and simply to become more relaxed.</p>

                <h2 class="mindfulness-header">What’s the difference between mindfulness and meditation?</h2>
                <p class="mindfulness_line">Mindfulness is one form of meditation. Meditation utilizes various practices to quiet the mind or achieve a higher level of consciousness, one of which is mindfulness. Mindfulness can be cultivated within or outside of formal meditation and woven into any activity, such as taking a walk or being engaged in conversation.</p>

                <h2 class="mindfulness-header">What are the benefits of meditation?</h2>
                <p>According to the Mayo Clinic, meditation has been studied in many clinical trials. The overall evidence supports the effectiveness of meditation for various conditions, including:</p>
                    <ul class="mindfulness_list">
                        <li class="mindfulness_listItem">Stress</li>
                        <li class="mindfulness_listItem">Anxiety</li>
                        <li class="mindfulness_listItem">Pain</li>
                        <li class="mindfulness_listItem">Depression</li>
                        <li class="mindfulness_listItem">Insomnia</li>
                        <li class="mindfulness_listItem">High Blood Pressure (Hypertension)</li>
                    </ul>
                    <br>
                    <p>Preliminary research indicates that meditation can also help people with asthma and fibromyalgia.</p>
                    <p class="mindfulness_line">Meditation can help you experience thoughts and emotions with greater balance and acceptance. Meditation also has been shown to:</p>
                        <ul class="mindfulness_list">
                            <li class="mindfulness_listItem">Improve attention</li>
                            <li class="mindfulness_listItem">Decrease job burnout</li>
                            <li class="mindfulness_listItem">Improve Sleep</li>
                            <li class="mindfulness_listItem">Improve diabetes control</li>
                        </ul>

                <h2 class="mindfulness-header">What are some examples of mindfulness exercises?</h2>
                    <p class="mindfulness_line">There are many simple ways to practice mindfulness. Some examples include:</p>
                        <ul class="mindfulness_list">
                            <li class="mindfulness_listItem"><b>Pay attention:</b> It's hard to slow down and notice things in a busy world. Try to take the time to experience your environment with all of your senses — touch, sound, sight, smell and taste. For example, when you eat a favorite food, take the time to smell, taste and truly enjoy it.</li>
                            
                            <li class="mindfulness_listItem"><b>Live in the moment:</b> Try to intentionally bring an open, accepting and discerning attention to everything you do. Find joy in simple pleasures.</li>
                            <li class="mindfulness_listItem"><b>Accept Yourself:</b>Treat yourself the way you would treat a good friend.</li>
                            <li class="mindfulness_listItem"><b>Focus on your breathing: </b>When you have negative thoughts, try to sit down, take a deep breath and close your eyes. Focus on your breath as it moves in and out of your body. Sitting and breathing for even just a minute can help.</li>                        
                            
                        </ul>
                    <h2 class="mindfulness_line">You can also try more structured mindfulness exercises, such as:</h2>
                    <ul class="mindfulness_list">
                        <li class="mindfulness_listItem"><b>Body scan meditation: </b>Lie on your back with your legs extended and arms at your sides, palms facing up. Focus your attention slowly and deliberately on each part of your body, in order, from toe to head or head to toe. Be aware of any sensations, emotions or thoughts associated with each part of your body.</li>
                        
                        <li class="mindfulness_listItem"><b>Sitting Meditation</b>Sit comfortably with your back straight, feet flat on the floor and hands in your lap. Breathing through your nose, focus on your breath moving in and out of your body. If physical sensations or thoughts interrupt your meditation, note the experience and then return your focus to your breath.</li>
                        <li class="mindfulness_listItem"><b>Walking Meditation</b>Find a quiet place 10 to 20 feet in length, and begin to walk slowly. Focus on the experience of walking, being aware of the sensations of standing and the subtle movements that keep your balance. When you reach the end of your path, turn and continue walking, maintaining awareness of your sensations.</li>
                        
                        
                        
                    </ul>
                
                

                


            
            </div>
        </div>
    
    `;
}