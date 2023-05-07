import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/avoir/importer/avoirImporterSelectors';
import AvoirService from 'src/modules/avoir/avoirService';
import fields from 'src/modules/avoir/importer/avoirImporterFields';
import { i18n } from 'src/i18n';

const avoirImporterActions = importerActions(
  'AVOIR_IMPORTER',
  selectors,
  AvoirService.import,
  fields,
  i18n('entities.avoir.importer.fileName'),
);

export default avoirImporterActions;