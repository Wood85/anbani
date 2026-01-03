import { useTranslations } from 'next-intl';

import { Slider, slidesData } from '@/features/slider';

import styles from './SliderSection.module.scss';

export default function SliderSection() {
  const t = useTranslations('banner');
  return (
    <section className={styles.slider}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('button')}</h2>
        <Slider slides={slidesData} />
      </div>
    </section>
  );
}
