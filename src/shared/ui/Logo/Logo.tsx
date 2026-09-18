import clsx from 'clsx';
import { IconLogo } from '../icons';
import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={clsx(styles.logo, className)}>
      <IconLogo className={styles.icon} />
      <p className={styles.title}>anq</p>
    </div>
  );
}
