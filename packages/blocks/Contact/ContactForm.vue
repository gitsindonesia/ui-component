<script setup lang="ts">
import VBtn from '@gits-id/button';
import {VInput} from '@gits-id/forms';
import {Icon} from '@gits-id/icon';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  name: string().required().label('Name'),
  email: string().required().email().label('Email'),
  phone: string().required().label('Phone'),
  message: string().required().label('Message'),
});

const {handleSubmit} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <div class="px-4 xl:px-0 py-5 sm:py-10 bg-primary/10">
    <div class="container mx-auto">
      <div class="flex flex-col sm:flex-row gap-10 sm:gap-4">
        <div class="w-full sm:w-6/12">
          <h3 class="font-semibold text-3xl mb-1">Product by GITS</h3>
          <div class="text-gray-500 mb-3 sm:mb-5">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days.
          </div>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="
                  flex
                  gap-2
                  items-center
                  text-gray-700
                  hover:text-gray-900
                "
              >
                <div
                  class="
                    w-9
                    h-9
                    bg-primary
                    rounded-full
                    grid
                    place-items-center
                  "
                >
                  <Icon
                    name="ri:mail-line"
                    class="fill-current text-white w-5 h-5"
                  />
                </div>
                connect@gits.id
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=+628111309991"
                target="_blank"
                rel="noopener"
                class="
                  flex
                  gap-2
                  items-center
                  text-gray-700
                  hover:text-gray-900
                "
              >
                <div
                  class="
                    w-9
                    h-9
                    bg-secondary
                    rounded-full
                    grid
                    place-items-center
                  "
                >
                  <Icon
                    name="ri:phone-line"
                    class="fill-current text-white w-5 h-5"
                  />
                </div>
                +62-8111-3099-91
              </a>
            </li>
            <li>
              <a
                href="https://gits.id"
                target="_blank"
                rel="noopener"
                class="
                  flex
                  gap-2
                  items-center
                  text-gray-700
                  hover:text-gray-900
                "
              >
                <div
                  class="
                    w-9
                    h-9
                    bg-gray-700
                    rounded-full
                    grid
                    place-items-center
                  "
                >
                  <Icon
                    name="ri:global-line"
                    class="fill-current text-white w-5 h-5"
                  />
                </div>
                gits.id
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-6/12">
          <div class="space-y-1 mb-5">
            <h3 class="font-semibold text-gray-800 text-3xl">Contact Us</h3>
            <p class="text-gray-500">
              Have question? Submit your question on this form bellow and we'll
              be in touch.
            </p>
          </div>

          <form @submit="onSubmit">
            <v-input
              wrapper-class="mb-4"
              name="name"
              label="Name"
              placeholder="Your name"
            />
            <v-input
              wrapper-class="mb-4"
              name="email"
              label="Email"
              placeholder="Your email"
            />
            <v-input
              wrapper-class="mb-4"
              type="tel"
              name="phone"
              label="Phone Number"
              placeholder="Your phone number"
            />
            <v-input
              wrapper-class="mb-4"
              name="message"
              label="Message"
              placeholder="Your message"
            />
            <v-btn type="submit" color="secondary" block>Submit</v-btn>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
