import VenteService from 'src/modules/vente/venteService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'VENTE_VIEW';

const venteViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: venteViewActions.FIND_STARTED,
      });

      const record = await VenteService.find(id);

      dispatch({
        type: venteViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: venteViewActions.FIND_ERROR,
      });

      getHistory().push('/vente');
    }
  },
};

export default venteViewActions;
