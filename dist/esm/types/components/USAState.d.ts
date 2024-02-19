import React, { FC } from 'react';
export declare type StateProps = {
    dimensions: string;
    state: string;
    onClickState: React.MouseEventHandler<SVGPathElement>;
    onMouseEnter?: React.MouseEventHandler<SVGPathElement>;
    fill: string;
    stateName: string;
};
export declare const USAState: FC<StateProps>;
