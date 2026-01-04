'use client';

import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { motion, AnimatePresence } from 'framer-motion';
import 'yet-another-react-lightbox/styles.css';

import type { Project } from '@/entities/project';
import { ProjectCard, useInfiniteProjects } from '@/entities/project';

import styles from './ProjectGrid.module.scss';

interface Props {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: Props) => {
  const { visibleProjects, loaderRef, hasMore, setupObserver } = useInfiniteProjects(projects);

  const [index, setIndex] = useState<number | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  useEffect(() => {
    setupObserver(); // observer создаётся только на клиенте после mount
  }, [visibleProjects, setupObserver]);

  return (
    <>
      <div className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className={styles.item}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} onClick={() => setIndex(i)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && <div ref={loaderRef} className={styles.loader} />}

      {mounted && (
        <Lightbox
          open={index !== null}
          index={index ?? 0}
          close={() => setIndex(null)}
          slides={visibleProjects.map((p) => ({ src: p.src }))}
        />
      )}
    </>
  );
};
