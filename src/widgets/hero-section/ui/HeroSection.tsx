import { Button, Tag } from '@/shared/ui';
import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.tags}>
          <Tag field="Open-source" />
          <Tag field="Anon" />
        </div>
        <h1 className={styles.heroText}>
          <span className={styles.title}>anq&nbsp;</span>
          is an anonymous Q&A platform
        </h1>
        <Button className={styles.startedButton}>get started</Button>
      </div>
      <Image
        className={styles.image}
        width={500}
        height={500}
        src="/images/hero-image.png"
        alt="hero image"
      />
    </section>
  );
}
