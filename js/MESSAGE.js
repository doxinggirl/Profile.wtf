const messages = [
    "IDK",
    "I'm Developer!...maybe",
    "I'm Not Femboy",
    "I'm Not Femboy,",
    "I'm Not Ready",
    "Let's Go",
    "SWAG",
    "Skibidi toilet is nigger net meme",
    "Steal A Brainrot = BITCH",
    "KYS",
  ];

  function Message() {
    const index = Math.floor(Math.random() * messages.length);
    document.getElementById("small-top-message").textContent = messages[index];
  }

  Message();
