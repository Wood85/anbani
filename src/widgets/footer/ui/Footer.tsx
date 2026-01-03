import { getCurrentYear } from '@/shared/lib';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; <span>{getCurrentYear()}</span> Anbani Group
      </p>
    </footer>
  );
}
