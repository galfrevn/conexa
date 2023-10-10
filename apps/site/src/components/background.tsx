import { Fragment } from 'react';

export function StarwarsBackground() {
  return (
    <Fragment>
      <div
        className='-z-10 fixed top-0 h-screen w-screen'
        style={{ background: 'url(/stars.png) top center #000000' }}
      ></div>
      <div
        className='-z-10 animate-twink fixed top-0 h-screen w-screen'
        style={{ background: 'url(/twinkling.png) top center #0000006E' }}
      ></div>
    </Fragment>
  );
}
