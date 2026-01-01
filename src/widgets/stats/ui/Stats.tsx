import { useTranslations } from 'next-intl';

import styles from './Stats.module.scss';

export default function Stats() {
  const t = useTranslations('stats');
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.list} role="list">
          <div className={styles.item}>
            <h4 className={styles.itemTitle}>{t('experienceTitle')}</h4>
            <p className={styles.itemText}>{t('experienceText')}</p>
          </div>
          <div className={styles.item}>
            <h4 className={styles.itemTitle}>{t('qualityTitle')}</h4>
            <p className={styles.itemText}>{t('qualityText')}</p>
          </div>
          <div className={styles.item}>
            <h4 className={styles.itemTitle}>{t('designTitle')}</h4>
            <p className={styles.itemText}>{t('designText')}</p>
          </div>
          <div className={styles.item}>
            <h4 className={styles.itemTitle}>{t('rangeTitle')}</h4>
            <p className={styles.itemText}>{t('rangeText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
