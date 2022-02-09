import clsx from "clsx";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <img
      className={clsx(styles.loader)}
      alt="????"
      src={`${process.env.PUBLIC_URL}/images/loader.png`}
    />
  );
};

export default Loader;
