import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/taxes/view/taxesViewActions';
import selectors from 'src/modules/taxes/view/taxesViewSelectors';
import TaxesView from 'src/view/taxes/view/TaxesView';
import TaxesViewToolbar from 'src/view/taxes/view/TaxesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const TaxesPage = (props) => {
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
          [i18n('entities.taxes.menu'), '/taxes'],
          [i18n('entities.taxes.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.taxes.view.title')}
        </PageTitle>

        <TaxesViewToolbar match={match} />

        <TaxesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default TaxesPage;
