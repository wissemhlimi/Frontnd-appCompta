import { createSelector } from 'reselect';

const selectRaw = (state) => state.societe.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const societeDestroySelectors = {
  selectLoading,
};

export default societeDestroySelectors;
