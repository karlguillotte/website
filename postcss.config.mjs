import postcssAutoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import postcssJitProps from 'postcss-jit-props'
import OpenProps from 'open-props'

// https://docs.astro.build/en/guides/styling/#postcss

export default {
    plugins: [
        postcssImport(),
        postcssPresetEnv({
            stage: 1,
        }),
        postcssAutoprefixer(),
        postcssJitProps(OpenProps),
    ],
}
