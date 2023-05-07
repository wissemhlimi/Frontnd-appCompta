import ActivityService from 'src/modules/activity/activityService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ACTIVITY_FORM';

const activityFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: activityFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ActivityService.find(id);
      }

      dispatch({
        type: activityFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityFormActions.INIT_ERROR,
      });

      getHistory().push('/activity');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: activityFormActions.CREATE_STARTED,
      });

      await ActivityService.create(values);

      dispatch({
        type: activityFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.activity.create.success'),
      );

      getHistory().push('/activity');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: activityFormActions.UPDATE_STARTED,
      });

      await ActivityService.update(id, values);

      dispatch({
        type: activityFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.activity.update.success'),
      );

      getHistory().push('/activity');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default activityFormActions;
