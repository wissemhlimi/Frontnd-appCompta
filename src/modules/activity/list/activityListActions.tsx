import ActivityService from 'src/modules/activity/activityService';
import selectors from 'src/modules/activity/list/activityListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/activity/list/activityListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'ACTIVITY_LIST';

const activityListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  SELECTEDS_CHANGED: `${prefix}_SELECTEDS_CHANGED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doChangeSelected(payload) {
    return {
      type: activityListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: activityListActions.RESETED,
    });

    dispatch(activityListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: activityListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await ActivityService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.activity.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: activityListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: activityListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: activityListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(activityListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(activityListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: activityListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await ActivityService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: activityListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: activityListActions.FETCH_ERROR,
      });
    }
  },
};

export default activityListActions;
