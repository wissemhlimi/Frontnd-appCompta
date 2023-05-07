import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import config from 'src/config';

import {
  DashboardOutlined,
  UserAddOutlined,
  FileSearchOutlined,
  SettingOutlined,
  RightOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardOutlined />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlined />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <UserAddOutlined />,
  },

  {
    path: '/audit-logs',
    icon: <FileSearchOutlined />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingOutlined />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/client',
    permissionRequired: permissions.clientRead,
    icon: <RightOutlined />,
    label: i18n('entities.client.menu'),
  },

  {
    path: '/fournisseur',
    permissionRequired: permissions.fournisseurRead,
    icon: <RightOutlined />,
    label: i18n('entities.fournisseur.menu'),
  },

  {
    path: '/societe',
    permissionRequired: permissions.societeRead,
    icon: <RightOutlined />,
    label: i18n('entities.societe.menu'),
  },

  {
    path: '/cabinet',
    permissionRequired: permissions.cabinetRead,
    icon: <RightOutlined />,
    label: i18n('entities.cabinet.menu'),
  },

  {
    path: '/taxes',
    permissionRequired: permissions.taxesRead,
    icon: <RightOutlined />,
    label: i18n('entities.taxes.menu'),
  },

  {
    path: '/vente',
    permissionRequired: permissions.venteRead,
    icon: <RightOutlined />,
    label: i18n('entities.vente.menu'),
  },

  {
    path: '/tva',
    permissionRequired: permissions.tvaRead,
    icon: <RightOutlined />,
    label: i18n('entities.tva.menu'),
  },

  {
    path: '/achats',
    permissionRequired: permissions.achatsRead,
    icon: <RightOutlined />,
    label: i18n('entities.achats.menu'),
  },

  {
    path: '/avoir',
    permissionRequired: permissions.avoirRead,
    icon: <RightOutlined />,
    label: i18n('entities.avoir.menu'),
  },

  {
    path: '/activity',
    permissionRequired: permissions.activityRead,
    icon: <RightOutlined />,
    label: i18n('entities.activity.menu'),
  },
].filter(Boolean);
