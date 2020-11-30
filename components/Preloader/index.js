import { animated, useSpring } from "react-spring";

import styles from "./Preloader.module.css";

export default function Preloader() {
  const progressBarProps = useSpring({
    from: {
      height: "0%",
      number: 0,
    },
    to: {
      height: "100%",
      number: 100,
    },
    config: {
      duration: 2000,
    },
  });

  const preloaderProps = useSpring({
    from: { opacity: 1, zIndex: 100000 },
    to: { opacity: 0, zIndex: 0 },
    delay: 2200,
  });

  return (
    <animated.div className={styles.preloader} style={preloaderProps}>
      <div className={styles.preloader__logo}>
        <div>
          <img src="/logo.svg" alt="Futura" />
        </div>
      </div>

      <animated.div
        className={styles.preloader__progress}
        style={progressBarProps}
      >
        <animated.span style={{ bottom: `${progressBarProps.number}%` }}>
          {progressBarProps.number.interpolate(
            (value) => `${Math.floor(value)}%`
          )}
        </animated.span>

        <animated.i style={progressBarProps} />
      </animated.div>
    </animated.div>
  );
}
