const signInButton = document.querySelector("button.sign-in");
const signOutButton = document.querySelector("button.sign-out");
const nameDisplay = document.querySelector("div.name");

const signedIn = (name) => {
  nameDisplay.textContent = name;
  signInButton.classList.add("hidden");
  signOutButton.classList.remove("hidden");
};

const signedOut = () => {
  nameDisplay.textContent = "";
  signInButton.classList.remove("hidden");
  signOutButton.classList.add("hidden");
};

export default { signedIn, signedOut };
