//selector
export const getAllTables = (state) => state.tables;
export const getAllStatuses = (state) => state.statuses;
export const getTablesById = (state, id) =>
  state.tables.find((table) => table.id == id);

//actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName("EDIT_TABLE");
const UPDATE_TABLES = createActionName("UPDATE_TABLES");

//action creators
export const editTable = (payload) => ({
  type: EDIT_TABLE,
  payload,
});
export const updateTables = (payload) => ({
  type: UPDATE_TABLES,
  payload,
});

export const fetchTables = () => {
  return (dispatch) => {
    fetch("http://localhost:3131/api/tables")
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

const tableReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id == action.payload.id ? { ...table, ...action.payload } : table
      );
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tableReducer;
