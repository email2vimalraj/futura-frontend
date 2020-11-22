import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

library.add(fab, faEnvelope);

// import "../styles/font-awesome.css";
// import "../styles/screen.css";
// import "../styles/site.css";
// import "../styles/override.css";
// import "../styles/scrollbar.css";
// import "../styles/logoAnimation.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
