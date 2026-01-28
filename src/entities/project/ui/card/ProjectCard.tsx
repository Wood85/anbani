'use client';

import Image from 'next/image';
import { useState } from 'react';

import styles from './ProjectCard.module.scss';

interface Props {
  src: string;
  onClick: () => void;
}

export const ProjectCard = ({ src, onClick }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.card} onClick={onClick}>
      {/* Skeleton */}
      {!loaded && <div className={styles.skeleton} />}

      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`${styles.image} ${loaded ? styles.visible : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
