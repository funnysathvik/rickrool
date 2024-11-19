function poop(){
    var synth = window.speechSynthesis;
    speak_data_1 = "my name is jeyajith, but you can call me jey. CHROMAKOPIA";
    utterthis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis);
}
