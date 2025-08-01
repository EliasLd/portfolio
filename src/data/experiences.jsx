import edf from "../assets/edf.png";
import rueil from "../assets/rueil.png";

const experiences = [
  {
    title: "Software Engineer",
    company: "EDF R&D",
    duration: "2024 - 2027",
    logo: edf,
    techs: ["C++", "Python", "Bash", "Jenkins", "Docker", "Git", "Linux"],
    link: "https://www.edf.fr/en/the-edf-group/edf-at-a-glance",
    description: [
      "Automated code coverage reporting using Bash, gcov, and lcov to identify untested and unused code in a 20-year-old legacy codebase, helping reduce technical debt.",
      "Refactored critical Python and C++ components and contributed to Debian packaging. Improved CI/CD by redesigning Jenkins pipelines using Groovy.",
      "Used Valgrind for performance analysis and Docker containers to integrate and test new features in a reproducible Linux environment.",
      "Helped optimize computation workflows, reducing execution times by approximately 30%."
    ]
  },
  {
    title: "IT Intern",
    company: "Rueil-Malmaison city hall",
    duration: "Summer 2023",
    logo: rueil,
    techs: ["Python", "Django", "SQLite", "SQL", "Data Visualization"],
    link: "https://www.villederueil.fr/fr",
    description: [
      "Developed an internal tool with Python and SQL to register and track data on 600+ seniors as part of the OYES initiative.",
      "Built a local web interface for agents to manage volunteer visits and created an internal dashboard to visualize statistics and metrics.",
      "Used a lightweight SQLite backend with automatic backups to ensure data integrity and ease of use."
    ]
  }
];

export default experiences;

