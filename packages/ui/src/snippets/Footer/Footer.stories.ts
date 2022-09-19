import {Meta, Story} from '@storybook/vue3';
import FooterLight from './Light.vue';
import FooterDark from './Dark.vue';
import FooterAutoDarkMode from './AutoDarkMode.vue';
import FooterLanguageCurrencyNewsLetter from './LanguageCurrencyNewsLetter.vue';
import FooterNewsletter from './Newsletter.vue';
import FooterSimpleCentered from './SimpleCentered.vue';
import FooterSocialLinksOnly from './SocialLinksOnly.vue';

export default {
  title: 'Snippets/Footer',
} as Meta;

export const Light: Story = () => ({
  components: {FooterLight},
  template: `<FooterLight />`,
});

export const Dark: Story = () => ({
  components: {FooterDark},
  template: `<FooterDark />`,
});

export const AutoDarkMode: Story = () => ({
  components: {FooterAutoDarkMode},
  template: `<FooterAutoDarkMode />`,
});

export const LanguageCurrencyNewsLetter: Story = () => ({
  components: {FooterLanguageCurrencyNewsLetter},
  template: `<FooterLanguageCurrencyNewsLetter />`,
});

export const Newsletter: Story = () => ({
  components: {FooterNewsletter},
  template: `<FooterNewsletter />`,
});

export const SimpleCentered: Story = () => ({
  components: {FooterSimpleCentered},
  template: `<FooterSimpleCentered />`,
});

export const SocialLinksOnly: Story = () => ({
  components: {FooterSocialLinksOnly},
  template: `<FooterSocialLinksOnly />`,
});
