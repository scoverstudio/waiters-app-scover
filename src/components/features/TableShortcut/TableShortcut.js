import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./TableShortcut.module.scss";

const TableShortcut = ({ id, status}) => {
  return (
    <Container className="d-flex flex-row justify-content-between mb-5 p-3 border-bottom">
      <div className="d-flex flex-row">
        <h2>Table {id}</h2>
        <p className="d-flex align-items-center m-0">
          <span className={styles.status}>Status:</span> {status}
        </p>
      </div>
      <Link to={"/table/" + id}>
        <Button>Show more</Button>
      </Link>
    </Container>
  );
};

export default TableShortcut;
