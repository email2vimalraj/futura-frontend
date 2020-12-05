import React from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "../../components/Layout";
import { API_URL, fetchQuery } from "../../utils";
import TopProgressBar from "../../components/TopProgressBar";

export default function Product({ data }) {
  const [imageHolder, setImageHolder] = React.useState(null);
  const [images, setImages] = React.useState([]);
  const [meta, setMeta] = React.useState([]);

  // Set image states
  React.useEffect(() => {
    if (data && data.Content) {
      const allImages = data.Content.filter(
        (item) => item.__component === "image.product-images"
      )[0].ProductImage;
      setImages(allImages);
      setImageHolder(allImages[0]);
    }
  }, [data]);

  // Set meta states
  React.useEffect(() => {
    if (data && data.Content) {
      const allMeta = data.Content.filter(
        (item) => item.__component === "meta.meta-test"
      )[0].MetaTest;
      setMeta(allMeta);
    }
  }, [data]);

  return (
    <Layout>
      <TopProgressBar />

      <div className="flex p-2 md:p-0 md:container md:mx-auto justify-center">
        <div className="flex flex-col bg-white container mx-auto justify-start pt-10 mr-0">
          <div className="flex font-futuraBookRegular text-sm border-b border-solid border-black mb-4 pb-2">
            <div className="uppercase">
              <Link href="/products">
                <a>Products</a>
              </Link>
              &nbsp;&gt;&nbsp;
              <span>{data.category.CategoryName}</span>
            </div>

            {/* <div className="ml-auto uppercase">Download this product</div> */}
          </div>

          <div className="flex md:space-x-10 flex-col md:flex-row">
            <div className="flex flex-col space-y-4">
              {imageHolder && (
                <Image
                  src={`${
                    imageHolder.Image.provider === "local" ? API_URL : ""
                  }${imageHolder.Image.url}`}
                  alt={imageHolder.Image.alternativeText}
                  width={500}
                  height={500}
                  className="bg-gray-200"
                />
              )}

              <div className="flex flex-wrap">
                {images.map((image) => (
                  <div
                    key={image._id}
                    onClick={() => setImageHolder(image)}
                    className="mr-3 cursor-pointer"
                  >
                    <Image
                      src={`${
                        imageHolder.Image.provider === "local" ? API_URL : ""
                      }${image.Image.formats.thumbnail.url}`}
                      alt={`${image.Image.alternativeText}`}
                      width={78}
                      height={78}
                      className="bg-gray-200"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-3 md:mt-0">
              <span className="uppercase font-futuraBookRegular text-2xl">
                {data.Name}
              </span>
              <p className="leading-7 font-futuraBookRegular tracking-wide text-justify mb-2">
                {data.Description}
              </p>

              <div className="flex flex-col md:flex-row flex-wrap font-futuraBookRegular">
                {meta.map((item) => (
                  <div
                    key={item._id}
                    className="border border-solid border-gray-800 p-3 w-full md:w-1/4 mb-3 mr-0 md:mr-3"
                  >
                    <h3 className="uppercase text-sm tracking-wide">
                      {item.meta.MetaName}
                    </h3>
                    <div className="uppercase font-extrabold tracking-wider leading-10 w-full text-center text-xl">
                      {item.MetaValue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="font-futuraBookRegular text-4xl uppercase border-b border-solid border-black mt-4 pb-2">
            Cut Out
          </div>

          <div className="flex">
            {data.Content.filter(
              (item) => item.__component === "product.cutout"
            )[0].Images.map((image) => {
              return (
                <Image
                  key={image._id}
                  src={`${image.provider === "local" ? API_URL : ""}${
                    image.url
                  }`}
                  alt={image.alternativeText}
                  width={image.width / 2}
                  height={image.height / 2}
                />
              );
            })}
          </div>
        </div>

        <div
          style={{ backgroundImage: "url(/LogoRight.jpg)" }}
          className="w-1/12 bg-no-repeat bg-right-bottom hidden lg:block"
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const data = await fetchQuery(`products/${params.pid}`);

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
