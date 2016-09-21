$(function () {
    $(".combo-box").each(function () {
        $(this).attr("autocomplete","off");
        var data = $(this).attr("data");
        var treeid = "tree" + data + getRandom(999999);
        var divid = "div" + data + getRandom(999999);

        if ($(this).attr("data-where"))
            var where = $(this).attr("data-where");
        else
            var where = "";
        if ($(this).attr("data-height"))
            var height = "height:" + $(this).attr("data-height");
        else
            var height = "";
        var hidden = $(this).next("input[type=hidden]");
        if ($(this).hasClass("size-S"))
            hidden.after('<a class="jt size-S"></a>');
        else
            hidden.after('<a class="jt"></a>');
        hidden.after('<div id="' + divid + '" class="combo-panel panel-body" style="width: 262px;display: none; position: absolute; z-index: 10;' + height + '"><ul id="' + treeid + '" class="ztree"></ul></div>');
        if ($(this).attr("disabled") != "disabled") {
            $(this).focus(function () {
                BindData(this, treeid, divid, where);
            });
            $(this).parent().find(".jt").click(function () {
                showorhide($(this).prevAll(".combo-box"), treeid, divid, where);
            });
        }
    })
})

function getRandom(n) {
    return Math.floor(Math.random() * n + 1)
}

function BindData(obj, treeid, divid, where, f, p) {
    if (!f) {
        id = $(obj).attr("data");
        var div = $("#" + divid);
        if (!p) {
            if (div.css("display") == "none") {
                if ($(document).height() - $(obj).offset().top < 210) {//判断控件下面是否够高度不够 向上显示
                    div.css("bottom", "32px");
                    div.show();
                }
                else
                    div.show();
            }
        }
        if ($("#" + treeid).children().length == 0) {//首次加载数据绑定
            div.append('<div class="loading"></div>');//开启loadin层
			//ajax 加载数据
            //$.ajax({
            //    url: '../ashx/getNodes.ashx',
            //    type: 'post',
            //    dataType: 'json',
            //    async: true,
            //    data: { 'ajaxMethod': 'FirstAnsyData', 'cid': id, 'where': where },
            //    success: function (data) {
            //        var tree = new zTree($(obj), $(obj).nextAll("input[type=hidden]"), $("#" + divid), treeid);
            //        $.fn.zTree.init($("#" + treeid), tree.setting, data);
            //        var key = $(obj);
            //        key.on("blur", data, tree.blurKey)
            //        .on("focus", data, tree.focusKey)    
			//.on("propertychange", data, tree.searchNode)
			//.on("input", data, tree.searchNode);
            //        div.find(".loading").remove();//移出loadin层
            //    }
            //});
			//demo方便显示这里数据写死
			var data=[
			{ name:"父节点1 - 展开", open:true,
				children: [
					{ name:"父节点11 - 折叠",
						children: [
							{ name:"叶子节点111"},
							{ name:"叶子节点112"},
							{ name:"叶子节点113"},
							{ name:"叶子节点114"}
						]},
					{ name:"父节点12 - 折叠",
						children: [
							{ name:"叶子节点121"},
							{ name:"叶子节点122"},
							{ name:"叶子节点123"},
							{ name:"叶子节点124"}
						]},
					{ name:"父节点13 - 没有子节点", isParent:true}
				]},
			{ name:"父节点2 - 折叠",
				children: [
					{ name:"父节点21 - 展开", open:true,
						children: [
							{ name:"叶子节点211"},
							{ name:"叶子节点212"},
							{ name:"叶子节点213"},
							{ name:"叶子节点214"}
						]},
					{ name:"父节点22 - 折叠",
						children: [
							{ name:"叶子节点221"},
							{ name:"叶子节点222"},
							{ name:"叶子节点223"},
							{ name:"叶子节点224"}
						]},
					{ name:"父节点23 - 折叠",
						children: [
							{ name:"叶子节点231"},
							{ name:"叶子节点232"},
							{ name:"叶子节点233"},
							{ name:"叶子节点234"}
						]}
				]},
			{ name:"父节点3 - 没有子节点", isParent:true}

		];
		//数据结束
			var tree = new zTree($(obj), $(obj).nextAll("input[type=hidden]"), $("#" + divid), treeid);
			        $.fn.zTree.init($("#" + treeid), tree.setting, data);
			        var key = $(obj);
			        key.on("blur", data, tree.blurKey)
			        .on("focus", data, tree.focusKey)    
			.on("propertychange", data, tree.searchNode)
			.on("input", data, tree.searchNode);
			        div.find(".loading").remove();//移出loadin层
        }
        if (!p) {
            $("body").bind("mousedown", onBodyDown);
        }
    };
    function hideMenu() {
        div.hide();
        $("body").unbind("mousedown", onBodyDown);
    }
    function onBodyDown(event) {
        event.stopPropagation();
        if (!(event.target.id == divid || event.target.id == obj.id || event.target.className == "jt" || $(event.target).parents("#" + divid).length > 0)) {
            hideMenu();
        }
    }
}

