import { Node } from './Node';
import { Vector2d } from './types';
export declare const DD: {
    readonly isDragging: boolean;
    justDragged: boolean;
    readonly node: Node<import("./Node").NodeConfig> | undefined;
    _dragElements: Map<number, {
        node: Node;
        startPointerPos: Vector2d;
        offset: Vector2d;
        pointerId?: number | undefined;
        dragStatus: 'ready' | 'dragging' | 'stopped';
    }>;
    _drag(evt: any): void;
    _endDragBefore(evt?: any): void;
    _endDragAfter(evt: any): void;
};
