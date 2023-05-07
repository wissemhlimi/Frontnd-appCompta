import { createSelector } from 'reselect';

const selectRaw = (state) => state.avoir.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const avoirViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default avoirViewSelectors;
