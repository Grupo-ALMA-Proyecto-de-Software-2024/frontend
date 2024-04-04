// "use client" es específico de Next.js 13 y más reciente, para cargar componentes en el lado del cliente.
"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

// Definimos la interfaz para las props del componente.
interface NavLinkProps {
  item: {
    title: string;
    path: string;
  };
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.title}
    </Link>
  );
};

export default NavLink;
