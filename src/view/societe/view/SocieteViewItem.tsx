import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/societe/societeSelectors';

const SocieteViewItem = (props) => {
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
          <Link to={`/societe/${record.id}`}>
            {record.nomSociete}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.nomSociete}</div>;
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

export default SocieteViewItem;
