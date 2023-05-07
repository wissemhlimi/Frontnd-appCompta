import CabinetService from 'src/modules/cabinet/cabinetService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CABINET_VIEW';

const cabinetViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: cabinetViewActions.FIND_STARTED,
      });

      const record = await CabinetService.find(id);

      dispatch({
        type: cabinetViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cabinetViewActions.FIND_ERROR,
      });

      getHistory().push('/cabinet');
    }
  },
};

export default cabinetViewActions;
