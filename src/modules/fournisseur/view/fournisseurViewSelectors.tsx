import { createSelector } from 'reselect';

const selectRaw = (state) => state.fournisseur.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const fournisseurViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default fournisseurViewSelectors;
