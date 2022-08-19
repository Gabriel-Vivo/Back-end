export class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.questionIndex];
  }

  validateAndContinue(answer) {
  
    const click = answer;

    switch (click) {
      case "Genial":
        this.score = this.score + 5;
        break;
      case "Mas o menos":
        this.score++;
        break;
      case "Es dinámico":
        this.score = this.score + 5;
        break;
      case "Mantiene la atención y el interés":
        this.score = this.score + 4;
        break;
      case "Explica de forma clara, es fácil de entender":
        this.score = this.score + 3;
        break;
      case "Se asegura de que hayamos entendido el tema":
        this.score = this.score + 2;
        break;
      case "Brinda buenos ejemplos":
        this.score = this.score + 2;
        break;
      case "Brindar más ejemplos y casos":
        this.score = this.score - 1;
        break;

      case "Gestionar más eficientemente el tiempo":
        this.score = this.score - 1;
        break;

      case "Explicar más rápido y de manera dinámica":
        this.score = this.score - 2;
        break;

      case "Ninguna de las anteriores":
        this.score = this.score + 0;
        break;
    }

    this.questionIndex++;
  }

  isEnded() {
   
    return this.questions.length === this.questionIndex;
  }
}
