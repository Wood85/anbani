/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client';

import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import type { ProjectCategory, ProjectItem } from '@/entities/project';
import {
  projectCategories,
  CategoryDropdown,
  ProjectImagesGrid,
  ProjectDescription,
} from '@/entities/project';
import { assertNonEmpty } from '@/shared/lib';

import styles from './Projects.module.scss';

export default function Projects() {
  const t = useTranslations('projects');

  const itemT = useTranslations();

  const router = useRouter();
  const searchParams = useSearchParams();

  assertNonEmpty(projectCategories, 'projectCategories is empty');

  const categoryFromUrl = searchParams.get('category') as ProjectCategory | null;
  const itemFromUrl = searchParams.get('item');

  const activeCategory = useMemo(() => {
    const found = projectCategories.find((c) => c.category === categoryFromUrl);
    return found ?? projectCategories[0];
  }, [categoryFromUrl])!;

  assertNonEmpty(activeCategory.items, `Category "${activeCategory.category}" has no items`);
  const activeItem: ProjectItem = useMemo(() => {
    const found = activeCategory.items.find((item) => String(item.id) === itemFromUrl);
    return found ?? activeCategory.items[0];
  }, [activeCategory, itemFromUrl]) as ProjectItem;

  const categoryOptions = useMemo(
    () =>
      projectCategories.map((c) => ({
        value: c.category,
        label: t(c.category),
      })),
    [t],
  );

  const itemOptions = useMemo(
    () =>
      activeCategory.items.map((item) => ({
        value: String(item.id),
        label: itemT(item.option),
      })),
    [activeCategory, itemT],
  );

  const handleChangeCategory = (value: string) => {
    const params = new URLSearchParams();
    params.set('category', value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleChangeItem = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('item', value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className={styles.projects}>
      <div className={styles.dropdown}>
        <CategoryDropdown
          value={activeCategory.category}
          options={categoryOptions}
          onChange={handleChangeCategory}
        />
      </div>
      {categoryFromUrl !== 'others' && (
        <div className={styles.dropdown}>
          <CategoryDropdown
            value={String(activeItem.id)}
            options={itemOptions}
            onChange={handleChangeItem}
          />
        </div>
      )}
      <ProjectDescription
        title={itemT(activeItem.title)}
        description={itemT(activeItem.description)}
      />

      <ProjectImagesGrid images={activeItem.src} />
    </section>
  );
}