/*ztree显示或者隐藏ajax请求数据*/
//f=true 则不能不弹出下拉框 即不能更改
function showorhide(obj, treeid, divid, where, f) {
    if (!f) {
        id = obj.attr("data");
        var div = $("#" + divid);
        if (div.css("display") == "none") {
            if ($(document).height() - obj.offset().top < 210) {
                div.css("bottom", "30px");
                div.show();
            }
            else
                div.show();
            if ($("#" + treeid).children().length == 0) {//首次加载数据绑定
                div.append('<div class="loading"></div>');
                //ajax 加载数据
            //$.ajax({
            //    url: '../ashx/getNodes.ashx',
            //    type: 'post',
            //    dataType: 'json',
            //    async: true,
            //    data: { 'ajaxMethod': 'FirstAnsyData', 'cid': id, 'where': where },
            //    success: function (data) {
            //        var tree = new zTree($(obj), $(obj).nextAll("input[type=hidden]"), $("#" + divid), treeid);
            //        $.fn.zTree.init($("#" + treeid), tree.setting, data);
            //        var key = $(obj);
            //        key.on("blur", data, tree.blurKey)
            //        .on("focus", data, tree.focusKey)    
			//.on("propertychange", data, tree.searchNode)
			//.on("input", data, tree.searchNode);
            //        div.find(".loading").remove();//移出loadin层
            //    }
            //});
			//demo方便显示这里数据写死
			var data=[
			{ name:"父节点1 - 展开", open:true,
				children: [
					{ name:"父节点11 - 折叠",
						children: [
							{ name:"叶子节点111"},
							{ name:"叶子节点112"},
							{ name:"叶子节点113"},
							{ name:"叶子节点114"}
						]},
					{ name:"父节点12 - 折叠",
						children: [
							{ name:"叶子节点121"},
							{ name:"叶子节点122"},
							{ name:"叶子节点123"},
							{ name:"叶子节点124"}
						]},
					{ name:"父节点13 - 没有子节点", isParent:true}
				]},
			{ name:"父节点2 - 折叠",
				children: [
					{ name:"父节点21 - 展开", open:true,
						children: [
							{ name:"叶子节点211"},
							{ name:"叶子节点212"},
							{ name:"叶子节点213"},
							{ name:"叶子节点214"}
						]},
					{ name:"父节点22 - 折叠",
						children: [
							{ name:"叶子节点221"},
							{ name:"叶子节点222"},
							{ name:"叶子节点223"},
							{ name:"叶子节点224"}
						]},
					{ name:"父节点23 - 折叠",
						children: [
							{ name:"叶子节点231"},
							{ name:"叶子节点232"},
							{ name:"叶子节点233"},
							{ name:"叶子节点234"}
						]}
				]},
			{ name:"父节点3 - 没有子节点", isParent:true}

		];
		//数据结束
			var tree = new zTree($(obj), $(obj).nextAll("input[type=hidden]"), $("#" + divid), treeid);
			        $.fn.zTree.init($("#" + treeid), tree.setting, data);
			        var key = $(obj);
			        key.on("blur", data, tree.blurKey)
			        .on("focus", data, tree.focusKey)    
			.on("propertychange", data, tree.searchNode)
			.on("input", data, tree.searchNode);
			        div.find(".loading").remove();//移出loadin层
            }
            $("body").bind("mousedown", onBodyDown);
        }
        else {
            div.hide();
        }
    };
    function hideMenu() {
        div.hide();
        $("body").unbind("mousedown", onBodyDown);
    }
    function onBodyDown(event) {
        event.stopPropagation();
        if (!(event.target.id == divid || event.target.id == obj.id || event.target.className == "jt" || $(event.target).parents("#" + divid).length > 0)) {
            hideMenu();
        }
    }
}
function zTree(input, hidden, div, treeid) {
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

    function onClick(event, treeId, treeNode) {
        input.val(treeNode.name);
        hidden.val(treeNode.id);
        div.hide();
        input.change();
    }
    this.blurKey = function blurKey(event) {
        if (hidden.val() != "") {//选过的节点的值
            var treeObj = $.fn.zTree.getZTreeObj(treeid);
            var nodes = treeObj.transformToArray(treeObj.getNodes());
            var node = comparevalue(nodes, input.val()); //返回找到的节点
            if (node != null) {
                if (hidden.val() != node.id) {//对比是否一致
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
    var lastValue = "", nodeList = [], lastTimeStamp = "";
    var myVar;
    this.searchNode = function searchNode(event) {
        var zTree = $.fn.zTree.getZTreeObj(treeid);
        var value = $.trim(input.val());
        if (lastValue === value) return;
        lastValue = value;
        if (value === "") {
            $.fn.zTree.destroy(treeid);
            $.fn.zTree.init($("#" + treeid), Tsetting, event.data);
            return
        };
        if (lastTimeStamp == "")
            lastTimeStamp = event.timeStamp;
        else {
            if ((event.timeStamp - lastTimeStamp) < 1000) {
                myVar = setTimeout(function () {
                    var zTree = $.fn.zTree.getZTreeObj(treeid);
                    var value = $.trim(input.val());
                    if (lastValue === value) return;
                    lastValue = value;
                    if (value === "") {
                        $.fn.zTree.destroy(treeid);
                        $.fn.zTree.init($("#" + treeid), Tsetting, event.data);
                        return
                    };

                    nodeList = $.fn.zTree._z.data.getNodesByFilter($.fn.zTree._z.data.getSetting(treeid), event.data, filter);
                    if (nodeList.length > 0) {
                        $.fn.zTree.destroy(treeid);
                        $.fn.zTree.init($("#" + treeid), Tsetting, nodeList);
                    }
                }, 1000);
                return;
            }
            clearTimeout(myVar);
        }
        nodeList = $.fn.zTree._z.data.getNodesByFilter($.fn.zTree._z.data.getSetting(treeid), event.data, filter);
        if (nodeList.length > 0) {
            $.fn.zTree.destroy(treeid);
            $.fn.zTree.init($("#" + treeid), Tsetting, nodeList);
        }
    }
    /*ztree遍历全部节点，值是否相同*/
    function comparevalue(nodelist, value) {
        for (var i = 0; i < nodelist.length; i++) {
            if (value == nodelist[i].name)
                return nodelist[i];
        }
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
    };
}