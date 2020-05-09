(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@flights/flight-lib', ['exports', '@angular/core', '@angular/router', '@angular/common'], factory) :
    (global = global || self, factory((global.flights = global.flights || {}, global.flights['flight-lib'] = {}), global.ng.core, global.ng.router, global.ng.common));
}(this, (function (exports, core, router, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var _c0 = ["vc"];
    var FlightComponent = /** @class */ (function () {
        function FlightComponent(injector, cfr) {
            this.injector = injector;
            this.cfr = cfr;
        }
        FlightComponent.prototype.search = function () {
            alert('Not implemented for this demo!');
        };
        FlightComponent.prototype.terms = function () {
            return __awaiter(this, void 0, void 0, function () {
                var comp, factory;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.resolve().then(function () { return lazy_component; }).then(function (m) { return m.LazyComponent; })];
                        case 1:
                            comp = _a.sent();
                            factory = this.cfr.resolveComponentFactory(comp);
                            this.viewContainer.createComponent(factory, null, this.injector);
                            return [2 /*return*/];
                    }
                });
            });
        };
        FlightComponent.ɵfac = function FlightComponent_Factory(t) { return new (t || FlightComponent)(core.ɵɵdirectiveInject(core.Injector), core.ɵɵdirectiveInject(core.ComponentFactoryResolver)); };
        FlightComponent.ɵcmp = core.ɵɵdefineComponent({ type: FlightComponent, selectors: [["flights-flight"]], viewQuery: function FlightComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.viewContainer = _t.first);
            } }, decls: 15, vars: 0, consts: [["id", "container"], ["type", "text", "placeholder", "From"], ["type", "text", "placeholder", "To"], [3, "click"], ["vc", ""]], template: function FlightComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "h1");
                core.ɵɵtext(2, "Flights");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "div");
                core.ɵɵelement(4, "input", 1);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "div");
                core.ɵɵelement(6, "input", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "div");
                core.ɵɵelementStart(8, "button", 3);
                core.ɵɵlistener("click", function FlightComponent_Template_button_click_8_listener() { return ctx.search(); });
                core.ɵɵtext(9, "Search");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(10, "button", 3);
                core.ɵɵlistener("click", function FlightComponent_Template_button_click_10_listener() { return ctx.terms(); });
                core.ɵɵtext(11, "Terms...");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(12, "div");
                core.ɵɵelementContainer(13, null, 4);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } }, styles: ["input[type=text][_ngcontent-%COMP%]{width:100%;max-width:400px;box-sizing:border-box;border:none;border-bottom:2px solid silver;font-size:20px;margin-bottom:20px;margin-top:20px}button[_ngcontent-%COMP%]{border:2px solid silver;background-color:#fff;font-size:16px;padding:10px 40px;border-radius:10px;margin-bottom:20px;margin-top:20px;cursor:pointer}button[_ngcontent-%COMP%]:active{border-color:#000}#container[_ngcontent-%COMP%]{border:2px dashed #8b0000;padding:20px}"] });
        return FlightComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FlightComponent, [{
            type: core.Component,
            args: [{
                    selector: 'flights-flight',
                    templateUrl: './flight.component.html',
                    styleUrls: ['./flight.component.css']
                }]
        }], function () { return [{ type: core.Injector }, { type: core.ComponentFactoryResolver }]; }, { viewContainer: [{
                type: core.ViewChild,
                args: ['vc', { read: core.ViewContainerRef, static: true }]
            }] }); })();

    var LazyComponent = /** @class */ (function () {
        function LazyComponent() {
            this.info = Math.round(Math.random() * 10000);
        }
        LazyComponent.prototype.ngOnInit = function () {
        };
        LazyComponent.ɵfac = function LazyComponent_Factory(t) { return new (t || LazyComponent)(); };
        LazyComponent.ɵcmp = core.ɵɵdefineComponent({ type: LazyComponent, selectors: [["flights-lazy"]], decls: 2, vars: 0, template: function LazyComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis facere nesciunt eos corporis fugiat nobis ipsa accusamus quibusdam, quaerat delectus, commodi sequi aperiam sit nisi. Saepe non ullam tenetur?");
                core.ɵɵelementEnd();
            } }, styles: [""] });
        return LazyComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LazyComponent, [{
            type: core.Component,
            args: [{
                    selector: 'flights-lazy',
                    templateUrl: './lazy.component.html',
                    styleUrls: ['./lazy.component.css']
                }]
        }], function () { return []; }, null); })();

    var lazy_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        LazyComponent: LazyComponent
    });

    var FlightLibModule = /** @class */ (function () {
        function FlightLibModule() {
        }
        FlightLibModule.ɵmod = core.ɵɵdefineNgModule({ type: FlightLibModule });
        FlightLibModule.ɵinj = core.ɵɵdefineInjector({ factory: function FlightLibModule_Factory(t) { return new (t || FlightLibModule)(); }, imports: [[
                    common.CommonModule,
                    router.RouterModule.forChild([
                        { path: 'flights-search', component: FlightComponent }
                    ])
                ]] });
        return FlightLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(FlightLibModule, { declarations: [FlightComponent, LazyComponent], imports: [common.CommonModule, router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FlightLibModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule.forChild([
                            { path: 'flights-search', component: FlightComponent }
                        ])
                    ],
                    declarations: [FlightComponent, LazyComponent]
                }]
        }], null, null); })();

    exports.FlightLibModule = FlightLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=flights-flight-lib.umd.js.map
