import { useEffect} from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import EditTable from "./components/pages/EditTable/EditTable";
import HomePage from "./components/pages/HomePage/HomePage";
import Header from "./components/views/Header/Header";
import { fetchTables } from "./redux/tableRedux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/table/:id" element={<EditTable />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
