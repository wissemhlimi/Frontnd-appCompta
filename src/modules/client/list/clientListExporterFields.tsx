import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.client.fields.id'),
  },
  {
    name: 'nomClient',
    label: i18n('entities.client.fields.nomClient'),
  },
  {
    name: 'mFClient',
    label: i18n('entities.client.fields.mFClient'),
  },
  {
    name: 'adresseClient',
    label: i18n('entities.client.fields.adresseClient'),
  },
  {
    name: 'telephoneClient',
    label: i18n('entities.client.fields.telephoneClient'),
  },
  {
    name: 'emailClient',
    label: i18n('entities.client.fields.emailClient'),
  },
  {
    name: 'photoClient',
    label: i18n('entities.client.fields.photoClient'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'commentaireClient',
    label: i18n('entities.client.fields.commentaireClient'),
  },
  {
    name: 'cilentSociete',
    label: i18n('entities.client.fields.cilentSociete'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.client.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.client.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
