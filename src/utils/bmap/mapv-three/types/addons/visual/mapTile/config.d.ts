export namespace resourceConf {
    const root: string;
    const jsonWorkerPath: string;
}
export namespace defaultStyle {
    namespace directional {
        const color: string;
        const intensity: number;
        const offset: number[];
        const visible: boolean;
    }
    namespace ambientLight {
        const color_1: string;
        export { color_1 as color };
        const intensity_1: number;
        export { intensity_1 as intensity };
        const offset_1: number[];
        export { offset_1 as offset };
        const visible_1: boolean;
        export { visible_1 as visible };
    }
    namespace pointlight {
        const color_2: string;
        export { color_2 as color };
        const intensity_2: number;
        export { intensity_2 as intensity };
        export const distance: number;
        const offset_2: number[];
        export { offset_2 as offset };
        const visible_2: boolean;
        export { visible_2 as visible };
    }
    namespace back {
        export const type: number;
        const color_3: string;
        export { color_3 as color };
        export const opacity: number;
        const offset_3: number[];
        export { offset_3 as offset };
        const visible_3: boolean;
        export { visible_3 as visible };
    }
    namespace plane {
        const color_4: string;
        export { color_4 as color };
        const opacity_1: number;
        export { opacity_1 as opacity };
        const offset_4: number[];
        export { offset_4 as offset };
        const visible_4: boolean;
        export { visible_4 as visible };
    }
    namespace crosswalk {
        const color_5: string;
        export { color_5 as color };
        const opacity_2: number;
        export { opacity_2 as opacity };
        const offset_5: number[];
        export { offset_5 as offset };
        const visible_5: boolean;
        export { visible_5 as visible };
    }
    namespace road {
        const color_6: string;
        export { color_6 as color };
        const opacity_3: number;
        export { opacity_3 as opacity };
        const offset_6: number[];
        export { offset_6 as offset };
        const visible_6: boolean;
        export { visible_6 as visible };
    }
    namespace arrow {
        const color_7: string;
        export { color_7 as color };
        const opacity_4: number;
        export { opacity_4 as opacity };
        const offset_7: number[];
        export { offset_7 as offset };
        const visible_7: boolean;
        export { visible_7 as visible };
    }
    namespace laneSolidWhite {
        const color_8: string;
        export { color_8 as color };
        const opacity_5: number;
        export { opacity_5 as opacity };
        export const width: number;
        const offset_8: number[];
        export { offset_8 as offset };
        const visible_8: boolean;
        export { visible_8 as visible };
    }
    namespace laneDottedWhite {
        const color_9: string;
        export { color_9 as color };
        const opacity_6: number;
        export { opacity_6 as opacity };
        const width_1: number;
        export { width_1 as width };
        export const dashSize: number;
        export const gapSize: number;
        const offset_9: number[];
        export { offset_9 as offset };
        const visible_9: boolean;
        export { visible_9 as visible };
    }
    namespace laneDottedYellow {
        const color_10: string;
        export { color_10 as color };
        const opacity_7: number;
        export { opacity_7 as opacity };
        const width_2: number;
        export { width_2 as width };
        const dashSize_1: number;
        export { dashSize_1 as dashSize };
        const gapSize_1: number;
        export { gapSize_1 as gapSize };
        const offset_10: number[];
        export { offset_10 as offset };
        const visible_10: boolean;
        export { visible_10 as visible };
    }
    namespace laneSolidYellow {
        const color_11: string;
        export { color_11 as color };
        const opacity_8: number;
        export { opacity_8 as opacity };
        const width_3: number;
        export { width_3 as width };
        const offset_11: number[];
        export { offset_11 as offset };
        const visible_11: boolean;
        export { visible_11 as visible };
    }
    namespace roadEdge {
        const color_12: string;
        export { color_12 as color };
        const opacity_9: number;
        export { opacity_9 as opacity };
        const offset_12: number[];
        export { offset_12 as offset };
        const visible_12: boolean;
        export { visible_12 as visible };
    }
    namespace stopLine {
        const color_13: string;
        export { color_13 as color };
        const opacity_10: number;
        export { opacity_10 as opacity };
        const width_4: number;
        export { width_4 as width };
        const offset_13: number[];
        export { offset_13 as offset };
        const visible_13: boolean;
        export { visible_13 as visible };
    }
    namespace river {
        const color_14: string;
        export { color_14 as color };
        const opacity_11: number;
        export { opacity_11 as opacity };
        const offset_14: number[];
        export { offset_14 as offset };
        const visible_14: boolean;
        export { visible_14 as visible };
        const type_1: number;
        export { type_1 as type };
    }
    namespace grass {
        const color_15: string;
        export { color_15 as color };
        const opacity_12: number;
        export { opacity_12 as opacity };
        const offset_15: number[];
        export { offset_15 as offset };
        const visible_15: boolean;
        export { visible_15 as visible };
    }
    namespace linkTownshipRoad {
        const color_16: string;
        export { color_16 as color };
        const opacity_13: number;
        export { opacity_13 as opacity };
        const width_5: number;
        export { width_5 as width };
        const offset_16: number[];
        export { offset_16 as offset };
        const visible_16: boolean;
        export { visible_16 as visible };
    }
    namespace linkHightway {
        const color_17: string;
        export { color_17 as color };
        const opacity_14: number;
        export { opacity_14 as opacity };
        const width_6: number;
        export { width_6 as width };
        const offset_17: number[];
        export { offset_17 as offset };
        const visible_17: boolean;
        export { visible_17 as visible };
    }
    namespace linkExpressway {
        const color_18: string;
        export { color_18 as color };
        const opacity_15: number;
        export { opacity_15 as opacity };
        const width_7: number;
        export { width_7 as width };
        const offset_18: number[];
        export { offset_18 as offset };
        const visible_18: boolean;
        export { visible_18 as visible };
    }
    namespace linkNPRoad {
        const color_19: string;
        export { color_19 as color };
        const opacity_16: number;
        export { opacity_16 as opacity };
        const width_8: number;
        export { width_8 as width };
        const offset_19: number[];
        export { offset_19 as offset };
        const visible_19: boolean;
        export { visible_19 as visible };
    }
    namespace linkCountyRoad {
        const color_20: string;
        export { color_20 as color };
        const opacity_17: number;
        export { opacity_17 as opacity };
        const width_9: number;
        export { width_9 as width };
        const offset_20: number[];
        export { offset_20 as offset };
        const visible_20: boolean;
        export { visible_20 as visible };
    }
    namespace linkOther {
        const color_21: string;
        export { color_21 as color };
        const opacity_18: number;
        export { opacity_18 as opacity };
        const width_10: number;
        export { width_10 as width };
        const offset_21: number[];
        export { offset_21 as offset };
        const visible_21: boolean;
        export { visible_21 as visible };
    }
    namespace region {
        const color_22: string;
        export { color_22 as color };
        const opacity_19: number;
        export { opacity_19 as opacity };
        const width_11: number;
        export { width_11 as width };
        const offset_22: number[];
        export { offset_22 as offset };
        const visible_22: boolean;
        export { visible_22 as visible };
    }
    namespace township {
        const color_23: string;
        export { color_23 as color };
        const opacity_20: number;
        export { opacity_20 as opacity };
        const width_12: number;
        export { width_12 as width };
        const offset_23: number[];
        export { offset_23 as offset };
        const visible_23: boolean;
        export { visible_23 as visible };
    }
    namespace range {
        const color_24: string;
        export { color_24 as color };
        const opacity_21: number;
        export { opacity_21 as opacity };
        const width_13: number;
        export { width_13 as width };
        const offset_24: number[];
        export { offset_24 as offset };
        const visible_24: boolean;
        export { visible_24 as visible };
    }
    namespace building {
        const color_25: string;
        export { color_25 as color };
        export const topColor: string;
        const opacity_22: number;
        export { opacity_22 as opacity };
        export const outline: boolean;
        export const outlineColor: string;
        export const transprent: boolean;
        const offset_25: number[];
        export { offset_25 as offset };
        const visible_25: boolean;
        export { visible_25 as visible };
        export const scale: number[];
        export const gradient: boolean;
        export const isMaps: boolean;
    }
    namespace building2 {
        const color_26: string;
        export { color_26 as color };
        const topColor_1: string;
        export { topColor_1 as topColor };
        const opacity_23: number;
        export { opacity_23 as opacity };
        const outline_1: boolean;
        export { outline_1 as outline };
        const outlineColor_1: string;
        export { outlineColor_1 as outlineColor };
        const transprent_1: boolean;
        export { transprent_1 as transprent };
        const offset_26: number[];
        export { offset_26 as offset };
        const visible_26: boolean;
        export { visible_26 as visible };
        const scale_1: number[];
        export { scale_1 as scale };
        const gradient_1: boolean;
        export { gradient_1 as gradient };
    }
    namespace building3 {
        const color_27: string;
        export { color_27 as color };
        const topColor_2: string;
        export { topColor_2 as topColor };
        const opacity_24: number;
        export { opacity_24 as opacity };
        const outline_2: boolean;
        export { outline_2 as outline };
        const outlineColor_2: string;
        export { outlineColor_2 as outlineColor };
        const transprent_2: boolean;
        export { transprent_2 as transprent };
        const offset_27: number[];
        export { offset_27 as offset };
        const visible_27: boolean;
        export { visible_27 as visible };
        const scale_2: number[];
        export { scale_2 as scale };
        const gradient_2: boolean;
        export { gradient_2 as gradient };
    }
    namespace mountain {
        const color_28: string;
        export { color_28 as color };
        const width_14: number;
        export { width_14 as width };
        const visible_28: boolean;
        export { visible_28 as visible };
    }
    namespace other {
        const color_29: string;
        export { color_29 as color };
        const offset_28: number[];
        export { offset_28 as offset };
        const visible_29: boolean;
        export { visible_29 as visible };
    }
    namespace greenBelt {
        const color_30: string;
        export { color_30 as color };
        const offset_29: number[];
        export { offset_29 as offset };
        const visible_30: boolean;
        export { visible_30 as visible };
    }
    namespace underpass {
        const color_31: string;
        export { color_31 as color };
        const offset_30: number[];
        export { offset_30 as offset };
        const visible_31: boolean;
        export { visible_31 as visible };
    }
}
