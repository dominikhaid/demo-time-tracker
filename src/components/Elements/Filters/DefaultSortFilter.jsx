import React from 'react';
import SortAscendingOutlined from 'public/icons/phosphor-icons/assets/duotone/sort-ascending-duotone.svg';
import DropDownButton from 'components/Elements/Buttons/DropDownButton';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import PropTypes from 'prop-types';

export default function DefaultSortFilter({
  products,
  setDatalist,
  setForceRender,
  forceRender,
}) {
  DefaultSortFilter.propTypes = {
    products: PropTypes.array,
    setDatalist: PropTypes.func,
    setForceRender: PropTypes.func,
    forceRender: PropTypes.func,
  };

  const menu = [
    {
      title: 'Time total (lowest first)',
      onClick: e => {
        e.preventDefault();
        setDatalist(products.sort((a, b) => a.time_spend > b.time_spend));
        setForceRender(!forceRender);
      },
    },
    {
      title: 'Time highest(highest first)',
      onClick: e => {
        e.preventDefault();
        setDatalist(products.sort((a, b) => a.time_spend < b.time_spend));
        setForceRender(!forceRender);
      },
    },
    {
      onClick: e => {
        e.preventDefault();
        setDatalist(products.sort((a, b) => a.name > b.name));
        setForceRender(!forceRender);
      },
      title: 'Name (a to z)',
    },
    {
      onClick: e => {
        e.preventDefault();
        setDatalist(products.sort((a, b) => a.name < b.name));
        setForceRender(!forceRender);
      },
      title: 'Name (z to a)',
    },
  ];

  return (
    <DropDownButton
      type="icon"
      className="small"
      style={{height: '45px', width: '45px'}}
      icon={<SortAscendingOutlined />}
    >
      {menu.map(item => {
        return (
          <DefaultButton
            className="text-center rounded p-xs text-gray-dark w-100"
            key={item.title}
            type="ghost"
            title={item.title}
            onClick={e => item.onClick(e)}
          />
        );
      })}
    </DropDownButton>
  );
}
