import CabinetService from 'src/modules/cabinet/cabinetService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CABINET_FORM';

const cabinetFormActions = {
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
        type: cabinetFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CabinetService.find(id);
      }

      dispatch({
        type: cabinetFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cabinetFormActions.INIT_ERROR,
      });

      getHistory().push('/cabinet');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: cabinetFormActions.CREATE_STARTED,
      });

      await CabinetService.create(values);

      dispatch({
        type: cabinetFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cabinet.create.success'),
      );

      getHistory().push('/cabinet');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cabinetFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: cabinetFormActions.UPDATE_STARTED,
      });

      await CabinetService.update(id, values);

      dispatch({
        type: cabinetFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cabinet.update.success'),
      );

      getHistory().push('/cabinet');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cabinetFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default cabinetFormActions;
