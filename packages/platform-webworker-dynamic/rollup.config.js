/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import resolve from 'rollup-plugin-node-resolve';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/compiler': 'ng.compiler',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/platform-webworker': 'ng.platformWebworker',
};

export default {
  entry:
      '../../dist/packages-dist/platform-webworker-dynamic/@angular/platform-webworker-dynamic.es5.js',
  dest:
      '../../dist/packages-dist/platform-webworker-dynamic/bundles/platform-webworker-dynamic.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.platformWebworkerDynamic',
  plugins: [resolve()],
  external: Object.keys(globals),
  globals: globals
};
