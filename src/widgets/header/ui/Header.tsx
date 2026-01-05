import { Navigation } from '@/features/navigation';
import { LangSwitcher } from '@/features/lang-switcher';
import Logo from './logo/Logo';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.nav}>
          <Navigation />
        </div>
        <div className={styles.lang}>
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}
