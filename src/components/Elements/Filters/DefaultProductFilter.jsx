import React, {useState} from 'react';
import FilterOutlined from 'public/icons/phosphor-icons/assets/duotone/funnel-duotone.svg';
import InputFilter from 'components/Elements/Inputs/InputFilter';
import DropDownButton from 'components/Elements/Buttons/DropDownButton';
import TextDivider from 'components/Elements/Divider/TextDivider';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

export default function DefaultProductFilter({products, setDatalist}) {
  DefaultProductFilter.propTypes = {
    products: PropTypes.array,
    setDatalist: PropTypes.func,
  };

  let initData = {
    name: [],
    description: [],
    maxTime: Math.max.apply(
      Math,
      products.map(function (o) {
        return o.time_spend;
      }),
    ),
    minTime: Math.min.apply(
      Math,
      products.map(function (o) {
        return o.time_spend;
      }),
    ),
  };

  let initFilter = JSON.parse(JSON.stringify(initData));

  initData.name = [...new Set(products.map(e => e.name))];
  initData.description = [...new Set(products.map(e => e.description))];

  const [filter, setFilter] = useState(initFilter);

  if (!products || products < 1) return <></>;

  const handleFilterChange = (val, grp, checked) => {
    if (!val && val !== 0) return false;

    const tmp = Object.assign(filter);
    if (grp === 'maxTime')
      tmp.maxTime = grp === 'maxTime' ? val : filter.maxTime;
    if (grp === 'minTime')
      tmp.minTime = grp === 'minTime' ? val : filter.minTime;

    let data = products;

    data = data.filter(e => {
      return e.time_spend >= tmp.minTime && e.time_spend <= tmp.maxTime;
    });

    if (checked) {
      tmp[grp] = tmp[grp].filter(e => e !== val);
    }

    if (!checked && grp !== 'maxTime' && grp !== 'minTime') {
      tmp[grp].push(val);
      tmp[grp] = [...new Set(tmp[grp])];
    }

    for (const key in tmp) {
      if (tmp.hasOwnProperty(key) && typeof tmp[key] === 'object') {
        let tmpKey = Object.values(tmp[key]);

        data = data.filter(h =>
          Object.values(h).some(l => new RegExp(tmpKey.join('|')).test(l)),
        );
      }
    }

    setFilter(tmp);
    setDatalist(data);
    return;
  };

  const CheckList = ({group, data, title}) => {
    CheckList.propTypes = {
      data: PropTypes.array,
      title: PropTypes.string,
      group: PropTypes.string,
    };

    return (
      <div className="flex flex-col justify-center">
        <TextDivider className="mt-xl mb-none" title={title} />
        {data.map(e => (
          <InputFilter
            className="leading-3 m-none p-none"
            key={uuid()}
            input={{
              group: group,
              label: e,
              type: 'checkbox',
              checked: val =>
                filter &&
                filter.hasOwnProperty(group) &&
                filter[group].find(f => {
                  return f === val;
                }),
              onChange: (val, grp, checked) =>
                handleFilterChange(val, grp, checked),
            }}
          />
        ))}
      </div>
    );
  };

  const TextField = ({group, data, title}) => {
    TextField.propTypes = {
      data: PropTypes.array,
      title: PropTypes.string,
      group: PropTypes.string,
    };

    return (
      <div className="flex flex-col justify-center">
        <TextDivider className="mt-xl mb-none" title={title} />
        <InputFilter
          className="leading-3 m-none p-none"
          key={uuid()}
          input={{
            group: group,
            type: 'text',
            placeholder: 'filter by ' + group,
            value: filter[group],
            onChange: (val, grp, checked) =>
              handleFilterChange(val, grp, checked),
          }}
        />
      </div>
    );
  };

  const convToSecs = sec => {
    return new Date(sec * 1000).toISOString().substr(11, 8);
  };

  const ActiveFilter = ({products, filter, handleFilterChange}) => {
    ActiveFilter.propTypes = {
      products: PropTypes.array,
      filter: PropTypes.object,
      handleFilterChange: PropTypes.func,
    };
    return (
      <div className="absolute space-x-xs">
        {Object.keys(filter).map(grp => {
          if (filter[grp] && typeof filter[grp] === 'object')
            return filter[grp].map(val => {
              return (
                <DefaultButton
                  aria={`remove filter ${val}`}
                  title={'x ' + val}
                  className="text-sm leading-5 rounded cursor-pointer py-none p-xs text-gray-dark bg-gray-lightest"
                  key={`${val}`}
                  onClick={() => {
                    handleFilterChange(val, grp, true);
                  }}
                />
              );
            });

          if (
            (filter.maxTime &&
              grp === 'maxTime' &&
              filter[grp] !==
                Math.max.apply(
                  Math,
                  products.map(function (o) {
                    return o.time_spend;
                  }),
                )) ||
            (filter.minTime &&
              grp === 'minTime' &&
              filter[grp] !==
                Math.min.apply(
                  Math,
                  products.map(function (o) {
                    return o.time_spend;
                  }),
                ))
          )
            return (
              <DefaultButton
                aria={`remove filter`}
                title={
                  grp === 'maxTime'
                    ? 'x max. ' + convToSecs(filter[grp])
                    : 'x min. ' + convToSecs(filter[grp])
                }
                className="text-sm leading-5 rounded cursor-pointer py-none p-xs text-gray-dark bg-gray-lightest"
                key={`${filter[grp]}`}
                onClick={() => {
                  handleFilterChange(
                    grp === 'minTime'
                      ? Math.min.apply(
                          Math,
                          products.map(function (o) {
                            return o.time_spend;
                          }),
                        )
                      : Math.max.apply(
                          Math,
                          products.map(function (o) {
                            return o.time_spend;
                          }),
                        ),
                    grp,
                  );
                }}
              />
            );
        })}
      </div>
    );
  };

  return (
    <div>
      <DropDownButton
        type="icon"
        className="small"
        style={{height: '45px', width: '45px'}}
        icon={<FilterOutlined />}
      >
        <TextField title="Name" group="name" data={initData.name} />
        <TextField
          title="Desc"
          group="description"
          data={initData.description}
        />
        <TextDivider className="mt-xl mb-none" title={'Total Time'} />
        <InputFilter
          className="leading-3 m-none p-none"
          input={{
            aria: 'minimum time filter',
            group: 'minTime',
            prefix: [
              <p
                key="min"
                className={
                  Math.min.apply(
                    Math,
                    products.map(function (o) {
                      return o.time_spend;
                    }),
                  ) ===
                  Math.max.apply(
                    Math,
                    products.map(function (o) {
                      return o.time_spend;
                    }),
                  )
                    ? 'text-gray'
                    : ''
                }
              >
                Time min.
              </p>,
            ],
            type: 'range',
            value: filter.minTime,
            min: Math.min.apply(
              Math,
              products.map(function (o) {
                return o.time_spend;
              }),
            ),
            max: Math.max.apply(
              Math,
              products.map(function (o) {
                return o.time_spend;
              }),
            ),
            onChange: (val, grp) => handleFilterChange(val, grp),
          }}
        />

        <InputFilter
          className="leading-3 m-none p-none"
          input={{
            aria: 'maximum time filter',
            group: 'maxTime',
            prefix: [
              <p
                key="max"
                className={
                  Math.min.apply(
                    Math,
                    products.map(function (o) {
                      return o.time_spend;
                    }),
                  ) ===
                  Math.max.apply(
                    Math,
                    products.map(function (o) {
                      return o.time_spend;
                    }),
                  )
                    ? 'text-gray'
                    : ''
                }
              >
                Time max.
              </p>,
            ],
            type: 'range',
            value: filter.maxTime,
            min: Math.min.apply(
              Math,
              products.map(function (o) {
                return o.time_spend;
              }),
            ),
            max: Math.max.apply(
              Math,
              products.map(function (o) {
                return o.time_spend;
              }),
            ),
            onChange: (val, grp) => handleFilterChange(val, grp),
          }}
        />
      </DropDownButton>
      <ActiveFilter
        products={products}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}
