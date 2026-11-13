<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
import { Link } from '@adonisjs/inertia/vue'
import Logo from '~/components/logo.vue'
import FlashToasts from '~/components/flash_toasts.vue'
import ThemeToggle from '~/components/theme_toggle.vue'

const page = usePage()
</script>

<template>
  <header class="header header--floating">
    <div class="header__inner">
      <Logo :size="28" />
      <div class="header__right">
        <ThemeToggle />
        <template v-if="page.props.user">
          <Link route="dashboard" class="btn btn--primary btn--sm">Dashboard</Link>
        </template>
        <template v-else>
        </template>
      </div>
    </div>
  </header>
  <slot />
  <FlashToasts />
</template>
