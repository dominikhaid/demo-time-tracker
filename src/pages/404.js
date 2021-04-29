import React from 'react';
import ResultBox from 'components/Elements/Results/DefaultResult';
import PropTypes from 'prop-types';
import DefaultButton from 'components/Elements/Buttons/DefaultButton';
import WarningIcon from 'public/icons/phosphor-icons/assets/duotone/info-duotone.svg';
import Link from 'next/link';
import Head from 'next/head';

/**
 * @desc 404 Page
 * @returns react component
 */
export default function NotFoundPage() {
  NotFoundPage.propTypes = {
    user: PropTypes.object,
    updateState: PropTypes.func,
  };

  return (
    <>
      <Head>
        <title>Error - 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Error - 404" key="title" />
      </Head>
      <section className="404 px-lg xl:px-none">
        <ResultBox
          className="text-secondary shadow-lg bg-white"
          icon={<WarningIcon className="animate-popIn text-secondary" />}
          title="Error - 404"
        >
          <h2>We are sorry page your looking for does not exist</h2>
          <Link href="/">
            <DefaultButton aria={`back to home`} type="primary" title="Home" />
          </Link>
        </ResultBox>
      </section>
    </>
  );
}
