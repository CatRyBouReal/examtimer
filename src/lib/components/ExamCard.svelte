<script lang="ts">
    import { getEditing, startTime } from "$lib/state.svelte";
    import { Temporal } from "@js-temporal/polyfill";

    let examName = $state("");
    let hours: number = $state(0);
    let minutes: number = $state(0);

    let duration = $derived(Temporal.Duration.from({ hours, minutes }));
    let endTime = $derived.by(() => {
        if (startTime.time === null) return null;
        return startTime.time.add(duration);
    });

    let { class: CLASS = "" } = $props();
</script>

<div class={CLASS}>
    {#if getEditing()}
        <input
            type="text"
            bind:value={examName}
            placeholder="Enter exam title"
            class="border p-2 w-64"
        />
        <input
            type="number"
            bind:value={hours}
            placeholder="HH"
            class="w-15 text-center border p-2"
        />
        <input
            type="number"
            bind:value={minutes}
            placeholder="MM"
            class="w-15 text-center border p-2"
        />
    {:else}
        <h1 class="text-3xl">{examName}</h1>
        <div class="flex justify-between">
            <p class="text-lg">
                {duration.toLocaleString("en-GB", { style: "narrow" })}
            </p>
            <p class="text-lg">
                {#if endTime === null}
                    ______________
                {:else}
                    {endTime.toLocaleString("en-GB", {
                        hour: "numeric",
                        minute: "numeric",
                    })}
                {/if}
            </p>
        </div>
    {/if}
</div>
