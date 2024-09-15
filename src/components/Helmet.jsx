import { Helmet } from "react-helmet";

export default function HelmetComp({ children, description }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{children} - GlobalStats</title>
      <link rel="canonical" href={`http://mysite.com/${children}`} />
      <meta name="description" content={description} />
    </Helmet>
  );
}
