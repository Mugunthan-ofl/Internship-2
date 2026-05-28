const skills = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          I&apos;m a full-stack software engineer with 3+ years of experience building web
          applications. I care deeply about clean code, performance, and user experience. When
          I&apos;m not coding, I&apos;m writing about what I learn.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="flex flex-col gap-5">
          {[
            {
              role: "Senior Frontend Engineer",
              company: "Acme Corp",
              period: "2023 – Present",
              desc: "Led the migration of a legacy React app to Next.js App Router, reducing TTFB by 40%.",
            },
            {
              role: "Full-Stack Developer",
              company: "Startup XYZ",
              period: "2021 – 2023",
              desc: "Built and maintained a SaaS platform serving 10k+ users using React, Node.js, and PostgreSQL.",
            },
          ].map((job) => (
            <div key={job.role} className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4">
              <p className="font-medium">{job.role}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {job.company} · {job.period}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
