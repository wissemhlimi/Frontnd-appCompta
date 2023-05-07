import { createSelector } from 'reselect';

const selectRaw = (state) => state.activity.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const activityViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default activityViewSelectors;
