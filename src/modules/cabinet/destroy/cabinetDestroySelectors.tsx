import { createSelector } from 'reselect';

const selectRaw = (state) => state.cabinet.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const cabinetDestroySelectors = {
  selectLoading,
};

export default cabinetDestroySelectors;
