import type { Review } from '@/entities/review';
import styles from './ReviewCard.module.scss';

export default function ReviewCard(review: Omit<Review, 'id'>) {
  return (
    <div className={styles.card}>
      <h4 className={styles.name}>{review.name}</h4>
      <div className={styles.text}>{review.text}</div>
      <div className={styles.date}>{new Date(review.created_at).toLocaleDateString()}</div>
    </div>
  );
}
