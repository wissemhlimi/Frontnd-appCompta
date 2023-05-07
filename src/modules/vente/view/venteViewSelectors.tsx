import { createSelector } from 'reselect';

const selectRaw = (state) => state.vente.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const venteViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default venteViewSelectors;
