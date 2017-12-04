var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import { isBoolean, isString } from 'util';
/**
 * Sort array pipe
 *
 * This is currently used with the pin feature of the list component
 *
 * Example:
 * <div *ngFor="let item of (items | sortPin: 'name': true)">
 */
var SortArrayPipe = /** @class */ (function () {
    function SortArrayPipe() {
    }
    /**
     * Sort array by property
     *
     * @param {Array<any>} arr Array to sort
     * @param prop Property name to sort by
     * @param {boolean} descending True to sort descending
     * @returns {any} Returns sorted array
     */
    SortArrayPipe.prototype.transform = function (arr, prop, descending) {
        if (descending === void 0) { descending = false; }
        if (arr === undefined) {
            return;
        }
        var m = descending ? -1 : 1;
        return arr.sort(function (a, b) {
            var x = a[prop];
            var y = b[prop];
            // Resolve undefined values for more predicable behavior
            if (x === undefined && isBoolean(y)) {
                x = false;
            }
            else if (x === undefined && isString(y)) {
                x = '';
            }
            if (y === undefined && isBoolean(x)) {
                y = false;
            }
            else if (y === undefined && isString(x)) {
                y = '';
            }
            return (x === y) ? 0 : (x < y) ? -1 * m : 1 * m;
        });
    };
    SortArrayPipe = __decorate([
        Pipe({ name: 'sortArray' })
    ], SortArrayPipe);
    return SortArrayPipe;
}());
export { SortArrayPipe };
//# sourceMappingURL=sort-array.pipe.js.map