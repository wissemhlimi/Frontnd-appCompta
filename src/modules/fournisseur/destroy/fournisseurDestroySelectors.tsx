import { createSelector } from 'reselect';

const selectRaw = (state) => state.fournisseur.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const fournisseurDestroySelectors = {
  selectLoading,
};

export default fournisseurDestroySelectors;
