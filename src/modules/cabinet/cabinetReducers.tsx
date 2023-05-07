import list from 'src/modules/cabinet/list/cabinetListReducers';
import form from 'src/modules/cabinet/form/cabinetFormReducers';
import view from 'src/modules/cabinet/view/cabinetViewReducers';
import destroy from 'src/modules/cabinet/destroy/cabinetDestroyReducers';
import importerReducer from 'src/modules/cabinet/importer/cabinetImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
