import ActivityService from 'src/modules/activity/activityService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ACTIVITY_VIEW';

const activityViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: activityViewActions.FIND_STARTED,
      });

      const record = await ActivityService.find(id);

      dispatch({
        type: activityViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityViewActions.FIND_ERROR,
      });

      getHistory().push('/activity');
    }
  },
};

export default activityViewActions;
