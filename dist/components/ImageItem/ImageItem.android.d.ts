/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from "react";
import { ImageSource } from "../../@types";
declare type Props = {
    imageSrc: ImageSource;
    onRequestClose: () => void;
    onZoom: (isZoomed: boolean) => void;
    onLongPress: (image: ImageSource) => void;
    onPress: (image: ImageSource) => void;
    delayLongPress: number;
    swipeToCloseEnabled?: boolean;
    doubleTapToZoomEnabled?: boolean;
    currentImageIndex: number;
};
declare const _default: React.MemoExoticComponent<({ imageSrc, onZoom, onRequestClose, onLongPress, onPress, delayLongPress, swipeToCloseEnabled, doubleTapToZoomEnabled, currentImageIndex, }: Props) => JSX.Element>;
export default _default;
