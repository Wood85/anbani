'use client';

import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { motion, AnimatePresence } from 'framer-motion';
import 'yet-another-react-lightbox/styles.css';

import { ProjectCard } from '@/entities/project';

import styles from './ProjectImagesGrid.module.scss';

interface Props {
  images: string[];
}

export const ProjectImagesGrid = ({ images }: Props) => {
  const [index, setIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <>
      <div className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {images.map((src, i) => (
            <motion.div
              key={src}
              className={styles.item}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ProjectCard src={src} onClick={() => setIndex(i)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {mounted && (
        <Lightbox
          open={index !== null}
          index={index ?? 0}
          close={() => setIndex(null)}
          slides={images.map((src) => ({ src }))}
        />
      )}
    </>
  );
};
