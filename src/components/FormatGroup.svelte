<script lang="ts">
  import type { FormatGroup } from "$lib/formats";
  import LayoutRender from "./LayoutRender.svelte";
  export let formatGroup: FormatGroup;
  export let addPatternToGlobalLayout: (pattern: string) => void;
  let expanded = false;

  function toggleExpanded() {
    expanded = !expanded;
  }
</script>

<div>
  <button
    type="button"
    on:click={toggleExpanded}
    class="flex items-center mt-2 mb-2 text-xl text-gray-400 font-bold select-none cursor-pointer"
  >
    <div
      class="transform transition-all duration-300 w-3 h-3 mr-3 grid fill-current {expanded
        ? 'rotate-90'
        : ''}"
    >
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
        ><g
          ><g
            ><polygon
              points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 		"
            ></polygon></g
          ></g
        ></svg
      >
    </div>
    <div class="text-gray-200">{formatGroup.name}</div>
  </button>
</div>

{#if expanded}
  <div class="collapse collapse-arrow bg-neutral">
    <input
      type="radio"
      name="my-accordion-{formatGroup.name}"
      checked={expanded ? true : false}
    />
    <div class="collapse-content">
      <div class="overflow-x-auto">
        <table class="table text-center">
          <!-- head -->
          <thead>
            <tr>
              <th>Layout</th>
              <th>Examples</th>
              <th>Currrent</th>
            </tr>
          </thead>
          <tbody>
            {#each formatGroup.layouts as layout}
              <!-- row  -->
              <tr
                on:click={() => {
                  addPatternToGlobalLayout(layout.layout);
                }}
                class="hover"
              >
                <td>{layout.layout}</td>
                <td>{layout.examples.join(", ")}</td>
                <td><LayoutRender layout={layout.layout} /></td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
{/if}

<style>
  .collapse input {
    min-height: 10px;
  }

  .collapse-title {
    display: none;
  }
</style>
