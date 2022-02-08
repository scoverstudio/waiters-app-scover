const initialState = {
  tables: [
    {
      id: 1,
      status: "Free",
      peopleAmount: 2,
      maxPeopleAmount: 4,
      bill: 45,
    },
    {
      id: 2,
      status: "Busy",
      peopleAmount: 2,
      maxPeopleAmount: 3,
      bill: 25,
    },
    {
      id: 3,
      status: "Reserved",
      peopleAmount: 2,
      maxPeopleAmount: 4,
      bill: 100,
    },
  ],
  statuses: [
    { id: 1, value: "Free" },
    { id: 2, value: "Busy" },
    { id: 3, value: "Reserved" },
    { id: 4, value: "Cleaning" },
  ],
};

export default initialState;
