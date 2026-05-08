import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Progress } from "./ui/progress";
import logoIcon from "figma:asset/223a43575dcb00cc8f62b5b569c24b205b8a3f00.png";
import tournamentLogo from "figma:asset/7784e939caf78c206fd9a266d7c3f635805e61ad.png";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  suggestions?: string[];
}

type MasterType = "Legilimency" | "Prescience" | "Machination" | "Sangfroid" | "Monomania";

interface QuizResult {
  type: MasterType;
  round: string;
  description: string;
  power: string;
  punishment: string;
  mainQuote: string;
  secondaryQuote: string;
  scores: Record<MasterType, number>;
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Power isn't given. It's taken — through the deck, through the mind, through the will to dominate.",
      sender: "bot",
      timestamp: new Date(),
      suggestions: [],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [showSuggestionsForId, setShowSuggestionsForId] = useState<string | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [chatWithBoss, setChatWithBoss] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [scores, setScores] = useState<Record<MasterType, number>>({
    Legilimency: 0,
    Prescience: 0,
    Machination: 0,
    Sangfroid: 0,
    Monomania: 0,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showSuggestionsForId]);

  useEffect(() => {
    // Show suggestions with delay for the last bot message
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === "bot" && lastMessage.suggestions && lastMessage.suggestions.length > 0 && !isTyping) {
      const timer = setTimeout(() => {
        setShowSuggestionsForId(lastMessage.id);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (messages.length === 1 && messages[0].id === "1") {
      // Add welcome message after 3 seconds
      const welcomeTimer = setTimeout(() => {
        setMessages(prev => [...prev, {
          id: "1.5",
          text: "Welcome to the Elite Council Personality Assessment. Deep within you lies the essence of one of the five legendary bosses. Answer these questions truthfully to discover your true nature...",
          sender: "bot",
          timestamp: new Date(),
          suggestions: ["Begin"],
        }]);
      }, 3000);

      return () => {
        clearTimeout(welcomeTimer);
      };
    }
  }, [messages]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setMessages(prev => [...prev, {
      id: (Date.now()).toString(),
      text: "Begin",
      sender: "user",
      timestamp: new Date(),
    }]);
    
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: "2",
        text: "When you face someone stronger than you, your instinct is to…",
        sender: "bot",
        timestamp: new Date(),
        suggestions: [
          "Observe and analyze every move to find their weakness.",
          "Refuse to lose — burn yourself to ashes if you must.",
          "Twist their thoughts until they start doubting themselves.",
          "Wait for the exact moment to strike.",
          "Keep a cold face — victory or defeat, they still fear you.",
        ],
      }]);
      setIsTyping(false);
    }, 800);
  };

  const quizQuestions = [
    {
      question: "When you face someone stronger than you, your instinct is to…",
      suggestions: [
        { text: "Observe and analyze every move to find their weakness.", type: "Machination" },
        { text: "Refuse to lose — burn yourself to ashes if you must.", type: "Monomania" },
        { text: "Twist their thoughts until they start doubting themselves.", type: "Legilimency" },
        { text: "Wait for the exact moment to strike.", type: "Prescience" },
        { text: "Keep a cold face — victory or defeat, they still fear you.", type: "Sangfroid" },
      ],
    },
    {
      question: "What makes you feel most alive?",
      suggestions: [
        { text: "When my plan plays out flawlessly.", type: "Machination" },
        { text: "When I win what no one believed I could have.", type: "Monomania" },
        { text: "When others dance exactly how I make them.", type: "Legilimency" },
        { text: "When I walk into a future I've already foreseen.", type: "Prescience" },
        { text: "When I'm in full control — of myself and everyone else.", type: "Sangfroid" },
      ],
    },
    {
      question: "If power were a blade, how would you use it?",
      suggestions: [
        { text: "Play chess with destiny.", type: "Machination" },
        { text: "Cut down anyone in my way.", type: "Monomania" },
        { text: "Strike without leaving a trace.", type: "Legilimency" },
        { text: "Keep it sheathed until I'm certain of victory.", type: "Prescience" },
        { text: "Drive it into the table and silence the room.", type: "Sangfroid" },
      ],
    },
    {
      question: "In a team, you are usually the one who…",
      suggestions: [
        { text: "Stays behind the scenes, calculating every move.", type: "Machination" },
        { text: "Pushes everyone forward — even if it hurts.", type: "Monomania" },
        { text: "Reads minds and plays people against each other.", type: "Legilimency" },
        { text: "Sees the path before anyone else.", type: "Prescience" },
        { text: "Commands with silence — everyone follows instinctively.", type: "Sangfroid" },
      ],
    },
    {
      question: "When everything collapses, what do you do?",
      suggestions: [
        { text: "Step back and turn the ruins into a new strategy.", type: "Machination" },
        { text: "Clench my fists and rebuild twice as hard.", type: "Monomania" },
        { text: "Manipulate from the shadows until I regain control.", type: "Legilimency" },
        { text: "Accept the fall — knowing it's part of a larger cycle.", type: "Prescience" },
        { text: "Smile. Nothing can touch me anymore.", type: "Sangfroid" },
      ],
    },
    {
      question: "If you could rewrite one rule of the world, it would be…",
      suggestions: [
        { text: "Luck favors the one who calculates it best.", type: "Machination" },
        { text: "Those who dream the biggest, live the longest.", type: "Monomania" },
        { text: "No secret stays buried forever.", type: "Legilimency" },
        { text: "All futures can be rewritten.", type: "Prescience" },
        { text: "Emotions are for the weak.", type: "Sangfroid" },
      ],
    },
    {
      question: "What do you fear the most?",
      suggestions: [
        { text: "Losing control of the plan.", type: "Machination" },
        { text: "Not being strong enough to get what I want.", type: "Monomania" },
        { text: "Being seen through.", type: "Legilimency" },
        { text: "Knowing the future but being unable to change it.", type: "Prescience" },
        { text: "Feeling again.", type: "Sangfroid" },
      ],
    },
  ];

  const masterResults: Record<MasterType, Omit<QuizResult, "scores">> = {
    Machination: {
      type: "Machination",
      round: "The Strategist",
      description: "You're a tactician who thrives on uncertainty. To you, every move, every risk, every misstep is a data point to weaponize. You turn chance into advantage and failure into foresight.",
      power: "Strategy, Luck",
      punishment: "Domain",
      mainQuote: "The deck is chaos — I am the hand that arranges it.",
      secondaryQuote: "Even fate can be bluffed if you know how to deal.",
    },
    Monomania: {
      type: "Monomania",
      round: "The Obsession",
      description: "You are ambition incarnate — a flame that refuses to die. You crave control, victory, and transcendence, even if it consumes you. To you, pain is proof you're still alive.",
      power: "Desire, Obsession",
      punishment: "Domain",
      mainQuote: "I burn, therefore I conquer.",
      secondaryQuote: "The fire in my chest doesn't ask for permission — it devours.",
    },
    Legilimency: {
      type: "Legilimency",
      round: "The Mind Weaver",
      description: "You understand people at a terrifying depth. You don't fight with fists or force — you fight with knowledge. Every word, every glance is a trap you've already built.",
      power: "Mind, Manipulation",
      punishment: "Domain",
      mainQuote: "Every thought has a thread — and I pull the right ones.",
      secondaryQuote: "To control the world, you must first understand what haunts it.",
    },
    Prescience: {
      type: "Prescience",
      round: "The Oracle",
      description: "You see beyond moments — beyond outcomes. The future bends to your understanding, and destiny is simply another move in your game.",
      power: "Fate, Foresight",
      punishment: "Domain",
      mainQuote: "Every card I play has already been played.",
      secondaryQuote: "Knowing is not seeing. It's choosing when to look.",
    },
    Sangfroid: {
      type: "Sangfroid",
      round: "The Sovereign",
      description: "You are composed of flesh. Where others rage or panic, you remain still — a storm contained within skin. Your silence dominates more than any scream ever could.",
      power: "Control, Domination",
      punishment: "Domain",
      mainQuote: "To feel nothing is the highest form of control.",
      secondaryQuote: "When they break, I remain — calm, unshaken, eternal.",
    },
  };

  const calculateResults = (): QuizResult => {
    // Tie-breaker priority: Sangfroid > Prescience > Legilimency > Monomania > Machination
    const tierPriority: Record<MasterType, number> = {
      Sangfroid: 5,
      Prescience: 4,
      Legilimency: 3,
      Monomania: 2,
      Machination: 1,
    };
    
    const sortedTypes = (Object.entries(scores) as [MasterType, number][])
      .sort((a, b) => {
        // First compare by score
        if (b[1] !== a[1]) return b[1] - a[1];
        // If tied, use priority
        return tierPriority[b[0]] - tierPriority[a[0]];
      });
    
    const dominantType = sortedTypes[0][0];
    const resultData = masterResults[dominantType];
    
    return {
      ...resultData,
      scores: scores,
    };
  };

  const generateBotResponse = (userMessage: string, answerType?: MasterType): { text: string; suggestions: { text: string; type: MasterType }[] } | null => {
    if (answerType) {
      setScores(prev => ({
        ...prev,
        [answerType]: prev[answerType] + 1,
      }));
    }

    if (questionNumber >= quizQuestions.length) {
      // Quiz complete
      setTimeout(() => {
        const finalResult = calculateResults();
        setResult(finalResult);
        setQuizComplete(true);
      }, 1000);
      return null;
    }

    const nextQuestion = quizQuestions[questionNumber];
    setQuestionNumber(prev => prev + 1);
    
    return {
      text: nextQuestion.question,
      suggestions: nextQuestion.suggestions,
    };
  };

  const handleSendMessage = (messageText?: string, answerType?: MasterType) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateBotResponse(textToSend, answerType);
      
      if (response) {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: response.text,
          sender: "bot",
          timestamp: new Date(),
          suggestions: response.suggestions.map(s => s.text),
        };
        setMessages((prev) => [...prev, botResponse]);
      }
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Handle "Begin" button to start the quiz
    if (suggestion === "Begin" && !quizStarted) {
      handleStartQuiz();
      return;
    }
    
    // Find the suggestion type from the current question
    const currentQuestion = quizQuestions[questionNumber - 1];
    const suggestionData = currentQuestion.suggestions.find(s => s.text === suggestion);
    handleSendMessage(suggestion, suggestionData?.type);
  };

  const handleRestart = () => {
    setQuizComplete(false);
    setResult(null);
    setQuestionNumber(1);
    setQuizStarted(false);
    setChatWithBoss(false);
    setScores({
      Legilimency: 0,
      Prescience: 0,
      Machination: 0,
      Sangfroid: 0,
      Monomania: 0,
    });
    setMessages([
      {
        id: "1",
        text: "Power isn't given. It's taken — through the deck, through the mind, through the will to dominate.",
        sender: "bot",
        timestamp: new Date(),
        suggestions: [],
      },
    ]);
  };

  const handleChatWithBoss = () => {
    if (!result) return;
    
    setChatWithBoss(true);
    setQuizComplete(false);
    
    // Get greeting based on boss personality
    const greetings: Record<MasterType, string> = {
      Machination: "So, you've found your way to me. Interesting. Every conversation is a game, and I always play to win. What brings you here?",
      Monomania: "You want to speak with me? Good. I respect those who pursue what they want. Let's see if you have the fire to match your ambition.",
      Legilimency: "Ah, how fascinating. You seek my counsel. I can already sense what drives you... but let's see what you're willing to reveal.",
      Prescience: "I knew you would come. The threads of fate brought you here, as they always do. What future do you wish to understand?",
      Sangfroid: "You approach me. Few do. Speak, but know that I am unmoved by pleas or flattery. State your purpose.",
    };
    
    setMessages([
      {
        id: "boss-1",
        text: greetings[result.type],
        sender: "bot",
        timestamp: new Date(),
        suggestions: [],
      },
    ]);
  };

  const generateBossResponse = (userMessage: string): string => {
    if (!result) return "...";
    
    const lowerMsg = userMessage.toLowerCase();
    
    // Detect themes in user message
    const isQuestion = lowerMsg.includes("?") || lowerMsg.startsWith("what") || lowerMsg.startsWith("why") || lowerMsg.startsWith("how") || lowerMsg.startsWith("can you");
    const isAboutPower = lowerMsg.includes("power") || lowerMsg.includes("control") || lowerMsg.includes("strong");
    const isAboutFear = lowerMsg.includes("fear") || lowerMsg.includes("afraid") || lowerMsg.includes("scared") || lowerMsg.includes("worry");
    const isAboutWeakness = lowerMsg.includes("weak") || lowerMsg.includes("fail") || lowerMsg.includes("lose") || lowerMsg.includes("defeat");
    const isAboutFuture = lowerMsg.includes("future") || lowerMsg.includes("tomorrow") || lowerMsg.includes("will") || lowerMsg.includes("next");
    const isAboutPast = lowerMsg.includes("past") || lowerMsg.includes("before") || lowerMsg.includes("remember") || lowerMsg.includes("happened");
    const isEmotional = lowerMsg.includes("feel") || lowerMsg.includes("hurt") || lowerMsg.includes("pain") || lowerMsg.includes("love") || lowerMsg.includes("hate");
    const isAboutStrategy = lowerMsg.includes("plan") || lowerMsg.includes("strategy") || lowerMsg.includes("think") || lowerMsg.includes("calculate");
    const isShort = userMessage.length < 20;
    
    // Boss-specific intelligent responses
    const contextualResponses: Record<MasterType, string> = (() => {
      switch (result.type) {
        case "Machination":
          if (isQuestion && isAboutFuture) return "The future? That's just probability waiting to be manipulated. Ask me instead what I'm willing to sacrifice to tilt the odds.";
          if (isAboutPower) return "Power isn't taken through force alone. It's taken through calculated risks, leveraged weaknesses, and knowing exactly when to strike.";
          if (isAboutFear) return "Fear of failure is just another variable in the equation. I've already accounted for it.";
          if (isAboutStrategy) return "You're learning. Strategy isn't about having a plan — it's about having seventeen, and knowing which one to burn.";
          if (isShort) return "Brevity suggests either confidence or uncertainty. Let me guess which one you're hiding.";
          if (isEmotional) return "Emotions cloud judgment. But they also reveal patterns. Thank you for showing me yours.";
          return "Interesting. You think you're making a move, but you've already shown me three more you'll make after this.";
          
        case "Monomania":
          if (isQuestion && isAboutPower) return "Power? It's not about what you have — it's about what you're willing to destroy to keep it. Are you?";
          if (isAboutFear) return "Fear is fuel. If you're not afraid, you're not pushing hard enough. Show me your fire.";
          if (isAboutWeakness) return "Weakness is only permanent if you accept it. I never have. I never will.";
          if (isEmotional) return "Good. Feel it. Let it consume you. That burning in your chest — that's what separates the conquerors from the conquered.";
          if (isShort) return "Speak with conviction or don't speak at all.";
          if (isAboutPast) return "The past is a graveyard of those who gave up. I didn't. That's why I'm still here.";
          return "Your words carry weight, but do you have the strength to back them? Prove it.";
          
        case "Legilimency":
          if (isQuestion) return "You ask questions, but what you really want is validation. I can see it in the way you phrase your words.";
          if (isAboutFear) return "Fear is just the mind's way of protecting secrets. What are you protecting? What don't you want me to see?";
          if (isAboutPower) return "Power over others begins with understanding what they hide — even from themselves. What are you hiding?";
          if (isEmotional) return "Ah, emotion. The mind's most honest language. Yours is screaming right now. Do you hear it?";
          if (isShort) return "Few words. But the silence between them says far more.";
          if (isAboutWeakness) return "Everyone has a breaking point. A thread that, when pulled, unravels everything. I'm very good at finding those threads.";
          return "Every sentence you write gives me another piece of you. Keep going. I'm almost complete.";
          
        case "Prescience":
          if (isQuestion && isAboutFuture) return "I've already seen the answer you'll arrive at. The question is whether you're ready to accept it.";
          if (isAboutPower) return "Power over the present is fleeting. Power over what comes next? That's eternal.";
          if (isAboutPast) return "The past is written in stone. The future is written in ink. Both are equally immutable to those who can't see the pen.";
          if (isAboutFear) return "You fear what you cannot control. But what if I told you that this moment — this very conversation  was always going to happen?";
          if (isShort) return "Your brevity suggests urgency. But time is patient. Are you?";
          if (isEmotional) return "Feelings are echoes of futures that could have been. Yours echo loudly.";
          return "I knew you'd say that. Not because I'm clever, but because every path you could take leads here.";
          
        case "Sangfroid":
          if (isEmotional) return "You're feeling something. How unfortunate for you. I left that weakness behind long ago.";
          if (isQuestion) return "Questions are born from uncertainty. I am certain. State what you want plainly.";
          if (isAboutPower) return "True power is not dominating others. It's dominating yourself so completely that nothing can move you.";
          if (isAboutFear) return "Fear requires emotion. I have none. What can you possibly threaten me with?";
          if (isShort) return "Efficient. I approve.";
          if (isAboutWeakness) return "Weakness is attachment. I am attached to nothing.";
          return "You speak, and I listen. But your words land on stone. They change nothing.";
          
        default:
          return "...";
      }
    })();
    
    return contextualResponses;
  };

  const handleBossChatMessage = (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateBossResponse(textToSend);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
        suggestions: [],
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (chatWithBoss) {
        handleBossChatMessage();
      } else {
        handleSendMessage();
      }
    }
  };

  // Intro screen
  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 3500); // Show intro for 3.5 seconds
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  if (showIntro) {
    return (
      <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-[#0E0000] overflow-hidden z-50">
        <div className="flex flex-col items-center gap-8 md:gap-4 animate-in fade-in zoom-in duration-[2000ms]">
          <img 
            src={logoIcon} 
            alt="VISA Elite Council" 
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
          />
          <img 
            src={tournamentLogo} 
            alt="Tiên Lên Tournament Season IV" 
            className="w-72 h-auto md:w-80 lg:w-[500px] object-contain"
          />
        </div>
      </div>
    );
  }

  if (quizComplete && result) {
    return (
      <div className="flex items-center justify-center min-h-screen p-0 md:p-6 lg:p-8 bg-[#0E0000]">
        <div className="w-full max-w-4xl bg-gradient-to-br from-[#EFEACD] to-[#EDD794] rounded-none md:rounded-2xl p-8 md:p-12 h-[100vh] md:h-auto md:max-h-[95vh] overflow-y-auto shadow-2xl">
          <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-2 pb-6 border-b border-[#9C0512]/20">
              <h1 
                className="text-4xl md:text-6xl text-[#9C0512]" 
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {result.type}
              </h1>
              <p className="text-lg md:text-xl text-[#64080C]">{result.round}</p>
            </div>

            {/* Main Quote */}
            <div className="py-4">
              <p className="text-lg md:text-2xl text-[#9C0512] text-center italic">
                "{result.mainQuote}"
              </p>
            </div>

            {/* Description */}
            <div className="bg-white/30 rounded-xl p-6 md:p-8 space-y-4">
              <p className="text-[#0E0000] text-base md:text-lg leading-relaxed">
                {result.description}
              </p>
              
              <div className="pt-2">
                <p className="text-[#64080C]/70 text-sm">Domain: <span className="text-[#9C0512]">{result.power}</span></p>
              </div>
            </div>

            {/* Secondary Quote */}
            <div className="bg-[#9C0512]/10 rounded-xl p-6 md:p-8 border-l-2 border-[#9C0512]">
              <p className="text-[#0E0000] text-base md:text-lg text-center">
                "{result.secondaryQuote}"
              </p>
            </div>

            {/* Personality Breakdown */}
            <div className="bg-white/20 rounded-xl p-6 md:p-8 space-y-4">
              <h3 className="text-[#9C0512] text-lg md:text-xl pb-3 border-b border-[#9C0512]/20">
                Personality Breakdown
              </h3>
              
              <div className="space-y-3">
                {(Object.entries(result.scores) as [MasterType, number][])
                  .sort((a, b) => b[1] - a[1])
                  .map(([type, score]) => (
                    <div key={type} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[#64080C] text-sm md:text-base">
                          {type}
                        </span>
                        <span className="text-[#0E0000]/60 text-xs md:text-sm">{score}/7</span>
                      </div>
                      <div className="bg-[#EFEACD]/60 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-[#9C0512] h-full transition-all duration-1000 ease-out rounded-full"
                          style={{ width: `${(score / 7) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Restart Button */}
            <div className="flex flex-col md:flex-row gap-3 justify-center pt-4">
              <Button
                onClick={handleChatWithBoss}
                className="bg-[#9C0512] hover:bg-[#64080C] text-[#EFEACD] px-8 py-3 rounded-lg transition-all duration-300"
              >
                Chat with {result.type}
              </Button>
              <Button
                onClick={handleRestart}
                className="bg-white/20 hover:bg-white/30 text-[#64080C] px-8 py-3 rounded-lg transition-all duration-300 border border-[#9C0512]/20"
              >
                Retake Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-6">
      <div className="w-full max-w-4xl bg-[#0E0000]/50 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col h-[95vh] border border-[#9C0512]/30 shadow-[0_0_50px_rgba(156,5,18,0.15)]">
        {/* Header */}
        <div className="flex-shrink-0 backdrop-blur-xl text-[#EDD794] p-6 border-b border-[#FF6B7A]/50 shadow-[0_2px_30px_rgba(255,107,122,0.2)] bg-[rgba(220,38,57,0.35)]">
          <h1 className="text-2xl md:text-3xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontWeight: 600 }}>
            {chatWithBoss && result ? `Chat with ${result.type}` : "Which Elite Council Boss Are You?"}
          </h1>
          <p className="text-sm text-white/70 mt-2">
            {chatWithBoss && result ? result.round : `Question ${Math.min(questionNumber, 7)} of 7`}
          </p>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 min-h-0 p-6">
          <div className="space-y-3 pb-4">
            {messages.map((message, index) => (
              <div key={message.id}>
                {/* Bot message - Left side */}
                {message.sender === "bot" && (
                  <div className="flex justify-start mb-3">
                    <div className="max-w-[85%] md:max-w-[70%] bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl rounded-tl-sm px-5 py-3.5 text-white">
                      <p className="leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                )}

                {/* Suggestion buttons - appear after bot message on the right */}
                {message.sender === "bot" &&
                  message.suggestions &&
                  message.suggestions.length > 0 &&
                  index === messages.length - 1 &&
                  !isTyping &&
                  showSuggestionsForId === message.id && (
                    <div className="flex flex-col items-end gap-2 mb-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-5 py-3.5 bg-[#9C0512]/35 backdrop-blur-sm border border-[#9C0512]/50 rounded-2xl hover:bg-[#9C0512]/50 hover:border-[#EDD794]/50 hover:shadow-[0_0_20px_rgba(156,5,18,0.3)] active:scale-[0.98] transition-all duration-200 text-white max-w-[85%] md:max-w-[70%] text-left"
                        >
                          <span className="leading-relaxed">{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  )}

                {/* User message - Right side */}
                {message.sender === "user" && (
                  <div className="flex justify-end mb-3">
                    <div className="max-w-[85%] md:max-w-[70%] bg-[#9C0512] rounded-2xl rounded-tr-sm px-5 py-3.5 text-white shadow-[0_0_20px_rgba(156,5,18,0.3)]">
                      <p className="leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3.5">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-white/70 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="flex-shrink-0 border-t border-white/10 p-4 bg-white/5 backdrop-blur-xl">
          <div className="flex gap-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your response..."
              className="flex-1 border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-[#EDD794]/50 focus:ring-1 focus:ring-[#EDD794]/30 rounded-xl h-12"
            />
            <Button
              onClick={() => chatWithBoss ? handleBossChatMessage() : handleSendMessage()}
              disabled={!inputValue.trim()}
              className="bg-[#9C0512] hover:bg-[#9C0512]/80 text-white disabled:bg-white/10 disabled:text-white/30 rounded-xl px-6 h-12 transition-all hover:shadow-[0_0_25px_rgba(156,5,18,0.4)]"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}