import { createSelector } from 'reselect';

const selectRaw = (state) => state.achats.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const achatsDestroySelectors = {
  selectLoading,
};

export default achatsDestroySelectors;
