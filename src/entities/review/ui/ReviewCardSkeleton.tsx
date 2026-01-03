import styles from './ReviewCard.module.scss';

function ReviewCardSkeleton() {
  return (
    <div className={`${styles.card} ${styles.skeleton}`}>
      <div className={styles.skeletonName} />
      <div className={styles.skeletonText} />
      <div className={styles.skeletonDate} />
    </div>
  );
}

export default ReviewCardSkeleton;
