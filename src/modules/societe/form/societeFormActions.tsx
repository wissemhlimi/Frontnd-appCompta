import SocieteService from 'src/modules/societe/societeService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SOCIETE_FORM';

const societeFormActions = {
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
        type: societeFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SocieteService.find(id);
      }

      dispatch({
        type: societeFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: societeFormActions.INIT_ERROR,
      });

      getHistory().push('/societe');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: societeFormActions.CREATE_STARTED,
      });

      await SocieteService.create(values);

      dispatch({
        type: societeFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.societe.create.success'),
      );

      getHistory().push('/societe');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: societeFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: societeFormActions.UPDATE_STARTED,
      });

      await SocieteService.update(id, values);

      dispatch({
        type: societeFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.societe.update.success'),
      );

      getHistory().push('/societe');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: societeFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default societeFormActions;
