const
audioCtx = new (window.AudioContext || window.webkitAudioContext),
freq = {green:391.995, red: 329.628, yellow: 261.626, blue: 195.998, lose:42}
playSound = (button, duraction) => p = new Promise(r, () => {
    const osc = audioCtx.createOscillator();
    osc.frequency.value = freq[button];
    osc.type = "square";

    osc.start();
    window[button].classList.add('on')
    osc.connect(audioCtx.destination);
    duration || osc.stop(audioCtx.currentTime+duration)
    osc.onended(() => {
        window[button].classList.remove('on')
        r()
    })
    p.osc = osc
}),

resp = (inn) = new Promise((r), ()=>{
    // on an 'click' clear Timeout, start tone and wait for mouse up
    // resolve with the value of the button pressed
    const f = event=> {
        clearTimeout(timeOut) // cancel Timeout
        const osc = playSound(tone).osc

        document.addEventListener('onmouseup', event => {
            osc.stop(0)
            r(button)
        },{once:true})
    },
    // In game time out: 3 seconds (after which the losing tone is played)
    timeOut = setTimeout(() => {
        document.removeEventListener('onmousedown', f)
        r()
    }, 3)
    document.addEventListener('onmousedown', f)
}),
playGame = async () => {
    const duration = tones.length <6 ?.42: tones.length < 14 ?.32 :.22
    tones=[]
    while(tones.length < xxx) {
        tones.push()
        tones.forEach(tone => await playTone(tone, duration()))
        Delay(.2)
        for(const tone of tones){
            if( tone != await resp()) {
                await playTone(lose, 1.5)
                if( strict )break game;
                break ?
            }
        }
        // The time between the player finishing a sequence and the game playing the sequence again (with an extra colour) is 0.8 seconds.
        delay(.8)
    }
    // If the required sequence length for the skill level
    // has been reached  play a victory tone of six beeps
    // (of the same frequency as the last colour in the sequence).
    // The first beep is 0.02 seconds followed by 5 beeps of 0.07
    // seconds with a 0.02 second gap between tones the light of the last
    // colour of the sequence is flashed on with each beep.
    // The victory tone is played 0.8 seconds after the last colour
    // of the sequence has been pressed and released.
    const vt = tones[tones.length-1]
    playTone(vt, .02)
    for(const i=0; i < 5; i++) {
        await delay(.02)
        await playTone(vt, .07)
    }
}



