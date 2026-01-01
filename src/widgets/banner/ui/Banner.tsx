import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import styles from './Banner.module.scss';

export default function Banner() {
  const t = useTranslations('banner');
  return (
    <section className={styles.wrap} role="banner">
      <div className={styles.banner}>
        <Image
          className={styles.bannerImg}
          src="/kt.webp"
          alt="banner"
          width={1920}
          height={836}
          priority={true}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t('title')}</h1>
          <Link href="projects.html" className={styles.button}>
            {t('button')}
          </Link>
        </div>
      </div>
    </section>
  );
}
