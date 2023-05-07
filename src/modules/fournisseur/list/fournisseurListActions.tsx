import FournisseurService from 'src/modules/fournisseur/fournisseurService';
import selectors from 'src/modules/fournisseur/list/fournisseurListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/fournisseur/list/fournisseurListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'FOURNISSEUR_LIST';

const fournisseurListActions = {
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
      type: fournisseurListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: fournisseurListActions.RESETED,
    });

    dispatch(fournisseurListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: fournisseurListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await FournisseurService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.fournisseur.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: fournisseurListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: fournisseurListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: fournisseurListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: fournisseurListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(fournisseurListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(fournisseurListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: fournisseurListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await FournisseurService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: fournisseurListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: fournisseurListActions.FETCH_ERROR,
      });
    }
  },
};

export default fournisseurListActions;
