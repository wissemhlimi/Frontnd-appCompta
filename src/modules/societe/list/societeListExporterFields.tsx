import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.societe.fields.id'),
  },
  {
    name: 'activityType',
    label: i18n('entities.societe.fields.activityType'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'nomSociete',
    label: i18n('entities.societe.fields.nomSociete'),
  },
  {
    name: 'userSociete',
    label: i18n('entities.societe.fields.userSociete'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'societeCabinet',
    label: i18n('entities.societe.fields.societeCabinet'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'mFSociete',
    label: i18n('entities.societe.fields.mFSociete'),
  },
  {
    name: 'telephoneSociete',
    label: i18n('entities.societe.fields.telephoneSociete'),
  },
  {
    name: 'adresseSociete',
    label: i18n('entities.societe.fields.adresseSociete'),
  },
  {
    name: 'emailSociete',
    label: i18n('entities.societe.fields.emailSociete'),
  },
  {
    name: 'logoSociete',
    label: i18n('entities.societe.fields.logoSociete'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'commentaireSociete',
    label: i18n('entities.societe.fields.commentaireSociete'),
  },
  {
    name: 'fournisseurSociete',
    label: i18n('entities.societe.fields.fournisseurSociete'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'clientsSociete',
    label: i18n('entities.societe.fields.clientsSociete'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.societe.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.societe.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
