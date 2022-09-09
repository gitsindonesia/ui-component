import {Meta, Story} from '@storybook/vue3';
import Logo from '@gits-id/logo';
import Icon from '@gits-id/icon';
import {VInput} from '@gits-id/forms';
import Button from '@gits-id/button';
import Select from '@gits-id/select';

export default {
  title: 'Snippets/Footer',
  argTypes: {},
  args: {},
} as Meta;

export const Basic: Story = (args) => ({
  components: {Logo, Icon},
  setup() {
    return {args};
  },
  template: `
<footer class="bg-white">
  <div class="container mx-auto p-5 sm:px-0">
    <div class="flex gap-4 flex-col sm:flex-row">
      <div class="sm:w-4/12 space-y-4">
        <Logo img-class="h-10" />
        <p class="text-gray-500">Making the world a better place through technologies</p>
        <div class="flex gap-4 space-between w-full">
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <Icon name="ic:round-facebook" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <Icon name="ri:instagram-line" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <Icon name="ri:youtube-fill" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <Icon name="ri:twitter-fill" class="w-6 h-6" />
          </a>
        </div>
      </div>
      <div class="sm:w-8/12">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
          <div>
            <h3 class="font-medium">Solutions</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Marketing</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Analytics</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Commerce</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium">Support</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Pricing</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Documentation</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Guides</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium">Company</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Blog</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Jobs</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium">Legal</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Claim</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-10 mb-5" />
    <p class="text-center text-gray-500">&copy; 2022-Present GITS Indonesia. All rights reserved.</p>
  </div>
</footer>
  `,
});

export const Dark: Story = (args) => ({
  components: {Logo, Icon},
  setup() {
    return {args};
  },
  template: `
<footer class="bg-gray-800">
  <div class="container mx-auto p-5 xl:px-0">
    <div class="flex gap-4 flex-col sm:flex-row">
      <div class="sm:w-4/12 space-y-4">
        <Logo img-class="h-10" white />
        <p class="text-gray-400">Making the world a better place through technologies</p>
        <div class="flex gap-4 space-between w-full">
          <a href="#" class="text-gray-400 hover:text-gray-200">
            <Icon name="ic:round-facebook" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-200">
            <Icon name="ri:instagram-line" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-200">
            <Icon name="ri:youtube-fill" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-200">
            <Icon name="ri:twitter-fill" class="w-6 h-6" />
          </a>
        </div>
      </div>
      <div class="sm:w-8/12">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
          <div>
            <h3 class="font-medium text-white">Solutions</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Marketing</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Analytics</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Commerce</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-white">Support</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Pricing</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Documentation</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Guides</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-white">Company</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">About</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Blog</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Jobs</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-white">Legal</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Claim</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-gray-200">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-10 mb-5 border-gray-500" />
    <p class="text-center text-gray-500">&copy; 2022-Present GITS Indonesia. All rights reserved.</p>
  </div>
</footer>
  `,
});

export const AutoDarkMode: Story = (args) => ({
  components: {Logo, Icon},
  setup() {
    return {args};
  },
  template: `
<footer class="dark:bg-gray-800 dark:text-gray-200">
  <div class="container mx-auto p-5 xl:px-0">
    <div class="flex gap-4 flex-col sm:flex-row">
      <div class="sm:w-4/12 space-y-4">
        <Logo class="block dark:hidden" img-class="h-10" />
        <Logo class="hidden dark:block" img-class="h-10" white />
        <p class="dark:text-gray-400 text-gray-500">Making the world a better place through technologies</p>
        <div class="flex gap-4 space-between w-full">
          <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <Icon name="ic:round-facebook" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <Icon name="ri:instagram-line" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <Icon name="ri:youtube-fill" class="w-6 h-6" />
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <Icon name="ri:twitter-fill" class="w-6 h-6" />
          </a>
        </div>
      </div>
      <div class="sm:w-8/12">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
          <div>
            <h3 class="font-medium dark:text-white">Solutions</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Marketing</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Analytics</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Commerce</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Support</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Pricing</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Documentation</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Guides</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Company</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">About</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Blog</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Jobs</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Legal</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Claim</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-10 mb-5 dark:border-gray-700" />
    <p class="text-center text-gray-500 dark:text-gray-500">&copy; 2022-Present GITS Indonesia. All rights reserved.</p>
  </div>
</footer>
  `,
});

