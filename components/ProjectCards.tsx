"use client";
import Image from "next/image";
import React from "react";
import rankGame from "@/public/rankGame.gif";
import cloudClock from "@/public/cloudClock.gif";
import stockLite from "@/public/stockLite.png";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { RankingGame } from "@/utils/data";

export function ProjectCards() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
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
    content: <RankingGame />,
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
    content: <DummyContent />,
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
    content: <DummyContent />,
  },

  {
    category: "CI/CD GitHub Actions AWS",
    title: "CI/CD Pipeline Demo: Code to AWS Deployment",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: [
      { techName: "CI/CD", isHighlight: true },
      { techName: "Github Actions", isHighlight: true },
      { techName: "Docker", isHighlight: false },
      { techName: "AWS-EC2", isHighlight: false },
      { techName: "Docker Hub", isHighlight: false },
    ],
    github: "https://github.com/chatinunk97/ci-cd-learning",
    content: <DummyContent />,
  },
  {
    category: "Generative AI",
    title: "AI-Powered Budget Advisor",
    techStack: [
      { techName: "Generative AI", isHighlight: true },
      { techName: "Gemini API", isHighlight: true },
      { techName: "Next JS", isHighlight: false },
      { techName: "Tailwind CSS", isHighlight: false },
      { techName: "Firebase", isHighlight: false },
    ],
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
