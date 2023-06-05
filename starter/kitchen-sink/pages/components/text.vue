<script setup lang="ts"></script>

<template>
  <PageHeader title="Text" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VText variant="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <!-- default -->
        <VText> Lorem ipsum dolor sit amet, consectetur adipiscing elit </VText>
        <VText variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
      </div>
    </VCard>
    <VCard title="Font Weight">
      <div>
        <VText font-weight="thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText font-weight="extrathin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText font-weight="normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText font-weight="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText font-weight="semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText font-weight="extrabold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText font-weight="black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
      </div>
    </VCard>
    <VCard title="Colors">
      <div>
        <VText color="primary" variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText color="secondary" variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText color="info" variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText color="warning" variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText color="error" variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText color="success" variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <!-- design token color -->
        <VText color="rose.700" variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <!-- custom color -->
        <VText color="#FF87A0" variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <VText color="lightblue" variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
        <!-- unspecify color -->
        <VText variant="display-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </VText>
      </div>
    </VCard>
  </div>
</template>
