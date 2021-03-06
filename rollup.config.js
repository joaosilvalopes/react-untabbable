import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'index.js',
            format: 'esm',
            exports: 'named',
            globals: {
                'react': 'react',
            },
        },
        {
            file: 'index.cjs.js',
            format: 'cjs',
            exports: 'named',
            globals: {
                'react': 'react',
            },
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        sizeSnapshot(),
        babel({
            exclude: 'node_modules/**',
        })
    ],
    external: ['react'],
}