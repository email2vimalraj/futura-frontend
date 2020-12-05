import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { API_URL, fetchQuery } from "../utils";
import TopProgressBar from "../components/TopProgressBar";

const Product = ({ id, image, title, subtitle }) => {
  const [imageProperties, setImageProperties] = React.useState({});

  React.useEffect(() => {
    const imageProperty = {};
    let api = API_URL;
    if (image.Image.provider !== "local") {
      api = "";
    }
    if (image.Image.formats.medium) {
      imageProperty.url = `${api}${image.Image.formats.medium.url}`;
      imageProperty.width = image.Image.formats.medium.width;
      imageProperty.height = image.Image.formats.medium.height;
    } else {
      // the image is already smaller in size
      imageProperty.url = `${api}${image.Image.url}`;
      imageProperty.width = image.Image.width;
      imageProperty.height = image.Image.height;
    }
    setImageProperties(imageProperty);
  }, [image]);

  return (
    <div className="">
      <Link href={`/product/${id}`}>
        <a>
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
              <Image
                src={`${imageProperties.url}`}
                alt={`${title} - ${subtitle}`}
                width={320}
                height={320}
                layout="responsive"
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default function Products({ data }) {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    if (selectedCategory) {
      const filteredProducts = data.filter(
        (category) => category.CategoryName === selectedCategory
      )[0].products;
      setProducts(filteredProducts);
    } else {
      const allProducts = data.map((category) => {
        return category.products;
      });
      setProducts(allProducts.flat());
    }
  }, [data, selectedCategory]);

  const filterProductsByCategory = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <Layout>
      <TopProgressBar />

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
            {data.map((item) => {
              return (
                <li
                  key={item._id}
                  className={`${
                    item.CategoryName === selectedCategory
                      ? "bg-gray-500 text-white"
                      : ""
                  } text-black uppercase font-futuraBookRegular text-sm md:text-xl p-3 md:p-5 m-3 md:m-5 border-b border-t border-solid border-gray-500 text-center hover:bg-gray-500 hover:text-white`}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => filterProductsByCategory(item.CategoryName)}
                  >
                    {item.CategoryName}
                  </div>
                </li>
              );
            })}
          </ul>

          <section>
            <div className="flex flex-wrap justify-center">
              {products.map((product) => {
                const productImages = product.Content.filter(
                  (item) => item.__component === "image.product-images"
                )[0].ProductImage;
                const frontImage = productImages.filter(
                  (image) => image.FrontImage
                )[0];

                return (
                  <Product
                    key={frontImage._id}
                    id={product._id}
                    title={product.Name}
                    subtitle={product.Type}
                    image={frontImage}
                  />
                );
              })}
            </div>
          </section>

          {/* <section>
            <div className="flex flex-wrap justify-center">
              {data.map((item) => {
                const cutout = item.Content.filter(
                  (content) => content.__component === "product.cutout"
                );

                return (
                  <Product
                    key={item._id}
                    id={item._id}
                    title={item.Name}
                    subtitle={item.Type}
                    image={`${API_URL}${cutout[0].Images[0].url}`}
                  />
                );
              })}
            </div>
          </section> */}
        </div>

        <div
          style={{ backgroundImage: "url(/LogoRight.jpg)" }}
          className="w-1/12 bg-no-repeat bg-right-bottom hidden lg:block"
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({}) {
  const data = await fetchQuery("categories");

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
