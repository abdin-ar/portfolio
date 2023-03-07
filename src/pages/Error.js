import { Link } from "react-router-dom";
import MyLink from "../components/router/MyLink";

const Error = () => {
  return (
    <section>
      <h2 className="h3">Page Not Found!</h2>
      <p>Oops! There is no page with this URL.</p>
      <div className="flex gap-2 mt-4">
        <MyLink
          to="/"
          type="Link"
          className="btn bg-primary bg-50 txt-grey txt-95 h-bg-primary h-bg-80 h-txt-grey h-txt-5 rounded"
        >
          Navigate Back Home
        </MyLink>
        <MyLink
          to="/#contact"
          type="Link"
          className="btn bg-grey bg-95 txt-grey txt-5 h-bg-grey h-bg-80 rounded"
        >
          Report a Problem
        </MyLink>
      </div>
    </section>
  );
};

export default Error;
