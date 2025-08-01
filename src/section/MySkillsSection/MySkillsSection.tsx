import { SkillChart } from "../../component/skillChart/skillChart";
import styles from "./MySkillsSection.module.css";

interface Skill {
  subject: string;
  skill: number;
}

interface Level {
  description: string;
  level: number;
}

const frontend: Skill[] = [
  { subject: "React", skill: 4 },
  { subject: "TypeScript", skill: 4 },
  { subject: "HTML/CSS", skill: 3 },
  { subject: "CSS Modules", skill: 3 },
  { subject: "Next.js", skill: 3 },
];

const backend: Skill[] = [
  { subject: "Hono", skill: 3 },
  { subject: "Django", skill: 3 },
  { subject: "Prisma", skill: 3 },
  { subject: "SQL", skill: 2 },
];

const devOps: Skill[] = [
  { subject: "Github Actions", skill: 3 },
  { subject: "Docker", skill: 3 },
  { subject: "Git/GitHub", skill: 4 },
];

const level: Level[] = [
  { description: "実務で扱ったことがある", level: 5 },
  { description: "普段から使用している", level: 4 },
  { description: "調べれば扱える", level: 3 },
  { description: "自分で触ってみた", level: 2 },
  { description: "講義で学んだ", level: 1 },
];

export const MySkillsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>My Skills</div>
      <div className={styles.skillsChart}>
        <div className={styles.chart}>
          <div className={styles.chartDescription}>frontend</div>
          <SkillChart data={frontend} />
        </div>
        <div className={styles.chart}>
          <div className={styles.chartDescription}>backend</div>
          <SkillChart data={backend} />
        </div>
        <div className={styles.chart}>
          <div className={styles.chartDescription}>devOps</div>
          <SkillChart data={devOps} />
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {level.map((l, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
            >
              <span className="text-sm font-medium text-gray-700 mb-2">
                {l.level} - {l.description}
              </span>
              <div className="flex space-x-1 mt-auto">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${
                      i < l.level ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
