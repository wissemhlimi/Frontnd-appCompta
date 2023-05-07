import { createSelector } from 'reselect';

const selectRaw = (state) => state.activity.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const activityDestroySelectors = {
  selectLoading,
};

export default activityDestroySelectors;
