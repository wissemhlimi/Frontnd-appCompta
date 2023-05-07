import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.cabinet.fields.id'),
  },
  {
    name: 'nomCabinet',
    label: i18n('entities.cabinet.fields.nomCabinet'),
  },
  {
    name: 'cabinetUser',
    label: i18n('entities.cabinet.fields.cabinetUser'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'cabinetSociete',
    label: i18n('entities.cabinet.fields.cabinetSociete'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'telCabinet',
    label: i18n('entities.cabinet.fields.telCabinet'),
  },
  {
    name: 'adresseCabinet',
    label: i18n('entities.cabinet.fields.adresseCabinet'),
  },
  {
    name: 'emailCabinet',
    label: i18n('entities.cabinet.fields.emailCabinet'),
  },
  {
    name: 'logoCabinet',
    label: i18n('entities.cabinet.fields.logoCabinet'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'commentaireCabinet',
    label: i18n('entities.cabinet.fields.commentaireCabinet'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.cabinet.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.cabinet.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
