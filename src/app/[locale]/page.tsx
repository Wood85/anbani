import Header from '@/widgets/header/ui/Header';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}></main>
    </div>
  );
}
