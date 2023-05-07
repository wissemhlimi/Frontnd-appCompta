import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/achats/importer/achatsImporterSelectors';
import AchatsService from 'src/modules/achats/achatsService';
import fields from 'src/modules/achats/importer/achatsImporterFields';
import { i18n } from 'src/i18n';

const achatsImporterActions = importerActions(
  'ACHATS_IMPORTER',
  selectors,
  AchatsService.import,
  fields,
  i18n('entities.achats.importer.fileName'),
);

export default achatsImporterActions;