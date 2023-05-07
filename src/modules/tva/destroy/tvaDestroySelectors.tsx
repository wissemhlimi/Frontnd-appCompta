import { createSelector } from 'reselect';

const selectRaw = (state) => state.tva.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tvaDestroySelectors = {
  selectLoading,
};

export default tvaDestroySelectors;
