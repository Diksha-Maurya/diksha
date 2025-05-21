  //TODO: integrate the data from the backend
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

export const technologies = [

  {
    name: "git",
    icon: "https://skillicons.dev/icons/?i=git",
  },
  {
    name: "Python",
    icon: "https://skillicons.dev/icons/?i=python",
  },
  { 
    name:"Java",
    icon:"https://skillicons.dev/icons/?i=java",
  },
  { 
    name:"PostgreSQL",
    icon:"https://skillicons.dev/icons/?i=postgres",
  },
  {
    name: "Typescript",
    icon: "https://skillicons.dev/icons/?i=typescript",
  },
  { 
    name:"Shell",
    icon:"https://skillicons.dev/icons/?i=powershell",
  },
  { 
    name:"React",
    icon:"https://skillicons.dev/icons/?i=react",
  },
  { 
    name:"FastAPI",
    icon:"https://skillicons.dev/icons/?i=fastapi",
  },
  { 
    name:"Linux",
    icon:"https://skillicons.dev/icons/?i=linux",
  },
  { 
    name:"Spring Boot",
    icon:"https://skillicons.dev/icons/?i=spring",
  },
  { 
    name:"Bash",
    icon:"https://skillicons.dev/icons/?i=bash",
  },
  { 
    name:"SQL",
    icon:"https://skillicons.dev/icons/?i=mysql",
  },
  { 
    name:"Flask",
    icon:"https://skillicons.dev/icons/?i=flask",
  },
  { 
    name:"Javascript",
    icon:"https://skillicons.dev/icons/?i=javascript",
  },
  { 
    name:"Tensorflow",
    icon:"https://skillicons.dev/icons/?i=tensorflow",
  },
  { 
    name:"Angular",
    icon:"https://skillicons.dev/icons/?i=angular",
  },
  {
    name: "MongoDB",
    icon: "https://letsprogram.in/assets/images/icons/mongodb.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://skillicons.dev/icons/?i=kubernetes",
  },
  {
    name:"AWS",
    icon:"https://skillicons.dev/icons/?i=aws",
  },
  {
    name:"Docker",
    icon:"https://skillicons.dev/icons/?i=docker",
  },
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Precision Sustainable Agriculture (USA)",
    icon: "https://images.squarespace-cdn.com/content/v1/6296288ea08e6e595d4942e9/0302abcb-b67a-48aa-a429-effa8c164c3d/PSAlogo-text.png?format=1500w",
    iconBg: "#fff",
    date: "July 2024 - May 2025",
    points: [ 


      "Component Architecture: Engineered a modular React component library using Storybook, enabling consistent UI patterns and accelerating development across PSA’s research tools.",
      "API Integration & Data Management: Integrated RESTful APIs to fetch, display, and manage historical crop and soil data. Implemented features such as goal tracking, historical sync, and intelligent deletion using state-managed React components.",
      "Performance Optimization: Enhanced UI responsiveness for mobile and desktop views, ensuring a seamless experience across devices. Resolved rendering bottlenecks and improved data-fetching patterns to reduce load times.",
      "Collaboration & Best Practices: Worked in a cross-functional team of engineers and researchers, following Agile practices and version control workflows. Contributed to design discussions and reviewed code for quality and consistency."       
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Siemens",
    icon: "	https://companieslogo.com/img/orig/SIE.DE_BIG-8513f49c.png?t=1720244493",
    iconBg: "#fff",
    date: "October 2022 - July 2023",
    points: [
      "Framework Upgrades: Spearheaded a major transition from Angular v9 to v12 and .NET Core v2.1 to v6, resulting in a 25% performance improvement across core modules and services.",
      "DevOps & Deployment: Upgraded Docker images to support the latest .NET 6 runtime and modernized the deployment pipeline using Elastic Beanstalk on AWS, enhancing CI/CD automation and system reliability.",
      "Frontend & Codebase Optimization: Refactored legacy Single Page Applications (SPAs) built with Angular, leading to a 40% reduction in bug-related delays, 25% boost in code quality, and a 30% drop in page load times — ultimately reducing bounce rate by 20%."
  ],
  },
  {
    title: "Software Engineer",
    company_name: "Siemens",
    icon: "	https://companieslogo.com/img/orig/SIE.DE_BIG-8513f49c.png?t=1720244493",
    iconBg: "#fff",
    date: "July 2019 - September 2022",
    points: [
      "Developed and integrated Java-based APIs, enabling full-stack communication and data flow. Authored comprehensive JUnit unit and integration tests, which reduced bug-related delays by 30% and improved code quality by 15%.",
      "Designed and implemented a user interface (UI) using the Angular framework to visualize and retrieve data efficiently based on user preferences and access permissions, supporting 200+ internal users. Integrated data sourced from a Couchbase database.",
    ],
  },
  // Add more experiences here over the time
];

