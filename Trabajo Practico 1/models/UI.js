export class UI {
    showQuestion(text) {
        const questionTitle = document.getElementById("question")
        questionTitle.innerText = text
    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById("choices")
        choicesContainer.innerHTML = ''


        for (let i=0; i<choices.length; i++) {
            const button = document.createElement("button")
            button.innerText = choices[i]
            button.className = "button"
            button.addEventListener('click', () => callback(choices[i]))
            choicesContainer.append(button)
        }
    }

    showScore(score) {

        if (score >= 6) {
    
        swal(`Tu desempeño es Bueno ,obtuviste una califiacion de ${score}` );

        } if (score>=9 ){
      
        swal(`Tu desempeño es Exelente, obtuviste una calificacion de ${score}` );

        } else{
            swal(`Tu desempeño es Malo, obtuviste una calificacion de ${score}` );
        }
      
    }

    showProgress(currentIndex, total) {
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currentIndex} of ${total}`
    }
}