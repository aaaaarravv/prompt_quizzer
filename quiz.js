/*
Name: Aarav Chauhan

Course: B.Tech CSE (Data Science)

Semester: 1st

Roll No: 2501420027

Program: Quiz Application in JavaScript

Overview: This program implements a simple quiz application that asks the user a series of questions and provides feedback on their answers. At the end of the quiz, it displays the user's total score.

Date: 10/09/2024
*/



// Quiz questions array

const quizQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Evening Star?", answer: "Venus" },
  { question: "What is 67 + 87?", answer: "154" },
  { question: "Who was the 1st black President of the South Africa?", answer: "Nelson Mandela" },
  { question: "Which language is used for web development?", answer: "JavaScript" },
  { question: "What is the name of the world's first artificial satellite?", answer: "Sputnik 1" },
  { question: "Which river is traditionally considered the longest in the world?", answer: "Nile" },
  { question: "What is the smallest prime number?", answer: "2" }
];


// Function to run the quiz

function runQuiz() {
  let score = 0; // Initialize score
  for (let i = 0; i < quizQuestions.length; i++) {

    
    // Take user input
    
    const userAnswer = prompt(quizQuestions[i].question);
    
    
    // Check answer (case-insensitive and trimmed)
    
    if (userAnswer && userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
    }
  }


  // Show final score

  alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}


// Start the quiz

runQuiz();