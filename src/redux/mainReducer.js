import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp23103940Reducer from '../features/SignUp23103940/redux/reducers'
import CalendarView8103935Reducer from '../features/CalendarView8103935/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp23103940: SignUp23103940Reducer,
CalendarView8103935: CalendarView8103935Reducer,

});