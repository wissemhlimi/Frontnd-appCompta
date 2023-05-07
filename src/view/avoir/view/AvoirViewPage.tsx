import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/avoir/view/avoirViewActions';
import selectors from 'src/modules/avoir/view/avoirViewSelectors';
import AvoirView from 'src/view/avoir/view/AvoirView';
import AvoirViewToolbar from 'src/view/avoir/view/AvoirViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AvoirPage = (props) => {
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
          [i18n('entities.avoir.menu'), '/avoir'],
          [i18n('entities.avoir.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.avoir.view.title')}
        </PageTitle>

        <AvoirViewToolbar match={match} />

        <AvoirView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default AvoirPage;
