import listActions from 'src/modules/activity/list/activityListActions';
import ActivityService from 'src/modules/activity/activityService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ACTIVITY_DESTROY';

const activityDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: activityDestroyActions.DESTROY_STARTED,
      });

      await ActivityService.destroyAll([id]);

      dispatch({
        type: activityDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.activity.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/activity');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: activityDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: activityDestroyActions.DESTROY_ALL_STARTED,
      });

      await ActivityService.destroyAll(ids);

      dispatch({
        type: activityDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.activity.destroyAll.success'),
      );

      getHistory().push('/activity');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: activityDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default activityDestroyActions;
