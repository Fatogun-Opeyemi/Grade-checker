//declaring variables for the audios
const audio1 = new Audio('./Audio/mocking-laughter.wav')
const audio2 = new Audio('./Audio/aww.mp3')
const audio3 = new Audio('./Audio/smallclapping.wav')
const audio4 = new Audio('./Audio/mild-applause.wav')
const audio5 = new Audio('./Audio/BigApplause.wav')


//how to access input
console.log(typeScore); // displays the entire input element

console.log(typeScore.type); //displays the type number

//function

function checkScore () {
   // console.info(score.value) //linked to our button

        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
   
   if (typeScore.value== '') {
    console.log('Invalid. Please input a score from 0-100');
    paragraghForDisplay.innerHTML = 'Invalid, Please input a score from 0-100'
   }
   else if (typeScore.value>=0 && typeScore.value < 40 ) {
    console.log('Your grade is F')
    paragraghForDisplay.innerHTML = 'F'
    paragraghForDisplay.style.marginLeft = '28%'
    audio1.play()
}else if (typeScore.value >= 40 && typeScore.value < 50) {
    console.log('Your grade is D')
    paragraghForDisplay.innerHTML = 'D'
    paragraghForDisplay.style.marginLeft = '28%'

    audio2.play()
}else if (typeScore.value >= 50 && typeScore.value < 60) {
    console.log('Your grade is C')
    paragraghForDisplay.innerHTML = 'C'
    paragraghForDisplay.style.marginLeft = '28%'

    audio3.play()
}else if (typeScore.value >= 60 && typeScore.value < 70) {
    console.log('Your grade is B')
    paragraghForDisplay.innerHTML = 'B'
    paragraghForDisplay.style.marginLeft = '28%'

    audio4.play()
}else if (typeScore.value >= 70 && typeScore.value <= 100) {
    console.log('Your grade is A')
    paragraghForDisplay.innerHTML = 'A'
    paragraghForDisplay.style.marginLeft = '28%'
    audio5.play()
}
else {
    console.log('Input a score from 0-100')
    paragraghForDisplay.innerHTML = 'Input a score from 0-100'
}

typeScore.value = '' // to clear d input



}








//for songs
// then for each condition: song.play()
 