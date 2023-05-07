import list from 'src/modules/fournisseur/list/fournisseurListReducers';
import form from 'src/modules/fournisseur/form/fournisseurFormReducers';
import view from 'src/modules/fournisseur/view/fournisseurViewReducers';
import destroy from 'src/modules/fournisseur/destroy/fournisseurDestroyReducers';
import importerReducer from 'src/modules/fournisseur/importer/fournisseurImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
