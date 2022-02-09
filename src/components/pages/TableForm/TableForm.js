import clsx from "clsx";
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./TableForm.module.scss";

const TableForm = ({ action, actionText, ...props }) => {
  const [status, setStatus] = useState(props.status || "");
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || "");
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    props.maxPeopleAmount || ""
  );
  const [bill, setBill] = useState(status === "Busy" ? 0 : props.bill);

  const statuses = [
    { id: 1, value: "Free" },
    { id: 2, value: "Busy" },
    { id: 3, value: "Reserved" },
    { id: 4, value: "Cleaning" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "Busy") {
      setBill(0);
    } else {
      setBill(props.bill);
    }
  }, [status, props.bill]);

  useEffect(() => {
    if (status === "Cleaning" || status === "Free") {
      setPeopleAmount(0);
    } else {
      setPeopleAmount(props.peopleAmount);
    }
  }, [status, props.peopleAmount]);

  useEffect(() => {
    if (peopleAmount > 10) {
      setPeopleAmount(10);
    } else if (peopleAmount < 0 || peopleAmount === "") {
      setPeopleAmount(0);
    } else if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
    if (maxPeopleAmount > 10) {
      setMaxPeopleAmount(10);
    } else if (maxPeopleAmount < 0 || maxPeopleAmount === "") {
      setMaxPeopleAmount(0);
    }
  }, [peopleAmount, maxPeopleAmount]);

  const handleSubmit = () => {
    action({
      status,
      peopleAmount,
      maxPeopleAmount,
      bill,
    });
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <h1>Table {props.id}</h1>
      <Form onSubmit={handleSubmit} className="mb-3 col-8">
        <Form.Group
          className={clsx("mb-3 col-6", styles.group)}
          controlId="formBasicEmail"
        >
          <Form.Label className={clsx("col-4", styles.label)}>
            Status:
          </Form.Label>
          <Form.Control
            as="select"
            className={clsx(styles.control)}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statuses.map((status) => (
              <option key={status.id} value={`${status.value}`}>
                {status.value}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group
          className={clsx("mb-3 col-6", styles.group)}
          controlId="formBasicPassword"
        >
          <Form.Label className={clsx("col-4", styles.label)}>
            People:
          </Form.Label>
          <Form.Control
            value={peopleAmount}
            onChange={(e) => setPeopleAmount(e.target.value)}
            type="text"
            className={clsx(styles.control_people)}
          />
          <p className="d-flex align-items-center m-0">/</p>
          <Form.Control
            value={maxPeopleAmount}
            onChange={(e) => setMaxPeopleAmount(e.target.value)}
            className={clsx(styles.control_people)}
          />
        </Form.Group>
        <Form.Group className={clsx("mb-3 col-6", styles.group)}>
          <Form.Label className={clsx("m-0 col-4", styles.label)}>
            Bill:
          </Form.Label>
          <span className="d-flex align-items-center pe-2">$</span>
          <Form.Control
            className={clsx("w-25", styles.control)}
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default TableForm;
