import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";

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
      <div className="flex">
        <div className="flex flex-col bg-white container mx-auto justify-start pt-10 mr-0">
          <div className="flex font-futuraBookRegular text-sm border-b border-solid border-black mb-4 pb-2">
            <div className="uppercase">
              <a href="/products">Products</a>
              &nbsp;&gt;&nbsp;
              <span>{data.category.CategoryName}</span>
            </div>

            {/* <div className="ml-auto uppercase">Download this product</div> */}
          </div>

          <div className="flex md:space-x-10 flex-col md:flex-row">
            <div className="flex flex-col space-y-4">
              {imageHolder && (
                <Image
                  src={`http://localhost:1337${imageHolder.Image.url}`}
                  alt={imageHolder.Image.alternativeText}
                  width={imageHolder.Image.width / 2}
                  height={imageHolder.Image.height / 2}
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
                      src={`http://localhost:1337${image.Image.formats.thumbnail.url}`}
                      alt={`${image.Image.alternativeText}`}
                      width={image.Image.formats.thumbnail.width / 2}
                      height={image.Image.formats.thumbnail.height / 2}
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
                    className="border border-solid border-gray-800 p-3 w-1/4 m-3"
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
                  src={`http://localhost:1337${image.url}`}
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
  const res = await fetch(`http://localhost:1337/products/${params.pid}`);
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
