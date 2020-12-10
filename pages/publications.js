import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import TopProgressBar from "../components/TopProgressBar";
import { fetchQuery } from "../utils";
import { AuthContext } from "../components/AuthContext";

const Publications = ({ data, bordercolor }) => {
  return (
    <>
      {data.map((publication) => (
        <div
          key={publication._id}
          className={`border border-solid ${bordercolor} p-3 flex flex-col items-center font-futuraBookRegular w-full md:w-1/3`}
        >
          <img
            src={`${publication.Image.url}`}
            alt={publication.Image.alternativeText}
            className="p-0"
          />
          <span className="uppercase text-2xl tracking-wide">
            {publication.Name}
          </span>
          <span className="text-justify text-md leading-8 tracking-wide mb-3">
            {publication.Description}
          </span>
          <a
            href={publication.PublicationPDF.url}
            target="__blank"
            type="button"
            className="uppercase bg-yellow-400 p-3 mt-auto"
          >
            <FontAwesomeIcon icon={["fas", "download"]} />
            &nbsp; Download PDF
          </a>
        </div>
      ))}
    </>
  );
};

export default function Publication({ publications, premiumPublications }) {
  const [preloaderFinished, setPreloaderFinished] = React.useState(false);
  const { isLoggedIn } = React.useContext(AuthContext);

  if (!preloaderFinished)
    return (
      <TopProgressBar preloaderFinished={() => setPreloaderFinished(true)} />
    );

  return (
    <Layout>
      <div className="flex p-2 md:p-0 md:container md:mx-auto justify-center">
        <div className="flex flex-col bg-white container mx-auto justify-start pt-10 mr-0">
          <div className="flex font-futuraBookRegular text-sm border-b border-solid border-black mb-4 pb-2">
            <div className="uppercase">
              <span>Publication</span>
            </div>

            {/* <div className="ml-auto uppercase">Sign in</div> */}
          </div>

          <div className="mb-5">
            <div className="flex space-y-4 md:space-y-0 space-x-0 md:space-x-10 flex-col md:flex-row">
              {publications.length > 0 && (
                <Publications
                  data={publications}
                  bordercolor="border-gray-800"
                />
              )}
            </div>
          </div>

          {isLoggedIn && premiumPublications.length > 0 && (
            <div className="flex flex-col items-center bg-yellow-100 p-3 mb-5">
              <span className="uppercase font-futuraBookRegular text-2xl tracking-wider mb-2 text-gray-500">
                Premium Catalog
              </span>

              <div className="flex space-y-4 md:space-y-0 space-x-0 md:space-x-10 flex-col md:flex-row">
                <Publications
                  data={premiumPublications}
                  bordercolor="border-yellow-400"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const publications = await fetchQuery(`publications?IsPremium=false`);
  const premiumPublications = await fetchQuery(`publications?IsPremium=true`);

  if (!publications) {
    console.error("publications not found");
    return {
      notFound: true,
    };
  }

  if (!premiumPublications) {
    console.error("publications not found");
    return {
      notFound: true,
    };
  }

  return {
    props: { publications, premiumPublications },
  };
}
