import list from 'src/modules/activity/list/activityListReducers';
import form from 'src/modules/activity/form/activityFormReducers';
import view from 'src/modules/activity/view/activityViewReducers';
import destroy from 'src/modules/activity/destroy/activityDestroyReducers';
import importerReducer from 'src/modules/activity/importer/activityImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
