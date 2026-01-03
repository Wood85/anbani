import { useTranslations } from 'next-intl';

import styles from './About.module.scss';

export default function About() {
  const t = useTranslations('aboutUs');
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>{t('title')}</h1>
      <div className={styles.content}>
        <p>{t('text1')}</p>
        <p>{t('text2')}</p>
        <p>{t('text3')}</p>
      </div>
    </section>
  );
}
