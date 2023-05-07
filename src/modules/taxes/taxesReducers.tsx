import list from 'src/modules/taxes/list/taxesListReducers';
import form from 'src/modules/taxes/form/taxesFormReducers';
import view from 'src/modules/taxes/view/taxesViewReducers';
import destroy from 'src/modules/taxes/destroy/taxesDestroyReducers';
import importerReducer from 'src/modules/taxes/importer/taxesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
