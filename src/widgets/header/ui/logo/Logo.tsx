import Image from 'next/image';
import Link from 'next/link';

import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link className={styles.heading} href="index.html">
      <Image
        src="/logo.png"
        width={55}
        height={40}
        alt="Anbani Group logo"
        className={styles.logo}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>Anbani Group</h2>
      </div>
    </Link>
  );
}
