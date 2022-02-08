import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import EditTable from "./components/pages/EditTable/EditTable";
import HomePage from "./components/pages/HomePage/HomePage";
import Header from "./components/views/Header/Header";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/table/:id" element={<EditTable />} />
      </Routes>
    </Container>
  );
}

export default App;
