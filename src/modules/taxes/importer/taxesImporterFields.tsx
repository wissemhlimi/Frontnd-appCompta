import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nomTaxe',
    label: i18n('entities.taxes.fields.nomTaxe'),
    schema: schemas.string(
      i18n('entities.taxes.fields.nomTaxe'),
      {},
    ),
  },
  {
    name: 'taxesActivity',
    label: i18n('entities.taxes.fields.taxesActivity'),
    schema: schemas.relationToOne(
      i18n('entities.taxes.fields.taxesActivity'),
      {},
    ),
  },
];