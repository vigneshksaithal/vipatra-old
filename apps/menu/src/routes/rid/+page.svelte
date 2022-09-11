<script lang="ts">
  var items: any = [];
  var storeName: string = '';
  var data = fetch(
    'https://firestore.googleapis.com/v1/projects/vipatra-menu/databases/(default)/documents/menu/5czaH1garwQKWrrKlPZz'
  )
    .then((response) => response.json())
    .then((data) => {
      items = data.fields.items['arrayValue'].values.map((item: any) => {
        return {
          item: item.mapValue.fields.item.stringValue,
          price: item.mapValue.fields.price.integerValue,
        };
      });
      items = items;
      storeName = data.fields.store_name['stringValue'];
    });
</script>

{items.store_name}

{#await data}
  <p>...loading</p>
{:then data}
  {storeName}
  {#each items as item}
    ss
    <p>{item.item}</p>
  {/each}
{/await}
