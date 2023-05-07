import { createSelector } from 'reselect';

const selectRaw = (state) => state.societe.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const societeViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default societeViewSelectors;
