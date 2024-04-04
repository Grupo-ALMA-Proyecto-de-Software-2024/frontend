import Image from "next/image";
import styles from "./home.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.carrusellContainer}>
          <button>left</button>
          <div className={styles.carrusell}>
            <Image src="/protoplanetDisk.gif" alt="" fill unoptimized></Image>
          </div>
          <button>right</button>
        </div>
        <div className={styles.content}>
          HomePage
        </div>
      </div>
    </main>
  );
}
