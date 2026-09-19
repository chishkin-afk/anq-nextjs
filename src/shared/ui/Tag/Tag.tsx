import clsx from 'clsx';
import styles from './Tag.module.scss';

interface TagProps {
  className?: string;
  field: string;
}

export default function Tag({ className, field }: TagProps) {
  return (
    <div className={clsx(styles.tag, className)}>
      <p className={styles.field}>{field}</p>
    </div>
  );
}
