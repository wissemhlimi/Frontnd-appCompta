import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.avoir.fields.id'),
  },
  {
    name: 'numeroAvoir',
    label: i18n('entities.avoir.fields.numeroAvoir'),
  },
  {
    name: 'dateAvoir',
    label: i18n('entities.avoir.fields.dateAvoir'),
  },
  {
    name: 'fournisseurAvoir',
    label: i18n('entities.avoir.fields.fournisseurAvoir'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'montantHTAvoir',
    label: i18n('entities.avoir.fields.montantHTAvoir'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'avoirTVA',
    label: i18n('entities.avoir.fields.avoirTVA'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'avoirTaxe',
    label: i18n('entities.avoir.fields.avoirTaxe'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'montantTTCAvoir',
    label: i18n('entities.avoir.fields.montantTTCAvoir'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'attachementAvoir',
    label: i18n('entities.avoir.fields.attachementAvoir'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'avoirSociete',
    label: i18n('entities.avoir.fields.avoirSociete'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.avoir.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.avoir.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
