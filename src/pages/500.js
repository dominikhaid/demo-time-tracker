import React from 'react';
import ResultBox from 'components/Elements/Results/DefaultResult';
import PropTypes from 'prop-types';
import WarningIcon from 'public/icons/phosphor-icons/assets/duotone/hard-drives-duotone.svg';
import Link from 'next/link';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import Head from 'next/head';

/**
 * @desc 500 Page
 * @returns react component
 */
export default function DatabaseError(props) {
  DatabaseError.propTypes = {
    user: PropTypes.object,
    updateState: PropTypes.func,
  };

  return (
    <>
      <Head>
        <title>Error - 500</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Error - 500" key="title" />
      </Head>
      <section className="500 px-lg xl:px-none">
        <style global jsx>{`
          section.error-500 > div {
            background-color: rgba(255, 255, 255, 0.7);
            position: relative;
          }

          section.error-500 > div::before {
            box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
            filter: blur(25px);
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
          }

          body.error-500 main::after {
            content: ' ';
            position: absolute;
            width: 100vw;
            height: 100%;
            z-index: -1;
            opacity: 0.05;
            top: 0;
            left: 0;
            background-image: url('${process.env
              .NEXT_PUBLIC_HOST}/images/backgrounds/pexels-media-270348.jpeg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
          }
        `}</style>
        <ResultBox
          className="text-secondary shadow-lg bg-white"
          icon={<WarningIcon className="animate-popIn text-secondary" />}
          title="Error - 500"
        >
          <h2>Server error please come back later</h2>
          <Link href="/">
            <DefaultButton aria={`home`} type="primary" title="Home" />
          </Link>
        </ResultBox>
      </section>
    </>
  );
}
