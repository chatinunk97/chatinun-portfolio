"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import rankGame from "@/public/rankGame.gif";
import cloudClock from "@/public/cloudClock.gif";
import stockLite from "@/public/stockLite.png";
import cicd from "@/public/cicd.png";
import aiadvisor from "@/public/aiadvisor.png";
import {
  // RankingGameData,
  CloudClockData,
  StockLiteData,
  CicdLearningData,
  AIadvisorBudgetData,
} from "@/utils/data";

export function ProjectCards() {
  const cards = projectData.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
const projectData = [
  {
    category: "Graph - Depth First Search",
    title: "Ranking Game",
    src: rankGame,
    techStack: [
      { techName: "Data Structure", isHighlight: true },
      { techName: "Algorithm", isHighlight: true },
      { techName: "Typescript", isHighlight: false },
      { techName: "React", isHighlight: false },
      { techName: "Express", isHighlight: false },
      { techName: "Shadcn", isHighlight: false },
      { techName: "Tailwind CSS", isHighlight: false },
    ],
    demo: "https://chatinunk97.github.io/ranking_game_ch/",
    github: "https://github.com/chatinunk97/ranking_game_ch",
    content: (
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every thought.
        </p>
      </div>
    ),
  },
  {
    category: "Google Maps API Nodemailer",
    title: "Employee Clock In App",
    src: cloudClock,
    techStack: [
      { techName: "Google Map API", isHighlight: true },
      { techName: "Nodemailer", isHighlight: true },
      { techName: "Team Leader", isHighlight: true },
      { techName: "React", isHighlight: false },
      { techName: "Express", isHighlight: false },
      { techName: "Prisma", isHighlight: false },
      { techName: "JSON web token", isHighlight: false },
      { techName: "Shadcn", isHighlight: false },
      { techName: "Tailwind CSS", isHighlight: false },
      { techName: "Postgres", isHighlight: false },
    ],
    demo: "https://stock-lite-front.vercel.app/",
    github: "https://github.com/chatinunk97/clockin-React",
    content: <CloudClockData />,
  },
  {
    category: "Authentication User Manager",
    title: "Mini WMS & POS",
    src: stockLite,
    techStack: [
      { techName: "JSON web token", isHighlight: true },
      { techName: "Authentication Flow", isHighlight: true },
      { techName: "React", isHighlight: true },
      { techName: "Express", isHighlight: true },
      { techName: "Prisma", isHighlight: false },
      { techName: "Tailwind CSS", isHighlight: false },
      { techName: "MySQL", isHighlight: false },
    ],
    demo: "https://clockin-react.vercel.app/",
    github: "https://github.com/chatinunk97/StockLite_Front",
    content: <StockLiteData />,
  },

  {
    category: "CI/CD GitHub Actions AWS",
    title: "CI/CD Pipeline Demo: Code to AWS Deployment",
    src: cicd,
    techStack: [
      { techName: "CI/CD", isHighlight: true },
      { techName: "Github Actions", isHighlight: true },
      { techName: "Docker", isHighlight: false },
      { techName: "AWS-EC2", isHighlight: false },
      { techName: "Docker Hub", isHighlight: false },
    ],
    github: "https://github.com/chatinunk97/ci-cd-learning",
    content: <CicdLearningData />,
  },
  {
    category: "Generative AI (coming soon..)",
    title: "AI-Powered Budget Advisor",
    techStack: [
      { techName: "Generative AI", isHighlight: true },
      { techName: "Gemini API", isHighlight: true },
      { techName: "Next JS", isHighlight: false },
      { techName: "Tailwind CSS", isHighlight: false },
      { techName: "Firebase", isHighlight: false },
    ],
    src: aiadvisor,
    content: <AIadvisorBudgetData />,
  },
];
