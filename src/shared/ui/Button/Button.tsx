import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, type = 'button', ...rest } = props;

  return (
    <button className={clsx(styles.button, className)} type={type} {...rest}>
      {children}
    </button>
  );
}
