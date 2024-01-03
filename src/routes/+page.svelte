<script lang="ts">
  import { formats } from "$lib/formats";
  import { onMount } from "svelte";
  import FormatExample from "../components/FormatExample.svelte";
  import FormatGroup from "../components/FormatGroup.svelte";
  import { goCurrentTimeFormat } from "$lib/wasm";

  let examples: string[] = [
    "Jan 02, 2006, 3:04:05 PM",
    "01/02/2006, 3:04 PM",
    "3:04:05 PM MST",
    "01/02/2006",
  ];
  let globalLayout = "Jan 02, 2006, 3:04:05 PM";
  let globalLayoutResult: string = "";

  function addPatternToGlobalLayout(pattern: string) {
    globalLayout += " " + pattern;
  }

  async function loadData() {
    globalLayoutResult = await goCurrentTimeFormat(globalLayout);
  }

  onMount(() => {
    // Run the function every 1000 milliseconds (1 second)
    const intervalId = setInterval(loadData, 1);

    // Cleanup the interval when the component is destroyed
    return () => clearInterval(intervalId);
  });
</script>

<svelte:head>
  <title>go-time.Parse()-interactive</title>
  <meta name="description" content="See how layout work on time packages" />
</svelte:head>

<div class="mx-auto container flex flex-col p-4">
  <h1 class="mb-4 text-center text-5xl text-gray-200 font-black tracking-wider">
    go time interactive layout builder
  </h1>
  <div class="border-b-4 border-gray-800"></div>
  <div
    class="sticky top-0 p-4 space-y-2 border-4 border-t-0 border-gray-800 bg-gray-900 z-10 shadow-lg"
  >
    <h2 class="text-2xl text-gray-200 font-bold select-none cursor-pointer">
      Now
    </h2>
    <div
      class="px-3 py-1 text-center text-3xl text-gray-300 font-medium border-b-2 border-gray-900"
    >
      {globalLayoutResult}
    </div>
    <h2 class="text-2xl text-gray-200 font-bold select-none cursor-pointer">
      Format
    </h2>
    <input
      class="px-5 py-2 w-full bg-gray-800 text-gray-300 text-center text-xl font-mono border-b-2 border-gray-700 shadow-md"
      type="text"
      bind:value={globalLayout}
    />
  </div>

  <div class="p-8">
    <h2 class="text-2xl text-gray-200 font-bold select-none cursor-pointer">
      Examples
    </h2>
    <div class="mb-4 w-full grid grid-cols-2 gap-4">
      {#each examples as example}
        <FormatExample layout={example}></FormatExample>
      {/each}
    </div>

    {#each formats as formatGroup}
      <FormatGroup {addPatternToGlobalLayout} {formatGroup}></FormatGroup>
    {/each}
  </div>
</div>
