import FournisseurService from 'src/modules/fournisseur/fournisseurService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'FOURNISSEUR_FORM';

const fournisseurFormActions = {
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
        type: fournisseurFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await FournisseurService.find(id);
      }

      dispatch({
        type: fournisseurFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: fournisseurFormActions.INIT_ERROR,
      });

      getHistory().push('/fournisseur');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: fournisseurFormActions.CREATE_STARTED,
      });

      await FournisseurService.create(values);

      dispatch({
        type: fournisseurFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.fournisseur.create.success'),
      );

      getHistory().push('/fournisseur');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: fournisseurFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: fournisseurFormActions.UPDATE_STARTED,
      });

      await FournisseurService.update(id, values);

      dispatch({
        type: fournisseurFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.fournisseur.update.success'),
      );

      getHistory().push('/fournisseur');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: fournisseurFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default fournisseurFormActions;
