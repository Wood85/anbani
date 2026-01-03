'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { getReviews, ReviewCard, ReviewCardSkeleton } from '@/entities/review';
import type { Review } from '@/entities/review';
import { ReviewForm } from '@/features/submit-review';

import styles from './Reviews.module.scss';

export const Reviews = () => {
  const t = useTranslations('reviews');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews()
      .then(setReviews)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className={styles.reviews}>
        <div className={styles.reviewsContainer}>
          <h2 className={styles.reviewsTitle}>{t('title')}</h2>
          <div className={styles.reviewsList}>
            {loading && Array.from({ length: 3 }).map((_, i) => <ReviewCardSkeleton key={i} />)}
            {!loading && reviews.length === 0 && (
              <ReviewCard
                key={1000}
                name={t('mockName')}
                text={t('mockText')}
                created_at="2026-01-03 10:58:00.749407+00"
              />
            )}
            {!loading && reviews.length > 0 && reviews.map((r) => <ReviewCard key={r.id} {...r} />)}
          </div>
        </div>
      </section>

      <ReviewForm onCreated={(review) => setReviews((prev) => [review, ...prev])} />
    </>
  );
};
