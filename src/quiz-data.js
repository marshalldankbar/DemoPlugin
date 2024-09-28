export const questions = [
  {
    question: "What’s the best way to fix a bug that’s been haunting you for hours?",
    answers: [
      { text: "Stack Overflow", type: "Zen Developer" },
      { text: "Google it for the 10th time", type: "Code Cowboy" },
      { text: "Turn it off and on", type: "Perfectionist" },
      { text: "Sacrifice a coffee mug", type: "Refactor Guru" }
    ]
  },
  {
    question: "What does your code usually do in production?",
    answers: [
      { text: "Work perfectly", type: "Perfectionist" },
      { text: "Throw an unexpected error", type: "Code Cowboy" },
      { text: "Break silently", type: "Zen Developer" },
      { text: "Catch fire", type: "Refactor Guru" }
    ]
  },
  {
    question: "What's a developer's first reaction to a bug in their code?",
    answers: [
      { text: "Blame the keyboard", type: "Code Cowboy" },
      { text: "Stare at it like it's personal", type: "Perfectionist" },
      { text: "Ask a rubber duck", type: "Zen Developer" },
      { text: "Swear at the screen", type: "Refactor Guru" }
    ]
  },
  {
    question: "What's a senior developer's favorite debugging tool?",
    answers: [
      { text: "Console.log()", type: "Code Cowboy" },
      { text: "A fresh set of eyes", type: "Refactor Guru" },
      { text: "Ctrl + Z", type: "Perfectionist" },
      { text: "Post-it notes on the monitor", type: "Zen Developer" }
    ]
  },
  {
    question: "Which task will ruin your Friday the fastest?",
    answers: [
      { text: "Pushing code to production", type: "Code Cowboy" },
      { text: "Trying to fix one last bug", type: "Perfectionist" },
      { text: "Starting a ‘quick’ refactor", type: "Refactor Guru" },
      { text: "Opening an email from your boss", type: "Zen Developer" }
    ]
  },
  {
    question: "What’s the true enemy of developers?",
    answers: [
      { text: "Bad code", type: "Refactor Guru" },
      { text: "Merge conflicts", type: "Perfectionist" },
      { text: "Caffeine running out", type: "Code Cowboy" },
      { text: "Comments that explain nothing", type: "Zen Developer" }
    ]
  },
  {
    question: "What's the most accurate estimation for when your code will be bug-free?",
    answers: [
      { text: "Never", type: "Code Cowboy" },
      { text: "In a few minutes", type: "Perfectionist" },
      { text: "Right after this commit", type: "Zen Developer" },
      { text: "When pigs fly", type: "Refactor Guru" }
    ]
  },
  {
    question: "What’s the quickest way to learn a new programming language?",
    answers: [
      { text: "Tutorials", type: "Perfectionist" },
      { text: "YouTube videos", type: "Zen Developer" },
      { text: "Panic", type: "Code Cowboy" },
      { text: "Trial and error (mostly error)", type: "Refactor Guru" }
    ]
  },
  {
    question: "When you run your code and it works on the first try, what’s your reaction?",
    answers: [
      { text: "Pure disbelief", type: "Zen Developer" },
      { text: "Check if you're on the wrong branch", type: "Perfectionist" },
      { text: "Celebrate with coffee", type: "Code Cowboy" },
      { text: "Immediately look for what’s broken", type: "Refactor Guru" }
    ]
  },
  {
    question: "What's a developer's spirit animal?",
    answers: [
      { text: "The owl (night coder)", type: "Code Cowboy" },
      { text: "The rubber duck", type: "Refactor Guru" },
      { text: "The caffeine-powered squirrel", type: "Perfectionist" },
      { text: "The cat (fixing code by doing nothing)", type: "Zen Developer" }
    ]
  },
  {
    question: "Which code editor feature is used the most?",
    answers: [
      { text: "Auto-complete", type: "Perfectionist" },
      { text: "Syntax highlighting", type: "Zen Developer" },
      { text: "Dark mode", type: "Code Cowboy" },
      { text: "The undo button", type: "Refactor Guru" }
    ]
  },
  {
    question: "When do you start writing comments in your code?",
    answers: [
      { text: "Right from the start", type: "Perfectionist" },
      { text: "Only after things go wrong", type: "Code Cowboy" },
      { text: "Never", type: "Zen Developer" },
      { text: "After I forget what the function does", type: "Refactor Guru" }
    ]
  },
  {
    question: "What’s the best way to motivate yourself to finish a project?",
    answers: [
      { text: "More coffee", type: "Code Cowboy" },
      { text: "Promising yourself a break", type: "Zen Developer" },
      { text: "Staring at the deadline", type: "Perfectionist" },
      { text: "Getting peer pressure from GitHub issues", type: "Refactor Guru" }
    ]
  },
  {
    question: "How do you feel about meetings as a developer?",
    answers: [
      { text: "Necessary evil", type: "Perfectionist" },
      { text: "Time to catch up on emails", type: "Zen Developer" },
      { text: "Let’s replace them with emails", type: "Refactor Guru" },
      { text: "Where productivity goes to die", type: "Code Cowboy" }
    ]
  },
  {
    question: "What’s the first thing you do when a deployment goes wrong?",
    answers: [
      { text: "Blame the intern", type: "Code Cowboy" },
      { text: "Pray to the cloud gods", type: "Zen Developer" },
      { text: "Roll back", type: "Perfectionist" },
      { text: "Act like nothing happened", type: "Refactor Guru" }
    ]
  }
];

export function calculatePersonality(answers) {
  const tally = {
      "Zen Developer": 0,
      "Code Cowboy": 0,
      "Perfectionist": 0,
      "Refactor Guru": 0
  };

  answers.forEach(answer => {
      tally[answer.type] += 1;
  });

  return Object.keys(tally).reduce((a, b) => tally[a] > tally[b] ? a : b);
}

export const personalities = {
  "Zen Developer": "You find peace in the chaos of code.",
  "Code Cowboy": "You ride the wild syntax of the west.",
  "Perfectionist": "Every line of code must be flawless.",
  "Refactor Guru": "You see code as a puzzle to be optimized."
};
