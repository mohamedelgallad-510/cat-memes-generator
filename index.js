import { catsData } from './data.js'

function getEmotionsArray(cats){
        const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

const emotionRadios = document.getElementById('emotion-radios')
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

renderEmotionsRadios(catsData)