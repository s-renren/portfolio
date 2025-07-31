import styles from "./MySkillsSection.module.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const frontend = [
  { subject: "React", skill: 4 },
  { subject: "TypeScript", skill: 4 },
  { subject: "HTML/CSS", skill: 4 },
  { subject: "Tailwind CSS", skill: 4 },
];

export const MySkillsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>My Skills</div>
      <div className={styles.skillsChart}>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={frontend}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tickSize={24} />
            <PolarRadiusAxis angle={90} domain={[0, 5]} />
            <Radar
              name="Skill Level"
              dataKey="skill"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
