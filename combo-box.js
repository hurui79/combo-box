/*
* JQuery zTree core v3.5.22
* http://zTree.me/
*
* Copyright (c) 2010 Hunter.z
*
* Licensed same as jquery - MIT License
* http://www.opensource.org/licenses/mit-license.php
*
* email: hunter.z@263.net
* Date: 2016-03-01
*/
(function (q) {
    var H, I, J, K, L, M, u, r = {}, v = {}, w = {}, N = {
        treeId: "", treeObj: null, view: { addDiyDom: null, autoCancelSelected: !0, dblClickExpand: !0, expandSpeed: "fast", fontCss: {}, nameIsHTML: !1, selectedMulti: !0, showIcon: !0, showLine: !0, showTitle: !0, txtSelectedEnable: !1 }, data: { key: { children: "children", name: "name", title: "", url: "url", icon: "icon" }, simpleData: { enable: !1, idKey: "id", pIdKey: "pId", rootPId: null }, keep: { parent: !1, leaf: !1 } }, async: {
            enable: !1, contentType: "application/x-www-form-urlencoded", type: "post", dataType: "text",
            url: "", autoParam: [], otherParam: [], dataFilter: null
        }, callback: { beforeAsync: null, beforeClick: null, beforeDblClick: null, beforeRightClick: null, beforeMouseDown: null, beforeMouseUp: null, beforeExpand: null, beforeCollapse: null, beforeRemove: null, onAsyncError: null, onAsyncSuccess: null, onNodeCreated: null, onClick: null, onDblClick: null, onRightClick: null, onMouseDown: null, onMouseUp: null, onExpand: null, onCollapse: null, onRemove: null }
    }, x = [function (b) {
        var a = b.treeObj, c = f.event; a.bind(c.NODECREATED, function (a, c, g) {
            j.apply(b.callback.onNodeCreated,
[a, c, g])
        }); a.bind(c.CLICK, function (a, c, g, n, h) { j.apply(b.callback.onClick, [c, g, n, h]) }); a.bind(c.EXPAND, function (a, c, g) { j.apply(b.callback.onExpand, [a, c, g]) }); a.bind(c.COLLAPSE, function (a, c, g) { j.apply(b.callback.onCollapse, [a, c, g]) }); a.bind(c.ASYNC_SUCCESS, function (a, c, g, n) { j.apply(b.callback.onAsyncSuccess, [a, c, g, n]) }); a.bind(c.ASYNC_ERROR, function (a, c, g, n, h, f) { j.apply(b.callback.onAsyncError, [a, c, g, n, h, f]) }); a.bind(c.REMOVE, function (a, c, g) { j.apply(b.callback.onRemove, [a, c, g]) }); a.bind(c.SELECTED,
function (a, c, g) { j.apply(b.callback.onSelected, [c, g]) }); a.bind(c.UNSELECTED, function (a, c, g) { j.apply(b.callback.onUnSelected, [c, g]) })
    }], y = [function (b) { var a = f.event; b.treeObj.unbind(a.NODECREATED).unbind(a.CLICK).unbind(a.EXPAND).unbind(a.COLLAPSE).unbind(a.ASYNC_SUCCESS).unbind(a.ASYNC_ERROR).unbind(a.REMOVE).unbind(a.SELECTED).unbind(a.UNSELECTED) }], z = [function (b) { var a = h.getCache(b); a || (a = {}, h.setCache(b, a)); a.nodes = []; a.doms = [] }], A = [function (b, a, c, d, e, g) {
        if (c) {
            var n = h.getRoot(b), f = b.data.key.children;
            c.level = a; c.tId = b.treeId + "_" + ++n.zId; c.parentTId = d ? d.tId : null; c.open = typeof c.open == "string" ? j.eqs(c.open, "true") : !!c.open; c[f] && c[f].length > 0 ? (c.isParent = !0, c.zAsync = !0) : (c.isParent = typeof c.isParent == "string" ? j.eqs(c.isParent, "true") : !!c.isParent, c.open = c.isParent && !b.async.enable ? c.open : !1, c.zAsync = !c.isParent); c.isFirstNode = e; c.isLastNode = g; c.getParentNode = function () { return h.getNodeCache(b, c.parentTId) }; c.getPreNode = function () { return h.getPreNode(b, c) }; c.getNextNode = function () {
                return h.getNextNode(b,
c)
            }; c.getIndex = function () { return h.getNodeIndex(b, c) }; c.getPath = function () { return h.getNodePath(b, c) }; c.isAjaxing = !1; h.fixPIdKeyValue(b, c)
        }
    }], t = [function (b) {
        var a = b.target, c = h.getSetting(b.data.treeId), d = "", e = null, g = "", n = "", i = null, m = null, k = null; if (j.eqs(b.type, "mousedown")) n = "mousedown"; else if (j.eqs(b.type, "mouseup")) n = "mouseup"; else if (j.eqs(b.type, "contextmenu")) n = "contextmenu"; else if (j.eqs(b.type, "click")) if (j.eqs(a.tagName, "span") && a.getAttribute("treeNode" + f.id.SWITCH) !== null) d = j.getNodeMainDom(a).id,
g = "switchNode"; else { if (k = j.getMDom(c, a, [{ tagName: "a", attrName: "treeNode" + f.id.A }])) d = j.getNodeMainDom(k).id, g = "clickNode" } else if (j.eqs(b.type, "dblclick") && (n = "dblclick", k = j.getMDom(c, a, [{ tagName: "a", attrName: "treeNode" + f.id.A }]))) d = j.getNodeMainDom(k).id, g = "switchNode"; if (n.length > 0 && d.length == 0 && (k = j.getMDom(c, a, [{ tagName: "a", attrName: "treeNode" + f.id.A }]))) d = j.getNodeMainDom(k).id; if (d.length > 0) switch (e = h.getNodeCache(c, d), g) {
    case "switchNode": e.isParent ? j.eqs(b.type, "click") || j.eqs(b.type, "dblclick") &&
j.apply(c.view.dblClickExpand, [c.treeId, e], c.view.dblClickExpand) ? i = H : g = "" : g = ""; break; case "clickNode": i = I
} switch (n) { case "mousedown": m = J; break; case "mouseup": m = K; break; case "dblclick": m = L; break; case "contextmenu": m = M } return { stop: !1, node: e, nodeEventType: g, nodeEventCallback: i, treeEventType: n, treeEventCallback: m }
    }], B = [function (b) { var a = h.getRoot(b); a || (a = {}, h.setRoot(b, a)); a[b.data.key.children] = []; a.expandTriggerFlag = !1; a.curSelectedList = []; a.noSelection = !0; a.createdNodes = []; a.zId = 0; a._ver = (new Date).getTime() }],
C = [], D = [], E = [], F = [], G = [], h = {
    addNodeCache: function (b, a) { h.getCache(b).nodes[h.getNodeCacheId(a.tId)] = a }, getNodeCacheId: function (b) { return b.substring(b.lastIndexOf("_") + 1) }, addAfterA: function (b) { D.push(b) }, addBeforeA: function (b) { C.push(b) }, addInnerAfterA: function (b) { F.push(b) }, addInnerBeforeA: function (b) { E.push(b) }, addInitBind: function (b) { x.push(b) }, addInitUnBind: function (b) { y.push(b) }, addInitCache: function (b) { z.push(b) }, addInitNode: function (b) { A.push(b) }, addInitProxy: function (b, a) {
        a ? t.splice(0, 0,
    b) : t.push(b)
    }, addInitRoot: function (b) { B.push(b) }, addNodesData: function (b, a, c, d) { var e = b.data.key.children; a[e] ? c >= a[e].length && (c = -1) : (a[e] = [], c = -1); if (a[e].length > 0 && c === 0) a[e][0].isFirstNode = !1, i.setNodeLineIcos(b, a[e][0]); else if (a[e].length > 0 && c < 0) a[e][a[e].length - 1].isLastNode = !1, i.setNodeLineIcos(b, a[e][a[e].length - 1]); a.isParent = !0; c < 0 ? a[e] = a[e].concat(d) : (b = [c, 0].concat(d), a[e].splice.apply(a[e], b)) }, addSelectedNode: function (b, a) { var c = h.getRoot(b); h.isSelectedNode(b, a) || c.curSelectedList.push(a) },
    addCreatedNode: function (b, a) { (b.callback.onNodeCreated || b.view.addDiyDom) && h.getRoot(b).createdNodes.push(a) }, addZTreeTools: function (b) { G.push(b) }, exSetting: function (b) { q.extend(!0, N, b) }, fixPIdKeyValue: function (b, a) { b.data.simpleData.enable && (a[b.data.simpleData.pIdKey] = a.parentTId ? a.getParentNode()[b.data.simpleData.idKey] : b.data.simpleData.rootPId) }, getAfterA: function (b, a, c) { for (var d = 0, e = D.length; d < e; d++) D[d].apply(this, arguments) }, getBeforeA: function (b, a, c) {
        for (var d = 0, e = C.length; d < e; d++) C[d].apply(this,
arguments)
    }, getInnerAfterA: function (b, a, c) { for (var d = 0, e = F.length; d < e; d++) F[d].apply(this, arguments) }, getInnerBeforeA: function (b, a, c) { for (var d = 0, e = E.length; d < e; d++) E[d].apply(this, arguments) }, getCache: function (b) { return w[b.treeId] }, getNodeIndex: function (b, a) { if (!a) return null; for (var c = b.data.key.children, d = a.parentTId ? a.getParentNode() : h.getRoot(b), e = 0, g = d[c].length - 1; e <= g; e++) if (d[c][e] === a) return e; return -1 }, getNextNode: function (b, a) {
        if (!a) return null; for (var c = b.data.key.children, d = a.parentTId ?
a.getParentNode() : h.getRoot(b), e = 0, g = d[c].length - 1; e <= g; e++) if (d[c][e] === a) return e == g ? null : d[c][e + 1]; return null
    }, getNodeByParam: function (b, a, c, d) { if (!a || !c) return null; for (var e = b.data.key.children, g = 0, n = a.length; g < n; g++) { if (a[g][c] == d) return a[g]; var f = h.getNodeByParam(b, a[g][e], c, d); if (f) return f } return null }, getNodeCache: function (b, a) { if (!a) return null; var c = w[b.treeId].nodes[h.getNodeCacheId(a)]; return c ? c : null }, getNodeName: function (b, a) { return "" + a[b.data.key.name] }, getNodePath: function (b, a) {
        if (!a) return null;
        var c; (c = a.parentTId ? a.getParentNode().getPath() : []) && c.push(a); return c
    }, getNodeTitle: function (b, a) { return "" + a[b.data.key.title === "" ? b.data.key.name : b.data.key.title] }, getNodes: function (b) { return h.getRoot(b)[b.data.key.children] }, getNodesByParam: function (b, a, c, d) { if (!a || !c) return []; for (var e = b.data.key.children, g = [], f = 0, i = a.length; f < i; f++) a[f][c] == d && g.push(a[f]), g = g.concat(h.getNodesByParam(b, a[f][e], c, d)); return g }, getNodesByParamFuzzy: function (b, a, c, d) {
        if (!a || !c) return []; for (var e = b.data.key.children,
g = [], d = d.toLowerCase(), f = 0, i = a.length; f < i; f++) typeof a[f][c] == "string" && a[f][c].toLowerCase().indexOf(d) > -1 && g.push(a[f]), g = g.concat(h.getNodesByParamFuzzy(b, a[f][e], c, d)); return g
    }, getNodesByFilter: function (b, a, c, d, e) { if (!a) return d ? null : []; for (var g = b.data.key.children, f = d ? null : [], i = 0, m = a.length; i < m; i++) { if (j.apply(c, [a[i], e], !1)) { if (d) return a[i]; f.push(a[i]) } var k = h.getNodesByFilter(b, a[i][g], c, d, e); if (d && k) return k; f = d ? k : f.concat(k) } return f }, getPreNode: function (b, a) {
        if (!a) return null; for (var c =
b.data.key.children, d = a.parentTId ? a.getParentNode() : h.getRoot(b), e = 0, g = d[c].length; e < g; e++) if (d[c][e] === a) return e == 0 ? null : d[c][e - 1]; return null
    }, getRoot: function (b) { return b ? v[b.treeId] : null }, getRoots: function () { return v }, getSetting: function (b) { return r[b] }, getSettings: function () { return r }, getZTreeTools: function (b) { return (b = this.getRoot(this.getSetting(b))) ? b.treeTools : null }, initCache: function (b) { for (var a = 0, c = z.length; a < c; a++) z[a].apply(this, arguments) }, initNode: function (b, a, c, d, e, g) {
        for (var f =
0, h = A.length; f < h; f++) A[f].apply(this, arguments)
    }, initRoot: function (b) { for (var a = 0, c = B.length; a < c; a++) B[a].apply(this, arguments) }, isSelectedNode: function (b, a) { for (var c = h.getRoot(b), d = 0, e = c.curSelectedList.length; d < e; d++) if (a === c.curSelectedList[d]) return !0; return !1 }, removeNodeCache: function (b, a) { var c = b.data.key.children; if (a[c]) for (var d = 0, e = a[c].length; d < e; d++) arguments.callee(b, a[c][d]); h.getCache(b).nodes[h.getNodeCacheId(a.tId)] = null }, removeSelectedNode: function (b, a) {
        for (var c = h.getRoot(b), d =
0, e = c.curSelectedList.length; d < e; d++) if (a === c.curSelectedList[d] || !h.getNodeCache(b, c.curSelectedList[d].tId)) c.curSelectedList.splice(d, 1), b.treeObj.trigger(f.event.UNSELECTED, [b.treeId, a]), d--, e--
    }, setCache: function (b, a) { w[b.treeId] = a }, setRoot: function (b, a) { v[b.treeId] = a }, setZTreeTools: function (b, a) { for (var c = 0, d = G.length; c < d; c++) G[c].apply(this, arguments) }, transformToArrayFormat: function (b, a) {
        if (!a) return []; var c = b.data.key.children, d = []; if (j.isArray(a)) for (var e = 0, g = a.length; e < g; e++) d.push(a[e]),
a[e][c] && (d = d.concat(h.transformToArrayFormat(b, a[e][c]))); else d.push(a), a[c] && (d = d.concat(h.transformToArrayFormat(b, a[c]))); return d
    }, transformTozTreeFormat: function (b, a) { var c, d, e = b.data.simpleData.idKey, g = b.data.simpleData.pIdKey, f = b.data.key.children; if (!e || e == "" || !a) return []; if (j.isArray(a)) { var h = [], i = []; for (c = 0, d = a.length; c < d; c++) i[a[c][e]] = a[c]; for (c = 0, d = a.length; c < d; c++) i[a[c][g]] && a[c][e] != a[c][g] ? (i[a[c][g]][f] || (i[a[c][g]][f] = []), i[a[c][g]][f].push(a[c])) : h.push(a[c]); return h } else return [a] }
},
l = {
    bindEvent: function (b) { for (var a = 0, c = x.length; a < c; a++) x[a].apply(this, arguments) }, unbindEvent: function (b) { for (var a = 0, c = y.length; a < c; a++) y[a].apply(this, arguments) }, bindTree: function (b) {
        var a = { treeId: b.treeId }, c = b.treeObj; b.view.txtSelectedEnable || c.bind("selectstart", u).css({ "-moz-user-select": "-moz-none" }); c.bind("click", a, l.proxy); c.bind("dblclick", a, l.proxy); c.bind("mouseover", a, l.proxy); c.bind("mouseout", a, l.proxy); c.bind("mousedown", a, l.proxy); c.bind("mouseup", a, l.proxy); c.bind("contextmenu",
    a, l.proxy)
    }, unbindTree: function (b) { b.treeObj.unbind("selectstart", u).unbind("click", l.proxy).unbind("dblclick", l.proxy).unbind("mouseover", l.proxy).unbind("mouseout", l.proxy).unbind("mousedown", l.proxy).unbind("mouseup", l.proxy).unbind("contextmenu", l.proxy) }, doProxy: function (b) { for (var a = [], c = 0, d = t.length; c < d; c++) { var e = t[c].apply(this, arguments); a.push(e); if (e.stop) break } return a }, proxy: function (b) {
        var a = h.getSetting(b.data.treeId); if (!j.uCanDo(a, b)) return !0; for (var a = l.doProxy(b), c = !0, d = 0, e = a.length; d <
    e; d++) { var g = a[d]; g.nodeEventCallback && (c = g.nodeEventCallback.apply(g, [b, g.node]) && c); g.treeEventCallback && (c = g.treeEventCallback.apply(g, [b, g.node]) && c) } return c
    }
}; H = function (b, a) { var c = h.getSetting(b.data.treeId); if (a.open) { if (j.apply(c.callback.beforeCollapse, [c.treeId, a], !0) == !1) return !0 } else if (j.apply(c.callback.beforeExpand, [c.treeId, a], !0) == !1) return !0; h.getRoot(c).expandTriggerFlag = !0; i.switchNode(c, a); return !0 }; I = function (b, a) {
    var c = h.getSetting(b.data.treeId), d = c.view.autoCancelSelected &&
(b.ctrlKey || b.metaKey) && h.isSelectedNode(c, a) ? 0 : c.view.autoCancelSelected && (b.ctrlKey || b.metaKey) && c.view.selectedMulti ? 2 : 1; if (j.apply(c.callback.beforeClick, [c.treeId, a, d], !0) == !1) return !0; d === 0 ? i.cancelPreSelectedNode(c, a) : i.selectNode(c, a, d === 2); c.treeObj.trigger(f.event.CLICK, [b, c.treeId, a, d]); return !0
}; J = function (b, a) { var c = h.getSetting(b.data.treeId); j.apply(c.callback.beforeMouseDown, [c.treeId, a], !0) && j.apply(c.callback.onMouseDown, [b, c.treeId, a]); return !0 }; K = function (b, a) {
    var c = h.getSetting(b.data.treeId);
    j.apply(c.callback.beforeMouseUp, [c.treeId, a], !0) && j.apply(c.callback.onMouseUp, [b, c.treeId, a]); return !0
}; L = function (b, a) { var c = h.getSetting(b.data.treeId); j.apply(c.callback.beforeDblClick, [c.treeId, a], !0) && j.apply(c.callback.onDblClick, [b, c.treeId, a]); return !0 }; M = function (b, a) { var c = h.getSetting(b.data.treeId); j.apply(c.callback.beforeRightClick, [c.treeId, a], !0) && j.apply(c.callback.onRightClick, [b, c.treeId, a]); return typeof c.callback.onRightClick != "function" }; u = function (b) {
    b = b.originalEvent.srcElement.nodeName.toLowerCase();
    return b === "input" || b === "textarea"
}; var j = {
    apply: function (b, a, c) { return typeof b == "function" ? b.apply(O, a ? a : []) : c }, canAsync: function (b, a) { var c = b.data.key.children; return b.async.enable && a && a.isParent && !(a.zAsync || a[c] && a[c].length > 0) }, clone: function (b) { if (b === null) return null; var a = j.isArray(b) ? [] : {}, c; for (c in b) a[c] = b[c] instanceof Date ? new Date(b[c].getTime()) : typeof b[c] === "object" ? arguments.callee(b[c]) : b[c]; return a }, eqs: function (b, a) { return b.toLowerCase() === a.toLowerCase() }, isArray: function (b) {
        return Object.prototype.toString.apply(b) ===
    "[object Array]"
    }, $: function (b, a, c) { a && typeof a != "string" && (c = a, a = ""); return typeof b == "string" ? q(b, c ? c.treeObj.get(0).ownerDocument : null) : q("#" + b.tId + a, c ? c.treeObj : null) }, getMDom: function (b, a, c) { if (!a) return null; for (; a && a.id !== b.treeId;) { for (var d = 0, e = c.length; a.tagName && d < e; d++) if (j.eqs(a.tagName, c[d].tagName) && a.getAttribute(c[d].attrName) !== null) return a; a = a.parentNode } return null }, getNodeMainDom: function (b) { return q(b).parent("li").get(0) || q(b).parentsUntil("li").parent().get(0) }, isChildOrSelf: function (b,
    a) { return q(b).closest("#" + a).length > 0 }, uCanDo: function () { return !0 }
}, i = {
    addNodes: function (b, a, c, d, e) {
        if (!b.data.keep.leaf || !a || a.isParent) if (j.isArray(d) || (d = [d]), b.data.simpleData.enable && (d = h.transformTozTreeFormat(b, d)), a) {
            var g = k(a, f.id.SWITCH, b), n = k(a, f.id.ICON, b), o = k(a, f.id.UL, b); if (!a.open) i.replaceSwitchClass(a, g, f.folder.CLOSE), i.replaceIcoClass(a, n, f.folder.CLOSE), a.open = !1, o.css({ display: "none" }); h.addNodesData(b, a, c, d); i.createNodes(b, a.level + 1, d, a, c); e || i.expandCollapseParentNode(b, a,
    !0)
        } else h.addNodesData(b, h.getRoot(b), c, d), i.createNodes(b, 0, d, null, c)
    }, appendNodes: function (b, a, c, d, e, g, f) {
        if (!c) return []; var j = [], m = b.data.key.children, k = (d ? d : h.getRoot(b))[m], l, Q; if (!k || e >= k.length) e = -1; for (var s = 0, q = c.length; s < q; s++) {
            var p = c[s]; g && (l = (e === 0 || k.length == c.length) && s == 0, Q = e < 0 && s == c.length - 1, h.initNode(b, a, p, d, l, Q, f), h.addNodeCache(b, p)); l = []; p[m] && p[m].length > 0 && (l = i.appendNodes(b, a + 1, p[m], p, -1, g, f && p.open)); f && (i.makeDOMNodeMainBefore(j, b, p), i.makeDOMNodeLine(j, b, p), h.getBeforeA(b,
    p, j), i.makeDOMNodeNameBefore(j, b, p), h.getInnerBeforeA(b, p, j), i.makeDOMNodeIcon(j, b, p), h.getInnerAfterA(b, p, j), i.makeDOMNodeNameAfter(j, b, p), h.getAfterA(b, p, j), p.isParent && p.open && i.makeUlHtml(b, p, j, l.join("")), i.makeDOMNodeMainAfter(j, b, p), h.addCreatedNode(b, p))
        } return j
    }, appendParentULDom: function (b, a) {
        var c = [], d = k(a, b); !d.get(0) && a.parentTId && (i.appendParentULDom(b, a.getParentNode()), d = k(a, b)); var e = k(a, f.id.UL, b); e.get(0) && e.remove(); e = i.appendNodes(b, a.level + 1, a[b.data.key.children], a, -1, !1, !0);
        i.makeUlHtml(b, a, c, e.join("")); d.append(c.join(""))
    }, asyncNode: function (b, a, c, d) {
        var e, g; if (a && !a.isParent) return j.apply(d), !1; else if (a && a.isAjaxing) return !1; else if (j.apply(b.callback.beforeAsync, [b.treeId, a], !0) == !1) return j.apply(d), !1; if (a) a.isAjaxing = !0, k(a, f.id.ICON, b).attr({ style: "", "class": f.className.BUTTON + " " + f.className.ICO_LOADING }); var n = {}; for (e = 0, g = b.async.autoParam.length; a && e < g; e++) { var o = b.async.autoParam[e].split("="), m = o; o.length > 1 && (m = o[1], o = o[0]); n[m] = a[o] } if (j.isArray(b.async.otherParam)) for (e =
    0, g = b.async.otherParam.length; e < g; e += 2) n[b.async.otherParam[e]] = b.async.otherParam[e + 1]; else for (var l in b.async.otherParam) n[l] = b.async.otherParam[l]; var P = h.getRoot(b)._ver; q.ajax({
        contentType: b.async.contentType, cache: !1, type: b.async.type, url: j.apply(b.async.url, [b.treeId, a], b.async.url), data: n, dataType: b.async.dataType, success: function (e) {
            if (P == h.getRoot(b)._ver) {
                var g = []; try { g = !e || e.length == 0 ? [] : typeof e == "string" ? eval("(" + e + ")") : e } catch (n) { g = e } if (a) a.isAjaxing = null, a.zAsync = !0; i.setNodeLineIcos(b,
        a); g && g !== "" ? (g = j.apply(b.async.dataFilter, [b.treeId, a, g], g), i.addNodes(b, a, -1, g ? j.clone(g) : [], !!c)) : i.addNodes(b, a, -1, [], !!c); b.treeObj.trigger(f.event.ASYNC_SUCCESS, [b.treeId, a, e]); j.apply(d)
            }
        }, error: function (c, d, e) { if (P == h.getRoot(b)._ver) { if (a) a.isAjaxing = null; i.setNodeLineIcos(b, a); b.treeObj.trigger(f.event.ASYNC_ERROR, [b.treeId, a, c, d, e]) } }
    }); return !0
    }, cancelPreSelectedNode: function (b, a, c) {
        var d = h.getRoot(b).curSelectedList, e, g; for (e = d.length - 1; e >= 0; e--) if (g = d[e], a === g || !a && (!c || c !== g)) if (k(g,
    f.id.A, b).removeClass(f.node.CURSELECTED), a) { h.removeSelectedNode(b, a); break } else d.splice(e, 1), b.treeObj.trigger(f.event.UNSELECTED, [b.treeId, g])
    }, createNodeCallback: function (b) { if (b.callback.onNodeCreated || b.view.addDiyDom) for (var a = h.getRoot(b) ; a.createdNodes.length > 0;) { var c = a.createdNodes.shift(); j.apply(b.view.addDiyDom, [b.treeId, c]); b.callback.onNodeCreated && b.treeObj.trigger(f.event.NODECREATED, [b.treeId, c]) } }, createNodes: function (b, a, c, d, e) {
        if (c && c.length != 0) {
            var g = h.getRoot(b), j = b.data.key.children,
    j = !d || d.open || !!k(d[j][0], b).get(0); g.createdNodes = []; var a = i.appendNodes(b, a, c, d, e, !0, j), o, m; d ? (d = k(d, f.id.UL, b), d.get(0) && (o = d)) : o = b.treeObj; o && (e >= 0 && (m = o.children()[e]), e >= 0 && m ? q(m).before(a.join("")) : o.append(a.join(""))); i.createNodeCallback(b)
        }
    }, destroy: function (b) { b && (h.initCache(b), h.initRoot(b), l.unbindTree(b), l.unbindEvent(b), b.treeObj.empty(), delete r[b.treeId]) }, expandCollapseNode: function (b, a, c, d, e) {
        var g = h.getRoot(b), n = b.data.key.children; if (a) {
            if (g.expandTriggerFlag) {
                var o = e, e = function () {
                    o &&
    o(); a.open ? b.treeObj.trigger(f.event.EXPAND, [b.treeId, a]) : b.treeObj.trigger(f.event.COLLAPSE, [b.treeId, a])
                }; g.expandTriggerFlag = !1
            } if (!a.open && a.isParent && (!k(a, f.id.UL, b).get(0) || a[n] && a[n].length > 0 && !k(a[n][0], b).get(0))) i.appendParentULDom(b, a), i.createNodeCallback(b); if (a.open == c) j.apply(e, []); else {
                var c = k(a, f.id.UL, b), g = k(a, f.id.SWITCH, b), m = k(a, f.id.ICON, b); a.isParent ? (a.open = !a.open, a.iconOpen && a.iconClose && m.attr("style", i.makeNodeIcoStyle(b, a)), a.open ? (i.replaceSwitchClass(a, g, f.folder.OPEN),
    i.replaceIcoClass(a, m, f.folder.OPEN), d == !1 || b.view.expandSpeed == "" ? (c.show(), j.apply(e, [])) : a[n] && a[n].length > 0 ? c.slideDown(b.view.expandSpeed, e) : (c.show(), j.apply(e, []))) : (i.replaceSwitchClass(a, g, f.folder.CLOSE), i.replaceIcoClass(a, m, f.folder.CLOSE), d == !1 || b.view.expandSpeed == "" || !(a[n] && a[n].length > 0) ? (c.hide(), j.apply(e, [])) : c.slideUp(b.view.expandSpeed, e))) : j.apply(e, [])
            }
        } else j.apply(e, [])
    }, expandCollapseParentNode: function (b, a, c, d, e) {
        a && (a.parentTId ? (i.expandCollapseNode(b, a, c, d), a.parentTId &&
    i.expandCollapseParentNode(b, a.getParentNode(), c, d, e)) : i.expandCollapseNode(b, a, c, d, e))
    }, expandCollapseSonNode: function (b, a, c, d, e) { var g = h.getRoot(b), f = b.data.key.children, g = a ? a[f] : g[f], f = a ? !1 : d, j = h.getRoot(b).expandTriggerFlag; h.getRoot(b).expandTriggerFlag = !1; if (g) for (var k = 0, l = g.length; k < l; k++) g[k] && i.expandCollapseSonNode(b, g[k], c, f); h.getRoot(b).expandTriggerFlag = j; i.expandCollapseNode(b, a, c, d, e) }, isSelectedNode: function (b, a) {
        if (!a) return !1; var c = h.getRoot(b).curSelectedList, d; for (d = c.length -
    1; d >= 0; d--) if (a === c[d]) return !0; return !1
    }, makeDOMNodeIcon: function (b, a, c) { var d = h.getNodeName(a, c), d = a.view.nameIsHTML ? d : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); b.push("<span id='", c.tId, f.id.ICON, "' title='' treeNode", f.id.ICON, " class='", i.makeNodeIcoClass(a, c), "' style='", i.makeNodeIcoStyle(a, c), "'></span><span id='", c.tId, f.id.SPAN, "' class='", f.className.NAME, "'>", d, "</span>") }, makeDOMNodeLine: function (b, a, c) {
        b.push("<span id='", c.tId, f.id.SWITCH, "' title='' class='",
    i.makeNodeLineClass(a, c), "' treeNode", f.id.SWITCH, "></span>")
    }, makeDOMNodeMainAfter: function (b) { b.push("</li>") }, makeDOMNodeMainBefore: function (b, a, c) { b.push("<li id='", c.tId, "' class='", f.className.LEVEL, c.level, "' tabindex='0' hidefocus='true' treenode>") }, makeDOMNodeNameAfter: function (b) { b.push("</a>") }, makeDOMNodeNameBefore: function (b, a, c) {
        var d = h.getNodeTitle(a, c), e = i.makeNodeUrl(a, c), g = i.makeNodeFontCss(a, c), n = [], k; for (k in g) n.push(k, ":", g[k], ";"); b.push("<a id='", c.tId, f.id.A, "' class='",
    f.className.LEVEL, c.level, "' treeNode", f.id.A, ' onclick="', c.click || "", '" ', e != null && e.length > 0 ? "href='" + e + "'" : "", " target='", i.makeNodeTarget(c), "' style='", n.join(""), "'"); j.apply(a.view.showTitle, [a.treeId, c], a.view.showTitle) && d && b.push("title='", d.replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "'"); b.push(">")
    }, makeNodeFontCss: function (b, a) { var c = j.apply(b.view.fontCss, [b.treeId, a], b.view.fontCss); return c && typeof c != "function" ? c : {} }, makeNodeIcoClass: function (b, a) {
        var c = ["ico"];
        a.isAjaxing || (c[0] = (a.iconSkin ? a.iconSkin + "_" : "") + c[0], a.isParent ? c.push(a.open ? f.folder.OPEN : f.folder.CLOSE) : c.push(f.folder.DOCU)); return f.className.BUTTON + " " + c.join("_")
    }, makeNodeIcoStyle: function (b, a) { var c = []; if (!a.isAjaxing) { var d = a.isParent && a.iconOpen && a.iconClose ? a.open ? a.iconOpen : a.iconClose : a[b.data.key.icon]; d && c.push("background:url(", d, ") 0 0 no-repeat;"); (b.view.showIcon == !1 || !j.apply(b.view.showIcon, [b.treeId, a], !0)) && c.push("width:0px;height:0px;") } return c.join("") }, makeNodeLineClass: function (b,
    a) { var c = []; b.view.showLine ? a.level == 0 && a.isFirstNode && a.isLastNode ? c.push(f.line.ROOT) : a.level == 0 && a.isFirstNode ? c.push(f.line.ROOTS) : a.isLastNode ? c.push(f.line.BOTTOM) : c.push(f.line.CENTER) : c.push(f.line.NOLINE); a.isParent ? c.push(a.open ? f.folder.OPEN : f.folder.CLOSE) : c.push(f.folder.DOCU); return i.makeNodeLineClassEx(a) + c.join("_") }, makeNodeLineClassEx: function (b) { return f.className.BUTTON + " " + f.className.LEVEL + b.level + " " + f.className.SWITCH + " " }, makeNodeTarget: function (b) { return b.target || "_blank" },
    makeNodeUrl: function (b, a) { var c = b.data.key.url; return a[c] ? a[c] : null }, makeUlHtml: function (b, a, c, d) { c.push("<ul id='", a.tId, f.id.UL, "' class='", f.className.LEVEL, a.level, " ", i.makeUlLineClass(b, a), "' style='display:", a.open ? "block" : "none", "'>"); c.push(d); c.push("</ul>") }, makeUlLineClass: function (b, a) { return b.view.showLine && !a.isLastNode ? f.line.LINE : "" }, removeChildNodes: function (b, a) {
        if (a) {
            var c = b.data.key.children, d = a[c]; if (d) {
                for (var e = 0, g = d.length; e < g; e++) h.removeNodeCache(b, d[e]); h.removeSelectedNode(b);
                delete a[c]; b.data.keep.parent ? k(a, f.id.UL, b).empty() : (a.isParent = !1, a.open = !1, c = k(a, f.id.SWITCH, b), d = k(a, f.id.ICON, b), i.replaceSwitchClass(a, c, f.folder.DOCU), i.replaceIcoClass(a, d, f.folder.DOCU), k(a, f.id.UL, b).remove())
            }
        }
    }, setFirstNode: function (b, a) { var c = b.data.key.children; if (a[c].length > 0) a[c][0].isFirstNode = !0 }, setLastNode: function (b, a) { var c = b.data.key.children, d = a[c].length; if (d > 0) a[c][d - 1].isLastNode = !0 }, removeNode: function (b, a) {
        var c = h.getRoot(b), d = b.data.key.children, e = a.parentTId ? a.getParentNode() :
c; a.isFirstNode = !1; a.isLastNode = !1; a.getPreNode = function () { return null }; a.getNextNode = function () { return null }; if (h.getNodeCache(b, a.tId)) {
    k(a, b).remove(); h.removeNodeCache(b, a); h.removeSelectedNode(b, a); for (var g = 0, j = e[d].length; g < j; g++) if (e[d][g].tId == a.tId) { e[d].splice(g, 1); break } i.setFirstNode(b, e); i.setLastNode(b, e); var o, g = e[d].length; if (!b.data.keep.parent && g == 0) e.isParent = !1, e.open = !1, g = k(e, f.id.UL, b), j = k(e, f.id.SWITCH, b), o = k(e, f.id.ICON, b), i.replaceSwitchClass(e, j, f.folder.DOCU), i.replaceIcoClass(e,
o, f.folder.DOCU), g.css("display", "none"); else if (b.view.showLine && g > 0) { var m = e[d][g - 1], g = k(m, f.id.UL, b), j = k(m, f.id.SWITCH, b); o = k(m, f.id.ICON, b); e == c ? e[d].length == 1 ? i.replaceSwitchClass(m, j, f.line.ROOT) : (c = k(e[d][0], f.id.SWITCH, b), i.replaceSwitchClass(e[d][0], c, f.line.ROOTS), i.replaceSwitchClass(m, j, f.line.BOTTOM)) : i.replaceSwitchClass(m, j, f.line.BOTTOM); g.removeClass(f.line.LINE) }
}
    }, replaceIcoClass: function (b, a, c) {
        if (a && !b.isAjaxing && (b = a.attr("class"), b != void 0)) {
            b = b.split("_"); switch (c) {
                case f.folder.OPEN: case f.folder.CLOSE: case f.folder.DOCU: b[b.length -
1] = c
            } a.attr("class", b.join("_"))
        }
    }, replaceSwitchClass: function (b, a, c) { if (a) { var d = a.attr("class"); if (d != void 0) { d = d.split("_"); switch (c) { case f.line.ROOT: case f.line.ROOTS: case f.line.CENTER: case f.line.BOTTOM: case f.line.NOLINE: d[0] = i.makeNodeLineClassEx(b) + c; break; case f.folder.OPEN: case f.folder.CLOSE: case f.folder.DOCU: d[1] = c } a.attr("class", d.join("_")); c !== f.folder.DOCU ? a.removeAttr("disabled") : a.attr("disabled", "disabled") } } }, selectNode: function (b, a, c) {
        c || i.cancelPreSelectedNode(b, null, a); k(a,
f.id.A, b).addClass(f.node.CURSELECTED); h.addSelectedNode(b, a); b.treeObj.trigger(f.event.SELECTED, [b.treeId, a])
    }, setNodeFontCss: function (b, a) { var c = k(a, f.id.A, b), d = i.makeNodeFontCss(b, a); d && c.css(d) }, setNodeLineIcos: function (b, a) {
        if (a) {
            var c = k(a, f.id.SWITCH, b), d = k(a, f.id.UL, b), e = k(a, f.id.ICON, b), g = i.makeUlLineClass(b, a); g.length == 0 ? d.removeClass(f.line.LINE) : d.addClass(g); c.attr("class", i.makeNodeLineClass(b, a)); a.isParent ? c.removeAttr("disabled") : c.attr("disabled", "disabled"); e.removeAttr("style");
            e.attr("style", i.makeNodeIcoStyle(b, a)); e.attr("class", i.makeNodeIcoClass(b, a))
        }
    }, setNodeName: function (b, a) { var c = h.getNodeTitle(b, a), d = k(a, f.id.SPAN, b); d.empty(); b.view.nameIsHTML ? d.html(h.getNodeName(b, a)) : d.text(h.getNodeName(b, a)); j.apply(b.view.showTitle, [b.treeId, a], b.view.showTitle) && k(a, f.id.A, b).attr("title", !c ? "" : c) }, setNodeTarget: function (b, a) { k(a, f.id.A, b).attr("target", i.makeNodeTarget(a)) }, setNodeUrl: function (b, a) {
        var c = k(a, f.id.A, b), d = i.makeNodeUrl(b, a); d == null || d.length == 0 ? c.removeAttr("href") :
c.attr("href", d)
    }, switchNode: function (b, a) { a.open || !j.canAsync(b, a) ? i.expandCollapseNode(b, a, !a.open) : b.async.enable ? i.asyncNode(b, a) || i.expandCollapseNode(b, a, !a.open) : a && i.expandCollapseNode(b, a, !a.open) }
}; q.fn.zTree = {
    consts: {
        className: { BUTTON: "button", LEVEL: "level", ICO_LOADING: "ico_loading", SWITCH: "switch", NAME: "node_name" }, event: {
            NODECREATED: "ztree_nodeCreated", CLICK: "ztree_click", EXPAND: "ztree_expand", COLLAPSE: "ztree_collapse", ASYNC_SUCCESS: "ztree_async_success", ASYNC_ERROR: "ztree_async_error",
            REMOVE: "ztree_remove", SELECTED: "ztree_selected", UNSELECTED: "ztree_unselected"
        }, id: { A: "_a", ICON: "_ico", SPAN: "_span", SWITCH: "_switch", UL: "_ul" }, line: { ROOT: "root", ROOTS: "roots", CENTER: "center", BOTTOM: "bottom", NOLINE: "noline", LINE: "line" }, folder: { OPEN: "open", CLOSE: "close", DOCU: "docu" }, node: { CURSELECTED: "curSelectedNode" }
    }, _z: { tools: j, view: i, event: l, data: h }, getZTreeObj: function (b) { return (b = h.getZTreeTools(b)) ? b : null }, destroy: function (b) { if (b && b.length > 0) i.destroy(h.getSetting(b)); else for (var a in r) i.destroy(r[a]) },
    init: function (b, a, c) {
        var d = j.clone(N); q.extend(!0, d, a); d.treeId = b.attr("id"); d.treeObj = b; d.treeObj.empty(); r[d.treeId] = d; if (typeof document.body.style.maxHeight === "undefined") d.view.expandSpeed = ""; h.initRoot(d); b = h.getRoot(d); a = d.data.key.children; c = c ? j.clone(j.isArray(c) ? c : [c]) : []; b[a] = d.data.simpleData.enable ? h.transformTozTreeFormat(d, c) : c; h.initCache(d); l.unbindTree(d); l.bindTree(d); l.unbindEvent(d); l.bindEvent(d); c = {
            setting: d, addNodes: function (a, b, c, f) {
                function h() { i.addNodes(d, a, b, l, f == !0) }
                a || (a = null); if (a && !a.isParent && d.data.keep.leaf) return null; var k = parseInt(b, 10); isNaN(k) ? (f = !!c, c = b, b = -1) : b = k; if (!c) return null; var l = j.clone(j.isArray(c) ? c : [c]); j.canAsync(d, a) ? i.asyncNode(d, a, f, h) : h(); return l
            }, cancelSelectedNode: function (a) { i.cancelPreSelectedNode(d, a) }, destroy: function () { i.destroy(d) }, expandAll: function (a) { a = !!a; i.expandCollapseSonNode(d, null, a, !0); return a }, expandNode: function (a, b, c, f, m) {
                function l() {
                    var b = k(a, d).get(0); if (b && f !== !1) if (b.scrollIntoView) b.scrollIntoView(!1);
                    else try { b.focus().blur() } catch (c) { }
                } if (!a || !a.isParent) return null; b !== !0 && b !== !1 && (b = !a.open); if ((m = !!m) && b && j.apply(d.callback.beforeExpand, [d.treeId, a], !0) == !1) return null; else if (m && !b && j.apply(d.callback.beforeCollapse, [d.treeId, a], !0) == !1) return null; b && a.parentTId && i.expandCollapseParentNode(d, a.getParentNode(), b, !1); if (b === a.open && !c) return null; h.getRoot(d).expandTriggerFlag = m; !j.canAsync(d, a) && c ? i.expandCollapseSonNode(d, a, b, !0, l) : (a.open = !b, i.switchNode(this.setting, a), l()); return b
            },
            getNodes: function () { return h.getNodes(d) }, getNodeByParam: function (a, b, c) { return !a ? null : h.getNodeByParam(d, c ? c[d.data.key.children] : h.getNodes(d), a, b) }, getNodeByTId: function (a) { return h.getNodeCache(d, a) }, getNodesByParam: function (a, b, c) { return !a ? null : h.getNodesByParam(d, c ? c[d.data.key.children] : h.getNodes(d), a, b) }, getNodesByParamFuzzy: function (a, b, c) { return !a ? null : h.getNodesByParamFuzzy(d, c ? c[d.data.key.children] : h.getNodes(d), a, b) }, getNodesByFilter: function (a, b, c, f) {
                b = !!b; return !a || typeof a != "function" ?
b ? null : [] : h.getNodesByFilter(d, c ? c[d.data.key.children] : h.getNodes(d), a, b, f)
            }, getNodeIndex: function (a) { if (!a) return null; for (var b = d.data.key.children, c = a.parentTId ? a.getParentNode() : h.getRoot(d), f = 0, i = c[b].length; f < i; f++) if (c[b][f] == a) return f; return -1 }, getSelectedNodes: function () { for (var a = [], b = h.getRoot(d).curSelectedList, c = 0, f = b.length; c < f; c++) a.push(b[c]); return a }, isSelectedNode: function (a) { return h.isSelectedNode(d, a) }, reAsyncChildNodes: function (a, b, c) {
                if (this.setting.async.enable) {
                    var j = !a;
                    j && (a = h.getRoot(d)); if (b == "refresh") { for (var b = this.setting.data.key.children, m = 0, l = a[b] ? a[b].length : 0; m < l; m++) h.removeNodeCache(d, a[b][m]); h.removeSelectedNode(d); a[b] = []; j ? this.setting.treeObj.empty() : k(a, f.id.UL, d).empty() } i.asyncNode(this.setting, j ? null : a, !!c)
                }
            }, refresh: function () { this.setting.treeObj.empty(); var a = h.getRoot(d), b = a[d.data.key.children]; h.initRoot(d); a[d.data.key.children] = b; h.initCache(d); i.createNodes(d, 0, a[d.data.key.children], null, -1) }, removeChildNodes: function (a) {
                if (!a) return null;
                var b = a[d.data.key.children]; i.removeChildNodes(d, a); return b ? b : null
            }, removeNode: function (a, b) { a && (b = !!b, b && j.apply(d.callback.beforeRemove, [d.treeId, a], !0) == !1 || (i.removeNode(d, a), b && this.setting.treeObj.trigger(f.event.REMOVE, [d.treeId, a]))) }, selectNode: function (a, b) {
                function c() { var b = k(a, d).get(0); if (b) if (b.scrollIntoView) b.scrollIntoView(!1); else try { b.focus().blur() } catch (f) { } } if (a && j.uCanDo(d)) {
                    b = d.view.selectedMulti && b; if (a.parentTId) i.expandCollapseParentNode(d, a.getParentNode(), !0, !1, c);
                    else try { k(a, d).focus().blur() } catch (f) { } i.selectNode(d, a, b)
                }
            }, transformTozTreeNodes: function (a) { return h.transformTozTreeFormat(d, a) }, transformToArray: function (a) { return h.transformToArrayFormat(d, a) }, updateNode: function (a) { a && k(a, d).get(0) && j.uCanDo(d) && (i.setNodeName(d, a), i.setNodeTarget(d, a), i.setNodeUrl(d, a), i.setNodeLineIcos(d, a), i.setNodeFontCss(d, a)) }
        }; b.treeTools = c; h.setZTreeTools(d, c); b[a] && b[a].length > 0 ? i.createNodes(d, 0, b[a], null, -1) : d.async.enable && d.async.url && d.async.url !== "" && i.asyncNode(d);
        return c
    }
}; var O = q.fn.zTree, k = j.$, f = O.consts
})(jQuery);

