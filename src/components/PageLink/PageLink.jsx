import styles from "./PageLink.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageLink = ({ route, name,active }) => {
    const activeClass = active?styles.linkbtn_active:styles.linkbtn;
  return (
    <>
      <Link className={activeClass} to={route}>
        {name}
      </Link>
    </>
  );
};

PageLink.propTypes = {
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.string,
};

export default PageLink;
