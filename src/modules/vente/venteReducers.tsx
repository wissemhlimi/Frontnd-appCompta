import list from 'src/modules/vente/list/venteListReducers';
import form from 'src/modules/vente/form/venteFormReducers';
import view from 'src/modules/vente/view/venteViewReducers';
import destroy from 'src/modules/vente/destroy/venteDestroyReducers';
import importerReducer from 'src/modules/vente/importer/venteImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
