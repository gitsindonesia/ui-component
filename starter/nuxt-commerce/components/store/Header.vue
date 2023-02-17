<script setup lang="ts">
import {ref} from 'vue';

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            {name: 'Tops', href: '#'},
            {name: 'Dresses', href: '#'},
            {name: 'Pants', href: '#'},
            {name: 'Denim', href: '#'},
            {name: 'Sweaters', href: '#'},
            {name: 'T-Shirts', href: '#'},
            {name: 'Jackets', href: '#'},
            {name: 'Activewear', href: '#'},
            {name: 'Browse All', href: '#'},
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            {name: 'Watches', href: '#'},
            {name: 'Wallets', href: '#'},
            {name: 'Bags', href: '#'},
            {name: 'Sunglasses', href: '#'},
            {name: 'Hats', href: '#'},
            {name: 'Belts', href: '#'},
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            {name: 'Full Nelson', href: '#'},
            {name: 'My Way', href: '#'},
            {name: 'Re-Arranged', href: '#'},
            {name: 'Counterfeit', href: '#'},
            {name: 'Significant Other', href: '#'},
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            {name: 'Tops', href: '#'},
            {name: 'Pants', href: '#'},
            {name: 'Sweaters', href: '#'},
            {name: 'T-Shirts', href: '#'},
            {name: 'Jackets', href: '#'},
            {name: 'Activewear', href: '#'},
            {name: 'Browse All', href: '#'},
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            {name: 'Watches', href: '#'},
            {name: 'Wallets', href: '#'},
            {name: 'Bags', href: '#'},
            {name: 'Sunglasses', href: '#'},
            {name: 'Hats', href: '#'},
            {name: 'Belts', href: '#'},
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            {name: 'Re-Arranged', href: '#'},
            {name: 'Counterfeit', href: '#'},
            {name: 'Full Nelson', href: '#'},
            {name: 'My Way', href: '#'},
          ],
        },
      ],
    },
  ],
  pages: [
    {name: 'Company', href: '#'},
    {name: 'Stores', href: '/products'},
  ],
};

const open = ref(false);
</script>

<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <StoreMobileMenu
      :navigation="navigation"
      :open="open"
      @close="open = false"
    />
    <header class="relative bg-white">
      <StoreBanner />
      <StoreDesktopNavigation
        :navigation="navigation"
        @click:menu="open = true"
      />
    </header>
  </div>
</template>
