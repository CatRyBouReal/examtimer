<script>
    import Clock from "$lib/components/Clock.svelte";
    import ExamList from "$lib/components/ExamList.svelte";
    import { getEditing, startTime, toggleEditing } from "$lib/state.svelte";

    let isFullscreen = $state(false);

    function toggleFullScreen() {
        if (document.fullscreenElement === null) {
            document.documentElement.requestFullscreen();
            isFullscreen = true;
        } else {
            document.exitFullscreen();
            isFullscreen = false;
        }
    }
</script>

<div class="h-screen p-5 flex flex-col">
    <div class="flex justify-between pb-5 mb-5 border-b">
        <button onclick={toggleEditing} class="border p-2">
            {#if getEditing()}
                Save
            {:else}
                Edit
            {/if}
        </button>
        <label>
            Start time:
            <input
                type="number"
                bind:value={startTime.hours}
                placeholder="HH"
                class="w-15 text-center border p-2"
            />
            :
            <input
                type="number"
                bind:value={startTime.minutes}
                placeholder="MM"
                class="w-15 text-center border p-2"
            />
        </label>
        <button class="border p-2" onclick={toggleFullScreen}>
            {#if isFullscreen}
                Exit Fullscreen
            {:else}
                Enter Fullscreen
            {/if}
        </button>
    </div>
    <div class="flex flex-1 flex-row-reverse">
        <Clock class="pl-2 border-l" />
        <ExamList class="flex-1 pr-2" />
    </div>
</div>
