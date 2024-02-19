import { FC, MouseEvent } from 'react';
export declare type MapMouseEventDataset = {
    name: string;
};
export declare type MapCustomizationOption = {
    fill?: string;
};
export declare type MapCustomizations = Record<string, MapCustomizationOption>;
declare type MapProps = {
    onClick?: (stateAbbrev: string) => void;
    onClickEvent?: (event: MouseEvent<SVGPathElement>) => void;
    onMouseOver?: (stateAbbrev: string) => void;
    onMouseOverEvent?: (event: MouseEvent<SVGPathElement>) => void;
    width?: number;
    height?: number;
    title?: string;
    defaultFill?: string;
    customize?: MapCustomizations;
};
export declare const USAMap: FC<MapProps>;
export {};
