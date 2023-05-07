import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/avoir/avoirSelectors';

const AvoirViewItem = (props) => {
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
          <Link to={`/avoir/${record.id}`}>
            {record.numeroAvoir}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.numeroAvoir}</div>;
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

export default AvoirViewItem;
