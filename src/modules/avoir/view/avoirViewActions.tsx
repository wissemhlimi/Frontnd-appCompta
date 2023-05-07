import AvoirService from 'src/modules/avoir/avoirService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'AVOIR_VIEW';

const avoirViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: avoirViewActions.FIND_STARTED,
      });

      const record = await AvoirService.find(id);

      dispatch({
        type: avoirViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: avoirViewActions.FIND_ERROR,
      });

      getHistory().push('/avoir');
    }
  },
};

export default avoirViewActions;
