import listActions from 'src/modules/fournisseur/list/fournisseurListActions';
import FournisseurService from 'src/modules/fournisseur/fournisseurService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'FOURNISSEUR_DESTROY';

const fournisseurDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: fournisseurDestroyActions.DESTROY_STARTED,
      });

      await FournisseurService.destroyAll([id]);

      dispatch({
        type: fournisseurDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.fournisseur.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/fournisseur');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: fournisseurDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: fournisseurDestroyActions.DESTROY_ALL_STARTED,
      });

      await FournisseurService.destroyAll(ids);

      dispatch({
        type: fournisseurDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.fournisseur.destroyAll.success'),
      );

      getHistory().push('/fournisseur');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: fournisseurDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default fournisseurDestroyActions;
