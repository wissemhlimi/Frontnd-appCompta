import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/tva/importer/tvaImporterSelectors';
import TvaService from 'src/modules/tva/tvaService';
import fields from 'src/modules/tva/importer/tvaImporterFields';
import { i18n } from 'src/i18n';

const tvaImporterActions = importerActions(
  'TVA_IMPORTER',
  selectors,
  TvaService.import,
  fields,
  i18n('entities.tva.importer.fileName'),
);

export default tvaImporterActions;