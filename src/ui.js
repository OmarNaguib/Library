const signInButton = document.querySelector("button.sign-in");
const signOutButton = document.querySelector("button.sign-out");
const nameDisplay = document.querySelector("div.name");

const signedIn = (name) => {
  console.log("ui");
  nameDisplay.textContent = name;
  signInButton.classList.add("hidden");
  signOutButton.classList.remove("hidden");
};

export default { signedIn };
