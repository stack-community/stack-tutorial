/* tslint:disable */
/* eslint-disable */
/**
* @param {string} src
* @returns {Result}
*/
export function run_stack(src: string): Result;
/**
*/
export class Result {
  free(): void;
/**
* @param {string} output
* @param {string} log
* @returns {Result}
*/
  static new(output: string, log: string): Result;
/**
* @returns {string}
*/
  output(): string;
/**
* @returns {string}
*/
  log(): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly run_stack: (a: number, b: number) => number;
  readonly __wbg_result_free: (a: number) => void;
  readonly result_new: (a: number, b: number, c: number, d: number) => number;
  readonly result_output: (a: number, b: number) => void;
  readonly result_log: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
