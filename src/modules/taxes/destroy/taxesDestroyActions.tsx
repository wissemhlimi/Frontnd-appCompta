import listActions from 'src/modules/taxes/list/taxesListActions';
import TaxesService from 'src/modules/taxes/taxesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TAXES_DESTROY';

const taxesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: taxesDestroyActions.DESTROY_STARTED,
      });

      await TaxesService.destroyAll([id]);

      dispatch({
        type: taxesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.taxes.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/taxes');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: taxesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: taxesDestroyActions.DESTROY_ALL_STARTED,
      });

      await TaxesService.destroyAll(ids);

      dispatch({
        type: taxesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.taxes.destroyAll.success'),
      );

      getHistory().push('/taxes');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: taxesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default taxesDestroyActions;
