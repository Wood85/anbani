import styles from './ProjectDescription.module.scss';

interface ProjectDescriptionProps {
  title: string;
  description: string;
}

export const ProjectDescription = ({ title, description }: ProjectDescriptionProps) => {
  return (
    <div className={styles.description}>
      <h2>{title}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
    </div>
  );
};
