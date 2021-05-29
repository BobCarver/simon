const
audioCtx = new window.AudioContext,
freq = {green:391.995, red: 329.628, yellow: 261.626, blue: 195.998, lose:42},
playTone = (button, duration) => new Promise(r => {
    const osc = audioCtx.createOscillator();
    osc.frequency.value = freq[button];
    osc.type = "square";

    osc.start();
    window[button]?.classList.add('on')
    osc.connect(audioCtx.destination);
    osc.stop(audioCtx.currentTime+duration)
    osc.onended = () => {
        window[button]?.classList.remove('on')
        r(button)
    }
}),
delay = n => new Promise( r => setTimeout(r, n*1000)),
foo = () => new Promise(r=> {
    setTimeout(r,3000)
    document.addEventListener('click', r, {once:true})
}),

playGame = async () => {
    const
    tones=[],
    duration = () => tones.length <6 ?.42: tones.length < 14 ?.32 :.22
trial:
    while(tones.length < 5) {
        counter.textContent = tones.length

        for(const tone of tones){
            await playTone(tone, duration())
            await delay(.2)
        }
        for(const tone of tones){
            if( tone == (await foo())?.target.id) {
                await playTone(tone, .22)
            } else {
                await playTone('lose', 1.5)
                if( false  ) tones.length = 0;
                continue trial
            }
        }
        // The time between the player finishing a sequence and the game playing the sequence again (with an extra colour) is 0.8 seconds.
        await delay(.8)
        tones.push(['red','green','blue','yellow'][Math.random()*4|0])
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
    await playTone(vt, .02)
    for(let i=0; i < 5; i++) {
        await delay(.02)
        await playTone(vt, .07)
    }
}
start.addEventListener('click', ()=> {
    start.classList.add('on')
    playGame()
})
strict.addEventListener('click', ()=> {
    strict.classList.add('on')
})



