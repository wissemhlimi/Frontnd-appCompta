import listActions from 'src/modules/vente/list/venteListActions';
import VenteService from 'src/modules/vente/venteService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'VENTE_DESTROY';

const venteDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: venteDestroyActions.DESTROY_STARTED,
      });

      await VenteService.destroyAll([id]);

      dispatch({
        type: venteDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.vente.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/vente');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: venteDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: venteDestroyActions.DESTROY_ALL_STARTED,
      });

      await VenteService.destroyAll(ids);

      dispatch({
        type: venteDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.vente.destroyAll.success'),
      );

      getHistory().push('/vente');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: venteDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default venteDestroyActions;
