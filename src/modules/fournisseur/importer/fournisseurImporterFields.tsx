import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nomFournisseur',
    label: i18n('entities.fournisseur.fields.nomFournisseur'),
    schema: schemas.string(
      i18n('entities.fournisseur.fields.nomFournisseur'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'mFFournisseur',
    label: i18n('entities.fournisseur.fields.mFFournisseur'),
    schema: schemas.string(
      i18n('entities.fournisseur.fields.mFFournisseur'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'adresseFournisseur',
    label: i18n('entities.fournisseur.fields.adresseFournisseur'),
    schema: schemas.string(
      i18n('entities.fournisseur.fields.adresseFournisseur'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'telephoneFournisseur',
    label: i18n('entities.fournisseur.fields.telephoneFournisseur'),
    schema: schemas.string(
      i18n('entities.fournisseur.fields.telephoneFournisseur'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'emailFournisseur',
    label: i18n('entities.fournisseur.fields.emailFournisseur'),
    schema: schemas.string(
      i18n('entities.fournisseur.fields.emailFournisseur'),
      {},
    ),
  },
  {
    name: 'photoFournisseur',
    label: i18n('entities.fournisseur.fields.photoFournisseur'),
    schema: schemas.images(
      i18n('entities.fournisseur.fields.photoFournisseur'),
      {},
    ),
  },
  {
    name: 'commentaireFournisseur',
    label: i18n('entities.fournisseur.fields.commentaireFournisseur'),
    schema: schemas.string(
      i18n('entities.fournisseur.fields.commentaireFournisseur'),
      {},
    ),
  },
  {
    name: 'fournisseurSociete',
    label: i18n('entities.fournisseur.fields.fournisseurSociete'),
    schema: schemas.relationToOne(
      i18n('entities.fournisseur.fields.fournisseurSociete'),
      {},
    ),
  },
];