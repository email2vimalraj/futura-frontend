import Layout from "../components/Layout";

const FilterButton = ({ href, children }) => {
  return (
    <li className="text-black uppercase font-futuraBookRegular text-xl p-5 m-5 border-b border-t border-solid border-gray-500 text-center hover:bg-gray-500 hover:text-white">
      <a href={href} className="no-underline">
        {children}
      </a>
    </li>
  );
};

const Product = ({ image, title, subtitle }) => (
  <div className="">
    <a href="#">
      <div className="block bg-gray-400 overflow-hidden m-3 w-80 float-left clear-right">
        <div className="w-72 h-72 absolute z-10 bg-transparent bg-opacity-0 hover:bg-black hover:bg-opacity-80 m-4 opacity-0 hover:opacity-100">
          <div className="relative font-futuraBookRegular text-3xl uppercase text-white m-auto text-center pt-20 pb-20">
            <span>{title}</span>
          </div>
          <div className="relative font-futuraBookRegular text-xl lowercase text-gray-400 m-auto text-center pt-15 pb-15">
            <span>{subtitle}</span>
          </div>
        </div>

        <div>
          <img src={image} alt={`${title} - ${subtitle}`} />
        </div>
      </div>
    </a>
  </div>
);

export default function Products({ data }) {
  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col bg-white container mx-auto justify-start pt-10 mr-0 items-center">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-solid border-gray-700 p-5 font-futuraBookRegular uppercase text-lg text-gray-700 outline-none"
            />
          </div>

          <span className="font-futuraBookRegular text-md lowercase italic text-gray-800 pt-3 pb-3 leading-4 text-center mb-8">
            please enter the text as "beam angle 12" or "warm white downlights"
            or "round shape surface"
          </span>

          <ul className="list-none text-center flex flex-wrap justify-center space-x-4 container w-4/6">
            <FilterButton href="#">Architectural</FilterButton>
            <FilterButton href="#">Downlights</FilterButton>
            <FilterButton href="#">Spotlights</FilterButton>
            <FilterButton href="#">Wall / Ceiling</FilterButton>
            <FilterButton href="#">Tracklights</FilterButton>
            <FilterButton href="#">Outdoor</FilterButton>
            <FilterButton href="#">Underwater</FilterButton>
            <FilterButton href="#">Floorlights</FilterButton>
          </ul>

          <section>
            <div className="flex flex-wrap justify-center">
              {data.map((item) => {
                const cutout = item.Content.filter(
                  (content) => content.__component === "product.cutout"
                );

                return (
                  <Product
                    key={item._id}
                    title={item.Name}
                    subtitle={item.Type}
                    image={`http://128.199.227.150:1337${cutout[0].Images[0].url}`}
                  />
                );
              })}
            </div>
          </section>
        </div>

        <div
          style={{ backgroundImage: "url(/LogoRight.jpg)" }}
          className="w-1/12 bg-no-repeat bg-right-bottom"
        ></div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://128.199.227.150:1337/products");
  const data = await res.json();

  if (!data) {
    console.error("not found");
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
