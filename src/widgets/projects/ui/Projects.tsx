'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  projects,
  apartmentProjects,
  ProjectGrid,
  ProjectImagesGrid,
  CategoryDropdown,
  ProjectDescription,
} from '@/entities/project';
import type { ProjectCategory, CategoryFilter } from '@/entities/project';

import styles from './Projects.module.scss';

export default function Projects() {
  const t = useTranslations('projects');
  const at = useTranslations('apartmentProjects.items');

  const categoryLabels: Record<ProjectCategory, string> = useMemo(
    () => ({
      projects: t('projects'),
      kitchens: t('kitchens'),
      hallways: t('hallways'),
      bedrooms: t('bedrooms'),
      'children-rooms': t('childrenRooms'),
      wardrobes: t('wardrobes'),
      'dressing-rooms': t('dressingRooms'),
      bathrooms: t('bathrooms'),
      workspaces: t('workspaces'),
      b2b: t('b2b'),
    }),
    [t],
  );

  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryFromUrl = searchParams.get('category');
  const projectFromUrl = searchParams.get('project');
  const projectIdFromUrl = projectFromUrl ? Number(projectFromUrl) : null;

  const category: CategoryFilter = Object.keys(categoryLabels).includes(categoryFromUrl ?? '')
    ? (categoryFromUrl as CategoryFilter)
    : 'projects';

  const categoryProjects = useMemo(() => {
    return category === 'projects' ? apartmentProjects : [];
  }, [category]);

  const selectedProject = useMemo(() => {
    if (!categoryProjects.length) return null;

    return categoryProjects.find((p) => p.id === projectIdFromUrl) ?? categoryProjects[0];
  }, [categoryProjects, projectIdFromUrl]);

  const filteredCategory = useMemo(() => {
    return projects.filter((p) => p.category === category);
  }, [category]);

  const categoryOptions = useMemo(() => {
    const counts = projects.reduce<Record<ProjectCategory, number>>(
      (acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
      },
      {} as Record<ProjectCategory, number>,
    );

    return [
      ...Object.entries(counts).map(([key]) => ({
        value: key,
        label: categoryLabels[key as ProjectCategory],
      })),
    ];
  }, [t, categoryLabels]);

  const projectOptions = useMemo(() => {
    return apartmentProjects.map((p) => ({
      value: String(p.id),
      label: at(p.option.replace('apartmentProjects.items.', '')),
    }));
  }, [apartmentProjects, at]);

  const handleChangeCategory = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('category', value);

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleChangeProject = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('project', value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className={styles.projects}>
      <div className={styles.dropdown}>
        <CategoryDropdown
          value={category}
          options={categoryOptions}
          onChange={handleChangeCategory}
        />
      </div>

      {categoryFromUrl === 'projects' && projectOptions.length > 0 && (
        <div className={styles.dropdown}>
          <CategoryDropdown
            value={String(selectedProject?.id)}
            options={projectOptions}
            onChange={handleChangeProject}
          />
        </div>
      )}

      {categoryFromUrl === 'projects' && selectedProject ? (
        <>
          <ProjectDescription project={selectedProject} />
          <ProjectImagesGrid images={selectedProject.src} />
        </>
      ) : (
        <ProjectGrid projects={filteredCategory} />
      )}
    </section>
  );
}
