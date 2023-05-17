const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    client: {
      name: 'client',
      label: 'Clients',
      menu: 'Clients',
      exporterFileName: 'client_export',
      list: {
        menu: 'Clients',
        title: 'Clients',
      },
      create: {
        success: 'Client successfully saved',
      },
      update: {
        success: 'Client successfully saved',
      },
      destroy: {
        success: 'Client successfully deleted',
      },
      destroyAll: {
        success: 'Client(s) successfully deleted',
      },
      edit: {
        title: 'Edit Client',
      },
      fields: {
        id: 'Id',
        'nomClient': 'Nom',
        'mFClient': 'Matricule Fiscale',
        'adresseClient': 'Adresse',
        'telephoneClient': 'Téléphone',
        'emailClient': 'Email',
        'photoClient': 'Photo',
        'commentaireClient': 'Commentaire',
        'cilentSociete': 'CilentSociete',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Client',
      },
      view: {
        title: 'View Client',
      },
      importer: {
        title: 'Import Clients',
        fileName: 'client_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    fournisseur: {
      name: 'fournisseur',
      label: 'Fournisseurs',
      menu: 'Fournisseurs',
      exporterFileName: 'fournisseur_export',
      list: {
        menu: 'Fournisseurs',
        title: 'Fournisseurs',
      },
      create: {
        success: 'Fournisseur successfully saved',
      },
      update: {
        success: 'Fournisseur successfully saved',
      },
      destroy: {
        success: 'Fournisseur successfully deleted',
      },
      destroyAll: {
        success: 'Fournisseur(s) successfully deleted',
      },
      edit: {
        title: 'Edit Fournisseur',
      },
      fields: {
        id: 'Id',
        'nomFournisseur': 'Nom Fournisseur',
        'mFFournisseur': 'Matricule Fiscale Fournisseur',
        'adresseFournisseur': 'Adresse',
        'telephoneFournisseur': 'Téléphone',
        'emailFournisseur': 'Email',
        'photoFournisseur': 'Photo',
        'commentaireFournisseur': 'Commentaire',
        'fournisseurSociete': 'FournisseurSociete',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Fournisseur',
      },
      view: {
        title: 'View Fournisseur',
      },
      importer: {
        title: 'Import Fournisseurs',
        fileName: 'fournisseur_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    societe: {
      name: 'societe',
      label: 'Societes',
      menu: 'Societes',
      exporterFileName: 'societe_export',
      list: {
        menu: 'Societes',
        title: 'Societes',
      },
      create: {
        success: 'Société successfully saved',
      },
      update: {
        success: 'Société successfully saved',
      },
      destroy: {
        success: 'Société successfully deleted',
      },
      destroyAll: {
        success: 'Société(s) successfully deleted',
      },
      edit: {
        title: 'Edit Société',
      },
      fields: {
        id: 'Id',
        'activityType': 'Activité Société',
        'nomSociete': 'Nom',
        'userSociete': 'Utilisateurs de société',
        'societeCabinet': 'Cabinet comptable de société',
        'mFSociete': 'Matricule Fiscale',
        'telephoneSociete': 'Téléphone',
        'adresseSociete': 'Adresse',
        'emailSociete': 'Email',
        'logoSociete': 'Logo',
        'commentaireSociete': 'Commentaire',
        'fournisseurSociete': 'FournisseurSociete',
        'clientsSociete': 'ClientsSociete',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Société',
      },
      view: {
        title: 'View Société',
      },
      importer: {
        title: 'Import Societes',
        fileName: 'societe_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    cabinet: {
      name: 'cabinet',
      label: 'Cabinets',
      menu: 'Cabinets',
      exporterFileName: 'cabinet_export',
      list: {
        menu: 'Cabinets',
        title: 'Cabinets',
      },
      create: {
        success: 'Cabinet successfully saved',
      },
      update: {
        success: 'Cabinet successfully saved',
      },
      destroy: {
        success: 'Cabinet successfully deleted',
      },
      destroyAll: {
        success: 'Cabinet(s) successfully deleted',
      },
      edit: {
        title: 'Edit Cabinet',
      },
      fields: {
        id: 'Id',
        'nomCabinet': 'Nom',
        'cabinetUser': 'Utilisateurs du Cabinet',
        'cabinetSociete': 'Sociétés du Cabinet',
        'telCabinet': 'Téléphone',
        'adresseCabinet': 'Adresse',
        'emailCabinet': 'Email',
        'logoCabinet': 'Logo',
        'commentaireCabinet': 'Commentaire',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Cabinet',
      },
      view: {
        title: 'View Cabinet',
      },
      importer: {
        title: 'Import Cabinets',
        fileName: 'cabinet_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    taxes: {
      name: 'taxes',
      label: 'Taxe',
      menu: 'Taxe',
      exporterFileName: 'taxes_export',
      list: {
        menu: 'Taxe',
        title: 'Taxe',
      },
      create: {
        success: 'Taxe successfully saved',
      },
      update: {
        success: 'Taxe successfully saved',
      },
      destroy: {
        success: 'Taxe successfully deleted',
      },
      destroyAll: {
        success: 'Taxe(s) successfully deleted',
      },
      edit: {
        title: 'Edit Taxe',
      },
      fields: {
        id: 'Id',
        'nomTaxe': 'Intitulé de Taxe',
        'taxesActivity': 'TaxesActivity',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Taxe',
      },
      view: {
        title: 'View Taxe',
      },
      importer: {
        title: 'Import Taxe',
        fileName: 'taxes_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    vente: {
      name: 'vente',
      label: 'Ventes',
      menu: 'Ventes',
      exporterFileName: 'vente_export',
      list: {
        menu: 'Ventes',
        title: 'Ventes',
      },
      create: {
        success: 'Vente successfully saved',
      },
      update: {
        success: 'Vente successfully saved',
      },
      destroy: {
        success: 'Vente successfully deleted',
      },
      destroyAll: {
        success: 'Vente(s) successfully deleted',
      },
      edit: {
        title: 'Edit Vente',
      },
      fields: {
        id: 'Id',
        'numeroFacture': 'Numéro Facture',
        'clientVente': 'Client',
        'montantHTVenteRange': 'Montant HT',
        'montantHTVente': 'Montant HT',
        'tva': 'Tva',
        'taxe': 'Taxe',
        'remiseRange': 'Remise',
        'remise': 'Remise',
        'montantTTCVenteRange': 'Montant TTC',
        'montantTTCVente': 'Montant TTC',
        'dateVenteRange': 'Date',
        'dateVente': 'Date',
        'attachementVente': 'Attachement',
        'venteSociete': 'VenteSociete',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Vente',
      },
      view: {
        title: 'View Vente',
      },
      importer: {
        title: 'Import Ventes',
        fileName: 'vente_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    tva: {
      name: 'tva',
      label: 'TVA',
      menu: 'TVA',
      exporterFileName: 'tva_export',
      list: {
        menu: 'TVA',
        title: 'TVA',
      },
      create: {
        success: 'TVA successfully saved',
      },
      update: {
        success: 'TVA successfully saved',
      },
      destroy: {
        success: 'TVA successfully deleted',
      },
      destroyAll: {
        success: 'TVA(s) successfully deleted',
      },
      edit: {
        title: 'Edit TVA',
      },
      fields: {
        id: 'Id',
        'nomTVA': 'Intitulé TVA',
        'tvaActivity': 'TvaActivity',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New TVA',
      },
      view: {
        title: 'View TVA',
      },
      importer: {
        title: 'Import TVA',
        fileName: 'tva_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    achats: {
      name: 'achats',
      label: 'Achats',
      menu: 'Achats',
      exporterFileName: 'achats_export',
      list: {
        menu: 'Achats',
        title: 'Achats',
      },
      create: {
        success: 'Achats successfully saved',
      },
      update: {
        success: 'Achats successfully saved',
      },
      destroy: {
        success: 'Achats successfully deleted',
      },
      destroyAll: {
        success: 'Achats(s) successfully deleted',
      },
      edit: {
        title: 'Edit Achats',
      },
      fields: {
        id: 'Id',
        'numeroFactureAchat': 'Numéro Facture',
        'dateAchatRange': 'Date',
        'dateAchat': 'Date',
        'founisseurAchat': 'Founisseur',
        'montantHTAchatRange': 'Montant HT',
        'montantHTAchat': 'Montant HT',
        'achatTVA': 'TVA',
        'achatTaxe': 'Taxe',
        'achatRemiseRange': 'Remise',
        'achatRemise': 'Remise',
        'rSAchatRange': 'RSAchat',
        'rSAchat': 'RSAchat',
        'montantTTCAchatRange': 'Montant TTC',
        'montantTTCAchat': 'Montant TTC',
        'montantNetRSAchatRange': 'Montant Net RS',
        'montantNetRSAchat': 'Montant Net RS',
        'attachementAchat': 'Attachement',
        'achatSociete': 'Societe',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Achats',
      },
      view: {
        title: 'View Achats',
      },
      importer: {
        title: 'Import Achats',
        fileName: 'achats_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    avoir: {
      name: 'avoir',
      label: 'Avoirs',
      menu: 'Avoirs',
      exporterFileName: 'avoir_export',
      list: {
        menu: 'Avoirs',
        title: 'Avoirs',
      },
      create: {
        success: 'Avoir successfully saved',
      },
      update: {
        success: 'Avoir successfully saved',
      },
      destroy: {
        success: 'Avoir successfully deleted',
      },
      destroyAll: {
        success: 'Avoir(s) successfully deleted',
      },
      edit: {
        title: 'Edit Avoir',
      },
      fields: {
        id: 'Id',
        'numeroAvoir': 'Numero',
        'dateAvoirRange': 'DateAvoir',
        'dateAvoir': 'DateAvoir',
        'fournisseurAvoir': 'Fournisseur',
        'montantHTAvoirRange': 'Montant HT',
        'montantHTAvoir': 'Montant HT',
        'avoirTaxe': 'Taxe',
        'montantTTCAvoirRange': 'Montant TTC',
        'montantTTCAvoir': 'Montant TTC',
        'attachementAvoir': 'Attachement',
        'avoirSociete': 'Societe',
        valeurTaxe: 'Taxe value',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Avoir',
      },
      view: {
        title: 'View Avoir',
      },
      importer: {
        title: 'Import Avoirs',
        fileName: 'avoir_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    activity: {
      name: 'activity',
      label: 'Activities',
      menu: 'Activities',
      exporterFileName: 'activity_export',
      list: {
        menu: 'Activities',
        title: 'Activities',
      },
      create: {
        success: 'Activité de Société successfully saved',
      },
      update: {
        success: 'Activité de Société successfully saved',
      },
      destroy: {
        success: 'Activité de Société successfully deleted',
      },
      destroyAll: {
        success: 'Activité de Société(s) successfully deleted',
      },
      edit: {
        title: 'Edit Activité de Société',
      },
      fields: {
        id: 'Id',
        'activityName': `Intitulé d'activité`,
        'societeType': 'Type Société',
        'taxeType': 'Taxe',
        'tVAType': 'TVA',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Activité de Société',
      },
      view: {
        title: 'View Activité de Société',
      },
      importer: {
        title: 'Import Activities',
        fileName: 'activity_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom access to resources',
    },
    societe: {
      label: 'Company Role',
      description: 'Company Role',
    },
    cabinet: {
      label: 'Office Role',
      description: 'Office Role',
    },
  },

  user: {
    invite: 'Invite',
    title: 'Users',
    menu: 'Users',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      adresseCode: 'Adresse',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
    },
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    disable: 'Disable',
    enable: 'Enable',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'User(s) successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
