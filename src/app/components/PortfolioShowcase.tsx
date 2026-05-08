import { motion } from "motion/react";
import {
  Sparkles,
  Brain,
  MessageSquare,
  Palette,
  Code,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import backgroundImage from "figma:asset/e6c71a263f54caa2828b7835477d9c574de2f25f.png";
import logoIcon from "figma:asset/223a43575dcb00cc8f62b5b569c24b205b8a3f00.png";
import tournamentLogo from "figma:asset/7784e939caf78c206fd9a266d7c3f635805e61ad.png";

export function PortfolioShowcase() {
  const features = [
    {
      icon: Brain,
      title: "Personality-Driven Experience",
      description:
        "Interactive quiz that analyzes user responses across 7 strategic questions to match them with one of 5 unique Elite Council Boss personalities.",
      color: "#9C0512",
    },
    {
      icon: MessageSquare,
      title: "Dynamic Conversations",
      description:
        "Each boss personality has a distinct voice and philosophy - from strategic Machination to emotionless Sangfroid - creating unique dialogue experiences.",
      color: "#EDD794",
    },
    {
      icon: Sparkles,
      title: "Immersive UX Flow",
      description:
        "Carefully timed animations, typing indicators, and message reveals create a cinematic experience that feels like a real conversation.",
      color: "#EFEACD",
    },
    {
      icon: Palette,
      title: "Luxury Visual Identity",
      description:
        "Dark royal aesthetic with playing cards motif, space background, and sophisticated color palette (Red Carriage, Ceramic Yellow, Mahogany) for elite tournament branding.",
      color: "#64080C",
    },
  ];

  const techStack = [
    { name: "Figma Make", description: "AI web builder" },
    { name: "React", description: "UI framework" },
    { name: "Tailwind CSS", description: "Styling" },
    { name: "Motion", description: "Animations" },
  ];

  const designDecisions = [
    {
      title: "Conversational Interface",
      description:
        "Bot messages appear on the left, user responses on the right - mimicking real messaging apps for familiarity and engagement.",
    },
    {
      title: "Timed Reveals",
      description:
        "Questions appear after users can read the previous message, suggestion buttons fade in after 600ms delay for dramatic effect.",
    },
    {
      title: "Personality-Driven AI",
      description:
        "Each Elite Boss has unique response patterns - Machination is strategic, Monomania is intense, Legilimency is perceptive, Prescience is prophetic, Sangfroid is emotionless.",
    },
    {
      title: "Responsive Luxury",
      description:
        "Maintains elegant, royal aesthetic across all devices with adaptive layouts and glass-morphism effects.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="min-h-screen bg-[#0E0000]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="flex flex-col items-center gap-6 mb-8">
              <img
                src={logoIcon}
                alt="VISA Elite Council"
                className="w-20 h-20 md:w-24 md:h-24"
              />
              <img
                src={tournamentLogo}
                alt="Tiên Lên Tournament"
                className="w-80 md:w-[500px] h-auto"
              />
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl text-[#EDD794] mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Which Elite Council Boss Are You?
            </h1>
            <p className="text-lg md:text-xl text-[#EFEACD]/80 max-w-3xl mx-auto mb-8">
              A promotional interactive experience for the Tiên
              Lên Tournament Season IV, created by Vietnamese
              International Student Association (VISA) at USF to
              engage tournament participants through
              personality-driven storytelling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() =>
                  window.open(
                    "https://quiz-app-visa.vercel.app/",
                    "_blank",
                  )
                }
                className="bg-[#9C0512] hover:bg-[#64080C] text-[#EFEACD] px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(156,5,18,0.4)] hover:shadow-[0_0_50px_rgba(156,5,18,0.6)] transition-all duration-300"
              >
                <Zap className="mr-2" />
                View Live Demo
              </Button>
            </div>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#EFEACD] to-[#EDD794] rounded-2xl p-8 md:p-12 mb-12 shadow-2xl"
          >
            <h2
              className="text-3xl md:text-4xl text-[#9C0512] mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Project Overview
            </h2>
            <p className="text-[#0E0000] text-lg leading-relaxed mb-6">
              The Elite Council Quiz is a sophisticated web
              application that combines personality assessment
              with interactive AI chat. Built for the Tiên Lên
              Tournament Season IV, it determines which of five
              Elite Council Bosses (Machination, Monomania,
              Legilimency, Prescience, Sangfroid) aligns with
              the user's personality through strategic
              questioning about power, control, and
              psychological warfare.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#9C0512]/20">
              <div>
                <p className="text-[#64080C]/70 text-sm">
                  Organization
                </p>
                <p className="text-[#9C0512]">VISA at USF</p>
              </div>
              <div>
                <p className="text-[#64080C]/70 text-sm">
                  Team
                </p>
                <p className="text-[#9C0512]">
                  Marketing + Developer
                </p>
              </div>
              <div>
                <p className="text-[#64080C]/70 text-sm">
                  Timeline
                </p>
                <p className="text-[#9C0512]">2 Weeks</p>
              </div>
              <div>
                <p className="text-[#64080C]/70 text-sm">
                  Purpose
                </p>
                <p className="text-[#9C0512]">
                  Tournament Promo
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2
              className="text-3xl md:text-4xl text-[#EDD794] mb-8 text-center"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.1,
                    }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:shadow-[0_0_30px_rgba(156,5,18,0.2)]"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${feature.color}40`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: feature.color }}
                      />
                    </div>
                    <h3 className="text-xl text-[#EDD794] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#EFEACD]/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Design Decisions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#9C0512]/20 backdrop-blur-xl border border-[#9C0512]/30 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2
              className="text-3xl md:text-4xl text-[#EDD794] mb-8"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Design Decisions
            </h2>
            <div className="space-y-6">
              {designDecisions.map((decision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7 + index * 0.1,
                  }}
                  className="border-l-4 border-[#EDD794] pl-6 py-2"
                >
                  <h3 className="text-xl text-[#EDD794] mb-2">
                    {decision.title}
                  </h3>
                  <p className="text-[#EFEACD]/80 leading-relaxed">
                    {decision.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <h2
              className="text-3xl md:text-4xl text-[#EDD794] mb-8 text-center"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Built With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9 + index * 0.05,
                  }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <p className="text-[#EDD794] mb-1">
                    {tech.name}
                  </p>
                  <p className="text-[#EFEACD]/60 text-xs">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* User Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-br from-[#64080C]/30 to-[#9C0512]/30 backdrop-blur-xl border border-[#EDD794]/20 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2
              className="text-3xl md:text-4xl text-[#EDD794] mb-8 text-center"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              User Journey
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Intro Animation",
                  description:
                    "VISA logo and tournament branding fade in with cinematic zoom effect",
                },
                {
                  step: "2",
                  title: "Welcome",
                  description:
                    "Dramatic opening message sets the tone for the Elite Council experience",
                },
                {
                  step: "3",
                  title: "Assessment",
                  description:
                    "7 carefully crafted questions with elegant suggestion buttons",
                },
                {
                  step: "4",
                  title: "Results",
                  description:
                    "Personalized boss reveal with quotes, descriptions, and personality breakdown",
                },
                {
                  step: "5",
                  title: "Chat",
                  description:
                    "Engage in intelligent conversation with your matched Elite Council Boss",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -20 : 20,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.1 + index * 0.1,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#9C0512] text-[#EFEACD] rounded-full flex items-center justify-center text-xl">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[#EDD794] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#EFEACD]/80">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2
              className="text-3xl md:text-4xl text-[#EDD794] mb-8"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Challenges & Solutions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-[#EDD794] mb-3">
                  Challenge: Creating Unique Boss Personalities
                </h3>
                <p className="text-[#EFEACD]/80 mb-3">
                  <span className="text-[#9C0512]">
                    Solution:
                  </span>{" "}
                  Implemented context-aware AI that detects
                  themes in user messages (fear, power, emotion,
                  strategy) and responds with
                  personality-specific dialogue. Each boss has
                  distinct voice patterns and philosophical
                  approaches.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-[#EDD794] mb-3">
                  Challenge: Maintaining Luxury Aesthetic
                </h3>
                <p className="text-[#EFEACD]/80 mb-3">
                  <span className="text-[#9C0512]">
                    Solution:
                  </span>{" "}
                  Used glass-morphism effects, custom color
                  palette with opacity variations, elegant
                  typography hierarchy (Cinzel for titles,
                  Poppins for body), and smooth Motion
                  animations for premium feel.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-[#EDD794] mb-3">
                  Challenge: Quiz Scoring Fairness
                </h3>
                <p className="text-[#EFEACD]/80 mb-3">
                  <span className="text-[#9C0512]">
                    Solution:
                  </span>{" "}
                  Developed tie-breaker system with priority
                  ranking (Sangfroid &gt; Prescience &gt;
                  Legilimency &gt; Monomania &gt; Machination)
                  to ensure deterministic results while
                  maintaining personality distribution.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Results & Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-br from-[#EFEACD] to-[#EDD794] rounded-2xl p-8 md:p-12 mb-12 shadow-2xl text-center"
          >
            <h2
              className="text-3xl md:text-4xl text-[#9C0512] mb-8"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-5xl md:text-6xl text-[#9C0512] mb-2">
                  100%
                </p>
                <p className="text-[#64080C]">
                  Responsive Design
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl text-[#9C0512] mb-2">
                  5
                </p>
                <p className="text-[#64080C]">
                  Unique AI Personalities
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl text-[#9C0512] mb-2">
                  7
                </p>
                <p className="text-[#64080C]">
                  Strategic Questions
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            <p
              className="text-2xl md:text-3xl text-[#EDD794] mb-8"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Experience the Elite Council
            </p>
            <Button
              onClick={() =>
                window.open(
                  "https://quiz-app-visa.vercel.app/",
                  "_blank",
                )
              }
              className="bg-[#9C0512] hover:bg-[#64080C] text-[#EFEACD] px-12 py-6 text-xl rounded-xl shadow-[0_0_40px_rgba(156,5,18,0.5)] hover:shadow-[0_0_60px_rgba(156,5,18,0.7)] transition-all duration-300"
            >
              Launch Live Demo →
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}