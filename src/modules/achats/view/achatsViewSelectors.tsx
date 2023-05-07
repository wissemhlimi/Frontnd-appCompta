import { createSelector } from 'reselect';

const selectRaw = (state) => state.achats.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const achatsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default achatsViewSelectors;