export const projects = [
  {
    name: "LLM-IoT-Fingerprinting",
    description:
      "The notebook in the LLM-IoT-Fingerprinting repository uses a fine-tuned GPT-2 model to fingerprint IoT devices based on network traffic patterns. It processes packet-level features, converts them into text-like sequences, and trains the model to identify device types, enabling enhanced network security through behavior-based device identification.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "purple-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "GPT-2",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "orange-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "orange-text-gradient",
      },
    ],
    image: "images/AI-Framework-and-IoT.png",
    source_code_link: "https://github.com/Diksha-Maurya/LLM-IoT-Fingerprinting",
  },
  {
    name: "Carbon-Emission-Prediction",
    description:
      "Developed a machine learning model to predict CO₂ emissions using linear regression. Performed data preprocessing, exploratory data analysis, and model evaluation using Python libraries like Pandas, Seaborn, and Scikit-learn.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "blue-text-gradient",
      },
      {
        name: "Seaborn",
        color: "green-text-gradient",
      },
      {
        name: "ScikitLearn",
        color: "pink-text-gradient",
      },
      {
        name: "LinearRegression",
        color: "blue-text-gradient",
      },
      {
        name: "DataVisualization",
        color: "green-text-gradient",
      }
          
    ],
    image: "images/carbon-footprint.jpg",
    source_code_link: "https://github.com/Diksha-Maurya/Carbon-Emission-Prediction",
  },
  {
    name: "CUDA-Implementation-of-TTM",
    description:
      "Implemented the Tensor-Times-Matrix (TTM) operation using three parallel computing approaches: CUDA, MPI, and OpenMP. Our goal is to compare the performance of these implementations and evaluate GPU acceleration benefits.",
    tags: [
      {
        name: "CUDA",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "ParallelComputing",
        color: "pink-text-gradient",
      },
      {
        name: "TensorAlgebra",
        color: "blue-text-gradient",
      },
      {
        name: "GPUProgramming",
        color: "green-text-gradient",
      },
      {
        name: "OpenMP",
        color: "pink-text-gradient",
      },
      {
        name: "HighPerformanceComputing",
        color: "blue-text-gradient",
      },
      {
        name: "MatrixMultiplication",
        color: "green-text-gradient",
      },
      {
        name: "NVIDIA",
        color: "pink-text-gradient",
      }
      
    ],
    image: "images/kube.png",
    source_code_link: "https://github.com/Diksha-Maurya/CUDA-Implementation-of-TTM",
  },
  {
    name: "Animal Tracker",
    description:
      "A full-stack web application to monitor and manage livestock movement efficiently. Built with React and TypeScript on the frontend, and Java Spring Boot with PostgreSQL on the backend. Features include secure authentication, dynamic dashboards, data tables, and RESTful APIs for seamless tracking and reporting.",
    tags: [
      { 
        name: "Java",
        color: "blue-text-gradient" 
      },
      { 
        name: "TypeScript",
        color: "green-text-gradient" 
      },
      { 
        name: "Spring Boot", 
        color: "yellow-text-gradient" 
      },
      { 
        name: "PostgreSQL", 
        color: "purple-text-gradient" 
      },
      { 
        name: "REST API", 
        color: "red-text-gradient" 
      },     
      { 
        name: "Angular", 
        color: "red-text-gradient" 
      },          
    ],
    image: "images/animal_tracker.jpg",
    source_code_link: "https://github.com/Diksha-Maurya/Animal-Tracker",
  },
];
