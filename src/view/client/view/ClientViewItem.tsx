import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/client/clientSelectors';

const ClientViewItem = (props) => {
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
          <Link to={`/client/${record.id}`}>
            {record.nomClient}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.nomClient}</div>;
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

export default ClientViewItem;
