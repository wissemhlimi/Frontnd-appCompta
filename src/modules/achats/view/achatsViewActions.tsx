import AchatsService from 'src/modules/achats/achatsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ACHATS_VIEW';

const achatsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: achatsViewActions.FIND_STARTED,
      });

      const record = await AchatsService.find(id);

      dispatch({
        type: achatsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: achatsViewActions.FIND_ERROR,
      });

      getHistory().push('/achats');
    }
  },
};

export default achatsViewActions;
