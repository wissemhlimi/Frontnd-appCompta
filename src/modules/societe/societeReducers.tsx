import list from 'src/modules/societe/list/societeListReducers';
import form from 'src/modules/societe/form/societeFormReducers';
import view from 'src/modules/societe/view/societeViewReducers';
import destroy from 'src/modules/societe/destroy/societeDestroyReducers';
import importerReducer from 'src/modules/societe/importer/societeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
