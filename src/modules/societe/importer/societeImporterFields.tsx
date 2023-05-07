import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'activityType',
    label: i18n('entities.societe.fields.activityType'),
    schema: schemas.relationToOne(
      i18n('entities.societe.fields.activityType'),
      {},
    ),
  },
  {
    name: 'nomSociete',
    label: i18n('entities.societe.fields.nomSociete'),
    schema: schemas.string(
      i18n('entities.societe.fields.nomSociete'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'userSociete',
    label: i18n('entities.societe.fields.userSociete'),
    schema: schemas.relationToMany(
      i18n('entities.societe.fields.userSociete'),
      {},
    ),
  },
  {
    name: 'societeCabinet',
    label: i18n('entities.societe.fields.societeCabinet'),
    schema: schemas.relationToOne(
      i18n('entities.societe.fields.societeCabinet'),
      {},
    ),
  },
  {
    name: 'mFSociete',
    label: i18n('entities.societe.fields.mFSociete'),
    schema: schemas.string(
      i18n('entities.societe.fields.mFSociete'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'telephoneSociete',
    label: i18n('entities.societe.fields.telephoneSociete'),
    schema: schemas.string(
      i18n('entities.societe.fields.telephoneSociete'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'adresseSociete',
    label: i18n('entities.societe.fields.adresseSociete'),
    schema: schemas.string(
      i18n('entities.societe.fields.adresseSociete'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'emailSociete',
    label: i18n('entities.societe.fields.emailSociete'),
    schema: schemas.string(
      i18n('entities.societe.fields.emailSociete'),
      {},
    ),
  },
  {
    name: 'logoSociete',
    label: i18n('entities.societe.fields.logoSociete'),
    schema: schemas.images(
      i18n('entities.societe.fields.logoSociete'),
      {},
    ),
  },
  {
    name: 'commentaireSociete',
    label: i18n('entities.societe.fields.commentaireSociete'),
    schema: schemas.string(
      i18n('entities.societe.fields.commentaireSociete'),
      {},
    ),
  },
  {
    name: 'fournisseurSociete',
    label: i18n('entities.societe.fields.fournisseurSociete'),
    schema: schemas.relationToMany(
      i18n('entities.societe.fields.fournisseurSociete'),
      {},
    ),
  },
  {
    name: 'clientsSociete',
    label: i18n('entities.societe.fields.clientsSociete'),
    schema: schemas.relationToMany(
      i18n('entities.societe.fields.clientsSociete'),
      {},
    ),
  },
];