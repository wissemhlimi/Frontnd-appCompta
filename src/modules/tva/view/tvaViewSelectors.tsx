import { createSelector } from 'reselect';

const selectRaw = (state) => state.tva.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tvaViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default tvaViewSelectors;
