import { Header } from '@/widgets/header';
import { Banner } from '@/widgets/banner';
import { Stats } from '@/widgets/stats';
import { SliderSection } from '@/widgets/slider-section';
import { Reviews } from '@/widgets/reviews';
import { Footer } from '@/widgets/footer';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Stats />
        <SliderSection />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
