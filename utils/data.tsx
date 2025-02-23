import Image from "next/image";
import rankingShot from "@/public/rankingShot.png";
import resultCheck from "@/public/resultCheck.png";
import dfs from "@/public/dfs.png";
import { AiFillMediumCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
        <Image
          src={rankingShot}
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="h-full w-full mx-auto object-contain"
        />
      </div>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          Optimized Ranking Using Graphs and DFS
        </span>
        <Image
          src={dfs}
          alt="Macbook mockup from Aceternity UI"
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

export const CloudClockData = () => {
  return (
    <>
      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          ClockIn - Employee Time Tracking System
        </span>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          ClockIn is a comprehensive time-tracking system designed to manage
          employee attendance and time-off requests. The system includes
          validation features, user role management, GPS-based clocking, and
          reporting, helping employees and HR managers streamline processes with
          an intuitive interface.
        </p>
      </div>

      <div className="bg-neutral-800  dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 flex flex-col gap-2">
        <span className="text-base md:text-3xl font-sans font-bold text-neutral-200 dark:text-neutral-200">
          Key Features of ClockIn System
        </span>

        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">Validation Features</span>:
          The system supports Google account and username/password login,
          location checking, and validation for every user action. For mobile
          users, location validation ensures accurate time tracking.
        </p>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">Clock In/Clock Out</span>:
          Employees can clock in or out via GPS-based validation. If the user is
          late to clock in, they must provide a reason. Multiple clock-ins/outs
          per day are allowed, with the time, date, and GPS data captured for
          each action.
        </p>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">Employee Reports</span>:
          Users can view their clock-in history with filters for date range,
          department, or position. Reports are exportable to Excel/CSV for easy
          HR management.
        </p>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          <span className="font-semibold text-white">
            Form Submits & Approvals
          </span>
          : Employees can submit leave requests (holiday, sick leave) and make
          adjustments to clock-in/clock-out times. Admins, HR, or Managers can
          approve or reject these requests.
        </p>
      </div>
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
          Demo credentials username : demoadmin pw : admindemo
        </p>
        <p className="text-neutral-400  dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          Stock Lite is a web-based solution designed to simplify inventory
          management and transaction processes for small and medium-sized
          enterprises (SMEs). By combining Warehouse Management System (WMS) and
          Point of Sale (POS) functionalities, Stock Lite ensures efficient
          stock management and real-time order tracking without the complexity
          and high costs of traditional systems.
        </p>
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
            Automates the entire process from code checkout to Docker image
            push.
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
            Creates and pushes Docker images to Docker Hub after building the
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
          Key takeaway: Always set the build context explicitly to "." in Docker
          to ensure that workflow-generated files are included.
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

export const contactData = [
  {
    platform: "github",
    url: "https://github.com/chatinunk97",
    icon: <FaGithub size={40} />,
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/chatinun-komuthanon-449a051a9/",
    icon: <FaLinkedin size={40} />,
  },
  {
    platform: "mediuam",
    url: "https://medium.com/@chatinun.dev",
    icon: <AiFillMediumCircle size={42} />,
  },
];
