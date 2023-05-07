import listActions from 'src/modules/societe/list/societeListActions';
import SocieteService from 'src/modules/societe/societeService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SOCIETE_DESTROY';

const societeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: societeDestroyActions.DESTROY_STARTED,
      });

      await SocieteService.destroyAll([id]);

      dispatch({
        type: societeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.societe.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/societe');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: societeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: societeDestroyActions.DESTROY_ALL_STARTED,
      });

      await SocieteService.destroyAll(ids);

      dispatch({
        type: societeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.societe.destroyAll.success'),
      );

      getHistory().push('/societe');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: societeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default societeDestroyActions;
