const games = [
  ["Blink & You'll Miss It","Hit the button the second it turns green.","reaction","🎯","quick","green"],
  ["One-Beat Wonder","Wait for the surprise. Tap on the very first beat.","reaction","🥁","quick","yellow"],
  ["Almost Zen","Stay chill. React before the moment passes.","reaction","🪷","quick","blue"],
  ["Pop Goes the Dot","A dot appears. Your finger knows what to do.","reaction","🫧","quick","pink"],
  ["The Last Second","Test your timing. How fast is your fast?","reaction","⏱️","quick","lavender"],
  ["Pocket Sequence","Watch the little lights, then repeat the pattern.","memory","🧠","thinky","lavender"],
  ["Snack Attack Memory","Remember the snacks in the order they appear.","memory","🍓","thinky","pink"],
  ["Color Me Curious","A rainbow pattern, one little step at a time.","memory","🌈","thinky","blue"],
  ["Echo Garden","Let the soundless sequence bloom in your memory.","memory","🌷","thinky","green"],
  ["Tiny Brain Parade","Follow the icons and see how far you get.","memory","🐸","thinky","yellow"],
  ["Fact or Fiction","Three fun facts. One is made up. Can you spot it?","quiz","🕵️","thinky","yellow"],
  ["Space Snack Trivia","A tiny trip through the very big universe.","quiz","🪐","thinky","lavender"],
  ["Word Nerd","A quick little quiz for your inner bookworm.","quiz","📚","thinky","blue"],
  ["Animal-ish","Three animal facts. One sneaky imposter.","quiz","🦊","thinky","pink"],
  ["Curiosity Club","A small quiz for a big, curious brain.","quiz","💡","thinky","green"],
  ["Mystery Number","Pick a number. I'll tell you if you're getting warmer.","guess","🔢","quick","blue"],
  ["Higher or Lower","Guess the secret number in as few tries as you can.","guess","⬆️","quick","green"],
  ["Lucky Seven-ish","Find the hidden number before your guesses run out.","guess","🍀","quick","yellow"],
  ["Number Noodle","Follow the clues. Find the number. Feel very clever.","guess","🍜","quick","pink"],
  ["Secret Stardust","A secret number from the stars is waiting for you.","guess","✨","quick","lavender"],
  ["A Little Lemonade","Solve a sunny little sum before time runs out.","math","🍋","thinky","yellow"],
  ["Quick-Math Picnic","A few friendly numbers, no calculator energy.","math","🧺","thinky","green"],
  ["Number Sprinkles","Catch three correct sums in a sprinkle of seconds.","math","🍩","thinky","pink"],
  ["Brainy Bubbles","Pop the right answer to this bubbly little equation.","math","🫧","thinky","blue"],
  ["Tiny Times Tables","Your times tables, but make them surprisingly fun.","math","✖️","thinky","lavender"],
  ["Good Egg Pattern","Spot which shape comes next. Easy does it.","pattern","🥚","thinky","yellow"],
  ["What Comes Next?","Read the pattern and pick the missing piece.","pattern","🔮","thinky","lavender"],
  ["Shape Shifter","A tiny logic puzzle hiding in plain sight.","pattern","🔺","thinky","pink"],
  ["Odd Little Order","Find the rule, then choose the next thing.","pattern","🧩","thinky","blue"],
  ["Pattern Party","The sequence is having a party. You're invited.","pattern","🎉","thinky","green"],
  ["Dot Dot Dash","Tap as many little targets as you can in 15 seconds.","aim","🎯","quick","orange"],
  ["Catch the Confetti","A confetti-colored dot is on the loose. Catch it!","aim","🎊","quick","pink"],
  ["Little Whack","Tap the target before it hops somewhere new.","aim","🔨","quick","yellow"],
  ["Orbit Click","Catch a tiny planet as it zips around its orbit.","aim","🪐","quick","blue"],
  ["Pop-a-Mole","A friendly mole keeps popping up. Say hello.","aim","🐹","quick","green"],
  ["Rock, Paper, Tiny Win","Challenge your friendly neighborhood computer.","rps","✊","quick","lavender"],
  ["Big Leaf, Small Scissors","Pick your move. Hope the odds are cute.","rps","🍃","quick","green"],
  ["Cosmic Hand Duel","Best of three: rock, paper, or a tiny asteroid.","rps","☄️","quick","blue"],
  ["Paws, Claws, & Draws","A three-round showdown with a very fair opponent.","rps","🐾","quick","pink"],
  ["One More Round","The classic hand game, but with more happy energy.","rps","✌️","quick","yellow"],
  ["Say It, Don't Spray It","Type the little word before the timer runs out.","typing","⌨️","quick","blue"],
  ["Typewriter Picnic","One word. Ten seconds. You're a natural.","typing","🍉","quick","pink"],
  ["Fast Fingers Club","A friendly little typing race. Ready, set, go.","typing","⚡","quick","yellow"],
  ["The Word Dash","Type today's word and beat your own little score.","typing","🏁","quick","green"],
  ["Keyboard Cat","A few seconds of typing. A lifetime of bragging rights.","typing","🐈","quick","lavender"],
  ["Which One's Different?","One emoji doesn't belong. Trust your gut.","odd","🧐","thinky","yellow"],
  ["Sneaky Strawberry","One tiny detail is different. Can you find it?","odd","🍓","thinky","pink"],
  ["Odd Duck Out","A quick spot-the-imposter moment for your eyes.","odd","🦆","thinky","blue"],
  ["Same Same... Not","Look closely. Which little icon broke the pattern?","odd","🪴","thinky","green"],
  ["Find the Plot Twist","Four emojis are friends. One is a little different.","odd","🎭","thinky","lavender"]
];
games.push(...duoGames);
const categories=[["all","everything"],["solo","solo games"],["duo","two player"],["couple","couples"],["indian","indian games"],["quick","quick & easy"],["thinky","thinky things"]];
const categoryNames={reaction:"REACTION",memory:"MEMORY",quiz:"TRIVIA",guess:"GUESSING",math:"MATH",pattern:"PATTERNS",aim:"AIM",rps:"HAND GAME",typing:"TYPING",odd:"SPOT IT",duo:"2 PLAYER",couple:"COUPLES",indian:"INDIAN GAMES"};
const questions={
 quiz:[
  {q:"Which animal has three hearts?",a:["Octopus","Giraffe","Penguin"],c:0},
  {q:"Which planet has the most moons (currently known)?",a:["Saturn","Mercury","Earth"],c:0},
  {q:"Which one of these is made up?",a:["A group of flamingos is called a flamboyance","A group of owls is called a parliament","A group of cats is called a committee"],c:2},
  {q:"What is the only mammal capable of true flight?",a:["Flying squirrel","Bat","Sugar glider"],c:1},
  {q:"Which of these is a real cloud type?",a:["Lenticular","Fluffulonimbus","Cirrospaghetti"],c:0},
  {q:"What is the world's smallest ocean?",a:["Arctic","Indian","Southern"],c:0},
  {q:"Which animal has fingerprints remarkably similar to humans?",a:["Koala","Panda","Lemur"],c:0},
  {q:"How many sides does a dodecagon have?",a:["10","12","14"],c:1},
  {q:"Which fruit is technically a berry?",a:["Strawberry","Banana","Raspberry"],c:1},
  {q:"What do you call a word that reads the same backward?",a:["Anagram","Palindrome","Homonym"],c:1}
 ],
 pattern:[
  {q:"What comes next? 2, 4, 6, 8, ?",a:["9","10","12"],c:1},
  {q:"What comes next? 🔴 🔵 🔴 🔵 ?",a:["🔴","🟡","🟣"],c:0},
  {q:"What comes next? 1, 1, 2, 3, 5, ?",a:["7","8","9"],c:1},
  {q:"What comes next? △ ○ △ ○ ?",a:["△","□","○"],c:0},
  {q:"What comes next? 10, 8, 6, 4, ?",a:["1","2","3"],c:1},
  {q:"What comes next? A, C, E, G, ?",a:["H","I","J"],c:1},
  {q:"What comes next? 3, 6, 12, 24, ?",a:["36","42","48"],c:2},
  {q:"What comes next? 🟩 🟩 🟨 🟩 🟩 🟨 ?",a:["🟩","🟨","🟥"],c:0},
  {q:"What comes next? 1, 4, 9, 16, ?",a:["20","25","36"],c:1},
  {q:"What comes next? Z, Y, X, W, ?",a:["U","V","T"],c:1}
 ],
 odd:[
  {q:"Which one is different?",a:["🍎","🍐","🥕","🍑"],c:2},
  {q:"Which one is different?",a:["🐶","🐱","🐰","🚲"],c:3},
  {q:"Which one is different?",a:["🌷","🌹","🌻","🌧️"],c:3},
  {q:"Which one is different?",a:["🔵","🔴","🟢","🍏"],c:3},
  {q:"Which one is different?",a:["2","4","6","9"],c:3},
  {q:"Which one is different?",a:["🐋","🐬","🦈","🦅"],c:3},
  {q:"Which one is different?",a:["🍰","🍪","🍩","🥦"],c:3},
  {q:"Which one is different?",a:["⬜","⬛","◻️","🔺"],c:3},
  {q:"Which one is different?",a:["Monday","Tuesday","Friday","January"],c:3},
  {q:"Which one is different?",a:["🎸","🎹","🥁","🍉"],c:3}
 ]
};
const $=s=>document.querySelector(s),grid=$("#gamesGrid"),modal=$("#gameModal"),playArea=$("#playArea");
let activeCategory="all",searchText="",favorites=new Set(JSON.parse(localStorage.getItem("littleArcadeFavorites")||"[]")),favoritesOnly=false,currentGame=null,roundCleanup=null,toastTimer;
const colors={green:"#e7eed5",yellow:"#f3eed5",blue:"#e3edeb",pink:"#f4e6e1",lavender:"#ebe8f6",orange:"#f5e7dc"};
const pick=arr=>arr[Math.floor(Math.random()*arr.length)];
function renderFilters(){ $("#filterRow").innerHTML=categories.map(([id,label])=>`<button type="button" class="filter-chip ${activeCategory===id?"active":""}" data-filter="${id}">${label}</button>`).join(""); }
function renderGames(){
 const shown=games.map((g,i)=>({g,i})).filter(({g})=>{
  const isDuo=g[2]==="duo"||g[2]==="couple",isCouple=g[2]==="couple",isIndian=g[6]?.startsWith("indian-");
  const categoryMatch=activeCategory==="all"||(activeCategory==="solo"&&!isDuo)||(activeCategory==="duo"&&isDuo)||(activeCategory==="couple"&&isCouple)||(activeCategory==="indian"&&isIndian)||(activeCategory===g[4]);
  return categoryMatch&&(!favoritesOnly||favorites.has(g[0]))&&(!searchText||g[0].toLowerCase().includes(searchText)||g[1].toLowerCase().includes(searchText)||categoryNames[g[2]].toLowerCase().includes(searchText));
 });
 $("#gameCount").textContent=shown.length;$("#emptyState").classList.toggle("hidden",shown.length>0);
 grid.innerHTML=shown.map(({g,i})=>`<article class="game-card ${g[2]==="duo"||g[2]==="couple"?"multiplayer-card":""} ${g[2]==="couple"?"couple-card":""} ${g[6]?.startsWith("indian-")?"indian-card":""}" data-game="${i}" style="--i:${i%20};--card-bg:${colors[g[5]]}" tabindex="0" role="button" aria-label="Play ${g[0]}"><div class="game-card-top"><span class="game-category">${g[6]==="couples"?"COUPLES":g[6]?.startsWith("indian-")?"INDIAN GAME":g[2]==="duo"?"2 PLAYER":g[2]==="couple"?"COUPLES":categoryNames[g[2]]}</span><button type="button" class="game-fav ${favorites.has(g[0])?"active":""}" aria-label="${favorites.has(g[0])?"Remove from":"Add to"} favorites" data-fav="${i}">${favorites.has(g[0])?"♥":"♡"}</button></div><div class="game-emoji">${g[3]}</div><h3 class="game-name">${g[0]}</h3><p class="game-desc">${g[1]}</p><div class="game-card-bottom"><span class="game-duration">${g[4]==="quick"?"01 MIN":"02 MIN"} · ${g[4].toUpperCase()}</span><span class="game-arrow">↗</span></div></article>`).join("");
}
function notify(text){const t=$("#toast");t.textContent=text;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2100)}
function saveFavorites(){localStorage.setItem("littleArcadeFavorites",JSON.stringify([...favorites]));renderGames()}
function openGame(index){currentGame=games[index];$("#modalTitle").textContent=currentGame[0];$("#modalDescription").textContent=currentGame[1];$("#modalCategory").textContent=currentGame[6]?.startsWith("indian-")?"INDIAN GAME · PLAY":currentGame[6]==="couples"?"COUPLES GAME":currentGame[6]?"TWO-PLAYER GAME":categoryNames[currentGame[2]]+" · A TINY GAME";$("#modalIcon").textContent=currentGame[3];modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";startGame();$("#modalClose").focus()}
function closeGame(){cleanupRound();modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";currentGame=null}
function cleanupRound(){if(roundCleanup){roundCleanup();roundCleanup=null}}
function setPlay(html){cleanupRound();playArea.innerHTML=html}
function result(text,small=""){const n=document.createElement("div");n.className="play-result";n.innerHTML=`${text}${small?`<small>${small}</small>`:""}`;playArea.querySelector(".play-box")?.append(n)}
function startGame(){if(!currentGame)return;cleanupRound();$("#modalRound").textContent="ROUND 01";const mode=currentGame[6];if(mode?.startsWith("indian-")){({ "indian-snakes":playSnakesLadders,"indian-ludo":playLudo,"indian-simon":playSimon,"indian-drums":playDrumKit,"indian-cricket":playHandCricket,"indian-carrom":playCarrom,"indian-kite":playKiteDuel,"indian-antakshari":playAntakshari,"indian-rangoli":playRangoli,"indian-quiz":playIndianQuiz }[mode])();return}if(mode){({ "duel-reaction":playDuelReaction,"duel-quiz":playDuelQuiz,"duel-math":playDuelMath,"duel-memory":playDuelMemory,"duel-rps":playDuelRps,couples:playCouples }[mode]||playDuelGuess)();return}const type=currentGame[2];({reaction:playReaction,memory:playMemory,quiz:playQuiz,guess:playGuess,math:playMath,pattern:playQuiz,aim:playAim,rps:playRps,typing:playTyping,odd:playQuiz}[type])()}
function playReaction(){
 setPlay(`<div class="play-box"><p class="play-prompt">Wait for it... then tap as fast as you can.</p><div class="reaction-zone" id="reactionZone"><span class="play-sub">Press start when you're ready.</span></div><button class="play-button" id="reactionStart">start the round</button></div>`);
 let timer;const start=$("#reactionStart"),zone=$("#reactionZone");
 start.onclick=()=>{start.disabled=true;zone.innerHTML='<span class="play-sub">Wait for green...</span>';const delay=1000+Math.random()*2500;timer=setTimeout(()=>{zone.innerHTML="";zone.style.background="#e0ebc4";zone.style.cursor="pointer";let t0=performance.now();zone.onclick=()=>{const ms=Math.round(performance.now()-t0);zone.onclick=null;zone.style.background="";result(`${ms} ms!`,ms<260?"Ridiculously quick. Look at you.":"That's a very respectable little reflex.");start.disabled=false;start.textContent="play again";start.onclick=playReaction}},delay)};
 roundCleanup=()=>clearTimeout(timer)
}
function playMemory(){
 const icons=["🍋","🌷","⭐","🍄","🐸","💧","🍒","🌙"];
 setPlay(`<div class="play-box"><p class="play-prompt">Watch closely, then repeat the sequence.</p><p class="play-sub" id="memoryStatus">Ready when you are.</p><div class="sequence-display" id="sequenceDisplay">✳ ✳ ✳</div><button class="play-button" id="memoryStart">show me</button></div>`);
 let sequence=[],locked=false;$("#memoryStart").onclick=()=>{sequence=Array.from({length:3+Math.floor(Math.random()*2)},()=>pick(icons));locked=true;$("#memoryStart").disabled=true;$("#memoryStatus").textContent="Remember this...";let i=0;const show=()=>{if(i<sequence.length){$("#sequenceDisplay").textContent=sequence[i++];timer=setTimeout(show,750)}else{$("#sequenceDisplay").textContent="· · ·";$("#memoryStatus").textContent="Your turn! Pick the emojis in order.";renderTiles()}};show()};
 let timer;function renderTiles(){const choices=[...new Set([...sequence,...Array.from({length:4},()=>pick(icons))])].sort(()=>Math.random()-.5);const row=document.createElement("div");row.className="memory-row";let answer=0;choices.forEach(icon=>{const b=document.createElement("button");b.className="memory-tile";b.textContent=icon;b.onclick=()=>{if(!locked)return;if(icon===sequence[answer]){b.classList.add("active");answer++;if(answer===sequence.length){locked=false;result("Mind like a steel trap ✨","You remembered every single one.")}}else{locked=false;b.style.background="#f7e2da";result("So close!","Your brain still deserves a little treat.")}};row.append(b)});playArea.querySelector(".play-box").append(row);locked=true}
 roundCleanup=()=>clearTimeout(timer)
}
function playQuiz(){
 const type=currentGame[2],q=pick(questions[type]||questions.quiz);
 setPlay(`<div class="play-box"><p class="play-prompt">${q.q}</p><div class="answer-row"></div></div>`);
 const row=playArea.querySelector(".answer-row");q.a.forEach((answer,i)=>{const b=document.createElement("button");b.className="answer-button";b.textContent=answer;b.onclick=()=>{if(row.dataset.done)return;row.dataset.done="1";[...row.children].forEach((button,j)=>{button.disabled=true;if(j===q.c)button.classList.add("correct")});if(i!==q.c)b.classList.add("wrong");result(i===q.c?pick(["Nailed it! ✨","Look at that brain!","A+ little detective!","You really know your stuff!"]):"Good guess! 🌱",i===q.c?"You just learned a fun little thing.":`The answer was ${q.a[q.c]}. Now you know!`)};row.append(b)})
}
function playGuess(){
 const secret=1+Math.floor(Math.random()*30),max=6;let tries=0;
 setPlay(`<div class="play-box"><p class="play-prompt">I'm thinking of a number between 1 and 30.</p><p class="play-sub">You have ${max} little guesses.</p><form class="answer-row" id="guessForm"><input class="game-input" id="guessInput" type="number" min="1" max="30" placeholder="1 – 30" required /><button class="play-button">guess!</button></form><div id="guessFeedback"></div></div>`);
 const input=$("#guessInput");$("#guessForm").onsubmit=e=>{e.preventDefault();const val=Number(input.value);if(val<1||val>30)return;tries++;if(val===secret){$("#guessFeedback").innerHTML="";result(`You found it in ${tries}! 🎉`,"The secret number was "+secret+".")}else if(tries>=max){$("#guessFeedback").innerHTML="";result("The number got away 🏃","It was "+secret+". There's always next round!")}else{$("#guessFeedback").className="play-result";$("#guessFeedback").textContent=(val<secret?"A little higher ↑":"A little lower ↓")+` · ${max-tries} ${max-tries===1?"guess":"guesses"} left`;input.value="";input.focus()}}
}
function playMath(){
 const op=pick(["+","−","×"]),a=op==="×"?1+Math.floor(Math.random()*9):1+Math.floor(Math.random()*20),b=op==="×"?1+Math.floor(Math.random()*9):1+Math.floor(Math.random()*20),answer=op==="+"?a+b:op==="−"?Math.max(a,b)-Math.min(a,b):a*b,first=op==="−"?Math.max(a,b):a,second=op==="−"?Math.min(a,b):b;
 const options=[...new Set([answer,answer+pick([1,2,3]),Math.max(0,answer-pick([1,2,3]))])].sort(()=>Math.random()-.5);
 setPlay(`<div class="play-box"><p class="play-prompt">${first} ${op} ${second} = ?</p><p class="play-sub">No calculators. Just vibes.</p><div class="answer-row"></div></div>`);
 const row=playArea.querySelector(".answer-row");options.forEach(n=>{const b=document.createElement("button");b.className="answer-button";b.textContent=n;b.onclick=()=>{if(row.dataset.done)return;row.dataset.done="1";[...row.children].forEach(button=>{button.disabled=true;if(Number(button.textContent)===answer)button.classList.add("correct")});if(n!==answer)b.classList.add("wrong");result(n===answer?"That's the sum! ✨":"Almost, math wizard!",n===answer?"Your brain is doing great.":`The answer was ${answer}.`)};row.append(b)})
}
function playAim(){
 let score=0,left=15,timer,spawnTimer,locked=true;
 setPlay(`<div class="play-box"><p class="play-prompt">Catch the dot before the 15 seconds are up!</p><div class="score-pill" id="aimScore">SCORE 00 · 15 SECONDS</div><div class="reaction-zone" id="aimZone"><button class="play-button" id="aimStart">let's go!</button></div></div>`);
 const zone=$("#aimZone");function spawn(){if(locked)return;zone.innerHTML="";const dot=document.createElement("button");dot.className="target-dot";dot.setAttribute("aria-label","Tap target");dot.style.left=`${5+Math.random()*78}%`;dot.style.top=`${5+Math.random()*65}%`;dot.onclick=e=>{e.stopPropagation();if(locked)return;score++;$("#aimScore").textContent=`SCORE ${String(score).padStart(2,"0")} · ${left} SECONDS`;spawn()};zone.append(dot);spawnTimer=setTimeout(spawn,950)}
 $("#aimStart").onclick=()=>{locked=false;left=15;$("#aimScore").textContent="SCORE 00 · 15 SECONDS";spawn();timer=setInterval(()=>{left--;$("#aimScore").textContent=`SCORE ${String(score).padStart(2,"0")} · ${left} SECONDS`;if(left<=0){locked=true;clearInterval(timer);clearTimeout(spawnTimer);zone.innerHTML="";result(`${score} little ${score===1?"dot":"dots"}!`,score>=10?"Look at those quick fingers.":"Every dot caught is a tiny victory.")}},1000)};
 roundCleanup=()=>{locked=true;clearInterval(timer);clearTimeout(spawnTimer)}
}
function playRps(){
 const emojis=["✊","✋","✌️"],names=["rock","paper","scissors"];let you=0,them=0,round=0;
 setPlay(`<div class="play-box"><p class="play-prompt">Best of three. Pick your move!</p><div class="score-pill" id="rpsScore">YOU 0 · 0 FRIENDLY COMPUTER</div><div class="rps-row"></div><div id="rpsFeedback" class="play-sub"></div></div>`);
 const row=playArea.querySelector(".rps-row");emojis.forEach((emoji,i)=>{const b=document.createElement("button");b.className="rps-choice";b.textContent=emoji;b.setAttribute("aria-label",names[i]);b.onclick=()=>{if(round>=3)return;round++;const cpu=Math.floor(Math.random()*3);let message=`You ${emoji} · computer ${emojis[cpu]} — `;if(i===cpu)message+="a perfectly good draw!";else if((i-cpu+3)%3===1){you++;message+="you win this round!";}else{them++;message+="computer wins this one.";};$("#rpsFeedback").textContent=message;$("#rpsScore").textContent=`YOU ${you} · ${them} FRIENDLY COMPUTER`;if(round===3){row.querySelectorAll("button").forEach(x=>x.disabled=true);result(you>them?"A tiny champion! 🏆":you===them?"An adorable little draw! 🤝":"The computer got lucky 🤖",you>them?"You won the best of three!":you===them?"Everybody wins, really.":"The rematch is calling.")}};row.append(b)})
}
function playTyping(){
 const words=["sunshine","pickle","daydream","pancake","marigold","moonbeam","wobbly","sprinkle","tangerine","tinyjoy"],word=pick(words);let timer,remaining=10;
 setPlay(`<div class="play-box"><p class="play-prompt">Type the word below before the 10 seconds are up.</p><div class="typing-word">${word}</div><div class="score-pill" id="typingTime">10 SECONDS</div><input id="typingInput" class="game-input" type="text" placeholder="type it here" autocomplete="off" /><div id="typingResult"></div></div>`);
 const input=$("#typingInput");input.focus();input.oninput=()=>{if(input.value.trim().toLowerCase()===word){clearInterval(timer);input.disabled=true;$("#typingResult").innerHTML='<div class="play-result">Fingers of lightning! ⚡<small>That was a speedy little word.</small></div>'}};timer=setInterval(()=>{remaining--;$("#typingTime").textContent=`${remaining} SECOND${remaining===1?"":"S"}`;if(remaining<=0){clearInterval(timer);input.disabled=true;if(!input.disabled||input.value.trim().toLowerCase()!==word)$("#typingResult").innerHTML=`<div class="play-result">Time for a deep breath 🌱<small>The word was ${word}. You did great.</small></div>`}},1000);
 roundCleanup=()=>clearInterval(timer)
}
function playSnakesLadders(){
 const ladders={4:14,9:31,20:38,28:84,40:59,51:67,63:81,71:91},snakes={17:7,54:34,62:19,64:60,87:24,93:73,95:75,99:78},positions=[0,0];let turn=0,rollButton,board;
 function render(message="Player 1 starts. Roll the dice!"){
  const cells=[];
  for(let row=9;row>=0;row--){const nums=Array.from({length:10},(_,i)=>row*10+i+1);if(row%2===0)nums.reverse();for(const n of nums){const markers=[positions[0]===n?"🔴":"",positions[1]===n?"🔵":""].filter(Boolean).join("");const badge=ladders[n]?`🪜${ladders[n]}`:snakes[n]?`🐍${snakes[n]}`:"";cells.push(`<div class="snake-cell ${ladders[n]?"ladder-cell":""} ${snakes[n]?"snake-cell-danger":""} ${n===100?"finish-cell":""}"><span>${n}</span><small>${badge}</small><b>${markers}</b></div>`)}}
  setPlay(`<div class="play-box"><p class="play-prompt">Roll a 1–6 and race to square 100!</p><div class="score-pill">🔴 PLAYER 1: ${positions[0]} · 🔵 PLAYER 2: ${positions[1]}</div><div class="snake-board">${cells.join("")}</div><p class="play-sub snake-message">${message}</p><button class="play-button" id="snakeRoll">🎲 roll the dice</button></div>`);rollButton=$("#snakeRoll");
  rollButton.onclick=()=>{const player=turn,roll=1+Math.floor(Math.random()*6),old=positions[player];let next=old+roll,note=`Player ${player+1} rolled ${roll}.`;if(next>100)next=old;else if(ladders[next]){note+=` Up the ladder to ${ladders[next]}!`;next=ladders[next]}else if(snakes[next]){note+=` A snake! Down to ${snakes[next]}.`;next=snakes[next]}positions[player]=next;if(next===100){render(`Player ${player+1} reached 100 and wins! 🎉`);$("#snakeRoll").disabled=true;result(`Player ${player+1} wins! 🏆`,"A very satisfying little climb.");return}turn=1-turn;render(`${note} Player ${turn+1}, your turn!`)};
 }
 render();roundCleanup=()=>{};
}
function playLudo(){
 const starts=[0,26],progress=[[-1,-1,-1,-1],[-1,-1,-1,-1]],finished=[[false,false,false,false],[false,false,false,false]],safe=new Set([0,8,13,21,26,34,39,47]);let player=0,roll=null,passTimer=null,summary="Player 1, roll a 6 to bring a token out.";
 function render(){
  const ring=Array.from({length:52},(_,i)=>{const angle=(i/52)*Math.PI*2-Math.PI/2;return `<div class="ludo-space ${safe.has(i)?"ludo-safe":""}" style="left:${50+43*Math.cos(angle)}%;top:${50+43*Math.sin(angle)}%">${safe.has(i)?"✦":""}</div>`}).join("");
  const tokens=progress.flatMap((team,p)=>team.map((step,t)=>{if(step<0||step>=52)return"";const space=(starts[p]+step)%52,angle=(space/52)*Math.PI*2-Math.PI/2,offset=(t%2?10:-10);return `<span class="ludo-token p${p+1}" style="left:calc(${50+43*Math.cos(angle)}% + ${offset}px);top:calc(${50+43*Math.sin(angle)}% + ${offset}px)">${p+1}</span>`})).join("");
  const tokenRows=progress.map((team,p)=>`<div class="ludo-player p${p+1}"><b>PLAYER ${p+1} ${p===player?"· YOUR TURN":""}</b><div>${team.map((step,t)=>`<button class="ludo-token-button ${finished[p][t]?"token-home":""}" data-token="${p}:${t}" ${p!==player||roll===null||step>=56||step<0&&roll!==6||step>=0&&step+roll>56?"disabled":""}>${step<0?"🏠":finished[p][t]?"🏁":`● ${step+1}`}</button>`).join("")}</div></div>`).join("");
  setPlay(`<div class="play-box"><p class="play-prompt">Roll a 6 to start a token. Land on a rival to send it home!</p><div class="score-pill">${summary}</div><div class="ludo-board">${ring}${tokens}<div class="ludo-center">🏠<br/>LUDO</div></div><button class="play-button" id="ludoRoll" ${roll!==null?"disabled":""}>🎲 ${roll===null?"roll dice":`you rolled ${roll}`}</button><div class="ludo-players">${tokenRows}</div></div>`);
  $("#ludoRoll").onclick=()=>{roll=1+Math.floor(Math.random()*6);summary=`Player ${player+1} rolled a ${roll}. ${roll===6?"Choose a token to move!":"Choose an eligible token."}`;render();if(!progress[player].some(step=>step<0?roll===6:step+roll<=56)){passTimer=setTimeout(()=>{roll=null;player=1-player;summary=`No legal move. Player ${player+1}, your turn.`;render()},700)}};
  playArea.querySelectorAll("[data-token]").forEach(button=>button.onclick=()=>{const [p,t]=button.dataset.token.split(":").map(Number);if(p!==player||roll===null)return;const rolled=roll;let next=progress[p][t]<0?0:progress[p][t]+rolled;progress[p][t]=next;if(next>=56)finished[p][t]=true;if(next<52&&!safe.has((starts[p]+next)%52)){const landed=(starts[p]+next)%52;progress[1-p].forEach((opponent,index)=>{if(opponent>=0&&opponent<52&&(starts[1-p]+opponent)%52===landed)progress[1-p][index]=-1})}const won=finished[p].filter(Boolean).length===4;summary=won?`Player ${p+1} got all four tokens home! 🎉`:rolled===6?`A six! Player ${p+1} gets another turn.`:`Player ${p+1} moved. Pass the dice.`;roll=null;if(won){render();result(`Player ${p+1} wins Ludo! 🏆`,"All four tokens made it home.");return}if(rolled!==6)player=1-player;render()});
  roundCleanup=()=>clearTimeout(passTimer);
 }
 render();roundCleanup=()=>{};
}
function playSimon(){
 const pads=[["🟢","#77b979"],["🔴","#ea7c6c"],["🟡","#e4c75d"],["🔵","#7298d3"]];let sequence=[],input=[],locked=true,timers=[],cancelled=false;
 function flash(index){return new Promise(resolve=>{const pad=$(`[data-pad="${sequence[index]}"]`);if(!pad){resolve();return}pad.classList.add("pad-lit");timers.push(setTimeout(()=>{pad.classList.remove("pad-lit");timers.push(setTimeout(resolve,160))},450))})}
 async function showSequence(){locked=true;$("#simonStatus").textContent="Watch the colors...";for(let i=0;i<sequence.length&&!cancelled;i++)await flash(i);if(cancelled)return;locked=false;input=[];$("#simonStatus").textContent="Your turn — repeat the sequence!"}
 function render(){cancelled=false;setPlay(`<div class="play-box"><p class="play-prompt">Memorize the colors. Repeat them in the same order!</p><p class="score-pill" id="simonStatus">${sequence.length?`Level ${sequence.length}`:"Ready for level 1?"}</p><div class="simon-pads">${pads.map((pad,i)=>`<button class="simon-pad pad-${i}" data-pad="${i}" aria-label="Color ${i+1}" style="--pad-color:${pad[1]}">${pad[0]}</button>`).join("")}</div><button class="play-button" id="simonStart">${sequence.length?"start next level":"start Simon"}</button></div>`);$("#simonStart").onclick=()=>{$(".play-result")?.remove();sequence.push(Math.floor(Math.random()*4));$("#simonStart").disabled=true;showSequence()};playArea.querySelectorAll("[data-pad]").forEach(button=>button.onclick=()=>{if(locked)return;const value=Number(button.dataset.pad);button.classList.add("pad-lit");const pulse=setTimeout(()=>button.classList.remove("pad-lit"),150);timers.push(pulse);if(value!==sequence[input.length]){locked=true;$("#simonStatus").textContent="Oops! One more try?";result(`You reached level ${sequence.length} ✨`,"Every good Simon needs a rematch.");$("#simonStart").disabled=false;$("#simonStart").textContent="play again";$("#simonStart").onclick=()=>{sequence=[];render()};return}input.push(value);if(input.length===sequence.length){locked=true;$("#simonStatus").textContent="Perfect!";result("Beautifully remembered! 🌈",`Level ${sequence.length} complete. Try the next one!`);$("#simonStart").disabled=false}})}
 render();roundCleanup=()=>{cancelled=true;timers.forEach(clearTimeout)};
}
function playRangoli(){playSimon();$("#modalDescription").textContent="Remember the rangoli colors and tap the pattern back in order."}
function playDrumKit(){
 const pads=[["🥁","DHA","a"],["🪘","GE","s"],["👏","TA","d"],["🔔","TIN","f"]];let audio=null,removeKeyListener;
 function sound(index){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;if(!audio)audio=new Audio();if(audio.state==="suspended")audio.resume();const now=audio.currentTime;if(index===0){const osc=audio.createOscillator(),gain=audio.createGain();osc.type="sine";osc.frequency.setValueAtTime(140,now);osc.frequency.exponentialRampToValueAtTime(45,now+.18);gain.gain.setValueAtTime(.9,now);gain.gain.exponentialRampToValueAtTime(.001,now+.2);osc.connect(gain);gain.connect(audio.destination);osc.start(now);osc.stop(now+.21)}else if(index===1||index===2){const buffer=audio.createBuffer(1,audio.sampleRate*.12,audio.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;const source=audio.createBufferSource(),filter=audio.createBiquadFilter(),gain=audio.createGain();source.buffer=buffer;filter.type=index===1?"lowpass":"highpass";filter.frequency.value=index===1?550:5000;gain.gain.setValueAtTime(index===1?.7:.5,now);gain.gain.exponentialRampToValueAtTime(.001,now+.12);source.connect(filter);filter.connect(gain);gain.connect(audio.destination);source.start(now)}else{const osc=audio.createOscillator(),gain=audio.createGain();osc.type="triangle";osc.frequency.value=880;gain.gain.setValueAtTime(.25,now);gain.gain.exponentialRampToValueAtTime(.001,now+.14);osc.connect(gain);gain.connect(audio.destination);osc.start(now);osc.stop(now+.15)}const pad=$(`[data-drum="${index}"]`);pad.classList.add("drum-hit");setTimeout(()=>pad.classList.remove("drum-hit"),110)}
 setPlay(`<div class="play-box"><p class="play-prompt">Make a beat! Tap the pads or use your keyboard.</p><p class="score-pill">A · S · D · F</p><div class="drum-pads">${pads.map((pad,i)=>`<button class="drum-pad drum-${i}" data-drum="${i}" aria-label="${pad[1]} drum"><span>${pad[0]}</span><b>${pad[1]}</b><small>${pad[2].toUpperCase()}</small></button>`).join("")}</div><p class="play-sub drum-hint">Try a little rhythm: DHA · TA · GE · TIN 🎶</p></div>`);
 playArea.querySelectorAll("[data-drum]").forEach(button=>button.onclick=()=>sound(Number(button.dataset.drum)));const keydown=e=>{if(e.repeat)return;const index=pads.findIndex(p=>p[2]===e.key.toLowerCase());if(index>=0){e.preventDefault();sound(index)}};document.addEventListener("keydown",keydown);removeKeyListener=()=>document.removeEventListener("keydown",keydown);roundCleanup=()=>{removeKeyListener();if(audio){audio.close();audio=null}};
}
function playHandCricket(){
 let innings=0,ball=0,scores=[0,0],wickets=[0,0],runs=0,batterChoice=null,phase="batter";
 function render(message="Player 1 bats first. Pick your runs!"){
  const batter=innings,bowler=1-innings,player=phase==="batter"?batter:bowler;
  if(innings>=2){setPlay(`<div class="play-box"><p class="play-prompt">The gully match is over!</p><div class="score-pill">PLAYER 1 ${scores[0]} · ${scores[1]} PLAYER 2</div></div>`);duelFinish(scores,"A proper tied gully match! 🤝");return}
  if(ball>=6){innings++;ball=0;phase="batter";render(`Innings over! Player ${innings+1} is up to bat.`);return}
  setPlay(`<div class="play-box"><p class="play-prompt">${phase==="batter"?`Player ${batter+1}, pick your runs.`:`Player ${bowler+1}, choose your bowl!`}</p><div class="score-pill">P1 ${scores[0]} (${wickets[0]} OUT) · P2 ${scores[1]} (${wickets[1]} OUT) · BALL ${ball+1}/6</div>${message?`<p class="play-sub">${message}</p>`:""}<div class="cricket-choices">${[1,2,3,4,5,6].map(n=>`<button class="cricket-choice" data-run="${n}" ${phase==="bowl"?"disabled":""}>${n}<small>${phase==="batter"?"runs":"bowl"}</small></button>`).join("")}</div></div>`);
  if(phase==="batter"){playArea.querySelectorAll("[data-run]").forEach(button=>button.onclick=()=>{batterChoice=Number(button.dataset.run);phase="bowl";render(`Runs hidden! Pass the phone to Player ${bowler+1}.`);playArea.querySelectorAll("[data-run]").forEach(b=>b.disabled=false)})}
  else {playArea.querySelectorAll("[data-run]").forEach(button=>{button.disabled=false;button.onclick=()=>{const bowl=Number(button.dataset.run);ball++;if(bowl===batterChoice){wickets[batter]++;const ended=wickets[batter]>=2;phase="batter";render(`OUT! Player ${batter+1} scored ${scores[batter]}${ended?" · innings complete!":" · pick runs again."}`);if(ended){ball=6;setTimeout(()=>render(`Player ${batter+1} is all out. Next innings!`),650)}}else{runs+=batterChoice;scores[batter]+=runs;const earned=runs;runs=0;phase="batter";render(`Safe! Player ${batter+1} scores ${earned} run${earned===1?"":"s"}.`)}}})}
 }
 render();roundCleanup=()=>{};
}
function playCarrom(){
 let shots=5,pocketed=0,coins=Array.from({length:5},(_,i)=>({x:22+Math.random()*56,y:18+Math.random()*55,id:i})); 
 function render(message="Tap the board to flick the striker toward a coin."){
  setPlay(`<div class="play-box"><p class="play-prompt">Pocket as many coins as you can in five flicks!</p><div class="score-pill">🪙 ${pocketed} POCKETED · ${shots} SHOTS LEFT</div><div class="carrom-board" id="carromBoard">${coins.map(c=>`<button class="carrom-coin" data-coin="${c.id}" style="left:${c.x}%;top:${c.y}%" aria-label="Carrom coin">●</button>`).join("")}<div class="carrom-pocket pocket-a"></div><div class="carrom-pocket pocket-b"></div><div class="carrom-striker"></div></div><p class="play-sub carrom-message">${message}</p></div>`);
  $("#carromBoard").onclick=e=>{if(shots<=0)return;shots--;const rect=e.currentTarget.getBoundingClientRect(),x=((e.clientX-rect.left)/rect.width)*100,y=((e.clientY-rect.top)/rect.height)*100;let nearest=-1,distance=18;coins.forEach((c,i)=>{const d=Math.hypot(c.x-x,c.y-y);if(d<distance){distance=d;nearest=i}});if(nearest>=0){coins.splice(nearest,1);pocketed++;message="Pocketed! Nice flick ✨"}else message="Just missed — line up your next flick!";if(shots===0||coins.length===0){render(message);result(`${pocketed} coin${pocketed===1?"":"s"} pocketed!`,coins.length?"That's a solid little carrom round.":"Clean board! What a shot.");return}render(message)}
 }
 render();roundCleanup=()=>{};
}
function playKiteDuel(){
 const moves=[["🪁","Climb high"],["💨","Catch the wind"],["✂️","Cut across"]],scores=[0,0];let round=0,first;
 function firstPick(){setPlay(`<div class="play-box"><p class="play-prompt">Player 1: pick a kite move, then pass!</p><div class="score-pill">${duelScoreText(scores)}</div><div class="rps-row"></div></div>`);moves.forEach((m,i)=>{const b=document.createElement("button");b.className="answer-button kite-choice";b.innerHTML=`${m[0]}<small>${m[1]}</small>`;b.onclick=()=>{first=i;setPlay('<div class="play-box"><div class="pass-screen"><span>KEEP YOUR KITE MOVE SECRET 🤫</span><p>Pass the sky to Player 2.</p><button class="play-button" id="kitePass">ready to fly</button></div></div>');$("#kitePass").onclick=secondPick};playArea.querySelector(".rps-row").append(b)})}
 function secondPick(){setPlay(`<div class="play-box"><p class="play-prompt">Player 2: choose your kite move!</p><div class="score-pill">${duelScoreText(scores)}</div><div class="rps-row"></div></div>`);moves.forEach((m,i)=>{const b=document.createElement("button");b.className="answer-button kite-choice";b.innerHTML=`${m[0]}<small>${m[1]}</small>`;b.onclick=()=>{if(i!==first&&((i-first+3)%3===1))scores[1]++;if(i!==first&&((first-i+3)%3===1))scores[0]++;round++;const outcome=i===first?"Same move! The kites dance together.":((i-first+3)%3===1)?"Player 2 catches the better wind!":"Player 1's kite cuts through!";setPlay(`<div class="play-box"><p class="play-prompt">🪁 ${outcome}</p><div class="score-pill">${duelScoreText(scores)}</div><button class="play-button" id="kiteNext">${round===5?"see who wins":"next round"}</button></div>`);$("#kiteNext").onclick=()=>round===5?duelFinish(scores,"Both kites are flying high! 🤝"):firstPick()};playArea.querySelector(".rps-row").append(b)})}
 firstPick();
}
function playAntakshari(){
 let player=0,turn=0,lastLetter="";const used=new Set(),scores=[0,0];
 function next(message="Player 1, name any song title to begin. No lyrics needed!"){
  if(turn>=8){setPlay(`<div class="play-box"><p class="play-prompt">What a lovely little sing-along!</p><div class="score-pill">PLAYER 1 ${scores[0]} · ${scores[1]} PLAYER 2</div></div>`);duelFinish(scores,"An eight-song sing-along draw! 🎤");return}
  setPlay(`<div class="play-box"><p class="play-prompt">Player ${player+1}, name a song title${lastLetter?` starting with “${lastLetter.toUpperCase()}”`:""}.</p><p class="play-sub">Just the title — no lyrics. Made-up songs welcome!</p><div class="score-pill">TURN ${turn+1}/8 · ${message}</div><form id="songForm" class="answer-row"><input class="game-input song-input" maxlength="50" placeholder="${lastLetter?lastLetter.toUpperCase()+"…":"song title"}" required /><button class="play-button">that's my song</button></form><div class="song-feedback"></div></div>`);
  const form=$("#songForm"),input=form.querySelector("input");form.onsubmit=e=>{e.preventDefault();const title=input.value.trim(),normalized=title.toLowerCase();if(lastLetter&&normalized[0]!==lastLetter){$(".song-feedback").textContent=`It should start with ${lastLetter.toUpperCase()} — try another!`;return}if(used.has(normalized)){$(".song-feedback").textContent="That title's already been played. Pick another!";return}used.add(normalized);scores[player]++;lastLetter=normalized.match(/[a-z]$/)?.[0]||"";turn++;player=1-player;next(`Nice pick! Next song starts with ${lastLetter.toUpperCase()||"any letter"}.`)}
 }
 next();roundCleanup=()=>{};
}
function playIndianQuiz(){
 const q=pick(indianTrivia);setPlay(`<div class="play-box"><p class="play-prompt">${q.q}</p><div class="answer-row"></div></div>`);const row=playArea.querySelector(".answer-row");q.a.forEach((answer,i)=>{const b=document.createElement("button");b.className="answer-button";b.textContent=answer;b.onclick=()=>{if(row.dataset.done)return;row.dataset.done="1";row.querySelectorAll("button").forEach((button,j)=>{button.disabled=true;if(j===q.c)button.classList.add("correct")});if(i!==q.c)b.classList.add("wrong");result(i===q.c?"Bilkul sahi! 🎉":"Good try!",i===q.c?"What a lovely little fact.":`The answer was ${q.a[q.c]}.`)};row.append(b)})
}
function duelScoreText(scores){return `PLAYER 1 ${scores[0]} · ${scores[1]} PLAYER 2`}
function duelFinish(scores,drawText="A very respectable draw! 🤝"){
 const message=scores[0]===scores[1]?drawText:scores[0]>scores[1]?"Player 1 takes the tiny trophy! 🏆":"Player 2 takes the tiny trophy! 🏆";
 result(message,`Final score: ${scores[0]} – ${scores[1]}. Rematch?`);
}
function duelTurnScreen(player,score,begin,label="start turn"){
 setPlay(`<div class="play-box"><p class="play-prompt">Pass the device between turns.</p><div class="score-pill">${duelScoreText(score)}</div><div class="pass-screen"><span>PLAYER ${player}</span><p>It's your turn!</p><button class="play-button" id="duelReady">${label}</button></div></div>`);
 $("#duelReady").onclick=begin;
}
function duelQuestionTurn(round,scores){
 if(round===6){setPlay('<div class="play-box"><div class="score-pill">THE FINAL SCORE</div></div>');duelFinish(scores);return}
 const player=round%2+1,q=pick(questions.quiz);let advanceTimer;
 duelTurnScreen(player,scores,()=>{
  setPlay(`<div class="play-box"><p class="play-prompt">${q.q}</p><div class="score-pill">${duelScoreText(scores)}</div><div class="answer-row"></div></div>`);
  const row=playArea.querySelector(".answer-row");
  q.a.forEach((answer,i)=>{const b=document.createElement("button");b.className="answer-button";b.textContent=answer;b.onclick=()=>{if(row.dataset.done)return;row.dataset.done="1";if(i===q.c)scores[player-1]++;row.querySelectorAll("button").forEach((button,j)=>{button.disabled=true;if(j===q.c)button.classList.add("correct")});if(i!==q.c)b.classList.add("wrong");advanceTimer=setTimeout(()=>duelQuestionTurn(round+1,scores),650)};row.append(b)});
  roundCleanup=()=>clearTimeout(advanceTimer);
 });
}
function playDuelQuiz(){duelQuestionTurn(0,[0,0])}
function duelMathTurn(round,scores){
 if(round===6){setPlay('<div class="play-box"><div class="score-pill">THE FINAL SCORE</div></div>');duelFinish(scores);return}
 const player=round%2+1,op=pick(["+","−","×"]),a=op==="×"?1+Math.floor(Math.random()*9):1+Math.floor(Math.random()*20),b=op==="×"?1+Math.floor(Math.random()*9):1+Math.floor(Math.random()*20),answer=op==="+"?a+b:op==="−"?Math.max(a,b)-Math.min(a,b):a*b,first=op==="−"?Math.max(a,b):a,second=op==="−"?Math.min(a,b):b;let advanceTimer;
 const options=[...new Set([answer,answer+pick([1,2,3]),Math.max(0,answer-pick([1,2,3]))])].sort(()=>Math.random()-.5);
 duelTurnScreen(player,scores,()=>{
  setPlay(`<div class="play-box"><p class="play-prompt">${first} ${op} ${second} = ?</p><div class="score-pill">${duelScoreText(scores)}</div><div class="answer-row"></div></div>`);
  const row=playArea.querySelector(".answer-row");
  options.forEach(n=>{const b=document.createElement("button");b.className="answer-button";b.textContent=n;b.onclick=()=>{if(row.dataset.done)return;row.dataset.done="1";if(n===answer)scores[player-1]++;row.querySelectorAll("button").forEach(button=>{button.disabled=true;if(Number(button.textContent)===answer)button.classList.add("correct")});if(n!==answer)b.classList.add("wrong");advanceTimer=setTimeout(()=>duelMathTurn(round+1,scores),650)};row.append(b)});
  roundCleanup=()=>clearTimeout(advanceTimer);
 });
}
function playDuelMath(){duelMathTurn(0,[0,0])}
function duelMemoryTurn(round,scores){
 if(round===6){setPlay('<div class="play-box"><div class="score-pill">THE FINAL SCORE</div></div>');duelFinish(scores);return}
 const player=round%2+1,icons=["🍋","🌷","⭐","🍄","🐸","💧","🍒","🌙"],sequence=Array.from({length:4},()=>pick(icons));
 duelTurnScreen(player,scores,()=>{
  setPlay(`<div class="play-box"><p class="play-prompt">Remember the order!</p><div class="score-pill">${duelScoreText(scores)}</div><div class="sequence-display" id="duelSequence">✳ ✳ ✳</div></div>`);
  let index=0,timer,advanceTimer;const show=()=>{if(index<sequence.length){$("#duelSequence").textContent=sequence[index++];timer=setTimeout(show,500)}else{const correct=sequence.join(" "),choices=[correct];const reversed=[...sequence].reverse().join(" ");if(!choices.includes(reversed))choices.push(reversed);while(choices.length<3){const decoy=[...sequence];decoy[Math.floor(Math.random()*decoy.length)]=pick(icons);const option=decoy.join(" ");if(!choices.includes(option))choices.push(option)}setPlay(`<div class="play-box"><p class="play-prompt">Which sequence did you see?</p><div class="score-pill">${duelScoreText(scores)}</div><div class="answer-row"></div></div>`);const row=playArea.querySelector(".answer-row");choices.sort(()=>Math.random()-.5).forEach(choice=>{const b=document.createElement("button");b.className="answer-button memory-answer";b.textContent=choice;b.onclick=()=>{if(row.dataset.done)return;row.dataset.done="1";if(choice===correct)scores[player-1]++;row.querySelectorAll("button").forEach(button=>{button.disabled=true;if(button.textContent===correct)button.classList.add("correct")});if(choice!==correct)b.classList.add("wrong");advanceTimer=setTimeout(()=>duelMemoryTurn(round+1,scores),650)};row.append(b)});roundCleanup=()=>clearTimeout(advanceTimer)}};show();roundCleanup=()=>clearTimeout(timer);
 });
}
function playDuelMemory(){duelMemoryTurn(0,[0,0])}
function playDuelReaction(){
 const totals=[0,0];let turn=0,delayTimer,advanceTimer;
 function next(){if(turn===6){setPlay('<div class="play-box"><div class="score-pill">TOTAL REACTION TIME</div></div>');const faster=totals[0]===totals[1]?"An impressively quick draw! 🤝":totals[0]<totals[1]?"Player 1 takes the speedy crown! 🏆":"Player 2 takes the speedy crown! 🏆";result(faster,`Combined reaction time: ${Math.round(totals[0])} ms vs. ${Math.round(totals[1])} ms.`);return}const player=turn%2+1;duelTurnScreen(player,totals,()=>{setPlay(`<div class="play-box"><p class="play-prompt">Wait for green, then tap the big button!</p><div class="score-pill">${duelScoreText(totals)}</div><button class="reaction-duel-button" id="reactionDuel">WAIT FOR IT…</button><div class="play-sub" id="reactionFeedback">No tapping until it turns green.</div></div>`);const button=$("#reactionDuel"),feedback=$("#reactionFeedback");let ready=false,finished=false,startedAt=0;button.onclick=()=>{if(ready){const ms=performance.now()-startedAt;ready=false;finished=true;totals[player-1]+=ms;feedback.textContent=`${Math.round(ms)} ms — ${ms<280?"lightning quick!":"nice and steady."}`;button.disabled=true;turn++;advanceTimer=setTimeout(next,1000)}else if(!finished){finished=true;clearTimeout(delayTimer);button.disabled=true;feedback.textContent="Too soon! No point this turn.";turn++;advanceTimer=setTimeout(next,900)}};delayTimer=setTimeout(()=>{ready=true;button.classList.add("ready");button.textContent="TAP!";startedAt=performance.now()},1000+Math.random()*1700);roundCleanup=()=>{clearTimeout(delayTimer);clearTimeout(advanceTimer)}});}
 next();roundCleanup=()=>{clearTimeout(delayTimer);clearTimeout(advanceTimer)};
}
function playDuelRps(){
 const moves=["✊","✋","✌️"],names=["rock","paper","scissors"],score=[0,0];let round=0,firstMove;
 function drawFirst(){setPlay(`<div class="play-box"><p class="play-prompt">Player 1, choose secretly. Then pass the device.</p><div class="score-pill">${duelScoreText(score)}</div><div class="rps-row"></div></div>`);moves.forEach((emoji,i)=>{const b=document.createElement("button");b.className="rps-choice";b.textContent=emoji;b.setAttribute("aria-label",names[i]);b.onclick=()=>{firstMove=i;drawPass()};playArea.querySelector(".rps-row").append(b)})}
 function drawPass(){setPlay('<div class="play-box"><div class="pass-screen"><span>NO PEEKING!</span><p>Pass the phone to Player 2.</p><button class="play-button" id="rpsPass">ready for player 2</button></div></div>');$("#rpsPass").onclick=drawSecond}
 function drawSecond(){setPlay(`<div class="play-box"><p class="play-prompt">Player 2, choose your move!</p><div class="score-pill">${duelScoreText(score)}</div><div class="rps-row"></div></div>`);moves.forEach((emoji,i)=>{const b=document.createElement("button");b.className="rps-choice";b.textContent=emoji;b.setAttribute("aria-label",names[i]);b.onclick=()=>{if(i!==firstMove&&((firstMove-i+3)%3===1))score[0]++;if(i!==firstMove&&((i-firstMove+3)%3===1))score[1]++;round++;showResult(i)};playArea.querySelector(".rps-row").append(b)})}
 function showResult(secondMove){setPlay(`<div class="play-box"><p class="play-prompt">Rock, paper, scissors!</p><div class="score-pill">${duelScoreText(score)}</div><div class="typing-word">${moves[firstMove]} ${moves[secondMove]}</div><p class="play-sub">Player 1: ${names[firstMove]} · Player 2: ${names[secondMove]}</p><button class="play-button" id="rpsNext">${round===3||score[0]===2||score[1]===2?"see the results":"next round"}</button></div>`);$("#rpsNext").onclick=()=>{if(round===3||score[0]===2||score[1]===2)duelFinish(score);else drawFirst()}}
 drawFirst();
}
function playDuelGuess(){
 const secret=1+Math.floor(Math.random()*30),score=[0,0];let guesses=0,player=1;
 function turn(feedback=""){if(guesses>=8){setPlay('<div class="play-box"><div class="score-pill">THE SECRET NUMBER</div></div>');duelFinish(score,`The number was ${secret} — a mysterious little draw! 🤝`);return}duelTurnScreen(player,score,()=>{setPlay(`<div class="play-box"><p class="play-prompt">Find the secret number between 1 and 30.</p><p class="play-sub">${feedback||"Take turns guessing. First to find it wins!"}</p><div class="score-pill">${guesses}/8 guesses · ${duelScoreText(score)}</div><form class="answer-row" id="duelGuessForm"><input class="game-input" id="duelGuessInput" type="number" min="1" max="30" placeholder="1 – 30" required /><button class="play-button">guess!</button></form></div>`);const input=$("#duelGuessInput");$("#duelGuessForm").onsubmit=e=>{e.preventDefault();const n=Number(input.value);if(n<1||n>30)return;guesses++;if(n===secret){score[player-1]++;setPlay('<div class="play-box"><div class="score-pill">SECRET NUMBER FOUND</div></div>');duelFinish(score,`Player ${player} found ${secret}!`);return}const hint=n<secret?"A little higher ↑":"A little lower ↓";player=player===1?2:1;turn(`That guess was ${hint} · pass to Player ${player}.`)};});}
 turn();roundCleanup=()=>{};
}
function playCouples(){
 const packet=coupleQuestions[currentGame[7]]||coupleQuestions.everyday,rounds=6,prompts=Array.from({length:rounds},(_,i)=>packet[i%packet.length]),scores=[0,0];let round=0,secretAnswer;
 function chooserTurn(){if(round===rounds){setPlay('<div class="play-box"><div class="score-pill">YOUR LITTLE MATCH REPORT</div></div>');duelFinish(scores,"You're a wonderfully in-sync pair! 💛");return}const chooser=round%2+1,guesser=chooser===1?2:1,[prompt,...options]=prompts[round];setPlay(`<div class="play-box"><p class="play-prompt">${prompt}</p><div class="score-pill">PLAYER ${chooser}: PICK YOUR OWN ANSWER</div><div class="answer-row"></div></div>`);options.forEach((option,i)=>{const b=document.createElement("button");b.className="answer-button";b.textContent=option;b.onclick=()=>{secretAnswer=i;handoff(chooser,guesser,prompt,options)};playArea.querySelector(".answer-row").append(b)})}
 function handoff(chooser,guesser,prompt,options){setPlay(`<div class="play-box"><div class="pass-screen"><span>KEEP IT SECRET 🤫</span><p>Pass the device to Player ${guesser}.</p><button class="play-button" id="couplePass">ready to guess</button></div></div>`);$("#couplePass").onclick=()=>{setPlay(`<div class="play-box"><p class="play-prompt">${prompt}</p><div class="score-pill">PLAYER ${guesser}: WHAT DID PLAYER ${chooser} PICK?</div><div class="answer-row"></div></div>`);options.forEach((option,i)=>{const b=document.createElement("button");b.className="answer-button";b.textContent=option;b.onclick=()=>{if(i===secretAnswer)scores[guesser-1]++;playArea.querySelectorAll(".answer-button").forEach((button,j)=>{button.disabled=true;if(j===secretAnswer)button.classList.add("correct")});if(i!==secretAnswer)b.classList.add("wrong");const feedback=document.createElement("div");feedback.className="play-result";feedback.textContent=i===secretAnswer?"You know each other so well! 💛":`The pick was: ${options[secretAnswer]}`;playArea.querySelector(".play-box").append(feedback);const next=document.createElement("button");next.className="play-button couple-next";next.textContent=round===rounds-1?"see your results":"next little question";next.onclick=()=>{round++;chooserTurn()};playArea.querySelector(".play-box").append(next)};playArea.querySelector(".answer-row").append(b)})}}
 chooserTurn();
}
$("#filterRow").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(b){activeCategory=b.dataset.filter;favoritesOnly=false;$("#favoritesToggle").classList.remove("selected");renderFilters();renderGames()}});
grid.addEventListener("click",e=>{const fav=e.target.closest("[data-fav]");if(fav){e.stopPropagation();const game=games[Number(fav.dataset.fav)];favorites.has(game[0])?favorites.delete(game[0]):favorites.add(game[0]);saveFavorites();return}const card=e.target.closest("[data-game]");if(card)openGame(Number(card.dataset.game))});
grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches(".game-card")){e.preventDefault();openGame(Number(e.target.dataset.game))}});
$("#searchInput").addEventListener("input",e=>{searchText=e.target.value.trim().toLowerCase();renderGames()});
$("#clearFilters").onclick=()=>{$("#searchInput").value="";searchText="";activeCategory="all";favoritesOnly=false;$("#favoritesToggle").classList.remove("selected");renderFilters();renderGames()};
$("#favoritesToggle").onclick=()=>{favoritesOnly=!favoritesOnly;$("#favoritesToggle").classList.toggle("selected",favoritesOnly);activeCategory="all";renderFilters();renderGames();document.querySelector("#games").scrollIntoView({behavior:"smooth"})};
$("#shuffleButton").onclick=()=>{favoritesOnly=false;activeCategory="all";searchText="";$("#searchInput").value="";$("#favoritesToggle").classList.remove("selected");renderFilters();renderGames();const index=Math.floor(Math.random()*games.length);setTimeout(()=>openGame(index),80)};
$("#modalClose").onclick=closeGame;modal.addEventListener("click",e=>{if(e.target===modal)closeGame()});$("#modalAgain").onclick=startGame;document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("open"))closeGame()});
renderFilters();renderGames();
