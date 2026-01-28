import type { ApartmentProject } from '@/entities/project';

import styles from './ProjectDescription.module.scss';

export const ProjectDescription = ({ project }: { project: ApartmentProject }) => (
  <div className={styles.description}>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
  </div>
);
