import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.tva.fields.id'),
  },
  {
    name: 'nomTVA',
    label: i18n('entities.tva.fields.nomTVA'),
  },
  {
    name: 'tvaActivity',
    label: i18n('entities.tva.fields.tvaActivity'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.tva.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.tva.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
