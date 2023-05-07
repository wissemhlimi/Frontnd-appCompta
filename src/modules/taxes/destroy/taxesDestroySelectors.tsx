import { createSelector } from 'reselect';

const selectRaw = (state) => state.taxes.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const taxesDestroySelectors = {
  selectLoading,
};

export default taxesDestroySelectors;
