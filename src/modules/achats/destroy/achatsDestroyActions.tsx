import listActions from 'src/modules/achats/list/achatsListActions';
import AchatsService from 'src/modules/achats/achatsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ACHATS_DESTROY';

const achatsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: achatsDestroyActions.DESTROY_STARTED,
      });

      await AchatsService.destroyAll([id]);

      dispatch({
        type: achatsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.achats.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/achats');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: achatsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: achatsDestroyActions.DESTROY_ALL_STARTED,
      });

      await AchatsService.destroyAll(ids);

      dispatch({
        type: achatsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.achats.destroyAll.success'),
      );

      getHistory().push('/achats');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: achatsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default achatsDestroyActions;
