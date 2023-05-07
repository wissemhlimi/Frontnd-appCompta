import TvaService from 'src/modules/tva/tvaService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TVA_FORM';

const tvaFormActions = {
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
        type: tvaFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await TvaService.find(id);
      }

      dispatch({
        type: tvaFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tvaFormActions.INIT_ERROR,
      });

      getHistory().push('/tva');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: tvaFormActions.CREATE_STARTED,
      });

      await TvaService.create(values);

      dispatch({
        type: tvaFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.tva.create.success'),
      );

      getHistory().push('/tva');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tvaFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: tvaFormActions.UPDATE_STARTED,
      });

      await TvaService.update(id, values);

      dispatch({
        type: tvaFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.tva.update.success'),
      );

      getHistory().push('/tva');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tvaFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default tvaFormActions;
