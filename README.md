 
<div>
  简体中文 ｜ <a href="./README_EN.md">English</a>
</div>

<h1 align="center"> Stateview </h1>
<div align="center">
  <img src="https://img.alicdn.com/imgextra/i3/O1CN01ukckHc1yE7ND85M1s_!!6000000006546-2-tps-1088-970.png" width="300" />
</div>
<br />

<div align="center">
  <strong> a react render solution for Multi-State View.</strong>
</div>
<br />

<div align="center">
  <a href="https://badge.fury.io/js/stateview"><img src="https://badge.fury.io/js/stateview.svg" alt="npm version" height="18"></a>
  <a href="https://npmcharts.com/compare/stateview" target="_blank"><img src="https://img.shields.io/npm/dm/stateview" alt="download"></a>
  <a href="https://standardjs.com" target="_blank"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standardjs"></a>
  <a href="https://github.com/i5ting/stateview" target="_blank"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <a href="https://github.com/zhangyuang/i5ting/stateview" target="_blank"><img src="https://img.shields.io/badge/node-%3E=12-green.svg" alt="Node"></a>
</div>
<br />

## Features

- Compatible with the React Component
- Built-in the Multi-State View with {Stateview , Layer}
- Customize the Data via React Component props.data
- Built-in Switch State, and view render features
- Support the Nested View

## 预览

可以通过[StackBlitz](http://stackblitz.com/)进行线上预览:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/i5ting/stateview)

## 安装

    $ npm install --save stateview

## 用法

最小示例，只有Logined和UnLogin二个状态。

```js
import React from 'react';

import { Stateview, Layer } from 'stateview';

export default () => {

  function unlogin() {
    stateview.show('unlogin')
  }

  function logined() {
    stateview.show('logined')
  }

  return (
    <Stateview default='unlogin'>
      <Layer router='logined'>
        <h1>Logined, <button onClick={unlogin}>go to UnLogin</button></h1>
      </Layer>
      <Layer router='unlogin'>
        <h1 >UnLogin, <button onClick={logined}>go to Logined</button></h1>;
      </Layer>
    </Stateview>
  );
}
```

注意：此时使用的window.stateview

## 运行示例方法

```shell
$ npm i 
$ npm run dev
```

## 参与贡献

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Refer to the [CONTRIBUTING](./CONTRIBUTING.md).

## License

Copyright © i5ting. All rights reserved.

Licensed under the MIT license.