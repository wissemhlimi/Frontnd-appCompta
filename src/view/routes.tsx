import config from 'src/config';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/client',
    loader: () =>
      import('src/view/client/list/ClientListPage'),
    permissionRequired: permissions.clientRead,
    exact: true,
  },
  {
    path: '/client/new',
    loader: () =>
      import('src/view/client/form/ClientFormPage'),
    permissionRequired: permissions.clientCreate,
    exact: true,
  },
  {
    path: '/client/importer',
    loader: () =>
      import(
        'src/view/client/importer/ClientImporterPage'
      ),
    permissionRequired: permissions.clientImport,
    exact: true,
  },
  {
    path: '/client/:id/edit',
    loader: () =>
      import('src/view/client/form/ClientFormPage'),
    permissionRequired: permissions.clientEdit,
    exact: true,
  },
  {
    path: '/client/:id',
    loader: () =>
      import('src/view/client/view/ClientViewPage'),
    permissionRequired: permissions.clientRead,
    exact: true,
  },

  {
    path: '/fournisseur',
    loader: () =>
      import('src/view/fournisseur/list/FournisseurListPage'),
    permissionRequired: permissions.fournisseurRead,
    exact: true,
  },
  {
    path: '/fournisseur/new',
    loader: () =>
      import('src/view/fournisseur/form/FournisseurFormPage'),
    permissionRequired: permissions.fournisseurCreate,
    exact: true,
  },
  {
    path: '/fournisseur/importer',
    loader: () =>
      import(
        'src/view/fournisseur/importer/FournisseurImporterPage'
      ),
    permissionRequired: permissions.fournisseurImport,
    exact: true,
  },
  {
    path: '/fournisseur/:id/edit',
    loader: () =>
      import('src/view/fournisseur/form/FournisseurFormPage'),
    permissionRequired: permissions.fournisseurEdit,
    exact: true,
  },
  {
    path: '/fournisseur/:id',
    loader: () =>
      import('src/view/fournisseur/view/FournisseurViewPage'),
    permissionRequired: permissions.fournisseurRead,
    exact: true,
  },

  {
    path: '/societe',
    loader: () =>
      import('src/view/societe/list/SocieteListPage'),
    permissionRequired: permissions.societeRead,
    exact: true,
  },
  {
    path: '/societe/new',
    loader: () =>
      import('src/view/societe/form/SocieteFormPage'),
    permissionRequired: permissions.societeCreate,
    exact: true,
  },
  {
    path: '/societe/importer',
    loader: () =>
      import(
        'src/view/societe/importer/SocieteImporterPage'
      ),
    permissionRequired: permissions.societeImport,
    exact: true,
  },
  {
    path: '/societe/:id/edit',
    loader: () =>
      import('src/view/societe/form/SocieteFormPage'),
    permissionRequired: permissions.societeEdit,
    exact: true,
  },
  {
    path: '/societe/:id',
    loader: () =>
      import('src/view/societe/view/SocieteViewPage'),
    permissionRequired: permissions.societeRead,
    exact: true,
  },

  {
    path: '/cabinet',
    loader: () =>
      import('src/view/cabinet/list/CabinetListPage'),
    permissionRequired: permissions.cabinetRead,
    exact: true,
  },
  {
    path: '/cabinet/new',
    loader: () =>
      import('src/view/cabinet/form/CabinetFormPage'),
    permissionRequired: permissions.cabinetCreate,
    exact: true,
  },
  {
    path: '/cabinet/importer',
    loader: () =>
      import(
        'src/view/cabinet/importer/CabinetImporterPage'
      ),
    permissionRequired: permissions.cabinetImport,
    exact: true,
  },
  {
    path: '/cabinet/:id/edit',
    loader: () =>
      import('src/view/cabinet/form/CabinetFormPage'),
    permissionRequired: permissions.cabinetEdit,
    exact: true,
  },
  {
    path: '/cabinet/:id',
    loader: () =>
      import('src/view/cabinet/view/CabinetViewPage'),
    permissionRequired: permissions.cabinetRead,
    exact: true,
  },

  {
    path: '/taxes',
    loader: () =>
      import('src/view/taxes/list/TaxesListPage'),
    permissionRequired: permissions.taxesRead,
    exact: true,
  },
  {
    path: '/taxes/new',
    loader: () =>
      import('src/view/taxes/form/TaxesFormPage'),
    permissionRequired: permissions.taxesCreate,
    exact: true,
  },
  {
    path: '/taxes/importer',
    loader: () =>
      import(
        'src/view/taxes/importer/TaxesImporterPage'
      ),
    permissionRequired: permissions.taxesImport,
    exact: true,
  },
  {
    path: '/taxes/:id/edit',
    loader: () =>
      import('src/view/taxes/form/TaxesFormPage'),
    permissionRequired: permissions.taxesEdit,
    exact: true,
  },
  {
    path: '/taxes/:id',
    loader: () =>
      import('src/view/taxes/view/TaxesViewPage'),
    permissionRequired: permissions.taxesRead,
    exact: true,
  },

  {
    path: '/vente',
    loader: () =>
      import('src/view/vente/list/VenteListPage'),
    permissionRequired: permissions.venteRead,
    exact: true,
  },
  {
    path: '/vente/new',
    loader: () =>
      import('src/view/vente/form/VenteFormPage'),
    permissionRequired: permissions.venteCreate,
    exact: true,
  },
  {
    path: '/vente/importer',
    loader: () =>
      import(
        'src/view/vente/importer/VenteImporterPage'
      ),
    permissionRequired: permissions.venteImport,
    exact: true,
  },
  {
    path: '/vente/:id/edit',
    loader: () =>
      import('src/view/vente/form/VenteFormPage'),
    permissionRequired: permissions.venteEdit,
    exact: true,
  },
  {
    path: '/vente/:id',
    loader: () =>
      import('src/view/vente/view/VenteViewPage'),
    permissionRequired: permissions.venteRead,
    exact: true,
  },

  {
    path: '/tva',
    loader: () =>
      import('src/view/tva/list/TvaListPage'),
    permissionRequired: permissions.tvaRead,
    exact: true,
  },
  {
    path: '/tva/new',
    loader: () =>
      import('src/view/tva/form/TvaFormPage'),
    permissionRequired: permissions.tvaCreate,
    exact: true,
  },
  {
    path: '/tva/importer',
    loader: () =>
      import(
        'src/view/tva/importer/TvaImporterPage'
      ),
    permissionRequired: permissions.tvaImport,
    exact: true,
  },
  {
    path: '/tva/:id/edit',
    loader: () =>
      import('src/view/tva/form/TvaFormPage'),
    permissionRequired: permissions.tvaEdit,
    exact: true,
  },
  {
    path: '/tva/:id',
    loader: () =>
      import('src/view/tva/view/TvaViewPage'),
    permissionRequired: permissions.tvaRead,
    exact: true,
  },

  {
    path: '/achats',
    loader: () =>
      import('src/view/achats/list/AchatsListPage'),
    permissionRequired: permissions.achatsRead,
    exact: true,
  },
  {
    path: '/achats/new',
    loader: () =>
      import('src/view/achats/form/AchatsFormPage'),
    permissionRequired: permissions.achatsCreate,
    exact: true,
  },
  {
    path: '/achats/importer',
    loader: () =>
      import(
        'src/view/achats/importer/AchatsImporterPage'
      ),
    permissionRequired: permissions.achatsImport,
    exact: true,
  },
  {
    path: '/achats/:id/edit',
    loader: () =>
      import('src/view/achats/form/AchatsFormPage'),
    permissionRequired: permissions.achatsEdit,
    exact: true,
  },
  {
    path: '/achats/:id',
    loader: () =>
      import('src/view/achats/view/AchatsViewPage'),
    permissionRequired: permissions.achatsRead,
    exact: true,
  },

  {
    path: '/avoir',
    loader: () =>
      import('src/view/avoir/list/AvoirListPage'),
    permissionRequired: permissions.avoirRead,
    exact: true,
  },
  {
    path: '/avoir/new',
    loader: () =>
      import('src/view/avoir/form/AvoirFormPage'),
    permissionRequired: permissions.avoirCreate,
    exact: true,
  },
  {
    path: '/avoir/importer',
    loader: () =>
      import(
        'src/view/avoir/importer/AvoirImporterPage'
      ),
    permissionRequired: permissions.avoirImport,
    exact: true,
  },
  {
    path: '/avoir/:id/edit',
    loader: () =>
      import('src/view/avoir/form/AvoirFormPage'),
    permissionRequired: permissions.avoirEdit,
    exact: true,
  },
  {
    path: '/avoir/:id',
    loader: () =>
      import('src/view/avoir/view/AvoirViewPage'),
    permissionRequired: permissions.avoirRead,
    exact: true,
  },

  {
    path: '/activity',
    loader: () =>
      import('src/view/activity/list/ActivityListPage'),
    permissionRequired: permissions.activityRead,
    exact: true,
  },
  {
    path: '/activity/new',
    loader: () =>
      import('src/view/activity/form/ActivityFormPage'),
    permissionRequired: permissions.activityCreate,
    exact: true,
  },
  {
    path: '/activity/importer',
    loader: () =>
      import(
        'src/view/activity/importer/ActivityImporterPage'
      ),
    permissionRequired: permissions.activityImport,
    exact: true,
  },
  {
    path: '/activity/:id/edit',
    loader: () =>
      import('src/view/activity/form/ActivityFormPage'),
    permissionRequired: permissions.activityEdit,
    exact: true,
  },
  {
    path: '/activity/:id',
    loader: () =>
      import('src/view/activity/view/ActivityViewPage'),
    permissionRequired: permissions.activityRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
