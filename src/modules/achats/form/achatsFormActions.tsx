import AchatsService from 'src/modules/achats/achatsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ACHATS_FORM';

const achatsFormActions = {
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
        type: achatsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AchatsService.find(id);
      }

      dispatch({
        type: achatsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: achatsFormActions.INIT_ERROR,
      });

      getHistory().push('/achats');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: achatsFormActions.CREATE_STARTED,
      });

      await AchatsService.create(values);

      dispatch({
        type: achatsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.achats.create.success'),
      );

      getHistory().push('/achats');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: achatsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: achatsFormActions.UPDATE_STARTED,
      });

      await AchatsService.update(id, values);

      dispatch({
        type: achatsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.achats.update.success'),
      );

      getHistory().push('/achats');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: achatsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default achatsFormActions;
