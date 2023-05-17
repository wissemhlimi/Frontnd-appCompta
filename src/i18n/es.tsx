const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },

  api: {
    menu: 'API',
  },
  
  entities: {
    client: {
        name: 'client',
        label: 'Clients',
        menu: 'Clients',
        exporterFileName: 'exportacion_client',
        list: {
          menu: 'Clients',
          title: 'Clients',
        },
        create: {
          success: 'Client guardado con éxito',
        },
        update: {
          success: 'Client guardado con éxito',
        },
        destroy: {
          success: 'Client eliminado con éxito',
        },
        destroyAll: {
          success: 'Client(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Client',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Client',
        },
        view: {
          title: 'Ver Client',
        },
        importer: {
          title: 'Importar Clients',
          fileName: 'client_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    fournisseur: {
        name: 'fournisseur',
        label: 'Fournisseurs',
        menu: 'Fournisseurs',
        exporterFileName: 'exportacion_fournisseur',
        list: {
          menu: 'Fournisseurs',
          title: 'Fournisseurs',
        },
        create: {
          success: 'Fournisseur guardado con éxito',
        },
        update: {
          success: 'Fournisseur guardado con éxito',
        },
        destroy: {
          success: 'Fournisseur eliminado con éxito',
        },
        destroyAll: {
          success: 'Fournisseur(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Fournisseur',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Fournisseur',
        },
        view: {
          title: 'Ver Fournisseur',
        },
        importer: {
          title: 'Importar Fournisseurs',
          fileName: 'fournisseur_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    societe: {
        name: 'societe',
        label: 'Societes',
        menu: 'Societes',
        exporterFileName: 'exportacion_societe',
        list: {
          menu: 'Societes',
          title: 'Societes',
        },
        create: {
          success: 'Société guardado con éxito',
        },
        update: {
          success: 'Société guardado con éxito',
        },
        destroy: {
          success: 'Société eliminado con éxito',
        },
        destroyAll: {
          success: 'Société(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Société',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Société',
        },
        view: {
          title: 'Ver Société',
        },
        importer: {
          title: 'Importar Societes',
          fileName: 'societe_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    cabinet: {
        name: 'cabinet',
        label: 'Cabinets',
        menu: 'Cabinets',
        exporterFileName: 'exportacion_cabinet',
        list: {
          menu: 'Cabinets',
          title: 'Cabinets',
        },
        create: {
          success: 'Cabinet guardado con éxito',
        },
        update: {
          success: 'Cabinet guardado con éxito',
        },
        destroy: {
          success: 'Cabinet eliminado con éxito',
        },
        destroyAll: {
          success: 'Cabinet(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Cabinet',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Cabinet',
        },
        view: {
          title: 'Ver Cabinet',
        },
        importer: {
          title: 'Importar Cabinets',
          fileName: 'cabinet_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    taxes: {
        name: 'taxes',
        label: 'Taxe',
        menu: 'Taxe',
        exporterFileName: 'exportacion_taxes',
        list: {
          menu: 'Taxe',
          title: 'Taxe',
        },
        create: {
          success: 'Taxe guardado con éxito',
        },
        update: {
          success: 'Taxe guardado con éxito',
        },
        destroy: {
          success: 'Taxe eliminado con éxito',
        },
        destroyAll: {
          success: 'Taxe(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Taxe',
        },
        fields: {
          id: 'Id',
          'nomTaxe': 'Intitulé de Taxe',
          'taxesActivity': 'TaxesActivity',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Taxe',
        },
        view: {
          title: 'Ver Taxe',
        },
        importer: {
          title: 'Importar Taxe',
          fileName: 'taxes_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    vente: {
        name: 'vente',
        label: 'Ventes',
        menu: 'Ventes',
        exporterFileName: 'exportacion_vente',
        list: {
          menu: 'Ventes',
          title: 'Ventes',
        },
        create: {
          success: 'Vente guardado con éxito',
        },
        update: {
          success: 'Vente guardado con éxito',
        },
        destroy: {
          success: 'Vente eliminado con éxito',
        },
        destroyAll: {
          success: 'Vente(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Vente',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Vente',
        },
        view: {
          title: 'Ver Vente',
        },
        importer: {
          title: 'Importar Ventes',
          fileName: 'vente_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    tva: {
        name: 'tva',
        label: 'TVA',
        menu: 'TVA',
        exporterFileName: 'exportacion_tva',
        list: {
          menu: 'TVA',
          title: 'TVA',
        },
        create: {
          success: 'TVA guardado con éxito',
        },
        update: {
          success: 'TVA guardado con éxito',
        },
        destroy: {
          success: 'TVA eliminado con éxito',
        },
        destroyAll: {
          success: 'TVA(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar TVA',
        },
        fields: {
          id: 'Id',
          'nomTVA': 'Intitulé TVA',
          'tvaActivity': 'TvaActivity',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo TVA',
        },
        view: {
          title: 'Ver TVA',
        },
        importer: {
          title: 'Importar TVA',
          fileName: 'tva_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    achats: {
        name: 'achats',
        label: 'Achats',
        menu: 'Achats',
        exporterFileName: 'exportacion_achats',
        list: {
          menu: 'Achats',
          title: 'Achats',
        },
        create: {
          success: 'Achats guardado con éxito',
        },
        update: {
          success: 'Achats guardado con éxito',
        },
        destroy: {
          success: 'Achats eliminado con éxito',
        },
        destroyAll: {
          success: 'Achats(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Achats',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Achats',
        },
        view: {
          title: 'Ver Achats',
        },
        importer: {
          title: 'Importar Achats',
          fileName: 'achats_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    avoir: {
        name: 'avoir',
        label: 'Avoirs',
        menu: 'Avoirs',
        exporterFileName: 'exportacion_avoir',
        list: {
          menu: 'Avoirs',
          title: 'Avoirs',
        },
        create: {
          success: 'Avoir guardado con éxito',
        },
        update: {
          success: 'Avoir guardado con éxito',
        },
        destroy: {
          success: 'Avoir eliminado con éxito',
        },
        destroyAll: {
          success: 'Avoir(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Avoir',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Avoir',
        },
        view: {
          title: 'Ver Avoir',
        },
        importer: {
          title: 'Importar Avoirs',
          fileName: 'avoir_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    activity: {
        name: 'activity',
        label: 'Activities',
        menu: 'Activities',
        exporterFileName: 'exportacion_activity',
        list: {
          menu: 'Activities',
          title: 'Activities',
        },
        create: {
          success: 'Activité de Société guardado con éxito',
        },
        update: {
          success: 'Activité de Société guardado con éxito',
        },
        destroy: {
          success: 'Activité de Société eliminado con éxito',
        },
        destroyAll: {
          success: 'Activité de Société(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Activité de Société',
        },
        fields: {
          id: 'Id',
          activityName: `Intitulé d'activité`,
          'societeType': 'Type Société',
          'taxeType': 'Taxe',
          'tVAType': 'TVA',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Activité de Société',
        },
        view: {
          title: 'Ver Activité de Société',
        },
        importer: {
          title: 'Importar Activities',
          fileName: 'activity_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
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
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      adresseCode: 'Adresse',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Defecto',
      cyan: 'Cian',
      'geek-blue': 'Geek Blue',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },
  
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },
  autocomplete: {
    loading: 'Cargando...',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
};

export default es;
