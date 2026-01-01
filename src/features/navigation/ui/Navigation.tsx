'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import clsx from 'clsx';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('navigation');

  return (
    <>
      <button
        className={clsx(styles.burger, open && styles.active)}
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={clsx(styles.nav, open && styles.open)}>
        <Link href="about.html" className={styles.link} onClick={() => setOpen(false)}>
          {t('about')}
        </Link>
        <Link href="services.html" className={styles.link} onClick={() => setOpen(false)}>
          {t('services')}
        </Link>
        <Link href="contacts.html" className={styles.link} onClick={() => setOpen(false)}>
          {t('contacts')}
        </Link>
        <div className={styles.contacts}>
          <ul className={styles.contactsIcons}>
            <li className={`${styles.contactsItem} ${styles.whatsApp}`}>
              <a
                className={`${styles.contactsLink} ${styles.whatsAppLink}`}
                href="https://wa.me/995595903689?text=Здравствуйте!%20Хочу%20заказать%20мебель."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать в WhatsApp"
              >
                <Image
                  className={styles.contactsImg}
                  src="/whatsapp.svg"
                  width={32}
                  height={32}
                  alt="whatsapp icon"
                />
              </a>
            </li>
            <li className={`${styles.contactsItem} ${styles.telegram}`}>
              <a
                className={`${styles.contactsLink} ${styles.telegramLink}`}
                href="https://t.me/+995595903689?text=Здравствуйте!%20Хочу%20заказать%20мебель."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать в Telegram"
              >
                <Image
                  className={styles.contactsImg}
                  src="/tg.svg"
                  width={32}
                  height={32}
                  alt="telegram icon"
                />
              </a>
            </li>
          </ul>
          <div className={styles.phone}>
            <div className={styles.phoneTitle}>{t('phone')}</div>
            <a className={styles.phoneNum} href="tel:+995595903689">
              +995 595 90 36 89
            </a>
          </div>
        </div>
      </nav>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </>
  );
}
