const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence){
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}


function wishMe(){
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12 ){
        speak("Good Morning Sir");
    }
    else if(hr == 12){
        speak("Good Noon");
    }
    else if(hr > 12 && hr <=17){
        speak("Good AfterNoon");
    }
    else{
        speak("Good Evening");
    }
}

window.addEventListener('load',()=>{
    speak("Activating jarvis ");
    speak("Goin online");
    speak("Ready to go sir");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello sir";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine sir tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is jarvis";
        speech.text = finalText;
    }

    else if(message.includes('who are you')) {
        const finalText = "I am jarvis created and developed by Nabil Khan";
        speech.text = finalText;
    }
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google sir";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram sir";
        speech.text = finalText;
    }
    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening Youtube sir";
        speech.text = finalText;
    }

    else if(message.includes('open facebook')) {
        window.open(`https://facebook.com`,"_blank");
        const finalText = "Opening facebook sir";
        speech.text = finalText;
    }
    else if(message.includes('open github')) {
        window.open(`https://github.com`,"_blank");
        const finalText = "Opening Github sir";
        speech.text = finalText;
    }
    else if(message.includes('open twitter')) {
        window.open(`https://twitter.com`,"_blank");
        const finalText = "Opening twitter sir";
        speech.text = finalText;
    }

    else if(message.includes('what is ')|| message.includes('who is ') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank");

        const finalText = "This is what I foud on the internet regarding  "+message;
        speech.text = finalText ;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined,{month:"short",day:"numeric"})
        const finalText = date;
        speech.text = finalText;
    }
    else if(message.includes('open calculator')) {
        window.open('Calculator://')
        const finalText = "Opening calculator";
        speech.text = finalText;
    }


    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank");

        const finalText = "I found some information for "+message+ "on google";
        speech.text = finalText ;
    }
    speech.volume = 1;
    speech.pitch =  1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
    console.log(speech);
}