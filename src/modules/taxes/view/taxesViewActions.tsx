import TaxesService from 'src/modules/taxes/taxesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TAXES_VIEW';

const taxesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: taxesViewActions.FIND_STARTED,
      });

      const record = await TaxesService.find(id);

      dispatch({
        type: taxesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: taxesViewActions.FIND_ERROR,
      });

      getHistory().push('/taxes');
    }
  },
};

export default taxesViewActions;
