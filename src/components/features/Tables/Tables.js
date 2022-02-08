import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tableRedux";
import TableShortcut from "../TableShortcut/TableShortcut";

const Tables = () => {
  const tables = useSelector((state) => getAllTables(state));
  return (
    <Row lg={1}>
      {tables.map((table) => (
        <TableShortcut
          key={table.id}
          id={table.id}
          status={table.status}
        />
      ))}
    </Row>
  );
};

export default Tables;
