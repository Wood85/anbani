'use client';

import { useTranslations } from 'next-intl';

import type { ApartmentProject } from '@/entities/project';

import styles from './ProjectDescription.module.scss';

export const ProjectDescription = ({ project }: { project: ApartmentProject }) => {
  const t = useTranslations('apartmentProjects.items');

  return (
    <div className={styles.description}>
      <h3>{t(project.title.replace('apartmentProjects.items.', ''))}</h3>
      <p>{t(project.description.replace('apartmentProjects.items.', ''))}</p>
    </div>
  );
};
