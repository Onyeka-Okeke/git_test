function loadHomePage() {
  let contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  let welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent =
    "Welcome to our delicieux restaurant! where culinary delights await.";
  contentDiv.appendChild(welcomeMessage);
  let someInfo = document.createElement("p");
  someInfo.textContent =
    "Enjoy the finest dining experience. we offer a variety of exquisite dishes crafted with passion and served with elegance. Bon appétit!";
  contentDiv.appendChild(someInfo);
  // let imgOne = document.createElement("img");
  // imgOne.src = homeImg;
  //imgOne.alt = "food on table";
  // contentDiv.appendChild(imgOne);
}
export default loadHomePage;
