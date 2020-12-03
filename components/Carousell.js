import React from "react";
import { animated, config, useSpring, useTransition } from "react-spring";

const images = [
  {
    id: 2,
    url: "/home/2x.jpg",
  },
  {
    id: 3,
    url: "/home/3x.jpg",
  },
  {
    id: 4,
    url: "/home/4x.jpg",
  },
  {
    id: 5,
    url: "/home/5x.jpg",
  },
  {
    id: 6,
    url: "/home/6x.jpg",
  },
  {
    id: 1,
    url: "/home/1x.jpg",
  },
];

const Image = ({ url, duration }) => {
  const props = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.1)" },
    config: {
      duration: duration - 2000,
    },
  });

  return (
    <animated.div
      className="absolute bg-cover w-full h-full l-0 t-0 bg-center bg-no-repeat"
      style={{ ...props, backgroundImage: url }}
    />
  );
};

const ImageSlider = () => {
  const duration = 5000;
  const [index, setIndex] = React.useState(0);

  const transitions = useTransition(images[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  });

  React.useEffect(() => {
    const interval = setInterval(
      () => setIndex((state) => (state + 1) % 4),
      duration
    );

    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={{ ...props }}>
      <Image url={`url(${item.url})`} duration={duration} />
    </animated.div>
  ));
};

const Carousell = () => {
  return (
    <section className="home-section relative block md:flex h-96 md:h-screen overflow-hidden mt-8 md:mt-0">
      <div className="logo absolute w-full h-16 left-1/2 top-1/2 -ml-48 -mt-8 z-50">
        <img
          src="/LogoWhite.svg"
          alt="Futura"
          className="w-72 md:w-96 m-auto md:m-0"
        />
      </div>

      <div className="bg-slider absolute w-full h-full t-0 l-0 z-0">
        <ImageSlider />
      </div>
    </section>
  );
};

export default Carousell;
