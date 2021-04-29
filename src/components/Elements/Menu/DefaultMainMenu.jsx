import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function DefaultMainMenu({className}) {
  DefaultMainMenu.propTypes = {
    className: PropTypes.string,
  };

  const data = [
    {
      title: 'Tasks',
      link: '/',
    },
  ];

  return (
    <ul className={'inline-flex ' + className}>
      {data.map((item, index) => {
        return (
          <li
            className="text-2xl font-bold my-none inline-felx justify-self-start mr-lg"
            key={index}
          >
            <Link href={item.link}>
              <a href={item.link} className={'hover:underline'}>
                {item.title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
