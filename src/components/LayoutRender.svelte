<script lang="ts">
  import { goCurrentTimeFormat } from "$lib/wasm";
  import { onMount } from "svelte";

  export let layout: string;

  let layoutResult: string = "Loading...";

  async function loadData() {
    goCurrentTimeFormat(layout)
      .then((res) => {
        layoutResult = res;
      })
      .catch((err) => {
        layoutResult = "Loading...";
      });
  }

  onMount(() => {
    // Run the function every 1000 milliseconds (1 second)
    const intervalId = setInterval(loadData, 1);

    // Cleanup the interval when the component is destroyed
    return () => clearInterval(intervalId);
  });
</script>

{layoutResult}
