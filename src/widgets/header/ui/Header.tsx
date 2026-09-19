import { Button, Logo, NavLink } from '@/shared/ui';
import { Link } from '../model/types';
import styles from './Header.module.scss';

interface HeaderProps {
  links: Link[];
}

export default function Header({ links }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.right}>
        <ul className={styles.links}>
          {links.map(link => (
            <li key={link.path}>
              <NavLink href={link.path}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
        <Button>dashboard</Button>
      </div>
    </header>
  );
}
