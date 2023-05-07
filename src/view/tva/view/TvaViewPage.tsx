import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tva/view/tvaViewActions';
import selectors from 'src/modules/tva/view/tvaViewSelectors';
import TvaView from 'src/view/tva/view/TvaView';
import TvaViewToolbar from 'src/view/tva/view/TvaViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const TvaPage = (props) => {
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
          [i18n('entities.tva.menu'), '/tva'],
          [i18n('entities.tva.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tva.view.title')}
        </PageTitle>

        <TvaViewToolbar match={match} />

        <TvaView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default TvaPage;
