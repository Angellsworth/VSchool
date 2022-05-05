function startGame() {
  const steps = {
    start: {
      message: "Do you want to play a game?",
      yes: "firstStep",
    },
    end: {
      message: "You've lost either way. Do you want to play again?",
      yes: "start",
      no: () => {
        console.clear();
      },
    },
    firstStep: {
      message: "Do you agree?",
    },
    // put your steps here
  };

  let currentStep = "start";

  function logStep() {
    const step = steps[currentStep];

    if (step) {
      console.log(`${step.message || ""} Y/N`);
    }
  }
  function handleAnswer(agree) {
    let step;

    if (agree) {
      step = steps[currentStep].yes;
    } else {
      step = steps[currentStep].no;
    }

    if (typeof step === "function") {
      step();
      return;
    }

    if (typeof step === "string") {
      currentStep = step;
    } else {
      currentStep = "end";
    }

    logStep();
  }

  document.addEventListener("keydown", (args) => {
    const key = args.key.toLowerCase();

    if (key === "y") {
      handleAnswer(true);
    } else if (key === "n") {
      handleAnswer(false);
    }
  });

  console.clear();
  logStep();
}

startGame();
