import { Temporal } from "@js-temporal/polyfill";

let editing = $state(true);

export function getEditing() {
    return editing;
};

export function toggleEditing() {
    editing = !editing;
};

export class Time {
    hours = $state(0);
    minutes = $state(0);
    #time = $derived.by(() => {
        if (this.hours === null || this.minutes === null) {
            return null;
        };
        return new Temporal.PlainTime(this.hours, this.minutes);
    });

    get time() {
        return this.#time
    };
}

export const startTime = new Time();