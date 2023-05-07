import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/cabinet/view/cabinetViewActions';
import selectors from 'src/modules/cabinet/view/cabinetViewSelectors';
import CabinetView from 'src/view/cabinet/view/CabinetView';
import CabinetViewToolbar from 'src/view/cabinet/view/CabinetViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CabinetPage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.cabinet.menu'), '/cabinet'],
          [i18n('entities.cabinet.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.cabinet.view.title')}
        </PageTitle>

        <CabinetViewToolbar match={match} />

        <CabinetView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default CabinetPage;
