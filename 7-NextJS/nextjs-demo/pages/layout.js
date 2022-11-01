import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog" legacyBehavior>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/login" legacyBehavior>
            <a>Logout</a>
          </Link>
        </li>
      </ul>
      <div className={styles.container}>{children}</div>
    </div>
  );
}