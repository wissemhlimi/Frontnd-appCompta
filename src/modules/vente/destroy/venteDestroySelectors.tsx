import { createSelector } from 'reselect';

const selectRaw = (state) => state.vente.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const venteDestroySelectors = {
  selectLoading,
};

export default venteDestroySelectors;
