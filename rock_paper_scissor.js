const rockPaperScissorArray = ["✊", "✋", "✌️"];
const userChoose = document.getElementById("userChoose");
const inputValue = document.getElementById("input");
const computerChoose = document.getElementById("computerChoose");
const userStyle = userChoose.style;
const computerStyle = computerChoose.style;
const userName = document.getElementById("userName").style;
const computerName = document.getElementById("computerName").style;

const computerMove = () => {
  const randomIndex = Math.floor(Math.random() * rockPaperScissorArray.length);
  document.getElementById("computerChoose").innerHTML =
    rockPaperScissorArray[randomIndex];
};

const rock = () => {
  userName.visibility = "visible";
  computerName.visibility = "visible";
  userChoose.innerHTML = rockPaperScissorArray[0];
  computerMove();
  if (computerChoose.innerHTML === rockPaperScissorArray[0]) {
    (userStyle.background = "#faf089") &&
      (computerStyle.background = "#faf089");
  } else if (computerChoose.innerHTML === rockPaperScissorArray[1]) {
    (userStyle.background = "#feb2b2") &&
      (computerStyle.background = "#9ae6b4");
  } else {
    (userStyle.background = "#9ae6b4") &&
      (computerStyle.background = "#feb2b2");
  }
};

const paper = () => {
  userName.visibility = "visible";
  computerName.visibility = "visible";
  userChoose.innerHTML = rockPaperScissorArray[1];
  computerMove();
  if (computerChoose.innerHTML === rockPaperScissorArray[0]) {
    (userStyle.background = "#9ae6b4") &&
      (computerStyle.background = "#feb2b2");
  } else if (computerChoose.innerHTML === rockPaperScissorArray[1]) {
    (userStyle.background = "#faf089") &&
      (computerStyle.background = "#faf089");
  } else {
    (userStyle.background = "#feb2b2") &&
      (computerStyle.background = "#9ae6b4");
  }
};

const scissor = () => {
  userName.visibility = "visible";
  computerName.visibility = "visible";
  userChoose.innerHTML = rockPaperScissorArray[2];
  computerMove();
  if (computerChoose.innerHTML === rockPaperScissorArray[0]) {
    (userStyle.background = "#feb2b2") &&
      (computerStyle.background = "#9ae6b4");
  } else if (computerChoose.innerHTML === rockPaperScissorArray[1]) {
    (userStyle.background = "#9ae6b4") &&
      (computerStyle.background = "#feb2b2");
  } else {
    (userStyle.background = "#faf089") &&
      (computerStyle.background = "#faf089");
  }
};

document.getElementById("rockButton").addEventListener("click", rock);
document.getElementById("paperButton").addEventListener("click", paper);
document.getElementById("scissorButton").addEventListener("click", scissor);
