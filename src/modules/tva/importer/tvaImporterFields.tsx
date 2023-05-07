import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nomTVA',
    label: i18n('entities.tva.fields.nomTVA'),
    schema: schemas.string(
      i18n('entities.tva.fields.nomTVA'),
      {},
    ),
  },
  {
    name: 'tvaActivity',
    label: i18n('entities.tva.fields.tvaActivity'),
    schema: schemas.relationToOne(
      i18n('entities.tva.fields.tvaActivity'),
      {},
    ),
  },
];