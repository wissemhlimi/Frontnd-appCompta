import VenteService from 'src/modules/vente/venteService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'VENTE_FORM';

const venteFormActions = {
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
        type: venteFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await VenteService.find(id);
      }

      dispatch({
        type: venteFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: venteFormActions.INIT_ERROR,
      });

      getHistory().push('/vente');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: venteFormActions.CREATE_STARTED,
      });

      await VenteService.create(values);

      dispatch({
        type: venteFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.vente.create.success'),
      );

      getHistory().push('/vente');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: venteFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: venteFormActions.UPDATE_STARTED,
      });

      await VenteService.update(id, values);

      dispatch({
        type: venteFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.vente.update.success'),
      );

      getHistory().push('/vente');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: venteFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default venteFormActions;
