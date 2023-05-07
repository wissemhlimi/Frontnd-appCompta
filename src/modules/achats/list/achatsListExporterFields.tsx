import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.achats.fields.id'),
  },
  {
    name: 'numeroFactureAchat',
    label: i18n('entities.achats.fields.numeroFactureAchat'),
  },
  {
    name: 'dateAchat',
    label: i18n('entities.achats.fields.dateAchat'),
  },
  {
    name: 'founisseurAchat',
    label: i18n('entities.achats.fields.founisseurAchat'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'montantHTAchat',
    label: i18n('entities.achats.fields.montantHTAchat'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'achatTVA',
    label: i18n('entities.achats.fields.achatTVA'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'achatTaxe',
    label: i18n('entities.achats.fields.achatTaxe'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'achatRemise',
    label: i18n('entities.achats.fields.achatRemise'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'rSAchat',
    label: i18n('entities.achats.fields.rSAchat'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'montantTTCAchat',
    label: i18n('entities.achats.fields.montantTTCAchat'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'montantNetRSAchat',
    label: i18n('entities.achats.fields.montantNetRSAchat'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'attachementAchat',
    label: i18n('entities.achats.fields.attachementAchat'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'achatSociete',
    label: i18n('entities.achats.fields.achatSociete'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.achats.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.achats.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
