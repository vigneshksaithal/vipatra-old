<script lang="ts">
  import PocketBase from 'pocketbase';

  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  import '$lib/app.css';

  var menu_id: string;
  var storeName: string;
  var items: any = [];

  onMount(async () => {
    menu_id = $page.params.menu_id;
    await get_data();
  });

  async function get_data() {
    const pb = new PocketBase('http://143.110.242.70');

    const record = await pb
      .collection('menu')
      .getFirstListItem('store_name="The Fries Kingdom"');

    storeName = record.id;
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Vipatra Menu" />
  <nav class="bg-green-400 mx-auto py-3">
    <div class="text-center text-sm text-white">vipatra | menu</div>
  </nav>
</svelte:head>

<section class="mx-auto max-w-lg p-4">
  <div
    class="bg-white border-2 border-slate-100 max-w-lg rounded-lg w-full shadow-sm"
  >
    <div class="py-4 bg-white rounded-t-lg">
      <h3 class="text-lg font-bold ml-4">
        Store: {storeName}
      </h3>
    </div>
    {#each items as item, index}
      <div
        class="grid grid-cols-6 gap-4 text-sm px-5 py-3 justify-items-stretch border-b-2 border-slate-100"
      >
        <span class="col-span-5 tracking-wide">{++index}. {item.item}</span>
        <span class="col-span-1 text-base font-semibold text-right"
          >₹{item.price}</span
        >
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  :root {
    @apply bg-gray-50;
  }
</style>
