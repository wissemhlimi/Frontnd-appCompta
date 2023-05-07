import { createSelector } from 'reselect';

const selectRaw = (state) => state.avoir.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const avoirDestroySelectors = {
  selectLoading,
};

export default avoirDestroySelectors;
