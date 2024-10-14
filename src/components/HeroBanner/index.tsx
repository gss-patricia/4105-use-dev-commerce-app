import { ReactNode } from "react";
import styles from "./HeroBanner.module.css";

export type HeroBannerProps = {
  backgroundImage?: string;
  mainImage?: string;
  children?: ReactNode;
  altImage?: string;
};

const HeroBanner = ({
  backgroundImage,
  mainImage,
  children,
  altImage,
}: HeroBannerProps) => {
  return (
    <section className={styles.heroBanner}>
      <div
        className={styles.gridOverlay}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className={styles.heroContent}>
        {mainImage && (
          <div className={styles.mainImageWrapper}>
            <img src={mainImage} alt={altImage} className={styles.mainImage} />
          </div>
        )}
        {children && <div className={styles.textContent}>{children}</div>}
      </div>
    </section>
  );
};

export default HeroBanner;
