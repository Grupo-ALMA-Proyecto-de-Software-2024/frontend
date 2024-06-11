"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  item: {
    title: string;
    path: string;
  };
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`} prefetch >
            {item.title}
    </Link>
  );
};

export default NavLink;