/*
* JQuery combox v1.0
* http://www.hrbeta.com/
*
* Copyright (c) 2010 hurui
*
* Licensed same as jquery - MIT License
* http://www.opensource.org/licenses/mit-license.php
*
* email: hrbeta@foxmail.com
* Date: 2017年6月28日
*/
!function ($) {
    $.fn.combox = function (opts) {
        var defaults = {
            className: 'combo-box',
            allow_input_value: false,//输入内容是否必须选项一致,是否允许输入内容
            allow_chose_parent: false,//ztree是否允许选择父节点
            ajax: {
                url: '',
                type: 'GET',
                dataType: 'json',
                async: true,
                data: { 'ajaxMethod': 'FirstAnsyData' }//ajax数据，会把 默认方法名 和 data-*的数据拼在一起
            }
        }
        var options = $.extend(true, defaults, opts);
        return this.each(function () {
            var $this = $(this);
            $this.attr("autocomplete", "off");

            var treeid = "tree" + getRandom(999999);
            var divid = "div" + getRandom(999999);

            var height = $this.attr("div-height") ? "height:" + $this.attr("div-height") : "";

            $this.next("input[type=hidden]").after('<a class="jt"></a><div id="' + divid + '" class="combo-panel" style="' + height + '"><ul id="' + treeid + '" class="ztree"></ul></div>');

            $this.focus(function () {
                BindData(options, $this, treeid, divid);
            });
            $this.nextAll(".jt").click(function () {
                BindData(options, $this, treeid, divid);
            });

        });

        function getRandom(n) {
            return Math.floor(Math.random() * n + 1)
        }

        function BindData(options, $obj, treeid, divid) {
            if ($obj.attr("disabled"))
                return;
            var $div = $("#" + divid);
            if ($div.css("display") == "none") {
                if ($(document).height() - $obj.offset().top < 210) {
                    //判断控件下面是否够高度不够 向上显示
                    $div.css("bottom", "32px");
                    $div.show();
                }
                else
                    $div.show();
            }
            var zTreeObj;
            if ($("#" + treeid).children().length == 0) {
                //首次加载数据绑定
                if ($div.find(".loading").length == 0)
                    $div.append('<div class="loading"></div>');//开启loadin层
                //ajax 加载数据
                $.ajax({
                    url: options.ajax.url,
                    type: options.ajax.type,
                    dataType: options.ajax.dataType,
                    async: options.ajax.async,
                    data: $.extend(options.ajax.data, $obj.data()),
                    success: function (data) {
                        var tree = new zTree(options, $obj, $obj.nextAll("input[type=hidden]"), $div, treeid);
                        zTreeObj = $.fn.zTree.init($("#" + treeid), tree.setting, data);
                        if (options.allow_input_value)
                            $obj.on("focus", data, tree.focusKey).on("keyup", data, tree.searchNode);
                        else
                            $obj.on("blur", data, tree.blurKey).on("focus", data, tree.focusKey).on("keyup", data, tree.searchNode);
                        $div.find(".loading").remove();//移出loadin层
                    }
                });
            }
            $("body").on("mousedown", onBodyDown);
            $obj.nextAll("a").addClass("selectzq");

            function hideMenu() {
                $div.hide();
                $obj.nextAll("a").removeClass("selectzq")
                $("body").off("mousedown", onBodyDown);
            }
            function onBodyDown(event) {
                event.stopPropagation();
                if (!(event.target.id == divid || event.target.id == $obj[0].id || event.target.className == "jt" || $(event.target).parents("#" + divid).length > 0)) {
                    hideMenu();
                }
            }

            function zTree(options, input, hidden, div, treeid) {
                this.setting = {
                    data: {
                        simpleData: {
                            enable: true
                        }
                    },
                    callback: {
                        onClick: onClick,
                        beforeClick: BeforeClick
                    }
                };
                var Tsetting = {
                    data: {
                        simpleData: {
                            enable: true
                        }
                    },
                    callback: {
                        onClick: onClick,
                        beforeClick: BeforeClick
                    }
                };
                function BeforeClick(treeId, treeNode, clickFlag) {
                    if (options.allow_chose_parent) {
                        return true;
                    }
                    else {
                        if (treeNode.isParent) {
                            if (treeNode.open)
                                $.fn.zTree.getZTreeObj(treeid).expandNode(treeNode, false, false, false);
                            else
                                $.fn.zTree.getZTreeObj(treeid).expandNode(treeNode, true, false, false);
                            return false;
                        }
                        else
                            return true;
                    }
                }

                function onClick(event, treeId, treeNode) {
                    input.val(treeNode.name);
                    if (treeNode.id)
                        hidden.val(treeNode.id);
                    else
                        hidden.val(treeNode.name);
                    div.hide();
                    input.change();
                }

                this.blurKey = function blurKey(event) {
                    if (hidden.val() != "") {//选过的节点的值
                        var nodes = zTreeObj.transformToArray(zTreeObj.getNodes());
                        var node = CompareName(nodes, input.val()); //返回找到的节点
                        if (node != null && node.length > 0) {
                            if (node[0].id) {
                                if (hidden.val() != node[0].id) {//对比是否一致
                                    input.val("");
                                    hidden.val("");
                                    input.change();
                                }
                            }
                            else if (hidden.val() != node[0].name) {
                                input.val("");
                                hidden.val("");
                                input.change();
                            }
                        }
                        else {
                            input.val("");
                            hidden.val("");
                            input.change();
                        }
                    }
                    else {
                        input.val("");
                        input.change();
                    }
                }

                this.focusKey = function focusKey(event) {
                    $.fn.zTree.destroy(treeid);
                    $.fn.zTree.init($("#" + treeid), Tsetting, event.data);
                };

                var lastValue = "", nodeList = [];
                this.searchNode = function searchNode(event) {
                    var keyCode = event.keyCode;

                    if (keyCode === 9 || keyCode === 13
                      || keyCode === 37 || keyCode === 38
                      || keyCode === 39 || keyCode === 40
                    ) {
                        return;
                    }
                    var value = $.trim(input.val());
                    if (lastValue === value) return;
                    lastValue = value;
                    if (value === "") {
                        zTreeObj.destroy();
                        $.fn.zTree.init($("#" + treeid), Tsetting, event.data);
                        return
                    };

                    nodeList = $.fn.zTree._z.data.getNodesByFilter($.fn.zTree._z.data.getSetting(treeid), event.data, filter);
                    if (nodeList.length > 0) {
                        zTreeObj.destroy();
                        $.fn.zTree.init($("#" + treeid), Tsetting, nodeList);
                    }
                }

                /*ztree遍历全部节点，值是否相同*/
                function CompareName(nodelist, value) {
                    var nodes = [];
                    for (var i = 0; i < nodelist.length; i++) {
                        if (value == nodelist[i].name)
                            nodes.push(nodelist[i])
                    }
                    if (nodes.length > 0)
                        return nodes;
                    else
                        return null;
                }

                function filter(node) {
                    if (node.name.indexOf(lastValue) > -1)
                        return true;
                    var param = lastValue.split(' ');
                    var b = 0;
                    for (var i = 0; i < param.length; i++) {
                        if (node.name.indexOf(param[i]) > -1)
                            b += 1;
                    }
                    if (b == param.length)
                        return true;
                    else {
                        b = 0;
                        param = lastValue.split('');
                        for (var i = 0; i < param.length; i++) {
                            if (node.name.indexOf(param[i]) > -1)
                                b += 1;
                        }
                        if (b == param.length)
                            return true;
                        else
                            return false;
                    }
                }

            }
        }
    }
}(window.jQuery);