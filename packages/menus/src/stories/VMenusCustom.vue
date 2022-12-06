<script setup lang="ts">
import VAppBar from '@gits-id/app-bar';
import VMenus from '../VMenus.vue';
import VMenusItem from '../VMenusItem.vue';
</script>

<template>
  <div class="h-screen">
    <VAppBar shadow color="primary">
      <VMenus
        label="Account"
        items-class="!backdrop-blur-2xl !bg-white/30"
        :items-style="{
          '--v-menus-item-hover-bg-color': '#28A0F6',
          '--v-menus-item-hover-text-color': 'white',
        }"
      >
        <template #items>
          <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
          <VMenusItem prepend-icon="ri:settings-4-line">
            Preferences
          </VMenusItem>
          <VMenusItem divider />
          <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
        </template>
      </VMenus>
    </VAppBar>
    <div class="p-6">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
        justo turpis. Nullam tempor semper purus vel ullamcorper. In hac
        habitasse platea dictumst. Nullam ornare erat aliquet ex feugiat, in
        lobortis augue tincidunt. Nulla viverra risus a malesuada tristique.
        Mauris venenatis libero leo, eget tincidunt justo luctus vel. Nullam et
        cursus dolor. Etiam eget metus at dui sodales malesuada in a libero.
        Quisque eleifend pretium eros at luctus. Curabitur hendrerit tortor id
        enim viverra ullamcorper. In ac velit elit. Donec suscipit ligula id
        elit lobortis, at ullamcorper leo molestie. Donec pulvinar porta tortor,
        nec semper metus tincidunt non. Sed pulvinar sapien in sapien
        scelerisque blandit. Fusce egestas nunc et egestas rutrum. Vestibulum
        interdum eros sed massa gravida interdum. Morbi libero mauris, viverra
        vitae iaculis maximus, bibendum non mi. Integer viverra placerat neque
        vulputate gravida. Duis luctus facilisis euismod. In nec pulvinar odio,
        sed ullamcorper felis. Cras hendrerit enim et quam commodo, eu congue
        ligula cursus. Suspendisse mi sapien, aliquet ac leo in, tristique
        euismod augue. Curabitur congue finibus nulla ac suscipit. Aenean eget
        ex viverra, fringilla ex fermentum, porta nunc. In hac habitasse platea
        dictumst. Phasellus facilisis turpis nec interdum pulvinar. Fusce semper
        vestibulum nibh, et imperdiet nunc laoreet tristique. Nullam diam dui,
        dignissim at aliquam vel, aliquet ut nunc. In molestie sapien eros, nec
        tempor sem scelerisque eget. Donec et vehicula justo, et pharetra diam.
        Integer ullamcorper ante felis, ac gravida leo luctus quis. Morbi
        convallis velit nisi, non ultrices felis placerat nec. In tempus eget
        risus sit amet bibendum. Phasellus at nisl fermentum, posuere diam
        porta, pulvinar nisl. Fusce ut nulla at mi sodales porttitor. Sed ante
        nisl, euismod egestas egestas a, porttitor ac nisl. Vivamus quis metus
        at nibh rhoncus pellentesque. Quisque vitae turpis bibendum, lacinia leo
        a, volutpat turpis. Aenean a aliquet orci. Morbi auctor, massa id
        iaculis elementum, mi eros congue ipsum, in tristique libero dui quis
        urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Pellentesque at auctor ante. Nunc nec blandit
        diam. Cras ac ipsum in quam mollis fringilla. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nulla et viverra augue, sed
        scelerisque urna. Nunc id mi velit. Integer et orci massa. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Maecenas vulputate id erat vel sodales. Nulla in mauris eu tortor
        pharetra fermentum ut quis nisi. Nullam ut varius nisl. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Sed sit amet arcu quis magna blandit laoreet. Quisque viverra a
        ante sed tincidunt. Vestibulum et finibus mi, vitae convallis tortor.
        Sed placerat dolor ornare nibh aliquet commodo. Suspendisse potenti.
      </p>
    </div>
  </div>
</template>

<style>
:root {
  --v-menus-popper-border: none;
}
</style>
