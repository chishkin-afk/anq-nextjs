import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './NavLink.module.scss';

interface NavLinkProps {
  className?: string;
  href: string;
  children: ReactNode;
}

export default function NavLink({ children, className, href }: NavLinkProps) {
  return (
    <Link href={href} className={clsx(styles.link, className)}>
      {children}
    </Link>
  );
}
