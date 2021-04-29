import Error from 'next/error';
import React from 'react';
import ResultBox from 'components/Elements/Results/DefaultResult';
import PropTypes from 'prop-types';
import WarningIcon from 'public/icons/phosphor-icons/assets/duotone/hard-drives-duotone.svg';
import Link from 'next/link';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import Head from 'next/head';

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const errorCode = res.ok ? false : res.statusCode;
  const json = await res.json();

  return {
    props: {errorCode, stars: json.stargazers_count},
  };
}

/**
 * @desc Next.js Server Error
 * @param {String} errorCode Next.js error code
 * @returns react component
 */
export default function Page({errorCode}) {
  Page.propTypes = {
    errorCode: PropTypes.string,
  };

  return (
    <>
      <Head>
        <title>Error - Next Server</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Error - 500" key="title" />
      </Head>
      <section className="500 px-lg xl:px-none">
        <ResultBox
          className="text-secondary shadow-lg bg-white"
          icon={<WarningIcon className="animate-popIn text-secondary" />}
          title="Error - 500"
        >
          {errorCode && <Error statusCode={errorCode} />}
          <h2>Server error please come back later</h2>
          <Link href="/">
            <DefaultButton aria={`home`} type="primary" title="Home" />
          </Link>
        </ResultBox>
      </section>
    </>
  );
}
