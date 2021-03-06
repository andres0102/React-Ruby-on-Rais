import { combineReducers } from 'redux';

import entities from './entities_reducer';
import ui from './ui/ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';


const rootReducer = combineReducers({
  entities,
  session,
  errors,
  ui
});

export default rootReducer;

// could add ui into the combineReducers after we have that reducer defined 