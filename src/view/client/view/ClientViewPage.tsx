import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/client/view/clientViewActions';
import selectors from 'src/modules/client/view/clientViewSelectors';
import ClientView from 'src/view/client/view/ClientView';
import ClientViewToolbar from 'src/view/client/view/ClientViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ClientPage = (props) => {
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
          [i18n('entities.client.menu'), '/client'],
          [i18n('entities.client.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.client.view.title')}
        </PageTitle>

        <ClientViewToolbar match={match} />

        <ClientView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ClientPage;
