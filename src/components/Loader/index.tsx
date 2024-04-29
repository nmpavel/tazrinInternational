import styles from './css/loader.module.css';
import Image from 'next/image';
export default function Loader() {
    return (
        <div className={styles.overlay}>
            <div className={styles.overlay__inner}>
                <div className={styles.overlay__content}>
                    <div className={styles.loader}>
                        <div className={styles.ripple}></div>
                        <div className="w-14 h-14 relative md:block">
                            <Image
                                src={"/images/logo.png"}
                                fill
                                className="object-contain"
                                alt={""}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}