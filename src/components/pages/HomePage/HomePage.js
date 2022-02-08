import { Container } from "react-bootstrap";
import Tables from "../../features/Tables/Tables";
import styles from "../HomePage/HomePage.module.scss";

const HomePage = () => {
  return (
   <Container>
       <h1 className={styles.title}>All tables</h1>
       <Tables />
  </Container>
  );
};

export default HomePage;
