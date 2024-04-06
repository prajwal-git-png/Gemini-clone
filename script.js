import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDyulb7cyN53ym81Nom1Lk0i_OxLHifdoY";
const genAI = new GoogleGenerativeAI(API_KEY);

document.querySelector('.btn').addEventListener('click', run);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // Get user input from the input field
  const userInput = document.querySelector('.user-input').value;

  // Show user input
  showUserMessage(userInput);

  const prompt = userInput;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  // Show bot response
  showBotMessage(text);
}

function showUserMessage(message) {
  const userMessageDiv = document.createElement("div");
  userMessageDiv.className = "user-msg";

  // Create image element
  const userImage = document.createElement("img");
  userImage.src = "bot.png"; // Replace with the path to the user image
  userImage.alt = "User Image";
  userImage.className = "user-img";

  // Append image and message to the message container
  userMessageDiv.appendChild(userImage);
  userMessageDiv.textContent = message;

  document.querySelector('.msg-container').appendChild(userMessageDiv);
}

function showBotMessage(message) {
  const botMessageDiv = document.createElement("div");
  botMessageDiv.className = "bot-msg";

  // Create image element
  const botImage = document.createElement("img");
  botImage.src = "bot.png"; // Replace with the path to the bot image
  botImage.alt = "Bot Image";
  botImage.className = "bot-img";
  
  // Append image and message to the message container
  botMessageDiv.appendChild(botImage);
  botMessageDiv.textContent = message;
  
  document.querySelector('.msg-container').appendChild(botMessageDiv);
  document.querySelector('.user-input').value = "";
}











// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = "AIzaSyDyulb7cyN53ym81Nom1Lk0i_OxLHifdoY";
// const genAI = new GoogleGenerativeAI(API_KEY);

// document.querySelector('.btn').addEventListener('click', run);

// async function run() {
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   // Get user input from the input field
//   const userInput = document.querySelector('.user-input').value;

//   // Show user input
//   showUserMessage(userInput);

//   const prompt = userInput;
//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();

//   // Show bot response
//   showBotMessage(text);
// }

// function showUserMessage(message) {
//   const userMessageDiv = document.createElement("div");
//   userMessageDiv.className = "user-msg";
//   userMessageDiv.textContent = `User: ${message}`;
//   document.querySelector('.msg-container').appendChild(userMessageDiv);
// }

// function showBotMessage(message) {
//   const botMessageDiv = document.createElement("div");
//   botMessageDiv.className = "bot-msg";
//   botMessageDiv.textContent = `bot: ${message}`;
//   document.querySelector('.msg-container').appendChild(botMessageDiv);
// }
