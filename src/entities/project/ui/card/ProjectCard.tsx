'use client';

import Image from 'next/image';
import { useState } from 'react';

import type { Project } from '@/entities/project';

import styles from './ProjectCard.module.scss';

interface Props {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.card} onClick={onClick}>
      {/* Skeleton */}
      {!loaded && <div className={styles.skeleton} />}

      <Image
        src={project.src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`${styles.image} ${loaded ? styles.visible : ''}`}
        onLoad={() => setLoaded(true)}
      />

      {project.category === 'projects' && project.address && (
        <div className={styles.address}>{project.address}</div>
      )}
    </div>
  );
};
