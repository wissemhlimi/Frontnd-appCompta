import { createSelector } from 'reselect';
import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import Permissions from 'src/security/permissions';

const selectPermissionToRead = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tvaRead,
    ),
);

const selectPermissionToEdit = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tvaEdit,
    ),
);

const selectPermissionToCreate = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tvaCreate,
    ),
);

const selectPermissionToImport = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tvaImport,
    ),
);

const selectPermissionToDestroy = createSelector(
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tvaDestroy,
    ),
);

const tvaSelectors = {
  selectPermissionToRead,
  selectPermissionToEdit,
  selectPermissionToCreate,
  selectPermissionToDestroy,
  selectPermissionToImport,
};

export default tvaSelectors;
