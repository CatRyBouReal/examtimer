<script lang="ts">
    import ExamCard from "./ExamCard.svelte";

    let examCount = $state({ length: 1 });

    let { class: CLASS = "" } = $props();
</script>

<div class={CLASS}>
    {#each examCount as _}
        <ExamCard class="pb-3" />
    {/each}
    <button class="border p-2" onclick={() => examCount.length++}>
        + Add Exam
    </button>
</div>
