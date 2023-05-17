import extractorSvelte from '@unocss/extractor-svelte';
import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        default: 'Righteous',
      },
    }),
    presetIcons(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
