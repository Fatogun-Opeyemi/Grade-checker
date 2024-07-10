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

   
   if (typeScore.value== '') {
    console.log('Invalid');
    paragraghForDisplay.innerHTML = 'Invalid'
   }
   else if (typeScore.value>=0 && typeScore.value < 40 ) {
    console.log('Your grade is F')
    paragraghForDisplay.innerHTML = 'F'
    audio1.play()
}else if (typeScore.value >= 40 && typeScore.value < 50) {
    console.log('Your grade is D')
    paragraghForDisplay.innerHTML = 'D'
    audio2.play()
}else if (typeScore.value >= 50 && typeScore.value < 60) {
    console.log('Your grade is C')
    paragraghForDisplay.innerHTML = 'C'
    audio3.play()
}else if (typeScore.value >= 60 && typeScore.value < 70) {
    console.log('Your grade is B')
    paragraghForDisplay.innerHTML = 'B'
    audio4.play()
}else if (typeScore.value >= 70 && typeScore.value <= 100) {
    console.log('Your grade is A')
    paragraghForDisplay.innerHTML = 'A'
    paragraghForDisplay.style.margin = '1vw'
    audio5.play()
}
else {
    console.log('Input an actual score')
    paragraghForDisplay.innerHTML = 'Input an actual score'
}

typeScore.value = '' // to clear d input



}








//for songs
// then for each condition: song.play()
 