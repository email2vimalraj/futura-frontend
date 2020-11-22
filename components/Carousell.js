import { Logo } from "./Logo";

const Carousell = () => {
  return (
    <section className="home-section relative h-screen">
      <div className="logo absolute w-96 h-16 left-1/2 top-1/2 -ml-48 -mt-8 z-50">
        <Logo />
      </div>

      <div className="bg-slider absolute w-full h-full t-0 l-0 z-0">
        <div
          style={{ backgroundImage: "url(/home/2x.jpg)" }}
          className="absolute bg-cover w-full h-full l-0 t-0 bg-center bg-no-repeat"
        />
      </div>
    </section>
  );
};

export default Carousell;
