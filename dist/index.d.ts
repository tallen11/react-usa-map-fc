import { FC, MouseEvent } from 'react';

declare type MapMouseEventDataset = {
    name: string;
};
declare type MapCustomizationOption = {
    fill?: string;
};
declare type MapCustomizations = Record<string, MapCustomizationOption>;
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
declare const USAMap: FC<MapProps>;

export { MapCustomizationOption, MapCustomizations, MapMouseEventDataset, USAMap };
