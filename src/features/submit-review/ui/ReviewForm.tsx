'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { createReview } from '@/entities/review';
import type { Review } from '@/entities/review';
import { Map } from '@/features/map';

import styles from './ReviewForm.module.scss';

type Props = {
  onCreated: (review: Review) => void;
};

export const ReviewForm = ({ onCreated }: Props) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const t = useTranslations('reviews');

  const submit = async () => {
    if (!name || !text) return;

    setLoading(true);
    const review = await createReview(name, text);
    onCreated(review);

    setName('');
    setText('');
    setLoading(false);
  };

  return (
    <section className={styles.container}>
      <form id="reviewForm" className={styles.form}>
        <h3 className={styles.title}>{t('formTitle')}</h3>
        <label className={styles.label} htmlFor="name">
          {t('name')}
        </label>
        <input
          id="name"
          className={styles.input}
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className={styles.label} htmlFor="text">
          {t('text')}
        </label>
        <textarea
          id="text"
          className={styles.textarea}
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button className={styles.button} onClick={submit} disabled={loading}>
          {t('btn')}
        </button>
      </form>
      <div className={styles.map}>
        <Map center={[41.624712, 41.629134]} zoom={14} />
      </div>
    </section>
  );
};
