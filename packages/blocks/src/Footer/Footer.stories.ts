import type {Meta, StoryFn} from '@storybook/vue3';
import FooterLight from './Light.vue';
import FooterDark from './Dark.vue';
import FooterAutoDarkMode from './AutoDarkMode.vue';
import FooterLanguageCurrencyNewsLetter from './LanguageCurrencyNewsLetter.vue';
import FooterNewsletter from './Newsletter.vue';
import FooterSimpleCentered from './SimpleCentered.vue';
import FooterSocialLinksOnly from './SocialLinksOnly.vue';

export default {
  title: 'Blocks/Footer',
} as Meta;

export const Light: StoryFn = () => ({
  components: {FooterLight},
  template: `<FooterLight />`,
});

export const Dark: StoryFn = () => ({
  components: {FooterDark},
  template: `<FooterDark />`,
});

export const AutoDarkMode: StoryFn = () => ({
  components: {FooterAutoDarkMode},
  template: `<FooterAutoDarkMode />`,
});

export const LanguageCurrencyNewsLetter: StoryFn = () => ({
  components: {FooterLanguageCurrencyNewsLetter},
  template: `<FooterLanguageCurrencyNewsLetter />`,
});

export const Newsletter: StoryFn = () => ({
  components: {FooterNewsletter},
  template: `<FooterNewsletter />`,
});

export const SimpleCentered: StoryFn = () => ({
  components: {FooterSimpleCentered},
  template: `<FooterSimpleCentered />`,
});

export const SocialLinksOnly: StoryFn = () => ({
  components: {FooterSocialLinksOnly},
  template: `<FooterSocialLinksOnly />`,
});
