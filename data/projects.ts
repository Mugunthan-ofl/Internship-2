export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  content: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A minimal personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    content:
      "This portfolio showcases my work and skills. Built with the Next.js App Router, it features static generation, dynamic routes, and a clean responsive design using Tailwind CSS.",
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description: "A full-stack task management app with authentication and real-time updates.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    content:
      "A productivity app that lets users create, assign, and track tasks. Features JWT authentication, drag-and-drop boards, and a REST API backend powered by Express and PostgreSQL.",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    description: "Real-time weather forecasts using the OpenWeather API.",
    tech: ["React", "OpenWeather API", "CSS Modules"],
    github: "https://github.com",
    live: "https://example.com",
    content:
      "Displays current weather and a 5-day forecast for any city. Uses the OpenWeather API, geolocation, and animated weather icons for a polished user experience.",
  },
];
