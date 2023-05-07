import {
  DeleteOutlined,
  EditOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import cabinetSelectors from 'src/modules/cabinet/cabinetSelectors';
import destroyActions from 'src/modules/cabinet/destroy/cabinetDestroyActions';
import destroySelectors from 'src/modules/cabinet/destroy/cabinetDestroySelectors';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { useRouteMatch } from 'react-router-dom';

const CabinetViewToolbar = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    cabinetSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    cabinetSelectors.selectPermissionToDestroy,
  );
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const id = match.params.id;

  const doDestroy = () => {
    dispatch(destroyActions.doDestroy(id));
  };

  return (
    <Toolbar>
      {hasPermissionToEdit && (
        <Link to={`/cabinet/${id}/edit`}>
          <Button type="primary" icon={<EditOutlined />}>
            {i18n('common.edit')}
          </Button>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <Popconfirm
          title={i18n('common.areYouSure')}
          onConfirm={doDestroy}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        >
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            disabled={destroyLoading}
          >
            {i18n('common.destroy')}
          </Button>
        </Popconfirm>
      )}

      {hasPermissionToAuditLogs && (
        <Link
          to={`/audit-logs?entityId=${encodeURIComponent(
            id,
          )}`}
        >
          <Button icon={<FileSearchOutlined />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}
    </Toolbar>
  );
};

export default CabinetViewToolbar;
