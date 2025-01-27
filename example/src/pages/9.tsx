import React from 'react';

import { Stateview, Layer, Debug } from '~/index';

/**
 * 最简单的分组Demo：2个状态切换 
 */
export default (props: any) => {
  const debug = Debug("example1")

  function unlogin() {
    debug('unlogin')
    window.stateview['alfred'].show('unlogin')
  }

  function logined() {
    debug('logined')
    window.stateview['alfred'].show('logined')
  }

  return (
    <Stateview default='unlogin' group='alfred'>
      <Layer state='logined'>
        <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
      </Layer>
      <Layer state='unlogin'>
        <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>
      </Layer>
    </Stateview>
  );
}
