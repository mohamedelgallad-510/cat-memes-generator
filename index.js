import { catsData } from './data.js'

function getEmotionsArray(cats){
        const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)    
            }
        }
    }
    return emotionsArray
}

const emotionRadios = document.getElementById('emotion-radios')
const getImgBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')


getImgBtn.addEventListener('click', getMatchingCatsArray)
emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
/*
Challenge:
1. Create an array of all items that have 
   the "radio" class.
2. Iterate over the array and remove the 
   "highlight" class from each one.
*/ 
    const radios = document.getElementsByClassName('radio')
    
    for (let radio of radios){
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats)
    let emotionsString = ""
    
    for (let emotion of emotions) {
        emotionsString += `
        <div class='radio'>
            <label for='${emotion}'>${emotion}</label>
            <input
            type='radio'
            id='${emotion}'
            value='${emotion}'
            name='emotions-radio'
            >
        </div>` 
    }
    
    emotionRadios.innerHTML = emotionsString
}

function getMatchingCatsArray() {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked')
    if (document.querySelector('input[type="radio"]:checked') !== null) {
        console.log(selectedEmotion.value)
    }

    const isGif = gifsOnlyOption.checked
    
    console.log(isGif)
}

renderEmotionsRadios(catsData)