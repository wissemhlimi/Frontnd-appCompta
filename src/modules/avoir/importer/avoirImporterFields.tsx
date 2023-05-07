import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'numeroAvoir',
    label: i18n('entities.avoir.fields.numeroAvoir'),
    schema: schemas.string(
      i18n('entities.avoir.fields.numeroAvoir'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dateAvoir',
    label: i18n('entities.avoir.fields.dateAvoir'),
    schema: schemas.date(
      i18n('entities.avoir.fields.dateAvoir'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'fournisseurAvoir',
    label: i18n('entities.avoir.fields.fournisseurAvoir'),
    schema: schemas.relationToOne(
      i18n('entities.avoir.fields.fournisseurAvoir'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'montantHTAvoir',
    label: i18n('entities.avoir.fields.montantHTAvoir'),
    schema: schemas.decimal(
      i18n('entities.avoir.fields.montantHTAvoir'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'avoirTVA',
    label: i18n('entities.avoir.fields.avoirTVA'),
    schema: schemas.relationToMany(
      i18n('entities.avoir.fields.avoirTVA'),
      {},
    ),
  },
  {
    name: 'avoirTaxe',
    label: i18n('entities.avoir.fields.avoirTaxe'),
    schema: schemas.relationToMany(
      i18n('entities.avoir.fields.avoirTaxe'),
      {},
    ),
  },
  {
    name: 'montantTTCAvoir',
    label: i18n('entities.avoir.fields.montantTTCAvoir'),
    schema: schemas.decimal(
      i18n('entities.avoir.fields.montantTTCAvoir'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'attachementAvoir',
    label: i18n('entities.avoir.fields.attachementAvoir'),
    schema: schemas.files(
      i18n('entities.avoir.fields.attachementAvoir'),
      {},
    ),
  },
  {
    name: 'avoirSociete',
    label: i18n('entities.avoir.fields.avoirSociete'),
    schema: schemas.relationToOne(
      i18n('entities.avoir.fields.avoirSociete'),
      {},
    ),
  },
];