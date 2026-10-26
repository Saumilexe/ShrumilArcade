const duoGames = [
  ["Tap-Together Relay","Take turns and see who reacts fastest when the light turns green.","duo","⚡","quick","orange","duel-reaction"],
  ["Ready, Set, React","A six-turn reflex race. The quickest player takes the point.","duo","🏁","quick","green","duel-reaction"],
  ["Green-Light Showdown","Wait for green, then tap. False starts don't count!","duo","🟢","quick","blue","duel-reaction"],
  ["Reflex Face-Off","Pass the device between turns and compare your reaction times.","duo","👀","quick","pink","duel-reaction"],
  ["Beat Your Bestie","Three turns each to prove whose fingers are speedier.","duo","🥁","quick","yellow","duel-reaction"],
  ["Quick-Draw Duel","Hold your nerve. First to react wins each round.","duo","🤠","quick","lavender","duel-reaction"],
  ["Two-Brain Trivia","Take turns answering a tiny trivia quiz. Most right answers wins.","duo","🧠","thinky","lavender","duel-quiz"],
  ["Friendly Fact-Off","Six questions, two players, and absolutely no googling.","duo","🔎","thinky","blue","duel-quiz"],
  ["Quizzy Buddies","Pass the phone after each question and keep score together.","duo","📚","thinky","yellow","duel-quiz"],
  ["Brain vs. Brain","A little general knowledge contest for two curious minds.","duo","💡","thinky","green","duel-quiz"],
  ["Pop Quiz Partners","Take turns with a mix of fun facts and brain teasers.","duo","🎓","thinky","pink","duel-quiz"],
  ["The Know-It-Twosome","Six quick questions settle absolutely nothing, but they're fun.","duo","🏆","thinky","orange","duel-quiz"],
  ["Math-Mates Race","Take turns solving quick sums. Each correct answer scores a point.","duo","🍋","thinky","yellow","duel-math"],
  ["Sum Buddies","Six little number puzzles. Pass the device after every turn.","duo","🧮","thinky","blue","duel-math"],
  ["Number Ninjas, Together","Race through friendly math questions and count your wins.","duo","🥷","thinky","green","duel-math"],
  ["The Great Sum-Off","One equation each turn. Who'll collect the most points?","duo","➕","thinky","pink","duel-math"],
  ["Quick-Math Teammates","Solve separately, compare scores, cheer each other on.","duo","🧺","thinky","lavender","duel-math"],
  ["Multiply & Conquer","A quick alternating multiplication challenge for two.","duo","✖️","thinky","orange","duel-math"],
  ["Memory Match-Up","Watch a sequence, then take turns remembering it.","duo","🪄","thinky","lavender","duel-memory"],
  ["Pass-the-Pattern","A new emoji sequence for each player. Who remembers more?","duo","🌈","thinky","pink","duel-memory"],
  ["Brain Buffer Battle","Six short memory turns. No notes, just noodle power.","duo","🐸","thinky","green","duel-memory"],
  ["Recall Rally","Your opponent sees the pattern too. Remember it to score.","duo","💭","thinky","blue","duel-memory"],
  ["The Memory Relay","Pass the phone after the sequence disappears. Good luck!","duo","🍒","thinky","yellow","duel-memory"],
  ["Remember When?","A friendly memory test with a fresh sequence each turn.","duo","🌙","thinky","orange","duel-memory"],
  ["Rock, Paper, Bestie","Pass the device between secret picks. First to two wins!","duo","✊","quick","lavender","duel-rps"],
  ["Paper Beats Rock","A best-of-three hand game. Keep your move a secret.","duo","✋","quick","blue","duel-rps"],
  ["Scissors & Giggles","Choose your move, hand it over, then reveal together.","duo","✌️","quick","pink","duel-rps"],
  ["Best-of-Three Buddies","A classic quick duel for two people and one phone.","duo","🤝","quick","green","duel-rps"],
  ["The Hand-Game Show","Three secret picks decide this very important match.","duo","🎤","quick","yellow","duel-rps"],
  ["Tiny Tournament","A pass-and-play rock-paper-scissors final. May the best hand win.","duo","🏅","quick","orange","duel-rps"],
  ["How Well Do You Know Me?","Take turns guessing each other's favorite little things.","couple","💛","thinky","pink","couples","favorites"],
  ["Date-Night Decoder","Predict your partner's perfect cozy evening.","couple","🕯️","thinky","lavender","couples","date"],
  ["Snack Soulmates","Guess which treat your favorite person would pick.","couple","🍿","quick","yellow","couples","food"],
  ["Dream Trip Duo","See if you can guess your partner's dream getaway.","couple","🗺️","thinky","blue","couples","travel"],
  ["Two of a Kind","Find out how often you make the same little choices.","couple","🧩","quick","green","couples","everyday"],
  ["Playlist for Two","Guess the kind of soundtrack your partner would choose.","couple","🎵","thinky","lavender","couples","music"],
  ["The Cozy Couple Quiz","Predict your person's ideal slow day at home.","couple","🧸","quick","pink","couples","cozy"],
  ["Our Little Adventure","How well can you predict each other's spontaneous side?","couple","🌲","thinky","green","couples","adventure"],
  ["Movie-Night Match","Guess your partner's pick for the perfect movie night.","couple","🎬","quick","blue","couples","movies"],
  ["The Compliment Club","Pick the sweet words you think your partner would choose.","couple","💌","thinky","pink","couples","sweet"],
  ["Future-Daydreamers","Trade guesses about the little things you'd love to do someday.","couple","☁️","thinky","lavender","couples","dreams"],
  ["Little Things, Big Love","See how well you know each other's daily favorites.","couple","🌼","quick","yellow","couples","everyday"],
  ["The Perfect Picnic Pair","Guess your partner's ideal picnic spread.","couple","🧺","quick","green","couples","food"],
  ["First-Date Time Machine","Take a playful trip back to the early-days questions.","couple","📷","thinky","orange","couples","memories"],
  ["Love Language, Lightly","Guess which small gestures make your partner feel appreciated.","couple","💐","thinky","pink","couples","sweet"],
  ["Weekend Wanderers","Predict your person's dream low-key weekend plan.","couple","🚲","quick","blue","couples","travel"],
  ["A Song for Us","Trade guesses about the tunes that make you both smile.","couple","🎧","thinky","lavender","couples","music"],
  ["Silly Little Soulmates","Choose the answer your partner would find funniest.","couple","🤭","quick","yellow","couples","funny"],
  ["The Great Getaway Guess","Would your person pick mountains, sea, or city lights?","couple","🏕️","thinky","green","couples","travel"],
  ["Our Kind of Night","Guess what your partner would pick for a just-us evening.","couple","🌙","quick","pink","couples","date"],
  ["Snakes & Ladders","A classic two-player race up the board. Watch out for snakes!","duo","🐍","quick","green","indian-snakes"],
  ["Ludo: Pass & Play","Roll, race your tokens home, and send your rival back to start.","duo","🎲","thinky","pink","indian-ludo"],
  ["Simon Says: Color Beats","Watch the glowing color sequence, then repeat it from memory.","solo","🔴","thinky","lavender","indian-simon"],
  ["Masala Drum Kit","Tap the tabla-inspired beat pads or play with keys A, S, D, and F.","solo","🥁","quick","orange","indian-drums"],
  ["Hand Cricket: Gully Match","Pick runs, bowl a number, and try not to get run out!","duo","🏏","quick","green","indian-cricket"],
  ["Carrom Flick Challenge","Pocket the striker into the target before your shots run out.","solo","⚪","quick","yellow","indian-carrom"],
  ["Kite-Flying Duel","Pick your kite move and outmaneuver your friend's kite in the sky.","duo","🪁","quick","blue","indian-kite"],
  ["Antakshari: Last Letter","Take turns naming a song that starts with the last letter. No lyrics needed!","duo","🎤","thinky","pink","indian-antakshari"],
  ["Rangoli Recall","Watch the colorful rangoli pattern and tap it back in order.","solo","🌸","thinky","lavender","indian-rangoli"],
  ["Chai-Time India Quiz","A friendly mini quiz about places, food, festivals, and nature.","solo","☕","thinky","yellow","indian-quiz"],
  ["Neon Snake","Guide your growing snake, munch the fruit, and don't bump into yourself!","solo","🐍","quick","green","animated-snake"],
  ["Pixel Pong","A two-player paddle showdown. First to five points wins!","duo","🏓","quick","blue","animated-pong"],
  ["Mango Catcher","Move your basket to catch falling mangoes before the timer runs out.","solo","🥭","quick","yellow","animated-mango"],
  ["Bubble Pop Garden","Pop the drifting bubbles and see how many you can catch in 20 seconds.","solo","🫧","quick","lavender","animated-bubbles"]
];

