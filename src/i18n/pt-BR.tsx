const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    client: {
        name: 'Client',
        label: 'Clients',
        menu: 'Clients',
        exporterFileName: 'Client_exportados',
        list: {
          menu: 'Clients',
          title: 'Clients',
        },
        create: {
          success: 'Client salvo com sucesso',
        },
        update: {
          success: 'Client salvo com sucesso',
        },
        destroy: {
          success: 'Client deletado com sucesso',
        },
        destroyAll: {
          success: 'Client(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Client',
        },
        view: {
          title: 'Visualizar Client',
        },
        importer: {
          title: 'Importar Clients',
          fileName: 'client_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    fournisseur: {
        name: 'Fournisseur',
        label: 'Fournisseurs',
        menu: 'Fournisseurs',
        exporterFileName: 'Fournisseur_exportados',
        list: {
          menu: 'Fournisseurs',
          title: 'Fournisseurs',
        },
        create: {
          success: 'Fournisseur salvo com sucesso',
        },
        update: {
          success: 'Fournisseur salvo com sucesso',
        },
        destroy: {
          success: 'Fournisseur deletado com sucesso',
        },
        destroyAll: {
          success: 'Fournisseur(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Fournisseur',
        },
        view: {
          title: 'Visualizar Fournisseur',
        },
        importer: {
          title: 'Importar Fournisseurs',
          fileName: 'fournisseur_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    societe: {
        name: 'Société',
        label: 'Societes',
        menu: 'Societes',
        exporterFileName: 'Société_exportados',
        list: {
          menu: 'Societes',
          title: 'Societes',
        },
        create: {
          success: 'Société salvo com sucesso',
        },
        update: {
          success: 'Société salvo com sucesso',
        },
        destroy: {
          success: 'Société deletado com sucesso',
        },
        destroyAll: {
          success: 'Société(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Société',
        },
        view: {
          title: 'Visualizar Société',
        },
        importer: {
          title: 'Importar Societes',
          fileName: 'societe_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    cabinet: {
        name: 'Cabinet',
        label: 'Cabinets',
        menu: 'Cabinets',
        exporterFileName: 'Cabinet_exportados',
        list: {
          menu: 'Cabinets',
          title: 'Cabinets',
        },
        create: {
          success: 'Cabinet salvo com sucesso',
        },
        update: {
          success: 'Cabinet salvo com sucesso',
        },
        destroy: {
          success: 'Cabinet deletado com sucesso',
        },
        destroyAll: {
          success: 'Cabinet(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Cabinet',
        },
        view: {
          title: 'Visualizar Cabinet',
        },
        importer: {
          title: 'Importar Cabinets',
          fileName: 'cabinet_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    taxes: {
        name: 'Taxe',
        label: 'Taxe',
        menu: 'Taxe',
        exporterFileName: 'Taxe_exportados',
        list: {
          menu: 'Taxe',
          title: 'Taxe',
        },
        create: {
          success: 'Taxe salvo com sucesso',
        },
        update: {
          success: 'Taxe salvo com sucesso',
        },
        destroy: {
          success: 'Taxe deletado com sucesso',
        },
        destroyAll: {
          success: 'Taxe(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Taxe',
        },
        fields: {
          id: 'Id',
          'nomTaxe': 'Intitulé de Taxe',
          'taxesActivity': 'TaxesActivity',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Taxe',
        },
        view: {
          title: 'Visualizar Taxe',
        },
        importer: {
          title: 'Importar Taxe',
          fileName: 'taxes_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    vente: {
        name: 'Vente',
        label: 'Ventes',
        menu: 'Ventes',
        exporterFileName: 'Vente_exportados',
        list: {
          menu: 'Ventes',
          title: 'Ventes',
        },
        create: {
          success: 'Vente salvo com sucesso',
        },
        update: {
          success: 'Vente salvo com sucesso',
        },
        destroy: {
          success: 'Vente deletado com sucesso',
        },
        destroyAll: {
          success: 'Vente(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Vente',
        },
        view: {
          title: 'Visualizar Vente',
        },
        importer: {
          title: 'Importar Ventes',
          fileName: 'vente_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    tva: {
        name: 'TVA',
        label: 'TVA',
        menu: 'TVA',
        exporterFileName: 'TVA_exportados',
        list: {
          menu: 'TVA',
          title: 'TVA',
        },
        create: {
          success: 'TVA salvo com sucesso',
        },
        update: {
          success: 'TVA salvo com sucesso',
        },
        destroy: {
          success: 'TVA deletado com sucesso',
        },
        destroyAll: {
          success: 'TVA(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar TVA',
        },
        fields: {
          id: 'Id',
          'nomTVA': 'Intitulé TVA',
          'tvaActivity': 'TvaActivity',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo TVA',
        },
        view: {
          title: 'Visualizar TVA',
        },
        importer: {
          title: 'Importar TVA',
          fileName: 'tva_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    achats: {
        name: 'Achats',
        label: 'Achats',
        menu: 'Achats',
        exporterFileName: 'Achats_exportados',
        list: {
          menu: 'Achats',
          title: 'Achats',
        },
        create: {
          success: 'Achats salvo com sucesso',
        },
        update: {
          success: 'Achats salvo com sucesso',
        },
        destroy: {
          success: 'Achats deletado com sucesso',
        },
        destroyAll: {
          success: 'Achats(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Achats',
        },
        view: {
          title: 'Visualizar Achats',
        },
        importer: {
          title: 'Importar Achats',
          fileName: 'achats_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    avoir: {
        name: 'Avoir',
        label: 'Avoirs',
        menu: 'Avoirs',
        exporterFileName: 'Avoir_exportados',
        list: {
          menu: 'Avoirs',
          title: 'Avoirs',
        },
        create: {
          success: 'Avoir salvo com sucesso',
        },
        update: {
          success: 'Avoir salvo com sucesso',
        },
        destroy: {
          success: 'Avoir deletado com sucesso',
        },
        destroyAll: {
          success: 'Avoir(s) deletado com sucesso',
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
          'avoirTVA': 'TVA',
          'avoirTaxe': 'Taxe',
          'montantTTCAvoirRange': 'Montant TTC',
          'montantTTCAvoir': 'Montant TTC',
          'attachementAvoir': 'Attachement',
          'avoirSociete': 'Societe',
          valeurTaxe: 'Taxe value',

          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Avoir',
        },
        view: {
          title: 'Visualizar Avoir',
        },
        importer: {
          title: 'Importar Avoirs',
          fileName: 'avoir_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    activity: {
        name: 'Activité de Société',
        label: 'Activities',
        menu: 'Activities',
        exporterFileName: 'Activité de Société_exportados',
        list: {
          menu: 'Activities',
          title: 'Activities',
        },
        create: {
          success: 'Activité de Société salvo com sucesso',
        },
        update: {
          success: 'Activité de Société salvo com sucesso',
        },
        destroy: {
          success: 'Activité de Société deletado com sucesso',
        },
        destroyAll: {
          success: 'Activité de Société(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Activité de Société',
        },
        fields: {
          id: 'Id',
          'activityName': `Intitulé d'activité`,
          'societeType': 'Type Société',
          'taxeType': 'Taxe',
          'tVAType': 'TVA',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Activité de Société',
        },
        view: {
          title: 'Visualizar Activité de Société',
        },
        importer: {
          title: 'Importar Activities',
          fileName: 'activity_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },

  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    passwordChange: {
      title: 'Alterar Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas não conferem',
    },
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },
  roles: {
    admin: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado aos recursos',
    },
  },

  user: {
    invite: 'Convidar',
    title: 'Usuários',
    menu: 'Usuários',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
    },
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    disable: 'Desabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    exporterFileName: 'usuarios_export',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSuccess: 'Usuário(s) deletados com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Padrão',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar ao dashboard',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },
};

export default ptBR;
