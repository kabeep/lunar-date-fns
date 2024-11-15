<div align="center">

<h1>lunar-date-fns</h1>

A JavaScript lunar date utility library

[![NodeJS][node-image]][node-url]
[![License][license-image]][license-url]
[![NPM][npm-image]][npm-url]
[![Codecov][codecov-image]][codecov-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![CircleCI][circleci-image]][circleci-url]

English | [简体中文][zh-cn-url]

![Insights][insights-url]

</div>

## 📖 Introduction

> This repository was created because my family's custom is to use the lunar calendar for birthdays, and many people can
> easily remember them except for me. I prefer the Gregorian calendar for birthdays.
>
> Therefore, this package is currently mainly used for the mutual conversion between the Gregorian calendar and the
> lunar calendar. It will not output i18n, the Chinese zodiac, the 24 solar terms, the heavenly stems and .etc.

A lightweight, precise and zero-dependency utility library using Kim Larson's algorithm.

See [documentation][docs-url].

## ⚙️ Installation

```bash
npm install @kabeep/lunar-date-fns --save
```

```bash
yarn add @kabeep/lunar-date-fns
```

```bash
pnpm add @kabeep/lunar-date-fns
```

## 🚀 Usage

CommonJS

```javascript
const { toLunar, toSolar } = require('@kabeep/lunar-date-fns');
```

ESModule

```javascript
import { toLunar, toSolar } from '@kabeep/lunar-date-fns';
```

## 🤝 Contribution

Contributions via Pull Requests or [Issues][issues-url] are welcome.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE][license-url] file for details.

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
