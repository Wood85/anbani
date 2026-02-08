'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import styles from './Banner.module.scss';

export default function Banner() {
  const t = useTranslations('banner');
  const tc = useTranslations('projects');

  const categoryLabels = useMemo(
    () => ({
      projects: tc('projects'),
      wardrobes: tc('wardrobes'),
      kitchens: tc('kitchens'),
      hallways: tc('hallways'),
      bedrooms: tc('bedrooms'),
      'children-rooms': tc('children-rooms'),
      bathrooms: tc('bathrooms'),
      b2b: tc('b2b'),
      others: tc('others'),
    }),
    [tc],
  );

  const [open, setOpen] = useState(false);

  return (
    <section className={styles.wrap} role="banner">
      <div className={styles.banner}>
        <Image
          className={styles.bannerImg}
          src="/banner.webp"
          alt="banner"
          width={1920}
          height={1000}
          priority={true}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t('title')}</h1>
          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className={styles.button}>{t('button')}</button>

            {open && (
              <div className={styles.dropdownContainer}>
                <ul className={styles.dropdown}>
                  {Object.entries(categoryLabels).map(([key, value]) => (
                    <li key={key} className={styles.category}>
                      <Link href={`/projects?category=${key}`} className={styles.categoryLink}>
                        {value}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
