import { animated, useSpring } from "react-spring";

export default function TopProgressBar() {
  const progressBarProps = useSpring({
    from: {
      width: "0%",
      number: 0,
    },
    to: {
      width: "100%",
      number: 100,
    },
    config: {
      duration: 2000,
    },
  });

  const preloaderProps = useSpring({
    from: { opacity: 1, zIndex: 100000, width: "100%", height: "100%" },
    to: async (next, cancel) => {
      await next({ opacity: 0, zIndex: 0 });
      await next({ width: "0%", height: "0%" });
    },
    delay: 2200,
  });

  return (
    <animated.div
      className={`fixed left-0 top-0 bg-black`}
      style={{
        ...preloaderProps,
        transitionProperty: "transform, opacity",
        transitionDuration: "1s",
        transitionTimingFunction: "ease-out",
        transformOrigin: "0 0",
      }}
    >
      <div
        className="fixed left-0 top-0 w-full h-0.5 bg-black"
        style={{ transition: "opacity 0.4s ease" }}
      >
        <animated.div
          className="absolute h-0.5 bg-white left-1/2 top-0 w-0"
          style={{
            ...progressBarProps,
            transform: "translate(-50%, 0)",
            animation: "animateCenter 3s ease forwards infinite",
          }}
        />
      </div>
    </animated.div>
  );
}
