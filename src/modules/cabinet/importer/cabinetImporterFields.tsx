import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nomCabinet',
    label: i18n('entities.cabinet.fields.nomCabinet'),
    schema: schemas.string(
      i18n('entities.cabinet.fields.nomCabinet'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'cabinetUser',
    label: i18n('entities.cabinet.fields.cabinetUser'),
    schema: schemas.relationToMany(
      i18n('entities.cabinet.fields.cabinetUser'),
      {},
    ),
  },
  {
    name: 'cabinetSociete',
    label: i18n('entities.cabinet.fields.cabinetSociete'),
    schema: schemas.relationToMany(
      i18n('entities.cabinet.fields.cabinetSociete'),
      {},
    ),
  },
  {
    name: 'telCabinet',
    label: i18n('entities.cabinet.fields.telCabinet'),
    schema: schemas.string(
      i18n('entities.cabinet.fields.telCabinet'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'adresseCabinet',
    label: i18n('entities.cabinet.fields.adresseCabinet'),
    schema: schemas.string(
      i18n('entities.cabinet.fields.adresseCabinet'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'emailCabinet',
    label: i18n('entities.cabinet.fields.emailCabinet'),
    schema: schemas.string(
      i18n('entities.cabinet.fields.emailCabinet'),
      {},
    ),
  },
  {
    name: 'logoCabinet',
    label: i18n('entities.cabinet.fields.logoCabinet'),
    schema: schemas.images(
      i18n('entities.cabinet.fields.logoCabinet'),
      {},
    ),
  },
  {
    name: 'commentaireCabinet',
    label: i18n('entities.cabinet.fields.commentaireCabinet'),
    schema: schemas.string(
      i18n('entities.cabinet.fields.commentaireCabinet'),
      {},
    ),
  },
];