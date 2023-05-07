import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.vente.fields.id'),
  },
  {
    name: 'numeroFacture',
    label: i18n('entities.vente.fields.numeroFacture'),
  },
  {
    name: 'clientVente',
    label: i18n('entities.vente.fields.clientVente'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'montantHTVente',
    label: i18n('entities.vente.fields.montantHTVente'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'tva',
    label: i18n('entities.vente.fields.tva'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'taxe',
    label: i18n('entities.vente.fields.taxe'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'remise',
    label: i18n('entities.vente.fields.remise'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'montantTTCVente',
    label: i18n('entities.vente.fields.montantTTCVente'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'dateVente',
    label: i18n('entities.vente.fields.dateVente'),
  },
  {
    name: 'attachementVente',
    label: i18n('entities.vente.fields.attachementVente'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'venteSociete',
    label: i18n('entities.vente.fields.venteSociete'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.vente.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.vente.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
