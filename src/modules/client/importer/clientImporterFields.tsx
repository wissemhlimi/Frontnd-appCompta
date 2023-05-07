import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'nomClient',
    label: i18n('entities.client.fields.nomClient'),
    schema: schemas.string(
      i18n('entities.client.fields.nomClient'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'mFClient',
    label: i18n('entities.client.fields.mFClient'),
    schema: schemas.string(
      i18n('entities.client.fields.mFClient'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'adresseClient',
    label: i18n('entities.client.fields.adresseClient'),
    schema: schemas.string(
      i18n('entities.client.fields.adresseClient'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'telephoneClient',
    label: i18n('entities.client.fields.telephoneClient'),
    schema: schemas.string(
      i18n('entities.client.fields.telephoneClient'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'emailClient',
    label: i18n('entities.client.fields.emailClient'),
    schema: schemas.string(
      i18n('entities.client.fields.emailClient'),
      {},
    ),
  },
  {
    name: 'photoClient',
    label: i18n('entities.client.fields.photoClient'),
    schema: schemas.images(
      i18n('entities.client.fields.photoClient'),
      {},
    ),
  },
  {
    name: 'commentaireClient',
    label: i18n('entities.client.fields.commentaireClient'),
    schema: schemas.string(
      i18n('entities.client.fields.commentaireClient'),
      {},
    ),
  },
  {
    name: 'cilentSociete',
    label: i18n('entities.client.fields.cilentSociete'),
    schema: schemas.relationToOne(
      i18n('entities.client.fields.cilentSociete'),
      {},
    ),
  },
];