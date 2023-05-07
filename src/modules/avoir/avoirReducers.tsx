import list from 'src/modules/avoir/list/avoirListReducers';
import form from 'src/modules/avoir/form/avoirFormReducers';
import view from 'src/modules/avoir/view/avoirViewReducers';
import destroy from 'src/modules/avoir/destroy/avoirDestroyReducers';
import importerReducer from 'src/modules/avoir/importer/avoirImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
