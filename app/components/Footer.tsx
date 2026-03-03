'use client'; 

import Link from 'next/link';
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className="container py-4">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h4 className={styles.footText}>Get to Know Us</h4>
            <ul>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/careers" className={styles.link}>Careers</Link></li>
              <li><Link href="/press" className={styles.link}>Press Releases</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h4 className={styles.footText}>Connect with Us</h4>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h4 className={styles.footText}>Let Us Help You</h4>
            <ul>
              <li><Link href="/account" className={styles.link}>Your Account</Link></li>
              <li><Link href="/shipping" className={styles.link}>Shipping Rates</Link></li>
              <li><Link href="/returns" className={styles.link}>Returns & Replacements</Link></li>
              <li><Link href="/help" className={styles.link}>Help</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

