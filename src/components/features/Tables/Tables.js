import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tableRedux";
import TableShortcut from "../TableShortcut/TableShortcut";

const Tables = ({ pending }) => {
  const tables = useSelector((state) => getAllTables(state));
  console.log(pending);
  return (
    <section>
      <Row lg={1}>
        {tables.map((table) => (
          <TableShortcut key={table.id} id={table.id} status={table.status} />
        ))}
      </Row>
    </section>
  );
};

export default Tables;
