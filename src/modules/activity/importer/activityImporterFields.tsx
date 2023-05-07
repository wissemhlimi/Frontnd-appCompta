import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'activityName',
    label: i18n('entities.activity.fields.activityName'),
    schema: schemas.string(
      i18n('entities.activity.fields.activityName'),
      {},
    ),
  },
  {
    name: 'societeType',
    label: i18n('entities.activity.fields.societeType'),
    schema: schemas.relationToMany(
      i18n('entities.activity.fields.societeType'),
      {},
    ),
  },
  {
    name: 'taxeType',
    label: i18n('entities.activity.fields.taxeType'),
    schema: schemas.relationToMany(
      i18n('entities.activity.fields.taxeType'),
      {},
    ),
  },
  {
    name: 'tVAType',
    label: i18n('entities.activity.fields.tVAType'),
    schema: schemas.relationToMany(
      i18n('entities.activity.fields.tVAType'),
      {},
    ),
  },
];