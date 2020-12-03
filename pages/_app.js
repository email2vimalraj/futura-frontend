import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  fas,
  faDownload,
  faArrowAltCircleRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

library.add(fab, faEnvelope);
library.add(far, faArrowAltCircleRight);
library.add(fas, faDownload);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
