'use client';

import { useMemo, useRef, useState } from 'react';
import type { Project } from './types';
import { PROJECTS_PER_PAGE } from '@/shared/constants/pagination';

export const useInfiniteProjects = (projects: Project[]) => {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const hasMore = visibleCount < projects.length;

  const visibleProjects = useMemo(() => projects.slice(0, visibleCount), [projects, visibleCount]);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const setupObserver = () => {
    if (!loaderRef.current || !hasMore) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + PROJECTS_PER_PAGE, projects.length));
        }
      },
      { rootMargin: '300px', threshold: 0 },
    );

    observerRef.current.observe(loaderRef.current);
  };

  return { visibleProjects, loaderRef, hasMore, setupObserver };
};
