import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.taxes.fields.id'),
  },
  {
    name: 'nomTaxe',
    label: i18n('entities.taxes.fields.nomTaxe'),
  },
  {
    name: 'taxesActivity',
    label: i18n('entities.taxes.fields.taxesActivity'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.taxes.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.taxes.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