export const LanguageCurrencyNewsLetter: Story = (args) => ({
  components: {Logo, Icon, Button, VInput, Select},
  setup() {
    return {args};
  },
  template: `
<footer class="dark:bg-gray-800 dark:text-gray-200">
  <div class="container mx-auto p-5 xl:px-0">
    <div class="flex gap-4 flex-col sm:flex-row">
      <div class="sm:w-full">
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-5 w-full">
          <div>
            <h3 class="font-medium dark:text-white">Solutions</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Marketing</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Analytics</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Commerce</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Support</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Pricing</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Documentation</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Guides</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Company</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">About</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Blog</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Jobs</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Legal</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Claim</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Terms</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Language & Currency</h3>
            
            <Select hide-check-icon class="mt-3" placeholder="Language" :items="[{text: 'English', value: 'English'}]" />
            <Select hide-check-icon class="mt-3" placeholder="Currency" :items="[{text: 'IDR', value: 'IDR'}]" />
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-10 mb-5 dark:border-gray-700" />
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
      <div class="space-y-2">
        <h3 class="font-medium">Subscribe to our newletter</h3>
        <p class="text-gray-500 dark:text-gray-400">The latest news, articles, and resources, sent to your inbox weekly.</p>
      </div>
      <div>
        <form class="flex flex-col sm:flex-row gap-3 justify-end">
          <v-input placeholder="Enter your email" />
          <Button color="primary">Subscribe</Button>
        </form>
      </div>
    </div>
    <hr class="mt-5 mb-5 dark:border-gray-700" />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <p class="text-center sm:text-left text-gray-500 dark:text-gray-400">&copy; 2022-Present GITS Indonesia. All rights reserved.</p>
      <div class="flex gap-4 space-between justify-center sm:justify-end w-full">
        <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon name="ic:round-facebook" class="w-6 h-6" />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon name="ri:instagram-line" class="w-6 h-6" />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon name="ri:youtube-fill" class="w-6 h-6" />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon name="ri:twitter-fill" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</footer>
  `,
});

export const Newsletter: Story = (args) => ({
  components: {Logo, Icon, Button, VInput, Select},
  setup() {
    return {args};
  },
  template: `
<footer class="dark:bg-gray-800 dark:text-gray-200">
  <div class="container mx-auto p-5 xl:px-0">
    <div class="flex gap-4 flex-col sm:flex-row">
      <div class="sm:w-full">
        <div class="grid grid-cols-1 sm:grid-cols-6 gap-4 w-full">
          <div>
            <h3 class="font-medium dark:text-white">Solutions</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Marketing</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Analytics</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Commerce</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Support</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Pricing</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Documentation</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Guides</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Company</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">About</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Blog</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Jobs</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium dark:text-white">Legal</h3>
            <ul class="space-y-3 mt-3">
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Claim</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Privacy</a>
              </li>
              <li>
                <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">Terms</a>
              </li>
            </ul>
          </div>
          <div class="col-span-2">
            <div class="space-y-2">
              <h3 class="font-medium">Subscribe to our newletter</h3>
              <p class="text-gray-500 dark:text-gray-400">The latest news, articles, and resources, sent to your inbox weekly.</p>
            </div>
            <form class="flex flex-col sm:flex-row gap-3 mt-4">
              <v-input placeholder="Enter your email" />
              <Button color="primary">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-5 mb-5 dark:border-gray-700" />
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <p class="text-center sm:text-left text-gray-500 dark:text-gray-400">&copy; 2022-Present GITS Indonesia. All rights reserved.</p>
      <div class="flex gap-4 space-between justify-center sm:justify-end w-full">
        <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon name="ic:round-facebook" class="w-6 h-6" />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon name="ri:instagram-line" class="w-6 h-6" />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon name="ri:youtube-fill" class="w-6 h-6" />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon name="ri:twitter-fill" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</footer>
  `,
});

export const SimpleCentered: Story = (args) => ({
  components: {Icon},
  setup() {
    return {args};
  },
  template: `
<footer class="dark:bg-gray-800 dark:text-gray-200">
  <div class="container mx-auto space-y-6 p-5 xl:px-0">
    <div class="flex justify-center gap-6">
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        About
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        Blog
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        Jobs
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        Press
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        Partners
      </a>
    </div>
    <div class="flex gap-4 space-between justify-center">
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <Icon name="ic:round-facebook" class="w-7 h-7" />
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <Icon name="ri:instagram-line" class="w-7 h-7" />
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <Icon name="ri:youtube-fill" class="w-7 h-7" />
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <Icon name="ri:twitter-fill" class="w-7 h-7" />
      </a>
    </div>
    <p class="text-center text-gray-400 dark:text-gray-400">&copy; 2022 GITS Indonesia. All rights reserved.</p>
  </div>
</footer>
  `,
});
export const SocialLinksOnly: Story = (args) => ({
  components: {Icon},
  setup() {
    return {args};
  },
  template: `
<footer class="dark:bg-gray-800 dark:text-gray-200">
  <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 items-center p-5 xl:px-0">
    <p class="text-left text-gray-400 dark:text-gray-400">&copy; 2022 GITS Indonesia. All rights reserved.</p>
    <div class="flex gap-4 space-between justify-end">
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <Icon name="ic:round-facebook" class="w-6 h-6" />
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <Icon name="ri:instagram-line" class="w-6 h-6" />
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <Icon name="ri:youtube-fill" class="w-6 h-6" />
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
        <Icon name="ri:twitter-fill" class="w-6 h-6" />
      </a>
    </div>
  </div>
</footer>
  `,
});
