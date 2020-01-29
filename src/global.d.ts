/* eslint @typescript-eslint/no-explicit-any: off */

declare namespace NodeJS {
  interface Global {
    getReduxState: any;
  }
}
