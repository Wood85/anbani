import { useTranslations } from 'next-intl';

import styles from './Contacts.module.scss';

export default function Contacts() {
  const t = useTranslations('contacts');
  return (
    <section className={styles.contacts}>
      <h1 className={styles.title}>{t('title')}</h1>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span>{t('phone')}</span>:&nbsp;
            <a href="tel:+995595903689" className={styles.link}>
              +995 595 90 36 89
            </a>
          </li>
          <li className={styles.item}>
            Whats App:&nbsp;
            <a
              href="https://wa.me/995595903689?text=Здравствуйте!%20Хочу%20заказать%20мебель."
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в WhatsApp"
            >
              ~Segei Sadykov
            </a>
          </li>
          <li className={styles.item}>
            Telegram:&nbsp;
            <a
              href="https://t.me/+995595903689?text=Здравствуйте!%20Хочу%20заказать%20мебель."
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
            >
              @furniture_batumi
            </a>
          </li>
          <li className={styles.item}>
            Email:&nbsp;
            <a
              href="mailto:sersadikov@yahoo.com?subject=Заказ%20мебели&body=Здравствуйте!%20Хочу%20заказать%20мебель."
              className={styles.link}
            >
              sersadikov@yahoo.com
            </a>
          </li>
          <li className={styles.item}>
            <span className={styles.address}>{t('address')}</span>:&nbsp;<span>{t('city')}</span>
            ,&nbsp;
            <span>{t('street')}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
