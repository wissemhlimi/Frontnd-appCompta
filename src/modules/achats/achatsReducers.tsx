import list from 'src/modules/achats/list/achatsListReducers';
import form from 'src/modules/achats/form/achatsFormReducers';
import view from 'src/modules/achats/view/achatsViewReducers';
import destroy from 'src/modules/achats/destroy/achatsDestroyReducers';
import importerReducer from 'src/modules/achats/importer/achatsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