const coupleQuestions = {
  favorites: [
    ["Pick your ideal treat.","🍰 Cake","🍦 Ice cream","🍓 Fresh fruit"],
    ["What sounds like the best little surprise?","A handwritten note","A favorite snack","An unexpected outing"],
    ["Choose a perfect free afternoon.","Reading somewhere cozy","A long walk","Making something"],
    ["Which tiny gift feels most thoughtful?","A book they mentioned","A silly little keepsake","Their favorite flowers"],
    ["What's the best kind of celebration?","A quiet dinner","A fun day out","A gathering with friends"]
  ],
  date: [
    ["Pick a lovely date-night plan.","Dinner somewhere new","Movie night at home","A sunset walk"],
    ["Choose the best date-night snack.","Popcorn","Something sweet","A little bit of everything"],
    ["What's your partner's ideal evening pace?","Spontaneous and lively","Slow and cozy","A mix of both"],
    ["Pick a fun two-person activity.","Mini golf","Cooking together","A board game"],
    ["Choose a date-night soundtrack.","Soft and mellow","Upbeat favorites","No music, just chatting"]
  ],
  food: [
    ["Pick one forever snack.","🍿 Popcorn","🍪 Cookies","🥨 Pretzels"],
    ["What's the perfect breakfast?","Pancakes","A savory brunch","Coffee and something small"],
    ["Choose a dinner mood.","Tacos with all the toppings","A comforting bowl of pasta","Trying something brand new"],
    ["Best dessert to share?","Warm brownies","A scoop of ice cream","A plate of tiny treats"],
    ["Pick the best picnic bite.","Fresh berries","A really good sandwich","Something crunchy"]
  ],
  travel: [
    ["Choose your dream getaway.","🌊 A sunny beach","🌲 A quiet cabin","🏙️ A city to wander"],
    ["What's the best holiday pace?","A full itinerary","One plan a day","Completely spontaneous"],
    ["Pick a travel companion essential.","A camera","A great playlist","A snack stash"],
    ["Your ideal morning away?","Explore a new place","Stay in bed a bit longer","Find a local café"],
    ["Choose a scenic detour.","Mountain lookout","Little coastal town","Interesting roadside stop"]
  ],
  everyday: [
    ["Choose a perfect slow morning.","Sleep in a little","A fresh coffee or tea","A walk outside"],
    ["Which tiny household luxury wins?","Fresh sheets","A tidy kitchen","A favorite candle"],
    ["What is the best way to recharge?","Quiet alone time","A chat with someone","Getting outdoors"],
    ["Pick an ideal rainy-day plan.","A comfort movie","A good book","Bake something cozy"],
    ["What makes a day feel special?","A thoughtful message","A shared laugh","A little surprise"]
  ],
  music: [
    ["Pick a soundtrack for a road trip.","Sing-along classics","Chill indie tunes","A very unpredictable mix"],
    ["Which live show sounds best?","A tiny local venue","A big outdoor concert","A cozy acoustic set"],
    ["Choose a music mood.","Happy and bouncy","Soft and mellow","Dramatic and cinematic"],
    ["Pick a perfect kitchen song.","A song everyone knows","Something brand new","Whatever is on shuffle"],
    ["What makes a song a favorite?","Lyrics that stick","A great beat","A memory attached to it"]
  ],
  cozy: [
    ["Build the coziest evening.","Blanket and a movie","Tea and a book","Comfy clothes and a chat"],
    ["Choose a perfect cozy drink.","Hot chocolate","A favorite tea","A fancy coffee"],
    ["Pick the best stay-in activity.","A puzzle","A comfort show","Making a new recipe"],
    ["What makes a room extra cozy?","Warm lights","Soft pillows","A lovely smell"],
    ["Choose a lazy-day uniform.","Oversized sweater","Soft pajamas","Comfy socks and anything"]
  ],
  adventure: [
    ["Pick a spontaneous afternoon.","Explore a new neighborhood","Find a nature trail","Visit a tiny museum"],
    ["Choose a fun first stop on a day out.","A bakery","A scenic viewpoint","A place neither of you knows"],
    ["Pick your adventure level.","A gentle wander","A new challenge","Let's see where we end up"],
    ["Which souvenir would you bring home?","A postcard","A funny photo","A tiny local treasure"],
    ["Choose the best way to get there.","Train window seat","A playlist-filled drive","A walk with no rush"]
  ],
  movies: [
    ["Pick movie-night comfort.","A clever comedy","A big adventure","A gentle feel-good story"],
    ["Choose the ideal movie snack.","Popcorn, obviously","A mix of sweet and salty","Something homemade"],
    ["What's your partner likely to rewatch?","A familiar favorite","A mystery they love","A movie that makes them laugh"],
    ["Pick a movie setting.","Faraway fantasy world","A cozy small town","A place that feels like today"],
    ["Best credits-roll plan?","Talk about the ending","Find another favorite scene","Get a little dessert"]
  ],
  sweet: [
    ["Which small gesture feels especially lovely?","A kind text in the middle of the day","A hug hello","Someone remembering a detail"],
    ["Pick the sweetest everyday moment.","Laughing at an inside joke","Sharing a snack","A quiet check-in"],
    ["What would make your partner feel appreciated?","A specific compliment","A little help with a task","Unhurried time together"],
    ["Choose a note to find in your bag.","'You've got this!'","'Can't wait to see you'","A very silly doodle"],
    ["What's your favorite kind of together-time?","Doing something side by side","Talking about everything","Being cozy in the same room"]
  ],
  dreams: [
    ["Pick a lovely someday plan.","Learn something new together","Take a memorable trip","Make a home ritual"],
    ["Which shared skill sounds fun to learn?","A new recipe","A dance step","A few words of another language"],
    ["Choose a little future tradition.","A weekly walk","A yearly day trip","A new celebration ritual"],
    ["What would you save a free day for?","A tiny road trip","A creative project","A slow day with no plans"],
    ["Pick a dream-day ending.","Watch the sunset","Share a favorite meal","Laugh about the day's surprises"]
  ],
  funny: [
    ["Choose your partner's silly superpower.","Finding snacks anywhere","Making any pet like them","Quoting a movie at the right time"],
    ["Who would win a ridiculous contest?","Speed-folding laundry","Recognizing theme songs","Building the best blanket fort"],
    ["Pick a very serious team name.","The Snack Pack","Two Left Socks","The Blanket Committee"],
    ["Which tiny inconvenience would they defeat first?","A stubborn jar lid","A tangled headphone knot","A fitted sheet"],
    ["Choose an imaginary pet sidekick.","A dramatic pigeon","A tiny dragon","A very polite raccoon"]
  ],
  memories: [
    ["Pick a lovely way to remember a day.","A photo together","A little keepsake","A story you keep retelling"],
    ["What makes a first meeting memorable?","A shared laugh","An unexpected detail","A conversation that flowed"],
    ["Choose a memory to recreate.","A favorite meal","A fun day out","A cozy ordinary evening"],
    ["What's a great keepsake?","A ticket stub","A handwritten note","A photo you both love"],
    ["Pick a story you enjoy telling.","A travel mishap","A happy surprise","A time you laughed too much"]
  ]
};

