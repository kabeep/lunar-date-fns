export interface LunarDate {
    /** Lunar year */
    year: number;
    /** Lunar month */
    month: number;
    /** Lunar day */
    day: number;
    /** Lunar leap month flag */
    isLeapMonth: boolean;
}

export type Optionalize<T, K extends keyof T> = Omit<T, K> & { [P in K]?: T[P] };
