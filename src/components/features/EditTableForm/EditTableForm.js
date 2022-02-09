import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editTable, getTablesById } from "../../../redux/tableRedux";
import TableForm from "../../pages/TableForm/TableForm";

const EditTableForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const table = useSelector((state) => getTablesById(state, id));

  const handleSubmit = (table) => {
    dispatch(editTable({ ...table, id }));
    navigate("/");
  };

  if (!table) return <Navigate to="/" />;
  return (
    <Container>
      <TableForm
        key={table.id}
        action={handleSubmit}
        id={table.id}
        status={table.status}
        peopleAmount={table.peopleAmount}
        maxPeopleAmount={table.maxPeopleAmount}
        bill={table.bill}
      />
    </Container>
  );
};

export default EditTableForm;
