import TaxesService from 'src/modules/taxes/taxesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TAXES_FORM';

const taxesFormActions = {
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
        type: taxesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await TaxesService.find(id);
      }

      dispatch({
        type: taxesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: taxesFormActions.INIT_ERROR,
      });

      getHistory().push('/taxes');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: taxesFormActions.CREATE_STARTED,
      });

      await TaxesService.create(values);

      dispatch({
        type: taxesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.taxes.create.success'),
      );

      getHistory().push('/taxes');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: taxesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: taxesFormActions.UPDATE_STARTED,
      });

      await TaxesService.update(id, values);

      dispatch({
        type: taxesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.taxes.update.success'),
      );

      getHistory().push('/taxes');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: taxesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default taxesFormActions;
