(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/Projects/Personal/Website/jennifer-lindsay/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/Projects/Personal/Website/jennifer-lindsay/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/Projects/Personal/Website/jennifer-lindsay/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Coding/Projects/Personal/Website/jennifer-lindsay/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AppShell({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppShell.useMemo[navItems]": ()=>[
                {
                    href: '/',
                    label: 'Home',
                    icon: '⌂'
                },
                {
                    href: '/contact',
                    label: 'Contact',
                    icon: '✉'
                }
            ]
    }["AppShell.useMemo[navItems]"], []);
    // Close drawer on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            setOpen(false);
        }
    }["AppShell.useEffect"], [
        pathname
    ]);
    // Close on ESC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShell.useEffect": ()=>{
            function onKeyDown(e) {
                if (e.key === 'Escape') setOpen(false);
            }
            window.addEventListener('keydown', onKeyDown);
            return ({
                "AppShell.useEffect": ()=>window.removeEventListener('keydown', onKeyDown)
            })["AppShell.useEffect"];
        }
    }["AppShell.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "appbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "iconButton",
                        "aria-label": open ? "Close navigation menu" : "Open navigation menu",
                        "aria-expanded": open,
                        onClick: ()=>setOpen(!open),
                        type: "button",
                        children: open ? '✕' : '☰'
                    }, void 0, false, {
                        fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                        lineNumber: 38,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "title",
                        children: "Jennifer Lindsay"
                    }, void 0, false, {
                        fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: open ? 'overlay overlayOpen' : 'overlay',
                onClick: ()=>setOpen(false),
                "aria-hidden": !open
            }, void 0, false, {
                fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: open ? 'drawer drawerOpen' : 'drawer',
                "aria-hidden": !open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "drawerHeader",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drawerTitle",
                            children: "Jennifer Lindsay"
                        }, void 0, false, {
                            fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "drawerNav",
                        children: navItems.map((item)=>{
                            const active = pathname === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: active ? 'drawerLink drawerLinkActive' : 'drawerLink',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "drawerIcon",
                                        "aria-hidden": "true",
                                        children: item.icon ?? '•'
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "page",
                children: children
            }, void 0, false, {
                fileName: "[project]/Coding/Projects/Personal/Website/jennifer-lindsay/components/AppShell.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AppShell, "EImu4cIFciTw1AdG1JEwePty9Cs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Coding$2f$Projects$2f$Personal$2f$Website$2f$jennifer$2d$lindsay$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AppShell;
var _c;
__turbopack_context__.k.register(_c, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=b02f7_Projects_Personal_Website_jennifer-lindsay_components_AppShell_tsx_24b7c83e._.js.map