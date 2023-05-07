import { createSelector } from 'reselect';

const selectRaw = (state) => state.cabinet.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const cabinetViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default cabinetViewSelectors;
