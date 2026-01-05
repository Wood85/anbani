'use client';

import Link from 'next/link';

import styles from './not-found.module.scss';

export default function NotFoundPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.text}>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className={styles.link}>
        Go to Home
      </Link>
    </main>
  );
}
