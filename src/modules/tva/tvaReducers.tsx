import list from 'src/modules/tva/list/tvaListReducers';
import form from 'src/modules/tva/form/tvaFormReducers';
import view from 'src/modules/tva/view/tvaViewReducers';
import destroy from 'src/modules/tva/destroy/tvaDestroyReducers';
import importerReducer from 'src/modules/tva/importer/tvaImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
