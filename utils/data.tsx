import Image from "next/image";
import rankGame from "@/public/rankGame.gif";
import cloudClock from "@/public/cloudClock.gif";
import stockLite from "@/public/stockLite.png";
import rankingShot from "@/public/rankingShot.png";
import resultCheck from "@/public/resultCheck.png";
import dfs from "@/public/dfs.png";
export const RankingGameData = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-700 dark:text-neutral-200">
          A Smart Ranking Game Powered by Graphs and DFS Algorithm
        </span>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          An interactive React application built with TypeScript, designed to
          explore graph data structures through a dynamic ranking system. The
          game leverages
          <span className="font-semibold text-white">
            {" "}
            Depth-First Search (DFS)
          </span>{" "}
          to intelligently eliminate unnecessary matches, resolving indirect
          wins and optimizing the ranking process.
        </p>
        <Image
          src={rankingShot}
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain"
        />
      </div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-700 dark:text-neutral-200">
          Optimized Ranking Using Graphs and DFS
        </span>
        <Image
          src={dfs}
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain rounded-lg"
        />
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          In ranking systems, direct comparisons grow quickly—{" "}
          <span className="font-semibold text-white">N! comparisons</span> for N
          players. However, using DFS and directed graphs, we reduce this to at
          most{" "}
          <span className="font-semibold text-white"> N-1 comparisons </span> in
          the best case.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          Each win is a directed edge in a graph (e.g., 1 → 3 means 1 defeats
          3).
          <span className="font-semibold text-white">
            {" "}
            DFS infers indirect wins, eliminating unnecessary matches.
          </span>
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          For example, with 1 → 2 → 4 → 5, adding 6 → 1{" "}
          <span className="font-semibold text-white">
            {" "}
            automatically grants 6 wins{" "}
          </span>
          over 2, 3, 4, and 5 without extra matches. This minimizes comparisons
          significantly.
        </p>
        <Image
          src={resultCheck}
          alt="Result check image"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

export const projectData = [
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
    content: <RankingGameData />,
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
    content: <RankingGameData />,
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
    content: <RankingGameData />,
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
    content: <RankingGameData />,
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
    content: <RankingGameData />,
  },
];
