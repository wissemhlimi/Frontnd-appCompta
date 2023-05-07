import SocieteService from 'src/modules/societe/societeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SOCIETE_VIEW';

const societeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: societeViewActions.FIND_STARTED,
      });

      const record = await SocieteService.find(id);

      dispatch({
        type: societeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: societeViewActions.FIND_ERROR,
      });

      getHistory().push('/societe');
    }
  },
};

export default societeViewActions;
