<div align="center">

<h1>lunar-date-fns</h1>

JavaScript lunar date utility library

[![NodeJS](https://img.shields.io/node/v/%40kabeep%2Flunar-date-fns?color=lightseagreen)](https://nodejs.org/docs/latest/api/)
[![License](https://img.shields.io/github/license/kabeep/lunar-date-fns?color=slateblue)](LICENSE)
[![NPM](https://img.shields.io/npm/d18m/%40kabeep%2Flunar-date-fns?color=cornflowerblue)](https://www.npmjs.com/package/@kabeep/lunar-date-fns)
[![Codecov](https://img.shields.io/codecov/c/github/kabeep/lunar-date-fns?logo=codecov&color=mediumvioletred)](https://codecov.io/gh/kabeep/lunar-date-fns)

English | [简体中文](README.zh-CN.md)

</div>

## 📖 Introduction

> This repository was created because my family's custom is to use the lunar calendar for birthdays, and many people can
> easily remember them except for me. I prefer the Gregorian calendar for birthdays.
>
> Therefore, this package is currently mainly used for the mutual conversion between the Gregorian calendar and the
> lunar calendar. It will not output i18n, the Chinese zodiac, the 24 solar terms, the heavenly stems and .etc.

A lightweight, precise and zero-dependency utility library, See [documentation](https://kabeep.github.io/lunar-date-fns).

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

Contributions via Pull Requests or [Issues](https://github.com/kabeep/lunar-date-fns/issues) are welcome.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
