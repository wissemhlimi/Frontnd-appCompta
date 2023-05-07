import FournisseurService from 'src/modules/fournisseur/fournisseurService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'FOURNISSEUR_VIEW';

const fournisseurViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: fournisseurViewActions.FIND_STARTED,
      });

      const record = await FournisseurService.find(id);

      dispatch({
        type: fournisseurViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: fournisseurViewActions.FIND_ERROR,
      });

      getHistory().push('/fournisseur');
    }
  },
};

export default fournisseurViewActions;
