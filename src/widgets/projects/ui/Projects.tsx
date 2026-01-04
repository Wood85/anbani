'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ALL_CATEGORY, projects, ProjectGrid, CategoryDropdown } from '@/entities/project';
import type { ProjectCategory, CategoryFilter } from '@/entities/project';

import styles from './Projects.module.scss';

export default function Projects() {
  const t = useTranslations('projects');

  const categoryLabels: Record<ProjectCategory, string> = useMemo(
    () => ({
      projects: t('projects'),
      kitchens: t('kitchens'),
      wardrobes: t('wardrobes'),
      'living-rooms': t('livingRooms'),
      bedrooms: t('bedrooms'),
      'children-rooms': t('childrenRooms'),
      bathrooms: t('bathrooms'),
      workspaces: t('workspaces'),
      b2b: t('b2b'),
    }),
    [t],
  );

  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get('category');

  const category: CategoryFilter =
    categoryFromUrl === ALL_CATEGORY || Object.keys(categoryLabels).includes(categoryFromUrl ?? '')
      ? (categoryFromUrl as CategoryFilter)
      : ALL_CATEGORY;

  const filteredProjects = useMemo(() => {
    if (category === ALL_CATEGORY) return projects;
    return projects.filter((p) => p.category === category);
  }, [category]);

  const options = useMemo(() => {
    const counts = projects.reduce<Record<ProjectCategory, number>>(
      (acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
      },
      {} as Record<ProjectCategory, number>,
    );

    return [
      {
        value: ALL_CATEGORY,
        label: t('all'),
        count: projects.length,
      },
      ...Object.entries(counts).map(([key, count]) => ({
        value: key,
        label: categoryLabels[key as ProjectCategory],
        count,
      })),
    ];
  }, [t, categoryLabels]);

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === ALL_CATEGORY) {
      params.delete('category');
    } else {
      params.set('category', value);
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className={styles.projects}>
      <div className={styles.dropdown}>
        <CategoryDropdown value={category} options={options} onChange={handleChange} />
      </div>

      <ProjectGrid projects={filteredProjects} />
    </section>
  );
}
