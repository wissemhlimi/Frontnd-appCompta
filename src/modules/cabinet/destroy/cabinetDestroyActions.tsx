import listActions from 'src/modules/cabinet/list/cabinetListActions';
import CabinetService from 'src/modules/cabinet/cabinetService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CABINET_DESTROY';

const cabinetDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: cabinetDestroyActions.DESTROY_STARTED,
      });

      await CabinetService.destroyAll([id]);

      dispatch({
        type: cabinetDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.cabinet.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/cabinet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: cabinetDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: cabinetDestroyActions.DESTROY_ALL_STARTED,
      });

      await CabinetService.destroyAll(ids);

      dispatch({
        type: cabinetDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.cabinet.destroyAll.success'),
      );

      getHistory().push('/cabinet');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: cabinetDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default cabinetDestroyActions;
