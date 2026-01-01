import { Header } from '@/widgets/header';
import { Banner } from '@/widgets/banner';
import { Stats } from '@/widgets/stats';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Stats />
      </main>
    </div>
  );
}
