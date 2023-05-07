import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/cabinet/importer/cabinetImporterSelectors';
import CabinetService from 'src/modules/cabinet/cabinetService';
import fields from 'src/modules/cabinet/importer/cabinetImporterFields';
import { i18n } from 'src/i18n';

const cabinetImporterActions = importerActions(
  'CABINET_IMPORTER',
  selectors,
  CabinetService.import,
  fields,
  i18n('entities.cabinet.importer.fileName'),
);

export default cabinetImporterActions;