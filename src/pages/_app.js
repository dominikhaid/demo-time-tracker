import DefaultFooter from 'components/Layout/DefaultFooter';
import DefaultHeader from 'components/Layout/DefaultHeader';
import {AppContext, AppProvider} from 'context/AppProvider';
import PropTypes from 'prop-types';
import 'public/css/global.css';
import React from 'react';

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.debug('METRIC', metric);
  }
}

/**
 * App Root
 * @param {React Component} Component main component to render
 * @param {Object} pageProps pageProps from getStatic methods
 * @returns
 */
export default function MyApp({Component, pageProps}) {
  MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
  };

  return (
    <AppProvider>
      <AppContext.Consumer>
        {appState => {
          if (pageProps.tasks && appState.tasks.length < 1)
            appState.tasks = pageProps.tasks;
          if (appState.task && !appState.task.task_id)
            appState.task = pageProps.tasks[0];
          return (
            <div className="max-w-full w-100 layout grid-full">
              <DefaultHeader {...appState} />
              <main className="max-w-full overflow-scroll border-2 w-100 border-gray-lightest ">
                <Component {...appState} />
              </main>
              <DefaultFooter {...appState} />
            </div>
          );
        }}
      </AppContext.Consumer>
    </AppProvider>
  );
}
