import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/taxes/taxesSelectors';

const TaxesViewItem = (props) => {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link to={`/taxes/${record.id}`}>
            {record.nomTaxe}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.nomTaxe}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
};

export default TaxesViewItem;
