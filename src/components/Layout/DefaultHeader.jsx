import React, {useEffect} from 'react';
import DefaultMainMenu from 'components/Elements/Menu/DefaultMainMenu';
import PropTypes from 'prop-types';

export default function DefaultHeader({user, children}) {
  DefaultHeader.propTypes = {
    user: PropTypes.object,

    children: PropTypes.func,
  };

  let width = 400,
    height = 130;

  useEffect(() => {
    return () => {};
  }, [user]);

  return (
    <>
      <header className="relative max-w-full shadow-inner w-100 gradient-primary layout">
        <nav id="topNav" className="flex flex-col w-100">
          <DefaultMainMenu className="flex justify-center flex-1 text-white mt-2xl xl:mt-none px-lg w-100 border-gray-light lg:mt-none" />
          {children}
        </nav>
      </header>
    </>
  );
}
