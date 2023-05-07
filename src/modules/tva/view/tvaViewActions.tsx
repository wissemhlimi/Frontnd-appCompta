import TvaService from 'src/modules/tva/tvaService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TVA_VIEW';

const tvaViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tvaViewActions.FIND_STARTED,
      });

      const record = await TvaService.find(id);

      dispatch({
        type: tvaViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tvaViewActions.FIND_ERROR,
      });

      getHistory().push('/tva');
    }
  },
};

export default tvaViewActions;
