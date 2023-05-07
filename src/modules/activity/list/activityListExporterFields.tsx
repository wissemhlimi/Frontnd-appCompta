import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.activity.fields.id'),
  },
  {
    name: 'activityName',
    label: i18n('entities.activity.fields.activityName'),
  },
  {
    name: 'societeType',
    label: i18n('entities.activity.fields.societeType'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'taxeType',
    label: i18n('entities.activity.fields.taxeType'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'tVAType',
    label: i18n('entities.activity.fields.tVAType'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.activity.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.activity.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
