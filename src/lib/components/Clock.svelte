<script lang="ts">
    import { Temporal } from "@js-temporal/polyfill";

    let date = Temporal.Now.plainDateISO().toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    let time = $state(Temporal.Now.plainTimeISO());

    $effect(() => {
        const interval = setInterval(
            () => (time = Temporal.Now.plainTimeISO()),
            1000,
        );

        return () => clearInterval(interval);
    });

    let { class: CLASS = "" }: { class?: string } = $props();
</script>

<div class={`${CLASS} flex flex-col justify-center items-center w-2xl`}>
    <p class="text-[15rem]">
        {time.toLocaleString("en-GB", {
            hour: "numeric",
            minute: "numeric",
        })}
    </p>
    <p class="text-6xl">{date}</p>
</div>
