function poop(){
    var synth = window.speechSynthesis;
    speak_data_1 = "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you";
    utterthis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis);
}