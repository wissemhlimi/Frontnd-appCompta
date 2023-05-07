import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.fournisseur.fields.id'),
  },
  {
    name: 'nomFournisseur',
    label: i18n('entities.fournisseur.fields.nomFournisseur'),
  },
  {
    name: 'mFFournisseur',
    label: i18n('entities.fournisseur.fields.mFFournisseur'),
  },
  {
    name: 'adresseFournisseur',
    label: i18n('entities.fournisseur.fields.adresseFournisseur'),
  },
  {
    name: 'telephoneFournisseur',
    label: i18n('entities.fournisseur.fields.telephoneFournisseur'),
  },
  {
    name: 'emailFournisseur',
    label: i18n('entities.fournisseur.fields.emailFournisseur'),
  },
  {
    name: 'photoFournisseur',
    label: i18n('entities.fournisseur.fields.photoFournisseur'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'commentaireFournisseur',
    label: i18n('entities.fournisseur.fields.commentaireFournisseur'),
  },
  {
    name: 'fournisseurSociete',
    label: i18n('entities.fournisseur.fields.fournisseurSociete'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.fournisseur.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.fournisseur.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
