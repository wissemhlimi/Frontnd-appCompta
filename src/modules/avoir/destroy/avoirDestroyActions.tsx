import listActions from 'src/modules/avoir/list/avoirListActions';
import AvoirService from 'src/modules/avoir/avoirService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'AVOIR_DESTROY';

const avoirDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: avoirDestroyActions.DESTROY_STARTED,
      });

      await AvoirService.destroyAll([id]);

      dispatch({
        type: avoirDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.avoir.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/avoir');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: avoirDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: avoirDestroyActions.DESTROY_ALL_STARTED,
      });

      await AvoirService.destroyAll(ids);

      dispatch({
        type: avoirDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.avoir.destroyAll.success'),
      );

      getHistory().push('/avoir');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: avoirDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default avoirDestroyActions;
