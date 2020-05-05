/**
 * Gets coordinates from the mouse event
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

/**
 *
 *
 * @param event
 * @return {{w: number, x: number, h: number, y: number}}
 */
export default function (event) {
    event = event || window.event; // IE-ism
    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)

    const eventDoc = (event.target && event.target.ownerDocument) || document;
    const doc = eventDoc.documentElement;
    const  body = eventDoc.body;
    if (event.pageX == null && event.clientX != null) {
        event.pageX = event.clientX +
            ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
            ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
        event.pageY = event.clientY +
            ((doc && doc.scrollTop)  || (body && body.scrollTop)  || 0) -
            ((doc && doc.clientTop)  || (body && body.clientTop)  || 0 );
    }

    return {
        x: event.pageX,
        y: event.pageY,
        w: document.documentElement.clientWidth - event.pageX,
        h: document.documentElement.clientHeight - event.pageY
    };
}