const indianTrivia = [
  {q:"Which Indian festival is often called the Festival of Lights?",a:["Diwali","Holi","Onam"],c:0},
  {q:"Which board game is traditionally played with a cross-shaped board and cowrie shells or dice?",a:["Pachisi","Carrom","Gilli-danda"],c:0},
  {q:"Which of these is a classical dance form from Kerala?",a:["Kathakali","Bharatanatyam","Garba"],c:0},
  {q:"What is the name of the colorful kite festival widely celebrated in Gujarat in January?",a:["Uttarayan","Baisakhi","Bihu"],c:0},
  {q:"Which Indian sport uses a bat, a ball, and wickets?",a:["Cricket","Kabaddi","Kho-kho"],c:0},
  {q:"Which flower is commonly used in rangoli decorations?",a:["Marigold","Tulip","Lavender"],c:0},
  {q:"Which drink is a beloved spiced tea often enjoyed across India?",a:["Masala chai","Matcha","Horchata"],c:0},
  {q:"Which board game is known for the phrase 'snakes and ladders'?",a:["Moksha Patam","Pachisi","Carrom"],c:0},
  {q:"Which instrument is a pair of hand drums associated with Indian music?",a:["Tabla","Sitar","Flute"],c:0},
  {q:"What is the name of the spring festival known for playful colors?",a:["Holi","Diwali","Pongal"],c:0}
];
