"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import rankGame from "@/public/rankGame.gif";
import cloudClock from "@/public/cloudClock.gif";
import stockLite from "@/public/stockLite.png";
import cicd from "@/public/cicd.png";
import aiadvisor from "@/public/aiadvisor.png";
import ReactPlayer from "react-player";
export const RankingGameData = () => {
  return (
    <>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          A Smart Ranking Game Powered by Graphs and DFS Algorithm
        </span>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
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
        <img
          src="rankingShot.png"
          alt="ranking-screen"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain"
        />
      </div>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          Optimized Ranking Using Graphs and DFS
        </span>
        <img
          src="dfs.png"
          alt="dfs-algo-explanation"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain rounded-lg"
        />
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          In ranking systems, direct comparisons grow quickly—{" "}
          <span className="font-semibold text-white">N! comparisons</span> for N
          players. However, using DFS and directed graphs, we reduce this to at
          most{" "}
          <span className="font-semibold text-white"> N-1 comparisons </span> in
          the best case.
        </p>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          Each win is a directed edge in a graph (e.g., 1 → 3 means 1 defeats
          3).
          <span className="font-semibold text-white">
            {" "}
            DFS infers indirect wins, eliminating unnecessary matches.
          </span>
        </p>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          For example, with 1 → 2 → 4 → 5 and 1 → 3 adding 6 → 1{" "}
          <span className="font-semibold text-white">
            {" "}
            automatically grants 4 wins{" "}
          </span>
          over 2, 3, 4, and 5 without extra matches. This minimizes comparisons
          significantly.
        </p>
        <img
          src="resultCheck.png"
          alt="Result-check-img"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

export const CloudClockData = () => {
  return (
    <>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          ClockIn - Employee Time Tracking System
        </span>
        <p className="font-sans italic">For demo please contact me directly</p>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          ClockIn is a comprehensive time-tracking system designed to manage
          employee attendance and time-off requests. The system includes
          validation features, user role management, GPS-based clocking, and
          reporting, helping employees and HR managers streamline processes with
          an intuitive interface.
        </p>
        <img src="cloudClockScreens.png"></img>
      </div>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          Key Features of ClockIn System
        </span>
        <div className="w-full flex items-center justify-center gap-5">
          <ReactPlayer
            url="https://vimeo.com/1059399743/32c4199773?share=copy"
            width="150px"
            height="360px"
            controls
          />
          <ReactPlayer
            url="https://vimeo.com/1059437563/97c7c85fa4?share=copy"
            width="640px"
            height="360px"
            controls
          />
        </div>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">Clock In/Clock Out</span>:
          Employees can clock in or out via GPS-based validation. If the user is
          late to clock in, they must provide a reason. Multiple clock-ins/outs
          per day are allowed, with the time, date, and GPS data captured for
          each action.
        </p>
      </div>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <p className="text-neutral-400 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">
            Batch Register Employee Accounts
          </span>
        </p>
        <div className="flex justify-center gap-5">
          <ReactPlayer
            url="https://vimeo.com/1059434867/2a1785f238?share=copy"
            width="640px"
            height="360px"
            controls
          />
        </div>{" "}
        <p className="text-neutral-400 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          HR can efficiently import and create employee accounts in bulk by
          defining their usernames, emails, and other details in an Excel file,
          then uploading it to the system.
        </p>
      </div>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <p className="text-neutral-400 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">
            Setup password securely via email
          </span>
        </p>
        <div className="flex justify-center gap-5">
          <ReactPlayer
            url="https://vimeo.com/1059439803/c194bd04ad?share=copy"
            width="640px"
            height="360px"
            controls
          />
        </div>{" "}
        <p className="text-neutral-400 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          HR or Admin does not have the right to set up passwords. Employees
          will set up their own passwords via email, and the passwords will be
          securely hashed and stored in the database
        </p>
      </div>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">Validation Features</span>:
          The system supports username/password login, location checking, and
          validation for every user action. For mobile users, location
          validation ensures accurate time tracking.
        </p>
      </div>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        {" "}
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">Employee Reports</span>:
          Users can view their clock-in history with filters for date range,
          department, or position. Reports are exportable to Excel/CSV for easy
          HR management.
        </p>{" "}
      </div>{" "}
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">
            Form Submits & Approvals
          </span>
          : Employees can submit leave requests (holiday, sick leave) and make
          adjustments to clock-in/clock-out times. Admins, HR, or Managers can
          approve or reject these requests.
        </p>{" "}
      </div>{" "}
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <img src="cloudClockdb.png"></img>
      </div>{" "}
    </>
  );
};
export const StockLiteData = () => {
  return (
    <>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          Stock Lite - WMS and POS System
        </span>
        <p className="font-sans italic">
          Demo credentials <br />
          username : demoadmin pw : admindemo <br></br>(It may take some time to
          spin up backend server 1-2min )
        </p>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          Stock Lite is a web-based solution designed to simplify inventory
          management and transaction processes for small and medium-sized
          enterprises (SMEs). By combining Warehouse Management System (WMS) and
          Point of Sale (POS) functionalities, Stock Lite ensures efficient
          stock management and real-time order tracking without the complexity
          and high costs of traditional systems.
        </p>
        <img src="stockLiteScreens.png"></img>
      </div>

      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          Key Features of Stock Lite
        </span>

        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          Stock Lite offers the essential features SMEs need for efficient
          operations:
        </p>
        <ul className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl list-disc pl-6">
          <li>
            <span className="font-semibold text-white">User Management:</span>{" "}
            Roles include Super Admin, Employee, and Supervisor.
          </li>
          <li>
            <span className="font-semibold text-white">
              Warehouse Management System (WMS):
            </span>{" "}
            Efficient inbound workflows, stock orders from suppliers, and batch
            import via Excel.
          </li>
          <li>
            <span className="font-semibold text-white">
              Point of Sale (POS):
            </span>{" "}
            Scan barcodes to add items to the cart, process payments, and update
            stock in real-time.
          </li>
        </ul>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          Designed for ease of use, Stock Lite ensures that businesses can
          efficiently track inventory and process transactions, all while
          maintaining simplicity and cost-effectiveness.
        </p>
        <div className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <img src="stocklitedb.png"></img>
        </div>
      </div>
    </>
  );
};

export const CicdLearningData = () => {
  return (
    <>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          CI/CD Learning Project
        </span>
        <p className="font-sans italic">No demo available for this project.</p>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          This project demonstrates the implementation of a Continuous
          Integration and Continuous Deployment (CI/CD) pipeline using GitHub
          Actions, Maven, and Docker. The pipeline automates the build, test,
          and deployment processes for a Java application.
        </p>
      </div>

      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          Key Features of the CI/CD Pipeline
        </span>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          This project demonstrates a fully automated CI/CD pipeline with the
          following features:
        </p>
        <ul className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl list-disc pl-6">
          <li>
            <span className="font-semibold text-white">
              GitHub Actions Workflow:
            </span>{" "}
            Automates the entire process from code checkout to Docker img push.
          </li>
          <li>
            <span className="font-semibold text-white">Maven Build:</span>{" "}
            Builds the project using Maven, ensuring the successful creation of
            a JAR file.
          </li>
          <li>
            <span className="font-semibold text-white">
              Docker Integration:
            </span>{" "}
            Creates and pushes Docker imgs to Docker Hub after building the
            application.
          </li>
          <li>
            <span className="font-semibold text-white">
              QEMU and Buildx Setup:
            </span>{" "}
            Enables multi-platform builds to support different architectures.
          </li>
        </ul>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          The pipeline ensures seamless integration and deployment, streamlining
          the workflow and reducing manual steps in the development process.
        </p>
      </div>

      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          Lessons Learned & Mistakes
        </span>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          During the implementation, several mistakes and lessons were learned:
        </p>
        <ul className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl list-disc pl-6">
          <li>
            <span className="font-semibold text-white">
              Build Context Issues:
            </span>{" "}
            Initially, Docker failed to find the JAR file due to incorrect build
            context in GitHub Actions.
          </li>
          <li>
            <span className="font-semibold text-white">
              Misleading Solutions:
            </span>{" "}
            Attempts to resolve the issue by modifying Maven dependencies and
            Docker settings led to further confusion.
          </li>
          <li>
            <span className="font-semibold text-white">
              GitHub Actions Debugging:
            </span>{" "}
            Debugging CI/CD issues often involves trial and error, emphasizing
            the importance of reviewing logs and step-by-step analysis.
          </li>
        </ul>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          Key takeaway: Always set the build context explicitly to
          &rdquo;.&rdquo; in Docker to ensure that workflow-generated files are
          included.
        </p>
      </div>
    </>
  );
};

export const AIadvisorBudgetData = () => {
  return (
    <>
      {" "}
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        Coming soon..
      </div>
    </>
  );
};
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
    demo: "https://clockin-react.vercel.app/",
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
    demo: "https://stock-lite-front.vercel.app/",
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
