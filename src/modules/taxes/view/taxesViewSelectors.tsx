import { createSelector } from 'reselect';

const selectRaw = (state) => state.taxes.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const taxesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default taxesViewSelectors;
