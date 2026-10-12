const sounds = {
    C: new Audio("/sounds/u_c58whxla22-c-422088.mp3"),
    D: new Audio("/sounds/freesound_community-a6-82015.mp3"),
    E: new Audio("/sounds/freesound_community-a6-102820.mp3"),
    F: new Audio("/sounds/freesound_community-b6-82017.mp3"),
    G: new Audio("/sounds/freesound_community-c6-102822.mp3"),
    A: new Audio("/sounds/freesound_community-d6-82018.mp3"),
    B: new Audio("/sounds/freesound_community-d6-82020.mp3")
};

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let note = this.innerText.trim();

        sounds[note].currentTime = 0; // Restart if clicked quickly
        sounds[note].play();

    });

});