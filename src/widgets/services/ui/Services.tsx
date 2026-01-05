import { useTranslations } from 'next-intl';

import styles from './Services.module.scss';

export default function Services() {
  const t = useTranslations('services');
  return (
    <section className={styles.services}>
      <h1 className={styles.title}>{t('title')}</h1>
      <div className={styles.description}>{t('description')}</div>
      <div className={styles.content}>
        <div className={styles.list}>
          <div className={styles.item}>
            <h3 className={styles.subtitle}>{t('subtitle1')}</h3>
            <h4 className={styles.subtitleH4}>{t('text1.subtitle')}</h4>
            <p className={styles.line}>{t('text1.line1')}</p>
            <p className={styles.line}>{t('text1.line2')}</p>
            <p className={styles.line}>{t('text1.line3')}</p>
            <p className={styles.line}>{t('text1.line4')}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.subtitle}>{t('subtitle2')}</h3>
            <h4 className={styles.subtitleH4}>{t('text2.subtitle')}</h4>
            <p className={styles.line}>{t('text2.line1')}</p>
            <p className={styles.line}>{t('text2.line2')}</p>
            <p className={styles.line}>{t('text2.line3')}</p>
            <p className={styles.line}>{t('text2.line4')}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.subtitle}>{t('subtitle3')}</h3>
            <h4 className={styles.subtitleH4}>{t('text3.subtitle')}</h4>
            <p className={styles.line}>{t('text3.line1')}</p>
            <p className={styles.line}>{t('text3.line2')}</p>
            <p className={styles.line}>{t('text3.line3')}</p>
            <p className={styles.line}>{t('text3.line4')}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.subtitle}>{t('subtitle4')}</h3>
            <h4 className={styles.subtitleH4}>{t('text4.subtitle')}</h4>
            <p className={styles.line}>{t('text4.line1')}</p>
            <p className={styles.line}>{t('text4.line2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
