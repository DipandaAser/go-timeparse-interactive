<script lang="ts">
  import LayoutRender from "./LayoutRender.svelte";
  export let layout: string;
</script>

<div
  class="transition-all duration-150 flex flex-col items-center justify-center px-4 py-2 hover:bg-gray-800 border-2 border-gray-800 shadow-sm hover:shadow cursor-pointer"
>
  <div>
    <div>
      <span class="font-medium text-gray-200 mr-2">Layout: </span>
      <span class="font-medium font-mono text-gray-400 tracking-tighter"
        >{layout}
      </span>
    </div>
    <div>
      <span class="font-medium text-gray-200 mr-2">Current: </span>
      <span class="font-medium text-gray-400"><LayoutRender {layout} /> </span>
    </div>
  </div>
</div>
