<div align="center">

<h1>lunar-date-fns</h1>

一个 JavaScript 农历日期的实用程序库

[![NodeJS][node-image]][node-url]
[![License][license-image]][license-url]
[![NPM][npm-image]][npm-url]
[![Codecov][codecov-image]][codecov-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![CircleCI][circleci-image]][circleci-url]

[English][en-us-url] | 简体中文

![Insights][insights-url]

</div>

## 📖 简介

> 创建这个仓库是因为我的家族习俗使用农历生日，很多人能轻易记住它们，除了我，我更倾向于公历生日。
>
> 因此这个包目前主要用于公历和农历的互相转换，它不会输出国际化和生肖、24节气、天干地支之类的内容。

一个轻量、精确且零依赖的实用程序库，使用基姆拉尔逊算法。

查看[文档][docs-url]。

## ⚙️ 安装

```bash
npm install @kabeep/lunar-date-fns --save
```

```bash
yarn add @kabeep/lunar-date-fns
```

```bash
pnpm add @kabeep/lunar-date-fns
```

## 🚀 使用

CommonJS

```javascript
const { toLunar, toSolar } = require('@kabeep/lunar-date-fns');
```

ESModule

```javascript
import { toLunar, toSolar } from '@kabeep/lunar-date-fns';
```

## 🤝 贡献

欢迎通过 Pull Requests 或 [Issues](https://github.com/kabeep/lunar-date-fns/issues) 来贡献你的想法和代码。

## 📄 许可

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。

[node-image]: https://img.shields.io/node/v/%40kabeep%2Flunar-date-fns?color=lightseagreen
[node-url]: https://nodejs.org/docs/latest/api/
[npm-image]: https://img.shields.io/npm/d18m/%40kabeep%2Flunar-date-fns?color=cornflowerblue
[npm-url]: https://www.npmjs.com/package/@kabeep/lunar-date-fns
[codecov-image]: https://img.shields.io/codecov/c/github/kabeep/lunar-date-fns?logo=codecov&color=mediumvioletred
[codecov-url]: https://codecov.io/gh/kabeep/lunar-date-fns
[codacy-image]: https://app.codacy.com/project/badge/Grade/2004f81266e04420ba10c8bc0f966e18
[codacy-url]: https://app.codacy.com/gh/kabeep/lunar-date-fns/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade
[circleci-image]: https://dl.circleci.com/status-badge/img/gh/kabeep/lunar-date-fns/tree/master.svg?style=shield
[circleci-url]: https://dl.circleci.com/status-badge/redirect/gh/kabeep/lunar-date-fns/tree/master
[insights-url]: https://repobeats.axiom.co/api/embed/a875f66209182f0a6b3ddf99ebd1bffa7b604162.svg
[docs-url]: https://kabeep.github.io/lunar-date-fns
[issues-url]: https://github.com/kabeep/lunar-date-fns/issues
[license-image]: https://img.shields.io/github/license/kabeep/lunar-date-fns?color=slateblue
[license-url]: LICENSE
[en-us-url]: README.md
[zh-cn-url]: README.zh-CN.md
