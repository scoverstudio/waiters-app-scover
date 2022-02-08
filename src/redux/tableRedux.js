//selector
export const getAllTables = (state) => state.tables;
export const getAllStatuses = (state) => state.statuses;
export const getTablesById = (state, id) =>
  state.tables.find((table) => table.id == id);
//actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName("EDIT_TABLE");
//action creators
export const editTable = (payload) => ({
  type: EDIT_TABLE,
  payload,
});

const tableReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id == action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};

export default tableReducer;
