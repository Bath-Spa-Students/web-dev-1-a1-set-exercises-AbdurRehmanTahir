function playAudio(sample) {
    const audio = document.getElementById('audio');
    audio.src = `Audio/${sample}.mp3`;
    audio.play();
}
