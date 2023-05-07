import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'numeroFacture',
    label: i18n('entities.vente.fields.numeroFacture'),
    schema: schemas.string(
      i18n('entities.vente.fields.numeroFacture'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'clientVente',
    label: i18n('entities.vente.fields.clientVente'),
    schema: schemas.relationToOne(
      i18n('entities.vente.fields.clientVente'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'montantHTVente',
    label: i18n('entities.vente.fields.montantHTVente'),
    schema: schemas.decimal(
      i18n('entities.vente.fields.montantHTVente'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'tva',
    label: i18n('entities.vente.fields.tva'),
    schema: schemas.relationToMany(
      i18n('entities.vente.fields.tva'),
      {},
    ),
  },
  {
    name: 'taxe',
    label: i18n('entities.vente.fields.taxe'),
    schema: schemas.relationToMany(
      i18n('entities.vente.fields.taxe'),
      {},
    ),
  },
  {
    name: 'remise',
    label: i18n('entities.vente.fields.remise'),
    schema: schemas.decimal(
      i18n('entities.vente.fields.remise'),
      {},
    ),
  },
  {
    name: 'montantTTCVente',
    label: i18n('entities.vente.fields.montantTTCVente'),
    schema: schemas.decimal(
      i18n('entities.vente.fields.montantTTCVente'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dateVente',
    label: i18n('entities.vente.fields.dateVente'),
    schema: schemas.date(
      i18n('entities.vente.fields.dateVente'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'attachementVente',
    label: i18n('entities.vente.fields.attachementVente'),
    schema: schemas.files(
      i18n('entities.vente.fields.attachementVente'),
      {},
    ),
  },
  {
    name: 'venteSociete',
    label: i18n('entities.vente.fields.venteSociete'),
    schema: schemas.relationToOne(
      i18n('entities.vente.fields.venteSociete'),
      {},
    ),
  },
];