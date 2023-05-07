import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'numeroFactureAchat',
    label: i18n('entities.achats.fields.numeroFactureAchat'),
    schema: schemas.string(
      i18n('entities.achats.fields.numeroFactureAchat'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dateAchat',
    label: i18n('entities.achats.fields.dateAchat'),
    schema: schemas.date(
      i18n('entities.achats.fields.dateAchat'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'founisseurAchat',
    label: i18n('entities.achats.fields.founisseurAchat'),
    schema: schemas.relationToOne(
      i18n('entities.achats.fields.founisseurAchat'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'montantHTAchat',
    label: i18n('entities.achats.fields.montantHTAchat'),
    schema: schemas.decimal(
      i18n('entities.achats.fields.montantHTAchat'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'achatTVA',
    label: i18n('entities.achats.fields.achatTVA'),
    schema: schemas.relationToOne(
      i18n('entities.achats.fields.achatTVA'),
      {},
    ),
  },
  {
    name: 'achatTaxe',
    label: i18n('entities.achats.fields.achatTaxe'),
    schema: schemas.relationToOne(
      i18n('entities.achats.fields.achatTaxe'),
      {},
    ),
  },
  {
    name: 'achatRemise',
    label: i18n('entities.achats.fields.achatRemise'),
    schema: schemas.decimal(
      i18n('entities.achats.fields.achatRemise'),
      {},
    ),
  },
  {
    name: 'rSAchat',
    label: i18n('entities.achats.fields.rSAchat'),
    schema: schemas.decimal(
      i18n('entities.achats.fields.rSAchat'),
      {},
    ),
  },
  {
    name: 'montantTTCAchat',
    label: i18n('entities.achats.fields.montantTTCAchat'),
    schema: schemas.decimal(
      i18n('entities.achats.fields.montantTTCAchat'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'montantNetRSAchat',
    label: i18n('entities.achats.fields.montantNetRSAchat'),
    schema: schemas.decimal(
      i18n('entities.achats.fields.montantNetRSAchat'),
      {},
    ),
  },
  {
    name: 'attachementAchat',
    label: i18n('entities.achats.fields.attachementAchat'),
    schema: schemas.files(
      i18n('entities.achats.fields.attachementAchat'),
      {},
    ),
  },
  {
    name: 'achatSociete',
    label: i18n('entities.achats.fields.achatSociete'),
    schema: schemas.relationToOne(
      i18n('entities.achats.fields.achatSociete'),
      {},
    ),
  },
];