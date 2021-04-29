import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';

// NOTE THIS IS THE PAGNIATION LIST/
function PaginationSwitcher(
  {items, activePage, setActivePage, pageSize},
  props,
) {
  PaginationSwitcher.propTypes = {
    items: PropTypes.array,
    pageSize: PropTypes.number,
    activePage: PropTypes.number,
    setActivePage: PropTypes.func,
  };
  if (!pageSize || !items) return <></>;
  pageSize = Math.ceil(Number(items.length) / Number(pageSize));
  let list = [];

  if (!activePage && activePage !== 0) activePage = 1;

  for (let index = 1; index <= pageSize; index++) {
    list.push(
      <DefaultButton
        aria={`switch to page ${index}`}
        onClick={e => {
          e.preventDefault();
          setActivePage(index - 1);
        }}
        title={index}
        style={{padding: '0.2rem 0.8rem'}}
        type={index - 1 === activePage ? 'primary' : 'outlined'}
        className={
          index - 1 === activePage
            ? 'active border-2 border-primary mx-xs'
            : 'text-primary border-2 border-primary mx-xs'
        }
        key={uuid()}
      />,
    );
  }

  return (
    <div
      id="card-pagination"
      className="inline-flex place-content-center w-100"
      {...props}
    >
      {list}
    </div>
  );
}

function DefaultPaginationList({items, pageSize, activePage, setActivePage}) {
  DefaultPaginationList.propTypes = {
    items: PropTypes.array,
    pageSize: PropTypes.number,
    activePage: PropTypes.number,
    setActivePage: PropTypes.func,
  };

  pageSize = pageSize ? pageSize : 1;

  if (!items || items.length < 1) return <></>;

  return (
    <PaginationSwitcher
      items={items}
      pageSize={pageSize}
      activePage={activePage}
      setActivePage={setActivePage}
    />
  );
}

export default DefaultPaginationList;
