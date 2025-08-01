import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import styles from "./skillCart.module.css";

interface Skill {
  subject: string;
  skill: number;
}

export const SkillChart = (props: { data: Skill[] }) => {
  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tickSize={14} fontSize={12} />
          <PolarRadiusAxis angle={90} domain={[0, 5]} />
          <Radar
            name="Skill Level"
            dataKey="skill"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
            dot={true}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
