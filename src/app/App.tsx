import { ChatBot } from "./components/ChatBot";
import { PortfolioShowcase } from "./components/PortfolioShowcase";
import backgroundImage from "figma:asset/e6c71a263f54caa2828b7835477d9c574de2f25f.png";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { BookOpen, Play } from "lucide-react";

export default function App() {
  const [view, setView] = useState<"quiz" | "showcase">("quiz");

  if (view === "showcase") {
    return (
      <>
        <PortfolioShowcase />
        <Button
          onClick={() => setView("quiz")}
          className="fixed top-6 right-6 bg-[#9C0512] hover:bg-[#64080C] text-[#EFEACD] px-6 py-3 rounded-xl shadow-lg z-50"
        >
          <Play className="mr-2 w-4 h-4" />
          View Quiz
        </Button>
      </>
    );
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <ChatBot />
      <Button
        onClick={() => setView("showcase")}
        className="fixed top-6 right-6 bg-[#9C0512] hover:bg-[#64080C] text-[#EFEACD] px-6 py-3 rounded-xl shadow-lg z-50"
      >
        <BookOpen className="mr-2 w-4 h-4" />
        Portfolio View
      </Button>
    </div>
  );
}