const slangWords = [
    {
      word: "sus",
      meaning: "suspicious",
      story: "I told my mom someone in my class was acting 'sus' and she asked if they had sauce on them."
    },
    {
      word: "cap",
      meaning: "a lie or false statement",
      story: "I told my mom my friend said he met Taylor Swift and I said 'that's cap' — she thought I was talking about his hat."
    },
    {
      word: "no cap",
      meaning: "for real / not lying",
      story: "When I told my mom 'I cleaned the kitchen, no cap,' she asked, 'No cap? Did you lose the lid to something?'"
    },
    {
      word: "bet",
      meaning: "okay / sure",
      story: "I texted 'bet' to confirm dinner plans and my mom asked if we were gambling now."
    },
    {
      word: "lit",
      meaning: "exciting or fun",
      story: "I said the concert was 'lit' and my mom panicked thinking something had caught fire."
    },
    {
      word: "ghosted",
      meaning: "suddenly cut off communication",
      story: "I told my mom I got ghosted, and she asked if the person had passed away."
    },
    {
    
        word: "salty",
        meaning: "bitter or upset",
        story: "I said I was 'salty' after losing the game, and my mom told me to drink more water."
    },
    {
        word: "slay",
        meaning: "to do really well or look amazing",
        story: "I told my friend she 'slayed' her outfit, and my mom looked horrified and asked who we were slaying."
      },
      {
        word: "rizz",
        meaning: "charisma or flirting skills",
        story: "I said my friend had mad 'rizz,' and my mom asked if it was contagious."
      },
      {
        word: "vibe check",
        meaning: "assessing the mood or someone's energy",
        story: "I said 'vibe check!' at dinner and my mom started looking for the thermostat."
      },
      {
        word: "drip",
        meaning: "stylish clothing or accessories",
        story: "I complimented my brother's 'drip' and my mom ran to grab paper towels."
      },
      {
        word: "extra",
        meaning: "over-the-top or dramatic",
        story: "I told my mom she was being 'extra' about my outfit, and she said, 'Thanks! I *am* extra thoughtful.'"
      },
      {
        word: "tea",
        meaning: "gossip or news",
        story: "I told my mom I had some tea to spill, and she ran to get mugs."
      }
      
  ];
  
  let zineIndex = 0;
  let gameIndex = 0;
  
  function startZine() {
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("zineMode").style.display = "block";
    showZineCard();
  }
  
  function startGame() {
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("gameMode").style.display = "block";
    runGame(); 
  }
  
  function runGame() {
    gameIndex = Math.floor(Math.random() * slangWords.length);
    const correct = slangWords[gameIndex];
    const prompt = correct.meaning; 
    const options = shuffle([...getRandomWords(3), correct.word]);
  
    document.getElementById("gamePrompt").textContent = `Which slang word means: "${prompt}"`;
    const optionButtons = options.map(word => `
      <button onclick="checkAnswer('${word}', '${correct.word}')">${word}</button>
    `).join("");
    document.getElementById("gameOptions").innerHTML = optionButtons;
    document.getElementById("gameResult").textContent = "";
  }
  
  function showZineCard() {
    const entry = slangWords[zineIndex];
    document.getElementById("zineContent").innerHTML = `
      <p><strong>${entry.word}</strong>: ${entry.meaning}</p>
      <em>${entry.story}</em>
    `;
  }
  
  function nextZine() {
    zineIndex = (zineIndex + 1) % slangWords.length;
    showZineCard();
  }
  
  function checkAnswer(selected, correct) {
    const result = document.getElementById("gameResult");
    if (selected === correct) {
      result.textContent = "✅ Correct!";
      result.style.color = "green";
    } else {
      result.textContent = `❌ Nope! The correct answer was "${correct}".`;
      result.style.color = "red";
    }
  
    setTimeout(() => {
      runGame();
    }, 2000);
  }
  
  function goHome() {
    document.getElementById("zineMode").style.display = "none";
    document.getElementById("gameMode").style.display = "none";
    document.getElementById("homeScreen").style.display = "block";
  }
  
  function getRandomWords(n) {
    const words = slangWords.map(w => w.word);
    const correct = slangWords[gameIndex].word;
    const filtered = words.filter(w => w !== correct);
    const selected = [];
  
    while (selected.length < n) {
      const rand = filtered[Math.floor(Math.random() * filtered.length)];
      if (!selected.includes(rand)) selected.push(rand);
    }
  
    return selected;
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  
  //window.onload = showZine;
  