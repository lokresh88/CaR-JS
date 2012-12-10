$$logEntry(this, "$$script$$");

// Input 0
(function() {
  return $$anonym143($$anonym128, $$anonym127, $$anonym126, $$anonym125, $$anonym124, $$anonym123, $$anonym122, $$anonym121, $$anonym99, Array, RegExp, $$anonym129, $$anonym120, $$anonym137, $$anonym136, $$anonym139, $$anonym138, $$anonym133, $$anonym132, $$anonym135, $, $$anonym134, $$anonym130, $$anonym131, $$anonym102, $$anonym101, $$anonym100, $$anonym106, $$anonym105, $$anonym104, $$anonym103, $$anonym109, $$anonym108, $$anonym107, $$anonym111, $$anonym110, $$anonym113, $$anonym112, $$anonym115,
  $$anonym114, $$anonym117, $$anonym116, $$anonym119, $$anonym118, $$anonym55, $$anonym56, $$anonym57, $$anonym58, $$anonym59, $$anonym61, $$anonym60, $$anonym63, $$anonym62, $$anonym65, $$anonym64, $$anonym68, $$anonym69, $$anonym66, $$anonym67, $$anonym72, $$anonym71, $$anonym70, $$anonym76, $$anonym75, $$anonym74, $$anonym73, $$anonym77, $$anonym78, $$anonym79, $$anonym85, $$anonym84, $$anonym87, $$anonym86, $$anonym81, $$anonym80, $$anonym83, $$anonym82, $$anonym88, $$anonym89, $$anonym90,
  $$anonym98, $$anonym97, $$anonym96, $$anonym95, $$anonym94, $$anonym93, $$anonym92, $$anonym91, $$anonym30, $$anonym31, $$anonym32, Date, $$anonym27, $$anonym26, $$anonym29, $$anonym28, $$anonym23, $$anonym22, $$anonym25, $$anonym24, $$anonym20, $$anonym21, $$anonym19, $$anonym18, $$anonym17, $$anonym16, jQuery, $$anonym15, $$anonym14, $$anonym13, $$anonym12, $$anonym11, $$anonym50, $$anonym51, $$anonym52, $$anonym53, $$anonym54, $$anonym45, $$anonym44, $$anonym47, $$anonym46, $$anonym49, $$anonym48,
  $$anonym42, $$anonym43, $$anonym40, $$anonym41, $$anonym36, $$anonym35, $$anonym34, $$anonym33, $$anonym39, $$anonym38, $$anonym37, $$anonym3, $$anonym2, $$anonym1, $$anonym0, $$anonym7, $$anonym6, $$anonym5, $$anonym4, $$anonym9, $$anonym8, $$anonym140, $$anonym142, $$anonym141, $$anonym10, this, arguments.callee)
})();


function $$anonym143($$anonym128, $$anonym127, $$anonym126, $$anonym125, $$anonym124, $$anonym123, $$anonym122, $$anonym121, $$anonym99, Array, RegExp, $$anonym129, $$anonym120, $$anonym137, $$anonym136, $$anonym139, $$anonym138, $$anonym133, $$anonym132, $$anonym135, $, $$anonym134, $$anonym130, $$anonym131, $$anonym102, $$anonym101, $$anonym100, $$anonym106, $$anonym105, $$anonym104, $$anonym103, $$anonym109, $$anonym108, $$anonym107, $$anonym111, $$anonym110, $$anonym113, $$anonym112, $$anonym115,
$$anonym114, $$anonym117, $$anonym116, $$anonym119, $$anonym118, $$anonym55, $$anonym56, $$anonym57, $$anonym58, $$anonym59, $$anonym61, $$anonym60, $$anonym63, $$anonym62, $$anonym65, $$anonym64, $$anonym68, $$anonym69, $$anonym66, $$anonym67, $$anonym72, $$anonym71, $$anonym70, $$anonym76, $$anonym75, $$anonym74, $$anonym73, $$anonym77, $$anonym78, $$anonym79, $$anonym85, $$anonym84, $$anonym87, $$anonym86, $$anonym81, $$anonym80, $$anonym83, $$anonym82, $$anonym88, $$anonym89, $$anonym90,
$$anonym98, $$anonym97, $$anonym96, $$anonym95, $$anonym94, $$anonym93, $$anonym92, $$anonym91, $$anonym30, $$anonym31, $$anonym32, Date, $$anonym27, $$anonym26, $$anonym29, $$anonym28, $$anonym23, $$anonym22, $$anonym25, $$anonym24, $$anonym20, $$anonym21, $$anonym19, $$anonym18, $$anonym17, $$anonym16, jQuery, $$anonym15, $$anonym14, $$anonym13, $$anonym12, $$anonym11, $$anonym50, $$anonym51, $$anonym52, $$anonym53, $$anonym54, $$anonym45, $$anonym44, $$anonym47, $$anonym46, $$anonym49, $$anonym48,
$$anonym42, $$anonym43, $$anonym40, $$anonym41, $$anonym36, $$anonym35, $$anonym34, $$anonym33, $$anonym39, $$anonym38, $$anonym37, $$anonym3, $$anonym2, $$anonym1, $$anonym0, $$anonym7, $$anonym6, $$anonym5, $$anonym4, $$anonym9, $$anonym8, $$anonym140, $$anonym142, $$anonym141, $$anonym10, $$_self, origCallee) {
  $$logEntry(this, "$$anonym143", arguments, origCallee);
  var taskList = new Array, taskOrder = new Array;
  var filter = {compl:0, search:"", due:""};
  var sortOrder;
  var searchTimer;
  var objPrio = {};
  var selTask = 0;
  var flag = {needAuth:false, isLogged:false, tagsChanged:true, readOnly:false, editFormChanged:false};
  var taskCnt = {total:0, past:0, today:0, soon:0};
  var tabLists = {_lists:{}, _length:0, _order:[], _alltasks:{}, clear:function() {
    return $$anonym0(this, arguments.callee)
  }, length:function() {
    return $$anonym1(this, arguments.callee)
  }, exists:function(id) {
    return $$anonym2(id, this, arguments.callee)
  }, add:function(list) {
    return $$anonym3(list, this, arguments.callee)
  }, replace:function(list) {
    return $$anonym4(list, this, arguments.callee)
  }, get:function(id) {
    return $$anonym5(id, this, arguments.callee)
  }, getAll:function() {
    return $$anonym6(i, this, arguments.callee)
  }, reorder:function(order) {
    return $$anonym7(order, this, arguments.callee)
  }};
  var curList = 0;
  var tagsList = [];
  var mytinytodo = window.mytinytodo = _mtt = {theme:{newTaskFlashColor:"#ffffaa", editTaskFlashColor:"#bbffaa", msgFlashColor:"#ffffff"}, actions:{}, menus:{}, mttUrl:"", templateUrl:"", options:{openList:0, singletab:false, autotag:false, tagPreview:true, tagPreviewDelay:700, saveShowNotes:false, firstdayofweek:1, touchDevice:false}, timers:{previewtag:0}, lang:{__lang:null, daysMin:[], daysLong:[], monthsShort:[], monthsLong:[], get:function(v) {
    return $$anonym8(v, this, arguments.callee)
  }, init:function(lang) {
    return $$anonym9(lang, this, arguments.callee)
  }}, pages:{current:{page:"tasks", pageClass:""}, prev:[]}, init:function(options) {
    return $$anonym70(options, $$anonym30, $$anonym31, $$anonym32, mttMenu, tabSelect, toggleAllNotes, completeTask, $$anonym27, $$anonym26, $$anonym29, $$anonym28, $$anonym23, $$anonym22, $$anonym25, $$anonym24, $$anonym20, $$anonym21, $, addEditTag, curList, $$anonym19, $$anonym18, $$anonym17, jQuery, $$anonym16, $$anonym15, $$anonym14, $$anonym13, $$anonym12, $$anonym11, saveTaskNote, cmenuOnListRenamed, $$anonym50, $$anonym51, $$anonym52, slmenuOnListsLoaded, $$anonym53, setTaskview, $$anonym54,
    listOrderChanged, showAuth, prioPopup, cmenuOnListAdded, $$anonym45, $$anonym44, $$anonym47, $$anonym46, $$anonym49, toggleEditAllTags, $$anonym48, editTask, hideTab, taskContextMenu, prioClick, $$anonym42, sortStart, $$anonym43, tasklistClick, $$anonym40, showEditForm, $$anonym41, saveTask, logout, $$anonym36, taskList, $$anonym35, $$anonym34, $$anonym33, $$anonym39, $$anonym38, cmenuOnListHidden, $$anonym37, $$anonym55, $$anonym56, $$anonym57, addFilterTag, submitNewTask, $$anonym58, $$anonym59,
    cmenuOnListsLoaded, flashError, tabmenuOnListSelected, slmenuSelect, searchTasks, $$anonym61, $$anonym60, $$anonym63, slmenuOnListRenamed, $$anonym62, $$anonym65, $$anonym64, $$anonym68, $$anonym69, $$anonym66, $$anonym67, getLiTaskId, listMenu, showSettings, flag, cancelTagFilter, saveSettings, orderChanged, doAuth, _mtt, $$anonym10, cmenuOnListOrderChanged, addList, findParentNode, slmenuOnListSelected, slmenuOnListAdded, loadTags, cancelTaskNote, cmenuOnListSelected, slmenuOnListHidden, liveSearchToggle,
    this, arguments.callee)
  }, log:function(v) {
    return $$anonym71(v, this, arguments.callee)
  }, addAction:function(action, proc) {
    return $$anonym72(action, proc, Array, this, arguments.callee)
  }, doAction:function(action, opts) {
    return $$anonym73(action, opts, i, this, arguments.callee)
  }, setOptions:function(opts) {
    return $$anonym74(opts, jQuery, this, arguments.callee)
  }, loadLists:function(onInit) {
    return $$anonym77(onInit, updateAccessStatus, tabLists, $, _mtt, $$anonym76, $$anonym75, tabSelect, filter, this, arguments.callee)
  }, duedatepickerformat:function() {
    return $$anonym79($$anonym78, this, arguments.callee)
  }, errorDenied:function() {
    return $$anonym80(flashError, this, arguments.callee)
  }, pageSet:function(page, pageClass) {
    return $$anonym81(page, pageClass, $, showhide, this, arguments.callee)
  }, pageBack:function() {
    return $$anonym82($, showhide, this, arguments.callee)
  }, applySingletab:function(yesno) {
    return $$anonym83(yesno, $, this, arguments.callee)
  }, filter:{_filters:[], clear:function() {
    return $$anonym84($, this, arguments.callee)
  }, addTag:function(tagId, tag, exclude) {
    return $$anonym85(tagId, tag, exclude, $, _mtt, i, this, arguments.callee)
  }, cancelTag:function(tagId) {
    return $$anonym86(tagId, $, i, this, arguments.callee)
  }, getTags:function(withExcluded) {
    return $$anonym87(withExcluded, i, this, arguments.callee)
  }}, parseAnchor:function() {
    return $$anonym88(this, arguments.callee)
  }};
  function addList() {
    $$logEntry(this, "addList", arguments, arguments.callee);
    var r = prompt(_mtt.lang.get("addList"), _mtt.lang.get("addListDefault"));
    if(r == null) {
      return $$logExit("$$anonym143", $$logExit("addList"))
    }
    _mtt.db.request("addList", {name:r}, function(json) {
      return $$anonym89(json, mytinytodo, tabLists, $, _mtt, arguments.callee)
    });
    $$logExit("addList")
  }
  function renameCurList() {
    $$logEntry(this, "renameCurList", arguments, arguments.callee);
    if(!curList) {
      return $$logExit("$$anonym143", $$logExit("renameCurList"))
    }
    var r = prompt(_mtt.lang.get("renameList"), dehtml(curList.name));
    if(r == null || r == "") {
      return $$logExit("$$anonym143", $$logExit("renameCurList"))
    }
    _mtt.db.request("renameList", {list:curList.id, name:r}, function(json) {
      return $$anonym90(json, mytinytodo, tabLists, $, arguments.callee)
    });
    $$logExit("renameCurList")
  }
  function deleteCurList() {
    $$logEntry(this, "deleteCurList", arguments, arguments.callee);
    if(!curList) {
      return $$logExit("$$anonym143", $$logExit("deleteCurList", false))
    }
    var r = confirm(_mtt.lang.get("deleteList"));
    if(!r) {
      return $$logExit("$$anonym143", $$logExit("deleteCurList"))
    }
    _mtt.db.request("deleteList", {list:curList.id}, function(json) {
      return $$anonym91(json, _mtt, arguments.callee)
    });
    $$logExit("deleteCurList")
  }
  function publishCurList() {
    $$logEntry(this, "publishCurList", arguments, arguments.callee);
    if(!curList) {
      return $$logExit("$$anonym143", $$logExit("publishCurList", false))
    }
    _mtt.db.request("publishList", {list:curList.id, publish:curList.published ? 0 : 1}, function(json) {
      return $$anonym92(json, $, curList, arguments.callee)
    });
    $$logExit("publishCurList")
  }
  function loadTasks(opts) {
    $$logEntry(this, "loadTasks", arguments, arguments.callee);
    if(!curList) {
      return $$logExit("$$anonym143", $$logExit("loadTasks", false))
    }
    setSort(curList.sort, 1);
    opts = opts || {};
    if(opts.clearTasklist) {
      $("#tasklist").html("");
      $("#total").html("0")
    }
    _mtt.db.request("loadTasks", {list:curList.id, compl:curList.showCompl, sort:curList.sort, search:filter.search, tag:_mtt.filter.getTags(true), setCompl:opts.setCompl}, function(json) {
      return $$anonym94(json, opts, $, changeTaskCnt, prepareTaskStr, taskOrder, taskList, $$anonym93, taskCnt, refreshTaskCnt, arguments.callee)
    });
    $$logExit("loadTasks")
  }
  function prepareTaskStr(item, noteExp) {
    $$logEntry(this, "prepareTaskStr", arguments, arguments.callee);
    var id = item.id;
    var prio = item.prio;
    return $$logExit("$$anonym143", $$logExit("prepareTaskStr", '<li id="taskrow_' + id + '" class="' + (item.compl ? "task-completed " : "") + item.dueClass + (item.note != "" ? " task-has-note" : "") + (curList.showNotes && item.note != "" || noteExp ? " task-expanded" : "") + prepareTagsClass(item.tags_ids) + '">' + '<div class="task-actions"><a href="#" class="taskactionbtn"></a></div>' + "\n" + '<div class="task-left"><div class="task-toggle"></div>' + '<input type="checkbox" ' + (flag.readOnly ?
    'disabled="disabled"' : "") + (item.compl ? 'checked="checked"' : "") + "/></div>" + "\n" + '<div class="task-middle"><div class="task-through-right">' + prepareDuedate(item) + '<span class="task-date-completed"><span title="' + item.dateInlineTitle + '">' + item.dateInline + "</span>&#8212;" + '<span title="' + item.dateCompletedInlineTitle + '">' + item.dateCompletedInline + "</span></span></div>" + "\n" + '<div class="task-through">' + preparePrio(prio, id) + '<span class="task-title">' +
    prepareHtml(item.title) + "</span> " + (curList.id == -1 ? '<span class="task-listname">' + tabLists.get(item.listId).name + "</span>" : "") + "\n" + prepareTagsStr(item) + '<span class="task-date">' + item.dateInlineTitle + "</span></div>" + '<div class="task-note-block">' + '<div id="tasknote' + id + '" class="task-note"><span>' + prepareHtml(item.note) + "</span></div>" + '<div id="tasknotearea' + id + '" class="task-note-area"><textarea id="notetext' + id + '"></textarea>' + '<span class="task-note-actions"><a href="#" class="mtt-action-note-save">' +
    _mtt.lang.get("actionNoteSave") + '</a> | <a href="#" class="mtt-action-note-cancel">' + _mtt.lang.get("actionNoteCancel") + "</a></span></div>" + "</div>" + "</div></li>\n"))
  }
  function prepareHtml(s) {
    $$logEntry(this, "prepareHtml", arguments, arguments.callee);
    s = s.replace(/(^|\s|>)(www\.([\w\#$%&~\/.\-\+;:=,\?\[\]@]+?))(,|\.|:|)?(?=\s|&quot;|&lt;|&gt;|\"|<|>|$)/gi, '$1<a href="http://$2" target="_blank">$2</a>$4');
    return $$logExit("$$anonym143", $$logExit("prepareHtml", s.replace(/(^|\s|>)((?:http|https|ftp):\/\/([\w\#$%&~\/.\-\+;:=,\?\[\]@]+?))(,|\.|:|)?(?=\s|&quot;|&lt;|&gt;|\"|<|>|$)/ig, '$1<a href="$2" target="_blank">$2</a>$4')))
  }
  function preparePrio(prio, id) {
    $$logEntry(this, "preparePrio", arguments, arguments.callee);
    var cl = "";
    var v = "";
    if(prio < 0) {
      cl = "prio-neg prio-neg-" + Math.abs(prio);
      v = "&#8722;" + Math.abs(prio)
    }else {
      if(prio > 0) {
        cl = "prio-pos prio-pos-" + prio;
        v = "+" + prio
      }else {
        cl = "prio-zero";
        v = "&#177;0"
      }
    }
    return $$logExit("$$anonym143", $$logExit("preparePrio", '<span class="task-prio ' + cl + '">' + v + "</span>"))
  }
  function prepareTagsStr(item) {
    $$logEntry(this, "prepareTagsStr", arguments, arguments.callee);
    if(!item.tags || item.tags == "") {
      return $$logExit("$$anonym143", $$logExit("prepareTagsStr", ""))
    }
    var a = item.tags.split(",");
    if(!a.length) {
      return $$logExit("$$anonym143", $$logExit("prepareTagsStr", ""))
    }
    var b = item.tags_ids.split(",");
    for(var i in a) {
      a[i] = '<a href="#" class="tag" tag="' + a[i] + '" tagid="' + b[i] + '">' + a[i] + "</a>"
    }
    return $$logExit("$$anonym143", $$logExit("prepareTagsStr", '<span class="task-tags">' + a.join(", ") + "</span>"))
  }
  function prepareTagsClass(ids) {
    $$logEntry(this, "prepareTagsClass", arguments, arguments.callee);
    if(!ids || ids == "") {
      return $$logExit("$$anonym143", $$logExit("prepareTagsClass", ""))
    }
    var a = ids.split(",");
    if(!a.length) {
      return $$logExit("$$anonym143", $$logExit("prepareTagsClass", ""))
    }
    for(var i in a) {
      a[i] = "tag-id-" + a[i]
    }
    return $$logExit("$$anonym143", $$logExit("prepareTagsClass", " " + a.join(" ")))
  }
  function prepareDuedate(item) {
    $$logEntry(this, "prepareDuedate", arguments, arguments.callee);
    if(!item.duedate) {
      return $$logExit("$$anonym143", $$logExit("prepareDuedate", ""))
    }
    return $$logExit("$$anonym143", $$logExit("prepareDuedate", '<span class="duedate" title="' + item.dueTitle + '"><span class="duedate-arrow">?</span> ' + item.dueStr + "</span>"))
  }
  function submitNewTask(form) {
    $$logEntry(this, "submitNewTask", arguments, arguments.callee);
    if(form.task.value == "") {
      return $$logExit("$$anonym143", $$logExit("submitNewTask", false))
    }
    _mtt.db.request("newTask", {list:curList.id, title:form.task.value, tag:_mtt.filter.getTags()}, function(json) {
      return $$anonym95(json, taskOrder, form, changeTaskOrder, $, prepareTaskStr, taskList, _mtt, taskCnt, refreshTaskCnt, arguments.callee)
    });
    flag.tagsChanged = true;
    return $$logExit("$$anonym143", $$logExit("submitNewTask", false))
  }
  function changeTaskOrder(id) {
    $$logEntry(this, "changeTaskOrder", arguments, arguments.callee);
    id = parseInt(id);
    if(taskOrder.length < 2) {
      return $$logExit("$$anonym143", $$logExit("changeTaskOrder"))
    }
    var oldOrder = taskOrder.slice();
    if(curList.sort == 0) {
      taskOrder.sort(function(a, b) {
        return $$anonym96(a, b, taskList, arguments.callee)
      })
    }else {
      if(curList.sort == 1) {
        taskOrder.sort(function(a, b) {
          return $$anonym97(a, b, taskList, arguments.callee)
        })
      }else {
        if(curList.sort == 101) {
          taskOrder.sort(function(a, b) {
            return $$anonym98(a, b, taskList, arguments.callee)
          })
        }else {
          if(curList.sort == 2) {
            taskOrder.sort(function(a, b) {
              return $$anonym99(a, b, taskList, arguments.callee)
            })
          }else {
            if(curList.sort == 102) {
              taskOrder.sort(function(a, b) {
                return $$anonym100(a, b, taskList, arguments.callee)
              })
            }else {
              if(curList.sort == 3) {
                taskOrder.sort(function(a, b) {
                  return $$anonym101(a, b, taskList, arguments.callee)
                })
              }else {
                if(curList.sort == 103) {
                  taskOrder.sort(function(a, b) {
                    return $$anonym102(a, b, taskList, arguments.callee)
                  })
                }else {
                  if(curList.sort == 4) {
                    taskOrder.sort(function(a, b) {
                      return $$anonym103(a, b, taskList, arguments.callee)
                    })
                  }else {
                    if(curList.sort == 104) {
                      taskOrder.sort(function(a, b) {
                        return $$anonym104(a, b, taskList, arguments.callee)
                      })
                    }else {
                      return $$logExit("$$anonym143", $$logExit("changeTaskOrder"))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if(oldOrder.toString() == taskOrder.toString()) {
      return $$logExit("$$anonym143", $$logExit("changeTaskOrder"))
    }
    if(id && taskList[id]) {
      var indx = $.inArray(id, taskOrder);
      if(indx == 0) {
        $("#tasklist").prepend($("#taskrow_" + id))
      }else {
        var after = taskOrder[indx - 1];
        $("#taskrow_" + after).after($("#taskrow_" + id))
      }
    }else {
      var o = $("#tasklist");
      for(var i in taskOrder) {
        o.append($("#taskrow_" + taskOrder[i]))
      }
    }
    $$logExit("changeTaskOrder")
  }
  function prioPopup(act, el, id) {
    $$logEntry(this, "prioPopup", arguments, arguments.callee);
    if(act == 0) {
      clearTimeout(objPrio.timer);
      return $$logExit("$$anonym143", $$logExit("prioPopup"))
    }
    var offset = $(el).offset();
    $("#priopopup").css({position:"absolute", top:offset.top + 1, left:offset.left + 1});
    objPrio.taskId = id;
    objPrio.el = el;
    objPrio.timer = setTimeout("$('#priopopup').show()", 300);
    $$logExit("prioPopup")
  }
  function prioClick(prio, el) {
    $$logEntry(this, "prioClick", arguments, arguments.callee);
    el.blur();
    prio = parseInt(prio);
    $("#priopopup").fadeOut("fast");
    setTaskPrio(objPrio.taskId, prio);
    $$logExit("prioClick")
  }
  function setTaskPrio(id, prio) {
    $$logEntry(this, "setTaskPrio", arguments, arguments.callee);
    _mtt.db.request("setPrio", {id:id, prio:prio});
    taskList[id].prio = prio;
    var $t = $("#taskrow_" + id);
    $t.find(".task-prio").replaceWith(preparePrio(prio, id));
    if(curList.sort != 0) {
      changeTaskOrder(id)
    }
    $t.effect("highlight", {color:_mtt.theme.editTaskFlashColor}, "normal");
    $$logExit("setTaskPrio")
  }
  function setSort(v, init) {
    $$logEntry(this, "setSort", arguments, arguments.callee);
    $("#listmenucontainer .sort-item").removeClass("mtt-item-checked").children(".mtt-sort-direction").text("");
    if(v == 0) {
      $("#sortByHand").addClass("mtt-item-checked")
    }else {
      if(v == 1 || v == 101) {
        $("#sortByPrio").addClass("mtt-item-checked").children(".mtt-sort-direction").text(v == 1 ? "?" : "?")
      }else {
        if(v == 2 || v == 102) {
          $("#sortByDueDate").addClass("mtt-item-checked").children(".mtt-sort-direction").text(v == 2 ? "?" : "?")
        }else {
          if(v == 3 || v == 103) {
            $("#sortByDateCreated").addClass("mtt-item-checked").children(".mtt-sort-direction").text(v == 3 ? "?" : "?")
          }else {
            if(v == 4 || v == 104) {
              $("#sortByDateModified").addClass("mtt-item-checked").children(".mtt-sort-direction").text(v == 4 ? "?" : "?")
            }else {
              return $$logExit("$$anonym143", $$logExit("setSort"))
            }
          }
        }
      }
    }
    curList.sort = v;
    if(v == 0 && !flag.readOnly) {
      $("#tasklist").sortable("enable")
    }else {
      $("#tasklist").sortable("disable")
    }
    if(!init) {
      changeTaskOrder();
      if(!flag.readOnly) {
        _mtt.db.request("setSort", {list:curList.id, sort:curList.sort})
      }
    }
    $$logExit("setSort")
  }
  function changeTaskCnt(task, dir, old) {
    $$logEntry(this, "changeTaskCnt", arguments, arguments.callee);
    if(dir > 0) {
      dir = 1
    }else {
      if(dir < 0) {
        dir = -1
      }
    }
    if(dir == 0 && old != null && task.dueClass != old.dueClass) {
      if(old.dueClass != "") {
        taskCnt[old.dueClass]--
      }
      if(task.dueClass != "") {
        taskCnt[task.dueClass]++
      }
    }else {
      if(dir == 0 && old == null) {
        if(!curList.showCompl && task.compl) {
          taskCnt.total--
        }
        if(task.dueClass != "") {
          taskCnt[task.dueClass] += task.compl ? -1 : 1
        }
      }
    }
    if(dir != 0) {
      if(task.dueClass != "" && !task.compl) {
        taskCnt[task.dueClass] += dir
      }
      taskCnt.total += dir
    }
    $$logExit("changeTaskCnt")
  }
  function refreshTaskCnt() {
    $$logEntry(this, "refreshTaskCnt", arguments, arguments.callee);
    $("#cnt_total").text(taskCnt.total);
    $("#cnt_past").text(taskCnt.past);
    $("#cnt_today").text(taskCnt.today);
    $("#cnt_soon").text(taskCnt.soon);
    if(filter.due == "") {
      $("#total").text(taskCnt.total)
    }else {
      if(taskCnt[filter.due] != null) {
        $("#total").text(taskCnt[filter.due])
      }
    }
    $$logExit("refreshTaskCnt")
  }
  function setTaskview(v) {
    $$logEntry(this, "setTaskview", arguments, arguments.callee);
    if(v == 0) {
      if(filter.due == "") {
        return $$logExit("$$anonym143", $$logExit("setTaskview"))
      }
      $("#taskview .btnstr").text(_mtt.lang.get("tasks"));
      $("#tasklist").removeClass("filter-" + filter.due);
      filter.due = "";
      $("#total").text(taskCnt.total)
    }else {
      if(v == "past" || v == "today" || v == "soon") {
        if(filter.due == v) {
          return $$logExit("$$anonym143", $$logExit("setTaskview"))
        }else {
          if(filter.due != "") {
            $("#tasklist").removeClass("filter-" + filter.due)
          }
        }
        $("#tasklist").addClass("filter-" + v);
        $("#taskview .btnstr").text(_mtt.lang.get("f_" + v));
        $("#total").text(taskCnt[v]);
        filter.due = v
      }
    }
    $$logExit("setTaskview")
  }
  function toggleAllNotes(show) {
    $$logEntry(this, "toggleAllNotes", arguments, arguments.callee);
    for(var id in taskList) {
      if(taskList[id].note == "") {
        continue
      }
      if(show) {
        $("#taskrow_" + id).addClass("task-expanded")
      }else {
        $("#taskrow_" + id).removeClass("task-expanded")
      }
    }
    curList.showNotes = show;
    if(_mtt.options.saveShowNotes) {
      _mtt.db.request("setShowNotesInList", {list:curList.id, shownotes:show}, function(json) {
        return $$anonym105(json, arguments.callee)
      })
    }
    $$logExit("toggleAllNotes")
  }
  function tabSelect(elementOrId) {
    $$logEntry(this, "tabSelect", arguments, arguments.callee);
    var id;
    if(typeof elementOrId == "number") {
      id = elementOrId
    }else {
      if(typeof elementOrId == "string") {
        id = parseInt(elementOrId)
      }else {
        id = $(elementOrId).attr("id");
        if(!id) {
          return $$logExit("$$anonym143", $$logExit("tabSelect"))
        }
        id = parseInt(id.split("_", 2)[1])
      }
    }
    if(!tabLists.exists(id)) {
      return $$logExit("$$anonym143", $$logExit("tabSelect"))
    }
    $("#lists .mtt-tabs-selected").removeClass("mtt-tabs-selected");
    $("#list_all").removeClass("mtt-tabs-selected");
    if(id == -1) {
      $("#list_all").addClass("mtt-tabs-selected").removeClass("mtt-tabs-hidden");
      $("#listmenucontainer .mtt-need-real-list").addClass("mtt-item-hidden")
    }else {
      $("#list_" + id).addClass("mtt-tabs-selected").removeClass("mtt-tabs-hidden");
      $("#listmenucontainer .mtt-need-real-list").removeClass("mtt-item-hidden")
    }
    if(curList.id != id) {
      if(id == -1) {
        $("#mtt_body").addClass("show-all-tasks")
      }else {
        $("#mtt_body").removeClass("show-all-tasks")
      }
      if(filter.search != "") {
        liveSearchToggle(0, 1)
      }
      mytinytodo.doAction("listSelected", tabLists.get(id))
    }
    curList = tabLists.get(id);
    if(curList.hidden) {
      curList.hidden = false;
      if(curList.id > 0) {
        _mtt.db.request("setHideList", {list:curList.id, hide:0})
      }
    }
    flag.tagsChanged = true;
    cancelTagFilter(0, 1);
    setTaskview(0);
    loadTasks({clearTasklist:1});
    $$logExit("tabSelect")
  }
  function listMenu(el) {
    $$logEntry(this, "listMenu", arguments, arguments.callee);
    if(!mytinytodo.menus.listMenu) {
      mytinytodo.menus.listMenu = new mttMenu("listmenucontainer", {onclick:listMenuClick})
    }
    mytinytodo.menus.listMenu.show(el);
    $$logExit("listMenu")
  }
  function listMenuClick(el, menu) {
    $$logEntry(this, "listMenuClick", arguments, arguments.callee);
    if(!el.id) {
      return $$logExit("$$anonym143", $$logExit("listMenuClick"))
    }
    switch(el.id) {
      case "btnAddList":
        addList();
        break;
      case "btnRenameList":
        renameCurList();
        break;
      case "btnDeleteList":
        deleteCurList();
        break;
      case "btnPublish":
        publishCurList();
        break;
      case "btnExportCSV":
        exportCurList("csv");
        break;
      case "btnExportICAL":
        exportCurList("ical");
        break;
      case "btnRssFeed":
        feedCurList();
        break;
      case "btnShowCompleted":
        showCompletedToggle();
        break;
      case "btnClearCompleted":
        clearCompleted();
        break;
      case "sortByHand":
        setSort(0);
        break;
      case "sortByPrio":
        setSort(curList.sort == 1 ? 101 : 1);
        break;
      case "sortByDueDate":
        setSort(curList.sort == 2 ? 102 : 2);
        break;
      case "sortByDateCreated":
        setSort(curList.sort == 3 ? 103 : 3);
        break;
      case "sortByDateModified":
        setSort(curList.sort == 4 ? 104 : 4);
        break
    }
    $$logExit("listMenuClick")
  }
  function deleteTask(id) {
    $$logEntry(this, "deleteTask", arguments, arguments.callee);
    if(!confirm(_mtt.lang.get("confirmDelete"))) {
      return $$logExit("$$anonym143", $$logExit("deleteTask", false))
    }
    _mtt.db.request("deleteTask", {id:id}, function(json) {
      return $$anonym107(json, id, taskOrder, $$anonym106, $, changeTaskCnt, taskList, refreshTaskCnt, arguments.callee)
    });
    flag.tagsChanged = true;
    return $$logExit("$$anonym143", $$logExit("deleteTask", false))
  }
  function completeTask(id, ch) {
    $$logEntry(this, "completeTask", arguments, arguments.callee);
    if(!taskList[id]) {
      return $$logExit("$$anonym143", $$logExit("completeTask"))
    }
    var compl = 0;
    if(ch.checked) {
      compl = 1
    }
    _mtt.db.request("completeTask", {id:id, compl:compl, list:curList.id}, function(json) {
      return $$anonym111(json, $$anonym110, changeTaskOrder, $, prepareTaskStr, changeTaskCnt, $$anonym109, $$anonym108, _mtt, id, taskOrder, curList, taskList, refreshTaskCnt, arguments.callee)
    });
    return $$logExit("$$anonym143", $$logExit("completeTask", false))
  }
  function toggleTaskNote(id) {
    $$logEntry(this, "toggleTaskNote", arguments, arguments.callee);
    var aArea = "#tasknotearea" + id;
    if($(aArea).css("display") == "none") {
      $("#notetext" + id).val(taskList[id].noteText);
      $(aArea).show();
      $("#tasknote" + id).hide();
      $("#taskrow_" + id).addClass("task-expanded");
      $("#notetext" + id).focus()
    }else {
      cancelTaskNote(id)
    }
    return $$logExit("$$anonym143", $$logExit("toggleTaskNote", false))
  }
  function cancelTaskNote(id) {
    $$logEntry(this, "cancelTaskNote", arguments, arguments.callee);
    if(taskList[id].note == "") {
      $("#taskrow_" + id).removeClass("task-expanded")
    }
    $("#tasknotearea" + id).hide();
    $("#tasknote" + id).show();
    return $$logExit("$$anonym143", $$logExit("cancelTaskNote", false))
  }
  function saveTaskNote(id) {
    $$logEntry(this, "saveTaskNote", arguments, arguments.callee);
    _mtt.db.request("editNote", {id:id, note:$("#notetext" + id).val()}, function(json) {
      return $$anonym112(json, prepareHtml, id, cancelTaskNote, $, taskList, arguments.callee)
    });
    return $$logExit("$$anonym143", $$logExit("saveTaskNote", false))
  }
  function editTask(id) {
    $$logEntry(this, "editTask", arguments, arguments.callee);
    var item = taskList[id];
    if(!item) {
      return $$logExit("$$anonym143", $$logExit("editTask", false))
    }
    var form = document.getElementById("taskedit_form");
    form.task.value = dehtml(item.title);
    form.note.value = item.noteText;
    form.id.value = item.id;
    form.tags.value = item.tags.split(",").join(", ");
    form.duedate.value = item.duedate;
    form.prio.value = item.prio;
    $("#taskedit-date .date-created>span").text(item.date);
    if(item.compl) {
      $("#taskedit-date .date-completed").show().find("span").text(item.dateCompleted)
    }else {
      $("#taskedit-date .date-completed").hide()
    }
    toggleEditAllTags(0);
    showEditForm();
    return $$logExit("$$anonym143", $$logExit("editTask", false))
  }
  function clearEditForm() {
    $$logEntry(this, "clearEditForm", arguments, arguments.callee);
    var form = document.getElementById("taskedit_form");
    form.task.value = "";
    form.note.value = "";
    form.tags.value = "";
    form.duedate.value = "";
    form.prio.value = "0";
    form.id.value = "";
    toggleEditAllTags(0);
    $$logExit("clearEditForm")
  }
  function showEditForm(isAdd) {
    $$logEntry(this, "showEditForm", arguments, arguments.callee);
    var form = document.getElementById("taskedit_form");
    if(isAdd) {
      clearEditForm();
      $("#page_taskedit").removeClass("mtt-inedit").addClass("mtt-inadd");
      form.isadd.value = 1;
      if(_mtt.options.autotag) {
        form.tags.value = _mtt.filter.getTags()
      }
      if($("#task").val() != "") {
        _mtt.db.request("parseTaskStr", {list:curList.id, title:$("#task").val(), tag:_mtt.filter.getTags()}, function(json) {
          return $$anonym113(json, form, $, arguments.callee)
        })
      }
    }else {
      $("#page_taskedit").removeClass("mtt-inadd").addClass("mtt-inedit");
      form.isadd.value = 0
    }
    flag.editFormChanged = false;
    _mtt.pageSet("taskedit");
    $$logExit("showEditForm")
  }
  function saveTask(form) {
    $$logEntry(this, "saveTask", arguments, arguments.callee);
    if(flag.readOnly) {
      return $$logExit("$$anonym143", $$logExit("saveTask", false))
    }
    if(form.isadd.value != 0) {
      return $$logExit("$$anonym143", $$logExit("saveTask", submitFullTask(form)))
    }
    _mtt.db.request("editTask", {id:form.id.value, title:form.task.value, note:form.note.value, prio:form.prio.value, tags:form.tags.value, duedate:form.duedate.value}, function(json) {
      return $$anonym115(json, $$anonym114, changeTaskOrder, $, changeTaskCnt, prepareTaskStr, _mtt, curList, taskList, refreshTaskCnt, arguments.callee)
    });
    $("#edittags").flushCache();
    flag.tagsChanged = true;
    return $$logExit("$$anonym143", $$logExit("saveTask", false))
  }
  function toggleEditAllTags(show) {
    $$logEntry(this, "toggleEditAllTags", arguments, arguments.callee);
    if(show) {
      if(curList.id == -1) {
        var taskId = document.getElementById("taskedit_form").id.value;
        loadTags(taskList[taskId].listId, fillEditAllTags)
      }else {
        if(flag.tagsChanged) {
          loadTags(curList.id, fillEditAllTags)
        }else {
          fillEditAllTags()
        }
      }
      showhide($("#alltags_hide"), $("#alltags_show"))
    }else {
      $("#alltags").hide();
      showhide($("#alltags_show"), $("#alltags_hide"))
    }
    $$logExit("toggleEditAllTags")
  }
  function fillEditAllTags() {
    $$logEntry(this, "fillEditAllTags", arguments, arguments.callee);
    var a = [];
    for(var i = tagsList.length - 1;i >= 0;i--) {
      a.push('<a href="#" class="tag" tag="' + tagsList[i].tag + '">' + tagsList[i].tag + "</a>")
    }
    $("#alltags .tags-list").html(a.join(", "));
    $("#alltags").show();
    $$logExit("fillEditAllTags")
  }
  function addEditTag(tag) {
    $$logEntry(this, "addEditTag", arguments, arguments.callee);
    var v = $("#edittags").val();
    if(v == "") {
      $("#edittags").val(tag);
      return $$logExit("$$anonym143", $$logExit("addEditTag"))
    }
    var r = v.search(new RegExp("(^|,)\\s*" + tag + "\\s*(,|$)"));
    if(r < 0) {
      $("#edittags").val(v + ", " + tag)
    }
    $$logExit("addEditTag")
  }
  function loadTags(listId, callback) {
    $$logEntry(this, "loadTags", arguments, arguments.callee);
    _mtt.db.request("tagCloud", {list:listId}, function(json) {
      return $$anonym117(json, flag, $, $$anonym116, callback, arguments.callee)
    });
    $$logExit("loadTags")
  }
  function cancelTagFilter(tagId, dontLoadTasks) {
    $$logEntry(this, "cancelTagFilter", arguments, arguments.callee);
    if(tagId) {
      _mtt.filter.cancelTag(tagId)
    }else {
      _mtt.filter.clear()
    }
    if(dontLoadTasks == null || !dontLoadTasks) {
      loadTasks()
    }
    $$logExit("cancelTagFilter")
  }
  function addFilterTag(tag, tagId, exclude) {
    $$logEntry(this, "addFilterTag", arguments, arguments.callee);
    if(!_mtt.filter.addTag(tagId, tag, exclude)) {
      return $$logExit("$$anonym143", $$logExit("addFilterTag", false))
    }
    loadTasks();
    $$logExit("addFilterTag")
  }
  function liveSearchToggle(toSearch, dontLoad) {
    $$logEntry(this, "liveSearchToggle", arguments, arguments.callee);
    if(toSearch) {
      $("#search").focus()
    }else {
      if($("#search").val() != "") {
        filter.search = "";
        $("#search").val("");
        $("#searchbarkeyword").text("");
        $("#searchbar").hide();
        $("#search_close").hide();
        if(!dontLoad) {
          loadTasks()
        }
      }
      $("#search").blur()
    }
    $$logExit("liveSearchToggle")
  }
  function searchTasks(force) {
    $$logEntry(this, "searchTasks", arguments, arguments.callee);
    var newkeyword = $("#search").val();
    if(newkeyword == filter.search && !force) {
      return $$logExit("$$anonym143", $$logExit("searchTasks", false))
    }
    filter.search = newkeyword;
    $("#searchbarkeyword").text(filter.search);
    if(filter.search != "") {
      $("#searchbar").fadeIn("fast")
    }else {
      $("#searchbar").fadeOut("fast")
    }
    loadTasks();
    return $$logExit("$$anonym143", $$logExit("searchTasks", false))
  }
  function submitFullTask(form) {
    $$logEntry(this, "submitFullTask", arguments, arguments.callee);
    if(flag.readOnly) {
      return $$logExit("$$anonym143", $$logExit("submitFullTask", false))
    }
    _mtt.db.request("fullNewTask", {list:curList.id, tag:_mtt.filter.getTags(), title:form.task.value, note:form.note.value, prio:form.prio.value, tags:form.tags.value, duedate:form.duedate.value}, function(json) {
      return $$anonym118(json, taskOrder, form, changeTaskOrder, $, changeTaskCnt, prepareTaskStr, taskList, _mtt, refreshTaskCnt, arguments.callee)
    });
    $("#edittags").flushCache();
    flag.tagsChanged = true;
    return $$logExit("$$anonym143", $$logExit("submitFullTask", false))
  }
  function sortStart(event, ui) {
    $$logEntry(this, "sortStart", arguments, arguments.callee);
    sortOrder = $($$_self).sortable("toArray");
    $$logExit("sortStart")
  }
  function orderChanged(event, ui) {
    $$logEntry(this, "orderChanged", arguments, arguments.callee);
    if(!ui.item[0]) {
      return $$logExit("$$anonym143", $$logExit("orderChanged"))
    }
    var itemId = ui.item[0].id;
    var n = $($$_self).sortable("toArray");
    for(var i = 0;i < sortOrder.length;i++) {
      if(sortOrder[i] == "") {
        sortOrder.splice(i, 1);
        i--
      }
    }
    if(n.toString() == sortOrder.toString()) {
      return $$logExit("$$anonym143", $$logExit("orderChanged"))
    }
    var h0 = {};
    for(var j = 0;j < sortOrder.length;j++) {
      h0[sortOrder[j]] = j
    }
    var h1 = {};
    for(var j = 0;j < n.length;j++) {
      h1[n[j]] = j;
      taskOrder[j] = parseInt(n[j].split("_")[1])
    }
    var o = [];
    var diff;
    var replaceOW = taskList[sortOrder[h1[itemId]].split("_")[1]].ow;
    for(var j in h0) {
      diff = h1[j] - h0[j];
      if(diff != 0) {
        var a = j.split("_");
        if(j == itemId) {
          diff = replaceOW - taskList[a[1]].ow
        }
        o.push({id:a[1], diff:diff});
        taskList[a[1]].ow += diff
      }
    }
    _mtt.db.request("changeOrder", {order:o});
    $$logExit("orderChanged")
  }
  function mttMenu(container, options) {
    $$logEntry(this, "mttMenu", arguments, arguments.callee);
    var menu = $$_self;
    $$_self.container = document.getElementById(container);
    $$_self.$container = $($$_self.container);
    $$_self.menuOpen = false;
    $$_self.options = options || {};
    $$_self.submenu = [];
    $$_self.curSubmenu = null;
    $$_self.showTimer = null;
    $$_self.ts = (new Date).getTime();
    $$_self.container.mttmenu = $$_self.ts;
    $$_self.$container.find("li").click(function() {
      return $$anonym119(menu, this, arguments.callee)
    }).each(function() {
      return $$anonym125($$anonym124, $$anonym123, $$anonym122, $, $$anonym121, menu, $$anonym120, mttMenu, this, arguments.callee)
    });
    $$_self.onclick = function(item, fromMenu) {
      return $$anonym126(item, fromMenu, $, menu, this, arguments.callee)
    };
    $$_self.hide = function() {
      return $$anonym127(i, this, arguments.callee)
    };
    $$_self.close = function(event) {
      return $$anonym128(event, $, this, arguments.callee)
    };
    $$_self.show = function(caller) {
      return $$anonym130(caller, $, $$anonym129, this, arguments.callee)
    };
    $$_self.showSub = function() {
      return $$anonym131($, this, arguments.callee)
    };
    $$_self.destroy = function() {
      return $$anonym132(i, this, arguments.callee)
    };
    $$logExit("mttMenu")
  }
  function taskContextMenu(el, id) {
    $$logEntry(this, "taskContextMenu", arguments, arguments.callee);
    if(!_mtt.menus.cmenu) {
      _mtt.menus.cmenu = new mttMenu("taskcontextcontainer", {onclick:taskContextClick, beforeShow:function() {
        return $$anonym133($, taskList, _mtt, arguments.callee)
      }})
    }
    _mtt.menus.cmenu.tag = id;
    _mtt.menus.cmenu.show(el);
    $$logExit("taskContextMenu")
  }
  function taskContextClick(el, menu) {
    $$logEntry(this, "taskContextClick", arguments, arguments.callee);
    if(!el.id) {
      return $$logExit("$$anonym143", $$logExit("taskContextClick"))
    }
    var taskId = parseInt(_mtt.menus.cmenu.tag);
    var id = el.id, value;
    var a = id.split(":");
    if(a.length == 2) {
      id = a[0];
      value = a[1]
    }
    switch(id) {
      case "cmenu_edit":
        editTask(taskId);
        break;
      case "cmenu_note":
        toggleTaskNote(taskId);
        break;
      case "cmenu_delete":
        deleteTask(taskId);
        break;
      case "cmenu_prio":
        setTaskPrio(taskId, parseInt(value));
        break;
      case "cmenu_list":
        if(menu.$caller && menu.$caller.attr("id") == "cmenu_move") {
          moveTaskToList(taskId, value)
        }
        break
    }
    $$logExit("taskContextClick")
  }
  function moveTaskToList(taskId, listId) {
    $$logEntry(this, "moveTaskToList", arguments, arguments.callee);
    if(curList.id == listId) {
      return $$logExit("$$anonym143", $$logExit("moveTaskToList"))
    }
    _mtt.db.request("moveTask", {id:taskId, from:curList.id, to:listId}, function(json) {
      return $$anonym136(json, taskId, changeTaskOrder, $$anonym135, $, $$anonym134, changeTaskCnt, prepareTaskStr, _mtt, taskOrder, curList, taskList, refreshTaskCnt, arguments.callee)
    });
    $("#edittags").flushCache();
    flag.tagsChanged = true;
    $$logExit("moveTaskToList")
  }
  function cmenuOnListsLoaded() {
    $$logEntry(this, "cmenuOnListsLoaded", arguments, arguments.callee);
    if(_mtt.menus.cmenu) {
      _mtt.menus.cmenu.destroy()
    }
    _mtt.menus.cmenu = null;
    var s = "";
    var all = tabLists.getAll();
    for(var i in all) {
      s += '<li id="cmenu_list:' + all[i].id + '" class="' + (all[i].hidden ? "mtt-list-hidden" : "") + '">' + all[i].name + "</li>"
    }
    $("#cmenulistscontainer ul").html(s);
    $$logExit("cmenuOnListsLoaded")
  }
  function cmenuOnListAdded(list) {
    $$logEntry(this, "cmenuOnListAdded", arguments, arguments.callee);
    if(_mtt.menus.cmenu) {
      _mtt.menus.cmenu.destroy()
    }
    _mtt.menus.cmenu = null;
    $("#cmenulistscontainer ul").append('<li id="cmenu_list:' + list.id + '">' + list.name + "</li>");
    $$logExit("cmenuOnListAdded")
  }
  function cmenuOnListRenamed(list) {
    $$logEntry(this, "cmenuOnListRenamed", arguments, arguments.callee);
    $("#cmenu_list\\:" + list.id).text(list.name);
    $$logExit("cmenuOnListRenamed")
  }
  function cmenuOnListSelected(list) {
    $$logEntry(this, "cmenuOnListSelected", arguments, arguments.callee);
    $("#cmenulistscontainer li").removeClass("mtt-item-disabled");
    $("#cmenu_list\\:" + list.id).addClass("mtt-item-disabled").removeClass("mtt-list-hidden");
    $$logExit("cmenuOnListSelected")
  }
  function cmenuOnListOrderChanged() {
    $$logEntry(this, "cmenuOnListOrderChanged", arguments, arguments.callee);
    cmenuOnListsLoaded();
    $("#cmenu_list\\:" + curList.id).addClass("mtt-item-disabled");
    $$logExit("cmenuOnListOrderChanged")
  }
  function cmenuOnListHidden(list) {
    $$logEntry(this, "cmenuOnListHidden", arguments, arguments.callee);
    $("#cmenu_list\\:" + list.id).addClass("mtt-list-hidden");
    $$logExit("cmenuOnListHidden")
  }
  function tabmenuOnListSelected(list) {
    $$logEntry(this, "tabmenuOnListSelected", arguments, arguments.callee);
    if(list.published) {
      $("#btnPublish").addClass("mtt-item-checked");
      $("#btnRssFeed").removeClass("mtt-item-disabled")
    }else {
      $("#btnPublish").removeClass("mtt-item-checked");
      $("#btnRssFeed").addClass("mtt-item-disabled")
    }
    if(list.showCompl) {
      $("#btnShowCompleted").addClass("mtt-item-checked")
    }else {
      $("#btnShowCompleted").removeClass("mtt-item-checked")
    }
    $$logExit("tabmenuOnListSelected")
  }
  function listOrderChanged(event, ui) {
    $$logEntry(this, "listOrderChanged", arguments, arguments.callee);
    var a = $($$_self).sortable("toArray");
    var order = [];
    for(var i in a) {
      order.push(a[i].split("_")[1])
    }
    tabLists.reorder(order);
    _mtt.db.request("changeListOrder", {order:order});
    _mtt.doAction("listOrderChanged", {order:order});
    $$logExit("listOrderChanged")
  }
  function showCompletedToggle() {
    $$logEntry(this, "showCompletedToggle", arguments, arguments.callee);
    var act = curList.showCompl ? 0 : 1;
    curList.showCompl = tabLists.get(curList.id).showCompl = act;
    if(act) {
      $("#btnShowCompleted").addClass("mtt-item-checked")
    }else {
      $("#btnShowCompleted").removeClass("mtt-item-checked")
    }
    loadTasks({setCompl:1});
    $$logExit("showCompletedToggle")
  }
  function clearCompleted() {
    $$logEntry(this, "clearCompleted", arguments, arguments.callee);
    if(!curList) {
      return $$logExit("$$anonym143", $$logExit("clearCompleted", false))
    }
    var r = confirm(_mtt.lang.get("clearCompleted"));
    if(!r) {
      return $$logExit("$$anonym143", $$logExit("clearCompleted"))
    }
    _mtt.db.request("clearCompletedInList", {list:curList.id}, function(json) {
      return $$anonym137(json, flag, curList, loadTasks, arguments.callee)
    });
    $$logExit("clearCompleted")
  }
  function tasklistClick(e) {
    $$logEntry(this, "tasklistClick", arguments, arguments.callee);
    var node = e.target.nodeName.toUpperCase();
    if(node == "SPAN" || node == "LI" || node == "DIV") {
      var li = findParentNode(e.target, "LI");
      if(li) {
        if(selTask && li.id != selTask) {
          $("#" + selTask).removeClass("clicked doubleclicked")
        }
        selTask = li.id;
        if($(li).is(".clicked")) {
          $(li).toggleClass("doubleclicked")
        }else {
          $(li).addClass("clicked")
        }
      }
    }
    $$logExit("tasklistClick")
  }
  function showhide(a, b) {
    $$logEntry(this, "showhide", arguments, arguments.callee);
    a.show();
    b.hide();
    $$logExit("showhide")
  }
  function findParentNode(el, node) {
    $$logEntry(this, "findParentNode", arguments, arguments.callee);
    if(el.nodeName.toUpperCase() == node) {
      return $$logExit("$$anonym143", $$logExit("findParentNode", el))
    }
    if(!el.parentNode) {
      return $$logExit("$$anonym143", $$logExit("findParentNode", null))
    }
    while(el.parentNode) {
      el = el.parentNode;
      if(el.nodeName.toUpperCase() == node) {
        return $$logExit("$$anonym143", $$logExit("findParentNode", el))
      }
    }
    $$logExit("findParentNode")
  }
  function getLiTaskId(el) {
    $$logEntry(this, "getLiTaskId", arguments, arguments.callee);
    var li = findParentNode(el, "LI");
    if(!li || !li.id) {
      return $$logExit("$$anonym143", $$logExit("getLiTaskId", 0))
    }
    return $$logExit("$$anonym143", $$logExit("getLiTaskId", li.id.split("_", 2)[1]))
  }
  function isParentId(el, id) {
    $$logEntry(this, "isParentId", arguments, arguments.callee);
    if(el.id && $.inArray(el.id, id) != -1) {
      return $$logExit("$$anonym143", $$logExit("isParentId", true))
    }
    if(!el.parentNode) {
      return $$logExit("$$anonym143", $$logExit("isParentId", null))
    }
    return $$logExit("$$anonym143", $$logExit("isParentId", isParentId(el.parentNode, id)))
  }
  function dehtml(str) {
    $$logEntry(this, "dehtml", arguments, arguments.callee);
    return $$logExit("$$anonym143", $$logExit("dehtml", str.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")))
  }
  function slmenuOnListsLoaded() {
    $$logEntry(this, "slmenuOnListsLoaded", arguments, arguments.callee);
    if(_mtt.menus.selectlist) {
      _mtt.menus.selectlist.destroy();
      _mtt.menus.selectlist = null
    }
    var s = "";
    var all = tabLists.getAll();
    for(var i in all) {
      s += '<li id="slmenu_list:' + all[i].id + '" class="' + (all[i].id == curList.id ? "mtt-item-checked" : "") + " list-id-" + all[i].id + (all[i].hidden ? " mtt-list-hidden" : "") + '"><div class="menu-icon"></div><a href="#list/' + all[i].id + '">' + all[i].name + "</a></li>"
    }
    $("#slmenucontainer ul>.slmenu-lists-begin").nextAll().remove();
    $("#slmenucontainer ul>.slmenu-lists-begin").after(s);
    $$logExit("slmenuOnListsLoaded")
  }
  function slmenuOnListRenamed(list) {
    $$logEntry(this, "slmenuOnListRenamed", arguments, arguments.callee);
    $("#slmenucontainer li.list-id-" + list.id).find("a").html(list.name);
    $$logExit("slmenuOnListRenamed")
  }
  function slmenuOnListAdded(list) {
    $$logEntry(this, "slmenuOnListAdded", arguments, arguments.callee);
    if(_mtt.menus.selectlist) {
      _mtt.menus.selectlist.destroy();
      _mtt.menus.selectlist = null
    }
    $("#slmenucontainer ul").append('<li id="slmenu_list:' + list.id + '" class="list-id-' + list.id + '"><div class="menu-icon"></div><a href="#list/' + list.id + '">' + list.name + "</a></li>");
    $$logExit("slmenuOnListAdded")
  }
  function slmenuOnListSelected(list) {
    $$logEntry(this, "slmenuOnListSelected", arguments, arguments.callee);
    $("#slmenucontainer li").removeClass("mtt-item-checked");
    $("#slmenucontainer li.list-id-" + list.id).addClass("mtt-item-checked").removeClass("mtt-list-hidden");
    $$logExit("slmenuOnListSelected")
  }
  function slmenuOnListHidden(list) {
    $$logEntry(this, "slmenuOnListHidden", arguments, arguments.callee);
    $("#slmenucontainer li.list-id-" + list.id).addClass("mtt-list-hidden");
    $$logExit("slmenuOnListHidden")
  }
  function slmenuSelect(el, menu) {
    $$logEntry(this, "slmenuSelect", arguments, arguments.callee);
    if(!el.id) {
      return $$logExit("$$anonym143", $$logExit("slmenuSelect"))
    }
    var id = el.id, value;
    var a = id.split(":");
    if(a.length == 2) {
      id = a[0];
      value = a[1]
    }
    if(id == "slmenu_list") {
      tabSelect(parseInt(value))
    }
    return $$logExit("$$anonym143", $$logExit("slmenuSelect", false))
  }
  function exportCurList(format) {
    $$logEntry(this, "exportCurList", arguments, arguments.callee);
    if(!curList) {
      return $$logExit("$$anonym143", $$logExit("exportCurList"))
    }
    if(!format.match(/^[a-z0-9-]+$/i)) {
      return $$logExit("$$anonym143", $$logExit("exportCurList"))
    }
    window.location.href = _mtt.mttUrl + "export.php?list=" + curList.id + "&format=" + format;
    $$logExit("exportCurList")
  }
  function feedCurList() {
    $$logEntry(this, "feedCurList", arguments, arguments.callee);
    if(!curList) {
      return $$logExit("$$anonym143", $$logExit("feedCurList"))
    }
    window.location.href = _mtt.mttUrl + "feed.php?list=" + curList.id;
    $$logExit("feedCurList")
  }
  function hideTab(listId) {
    $$logEntry(this, "hideTab", arguments, arguments.callee);
    if(typeof listId != "number") {
      var id = $(listId).attr("id");
      if(!id) {
        return $$logExit("$$anonym143", $$logExit("hideTab"))
      }
      listId = parseInt(id.split("_", 2)[1])
    }
    if(!tabLists.get(listId)) {
      return $$logExit("$$anonym143", $$logExit("hideTab", false))
    }
    var listIdToSelect = 0;
    if(curList.id == listId) {
      var all = tabLists.getAll();
      for(var i in all) {
        if(all[i].id != curList.id && !all[i].hidden) {
          listIdToSelect = all[i].id;
          break
        }
      }
      if(!listIdToSelect) {
        return $$logExit("$$anonym143", $$logExit("hideTab", false))
      }
    }
    if(listId == -1) {
      $("#list_all").addClass("mtt-tabs-hidden").removeClass("mtt-tabs-selected")
    }else {
      $("#list_" + listId).addClass("mtt-tabs-hidden").removeClass("mtt-tabs-selected")
    }
    tabLists.get(listId).hidden = true;
    if(listId > 0) {
      _mtt.db.request("setHideList", {list:listId, hide:1});
      _mtt.doAction("listHidden", tabLists.get(listId))
    }
    if(listIdToSelect) {
      tabSelect(listIdToSelect)
    }
    $$logExit("hideTab")
  }
  function flashError(str, details) {
    $$logEntry(this, "flashError", arguments, arguments.callee);
    $("#msg>.msg-text").text(str);
    $("#msg>.msg-details").text(details);
    $("#loading").hide();
    $("#msg").addClass("mtt-error").effect("highlight", {color:_mtt.theme.msgFlashColor}, 700);
    $$logExit("flashError")
  }
  function flashInfo(str, details) {
    $$logEntry(this, "flashInfo", arguments, arguments.callee);
    $("#msg>.msg-text").text(str);
    $("#msg>.msg-details").text(details);
    $("#loading").hide();
    $("#msg").addClass("mtt-info").effect("highlight", {color:_mtt.theme.msgFlashColor}, 700);
    $$logExit("flashInfo")
  }
  function toggleMsgDetails() {
    $$logEntry(this, "toggleMsgDetails", arguments, arguments.callee);
    var el = $("#msg>.msg-details");
    if(!el) {
      return $$logExit("$$anonym143", $$logExit("toggleMsgDetails"))
    }
    if(el.css("display") == "none") {
      el.show()
    }else {
      el.hide()
    }
    $$logExit("toggleMsgDetails")
  }
  function updateAccessStatus() {
    $$logEntry(this, "updateAccessStatus", arguments, arguments.callee);
    if(flag.needAuth) {
      $("#bar_auth").show();
      if(flag.isLogged) {
        showhide($("#bar_logout"), $("#bar_login"));
        $("#bar .menu-owner").show();
        $("#bar .bar-delim").show()
      }else {
        showhide($("#bar_login"), $("#bar_logout"));
        $("#bar .menu-owner").hide();
        $("#bar .bar-delim").hide()
      }
    }else {
      $("#bar .menu-owner").show()
    }
    if(flag.needAuth && !flag.isLogged) {
      flag.readOnly = true;
      $("#bar_public").show();
      $("#mtt_body").addClass("readonly");
      liveSearchToggle(1);
      $("#btnRenameList,#btnDeleteList,#btnClearCompleted,#btnPublish").remove()
    }else {
      flag.readOnly = false;
      $("#mtt_body").removeClass("readonly");
      $("#bar_public").hide();
      liveSearchToggle(0)
    }
    $("#page_ajax").hide();
    $$logExit("updateAccessStatus")
  }
  function showAuth(el) {
    $$logEntry(this, "showAuth", arguments, arguments.callee);
    var w = $("#authform");
    if(w.css("display") == "none") {
      var offset = $(el).offset();
      w.css({position:"absolute", top:offset.top + el.offsetHeight + 3, left:offset.left + el.offsetWidth - w.outerWidth()}).show();
      $("#password").focus()
    }else {
      w.hide();
      el.blur()
    }
    $$logExit("showAuth")
  }
  function doAuth(form) {
    $$logEntry(this, "doAuth", arguments, arguments.callee);
    $.post(mytinytodo.mttUrl + "ajax.php?login", {login:1, password:form.password.value}, "json", function(json) {
      return $$anonym138(json, flag, form, $, _mtt, flashError, arguments.callee)
    });
    $("#authform").hide();
    $$logExit("doAuth")
  }
  function logout() {
    $$logEntry(this, "logout", arguments, arguments.callee);
    $.post(mytinytodo.mttUrl + "ajax.php?logout", {logout:1}, "json", function(json) {
      return $$anonym139(json, flag, arguments.callee)
    });
    return $$logExit("$$anonym143", $$logExit("logout", false))
  }
  function showSettings() {
    $$logEntry(this, "showSettings", arguments, arguments.callee);
    if(_mtt.pages.current.page == "ajax" && _mtt.pages.current.pageClass == "settings") {
      return $$logExit("$$anonym143", $$logExit("showSettings", false))
    }
    $("#page_ajax").load(_mtt.mttUrl + "settings.php?ajax=yes", null, function() {
      return $$anonym140(_mtt, arguments.callee)
    });
    return $$logExit("$$anonym143", $$logExit("showSettings", false))
  }
  function saveSettings(frm) {
    $$logEntry(this, "saveSettings", arguments, arguments.callee);
    if(!frm) {
      return $$logExit("$$anonym143", $$logExit("saveSettings", false))
    }
    var params = {save:"ajax"};
    $(frm).find("input:text,input:password,input:checked,select").filter(":enabled").each(function() {
      return $$anonym141(params, this, arguments.callee)
    });
    $(frm).find(":submit").attr("disabled", "disabled").blur();
    $.post(_mtt.mttUrl + "settings.php", params, "json", function(json) {
      return $$anonym142(json, _mtt, flashInfo, arguments.callee)
    });
    $$logExit("saveSettings")
  }
  $$logExit("$$anonym143")
};

function $$anonym0($$_self, origCallee) {
  $$logEntry(this, "$$anonym0", arguments, origCallee);
  $$_self._lists = {};
  $$_self._length = 0;
  $$_self._order = [];
  $$_self._alltasks = {id:-1, showCompl:0, sort:3};
  $$logExit("$$anonym0")
}
function $$anonym1($$_self, origCallee) {
  $$logEntry(this, "$$anonym1", arguments, origCallee);
  return $$logExit("$$anonym1", $$_self._length)
}
function $$anonym2(id, $$_self, origCallee) {
  $$logEntry(this, "$$anonym2", arguments, origCallee);
  if($$_self._lists[id] || id == -1) {
    return $$logExit("$$anonym2", true)
  }else {
    return $$logExit("$$anonym2", false)
  }
}
function $$anonym3(list, $$_self, origCallee) {
  $$logEntry(this, "$$anonym3", arguments, origCallee);
  $$_self._lists[list.id] = list;
  $$_self._length++;
  $$_self._order.push(list.id);
  $$logExit("$$anonym3")
}
function $$anonym4(list, $$_self, origCallee) {
  $$logEntry(this, "$$anonym4", arguments, origCallee);
  $$_self._lists[list.id] = list;
  $$logExit("$$anonym4")
}
function $$anonym5(id, $$_self, origCallee) {
  $$logEntry(this, "$$anonym5", arguments, origCallee);
  if(id == -1) {
    return $$logExit("$$anonym5", $$_self._alltasks)
  }else {
    return $$logExit("$$anonym5", $$_self._lists[id])
  }
}
function $$anonym6(i, $$_self, origCallee) {
  $$logEntry(this, "$$anonym6", arguments, origCallee);
  var r = [];
  for(var i in $$_self._order) {
    r.push($$_self._lists[$$_self._order[i]])
  }
  return $$logExit("$$anonym6", r)
}
function $$anonym7(order, $$_self, origCallee) {
  $$logEntry(this, "$$anonym7", arguments, origCallee);
  $$_self._order = order;
  $$logExit("$$anonym7")
}
function $$anonym8(v, $$_self, origCallee) {
  $$logEntry(this, "$$anonym8", arguments, origCallee);
  if($$_self.__lang[v]) {
    return $$logExit("$$anonym8", $$_self.__lang[v])
  }else {
    return $$logExit("$$anonym8", v)
  }
}
function $$anonym9(lang, $$_self, origCallee) {
  $$logEntry(this, "$$anonym9", arguments, origCallee);
  $$_self.__lang = lang;
  $$_self.daysMin = $$_self.__lang.daysMin;
  $$_self.daysLong = $$_self.__lang.daysLong;
  $$_self.monthsShort = $$_self.__lang.monthsMin;
  $$_self.monthsLong = $$_self.__lang.monthsLong;
  $$logExit("$$anonym9")
}
function $$anonym10(addList, origCallee) {
  $$logEntry(this, "$$anonym10", arguments, origCallee);
  addList();
  $$logExit("$$anonym10")
}
function $$anonym11(event, mttMenu, _mtt, slmenuSelect, $$_self, origCallee) {
  $$logEntry(this, "$$anonym11", arguments, origCallee);
  if(event.metaKey || event.ctrlKey) {
    _mtt.applySingletab(!_mtt.options.singletab);
    return $$logExit("$$anonym11", false)
  }
  if(!_mtt.menus.selectlist) {
    _mtt.menus.selectlist = new mttMenu("slmenucontainer", {onclick:slmenuSelect})
  }
  _mtt.menus.selectlist.show($$_self);
  $$logExit("$$anonym11")
}
function $$anonym12(submitNewTask, $$_self, origCallee) {
  $$logEntry(this, "$$anonym12", arguments, origCallee);
  submitNewTask($$_self);
  return $$logExit("$$anonym12", false)
}
function $$anonym13($, origCallee) {
  $$logEntry(this, "$$anonym13", arguments, origCallee);
  $("#newtask_form").submit();
  $$logExit("$$anonym13")
}
function $$anonym14(showEditForm, origCallee) {
  $$logEntry(this, "$$anonym14", arguments, origCallee);
  showEditForm(1);
  return $$logExit("$$anonym14", false)
}
function $$anonym15(event, $, $$_self, origCallee) {
  $$logEntry(this, "$$anonym15", arguments, origCallee);
  if(event.keyCode == 27) {
    $($$_self).val("")
  }
  $$logExit("$$anonym15")
}
function $$anonym16($, origCallee) {
  $$logEntry(this, "$$anonym16", arguments, origCallee);
  $("#task_placeholder").removeClass("placeholding");
  $("#toolbar").addClass("mtt-intask");
  $$logExit("$$anonym16")
}
function $$anonym17($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym17", arguments, origCallee);
  if("" == $($$_self).val()) {
    $("#task_placeholder").addClass("placeholding")
  }
  $("#toolbar").removeClass("mtt-intask");
  $$logExit("$$anonym17")
}
function $$anonym18(searchTasks, origCallee) {
  $$logEntry(this, "$$anonym18", arguments, origCallee);
  searchTasks(1);
  return $$logExit("$$anonym18", false)
}
function $$anonym19(liveSearchToggle, origCallee) {
  $$logEntry(this, "$$anonym19", arguments, origCallee);
  liveSearchToggle(0);
  return $$logExit("$$anonym19", false)
}
function $$anonym20(searchTasks, origCallee) {
  $$logEntry(this, "$$anonym20", arguments, origCallee);
  searchTasks();
  $$logExit("$$anonym20")
}
function $$anonym21(event, $$anonym20, $, searchTasks, $$_self, origCallee) {
  $$logEntry(this, "$$anonym21", arguments, origCallee);
  if(event.keyCode == 27) {
    return $$logExit("$$anonym21")
  }
  if($($$_self).val() == "") {
    $("#search_close").hide()
  }else {
    $("#search_close").show()
  }
  clearTimeout(searchTimer);
  searchTimer = setTimeout(400, function() {
    return $$anonym20(searchTasks, arguments.callee)
  });
  $$logExit("$$anonym21")
}
function $$anonym22(event, $, searchTasks, liveSearchToggle, $$_self, origCallee) {
  $$logEntry(this, "$$anonym22", arguments, origCallee);
  if(event.keyCode == 27) {
    if($($$_self).val() != "") {
      $($$_self).val("");
      $("#search_close").hide();
      searchTasks()
    }else {
      liveSearchToggle(0)
    }
    return $$logExit("$$anonym22", false)
  }
  $$logExit("$$anonym22")
}
function $$anonym23($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym23", arguments, origCallee);
  $("#toolbar").addClass("mtt-insearch");
  $($$_self).focus();
  $$logExit("$$anonym23")
}
function $$anonym24($, origCallee) {
  $$logEntry(this, "$$anonym24", arguments, origCallee);
  $("#toolbar").removeClass("mtt-insearch");
  $$logExit("$$anonym24")
}
function $$anonym25(mttMenu, _mtt, $$_self, origCallee) {
  $$logEntry(this, "$$anonym25", arguments, origCallee);
  if(!_mtt.menus.taskview) {
    _mtt.menus.taskview = new mttMenu("taskviewcontainer")
  }
  _mtt.menus.taskview.show($$_self);
  $$logExit("$$anonym25")
}
function $$anonym26($, cancelTagFilter, $$_self, origCallee) {
  $$logEntry(this, "$$anonym26", arguments, origCallee);
  cancelTagFilter($($$_self).attr("tagid"));
  $$logExit("$$anonym26")
}
function $$anonym27($, origCallee) {
  $$logEntry(this, "$$anonym27", arguments, origCallee);
  $("#tagcloudload").hide();
  $$logExit("$$anonym27")
}
function $$anonym28(loadTags, flag, $, curList, $$anonym27, origCallee) {
  $$logEntry(this, "$$anonym28", arguments, origCallee);
  if(flag.tagsChanged) {
    $("#tagcloudcontent").html("");
    $("#tagcloudload").show();
    loadTags(curList.id, function() {
      return $$anonym27($, arguments.callee)
    })
  }
  $$logExit("$$anonym28")
}
function $$anonym29(loadTags, flag, $, curList, $$anonym27, mttMenu, $$anonym28, _mtt, $$_self, origCallee) {
  $$logEntry(this, "$$anonym29", arguments, origCallee);
  if(!_mtt.menus.tagcloud) {
    _mtt.menus.tagcloud = new mttMenu("tagcloud", {beforeShow:function() {
      return $$anonym28(loadTags, flag, $, curList, $$anonym27, arguments.callee)
    }, adjustWidth:true})
  }
  _mtt.menus.tagcloud.show($$_self);
  $$logExit("$$anonym29")
}
function $$anonym30(_mtt, origCallee) {
  $$logEntry(this, "$$anonym30", arguments, origCallee);
  if(_mtt.menus.tagcloud) {
    _mtt.menus.tagcloud.close()
  }
  $$logExit("$$anonym30")
}
function $$anonym31(addFilterTag, $, _mtt, $$_self, origCallee) {
  $$logEntry(this, "$$anonym31", arguments, origCallee);
  addFilterTag($($$_self).attr("tag"), $($$_self).attr("tagid"));
  if(_mtt.menus.tagcloud) {
    _mtt.menus.tagcloud.close()
  }
  return $$logExit("$$anonym31", false)
}
function $$anonym32(toggleAllNotes, $$_self, origCallee) {
  $$logEntry(this, "$$anonym32", arguments, origCallee);
  toggleAllNotes(1);
  $$_self.blur();
  return $$logExit("$$anonym32", false)
}
function $$anonym33(toggleAllNotes, $$_self, origCallee) {
  $$logEntry(this, "$$anonym33", arguments, origCallee);
  toggleAllNotes(0);
  $$_self.blur();
  return $$logExit("$$anonym33", false)
}
function $$anonym34(setTaskview, $$_self, origCallee) {
  $$logEntry(this, "$$anonym34", arguments, origCallee);
  if($$_self.id == "view_tasks") {
    setTaskview(0)
  }else {
    if($$_self.id == "view_past") {
      setTaskview("past")
    }else {
      if($$_self.id == "view_today") {
        setTaskview("today")
      }else {
        if($$_self.id == "view_soon") {
          setTaskview("soon")
        }
      }
    }
  }
  $$logExit("$$anonym34")
}
function $$anonym35(event, hideTab, tabSelect, $$_self, origCallee) {
  $$logEntry(this, "$$anonym35", arguments, origCallee);
  if(event.metaKey || event.ctrlKey) {
    hideTab($$_self);
    return $$logExit("$$anonym35", false)
  }
  tabSelect($$_self);
  return $$logExit("$$anonym35", false)
}
function $$anonym36(event, hideTab, tabSelect, origCallee) {
  $$logEntry(this, "$$anonym36", arguments, origCallee);
  if(event.metaKey || event.ctrlKey) {
    hideTab(-1);
    return $$logExit("$$anonym36", false)
  }
  tabSelect(-1);
  return $$logExit("$$anonym36", false)
}
function $$anonym37(listMenu, $$_self, origCallee) {
  $$logEntry(this, "$$anonym37", arguments, origCallee);
  listMenu($$_self);
  return $$logExit("$$anonym37", false)
}
function $$anonym38(event, listMenu, $$_self, origCallee) {
  $$logEntry(this, "$$anonym38", arguments, origCallee);
  listMenu($$_self);
  return $$logExit("$$anonym38", false)
}
function $$anonym39(prioClick, $$_self, origCallee) {
  $$logEntry(this, "$$anonym39", arguments, origCallee);
  prioClick(-1, $$_self);
  $$logExit("$$anonym39")
}
function $$anonym40(prioClick, $$_self, origCallee) {
  $$logEntry(this, "$$anonym40", arguments, origCallee);
  prioClick(0, $$_self);
  $$logExit("$$anonym40")
}
function $$anonym41(prioClick, $$_self, origCallee) {
  $$logEntry(this, "$$anonym41", arguments, origCallee);
  prioClick(1, $$_self);
  $$logExit("$$anonym41")
}
function $$anonym42(prioClick, $$_self, origCallee) {
  $$logEntry(this, "$$anonym42", arguments, origCallee);
  prioClick(2, $$_self);
  $$logExit("$$anonym42")
}
function $$anonym43($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym43", arguments, origCallee);
  $($$_self).hide();
  $$logExit("$$anonym43")
}
function $$anonym44(toggleEditAllTags, origCallee) {
  $$logEntry(this, "$$anonym44", arguments, origCallee);
  toggleEditAllTags(1);
  return $$logExit("$$anonym44", false)
}
function $$anonym45(toggleEditAllTags, origCallee) {
  $$logEntry(this, "$$anonym45", arguments, origCallee);
  toggleEditAllTags(0);
  return $$logExit("$$anonym45", false)
}
function $$anonym46(saveTask, $$_self, origCallee) {
  $$logEntry(this, "$$anonym46", arguments, origCallee);
  return $$logExit("$$anonym46", saveTask($$_self))
}
function $$anonym47($, addEditTag, $$_self, origCallee) {
  $$logEntry(this, "$$anonym47", arguments, origCallee);
  addEditTag($($$_self).attr("tag"));
  return $$logExit("$$anonym47", false)
}
function $$anonym48(taskList, origCallee) {
  $$logEntry(this, "$$anonym48", arguments, origCallee);
  var taskId = document.getElementById("taskedit_form").id.value;
  return $$logExit("$$anonym48", taskList[taskId].listId)
}
function $$anonym49(flag, origCallee) {
  $$logEntry(this, "$$anonym49", arguments, origCallee);
  flag.editFormChanged = true;
  $$logExit("$$anonym49")
}
function $$anonym50(editTask, findParentNode, $$_self, origCallee) {
  $$logEntry(this, "$$anonym50", arguments, origCallee);
  if(document.selection && document.selection.empty && document.selection.createRange().text) {
    document.selection.empty()
  }else {
    if(window.getSelection) {
      window.getSelection().removeAllRanges()
    }
  }
  var li = findParentNode($$_self, "LI");
  if(li && li.id) {
    var id = li.id.split("_", 2)[1];
    if(id) {
      editTask(parseInt(id))
    }
  }
  $$logExit("$$anonym50")
}
function $$anonym51(taskContextMenu, getLiTaskId, $$_self, origCallee) {
  $$logEntry(this, "$$anonym51", arguments, origCallee);
  var id = parseInt(getLiTaskId($$_self));
  if(id) {
    taskContextMenu($$_self, id)
  }
  return $$logExit("$$anonym51", false)
}
function $$anonym52(completeTask, getLiTaskId, $$_self, origCallee) {
  $$logEntry(this, "$$anonym52", arguments, origCallee);
  var id = parseInt(getLiTaskId($$_self));
  if(id) {
    completeTask(id, $$_self)
  }
  $$logExit("$$anonym52")
}
function $$anonym53($, getLiTaskId, $$_self, origCallee) {
  $$logEntry(this, "$$anonym53", arguments, origCallee);
  var id = getLiTaskId($$_self);
  if(id) {
    $("#taskrow_" + id).toggleClass("task-expanded")
  }
  return $$logExit("$$anonym53", false)
}
function $$anonym54(event, addFilterTag, $, _mtt, $$_self, origCallee) {
  $$logEntry(this, "$$anonym54", arguments, origCallee);
  clearTimeout(_mtt.timers.previewtag);
  $("#tasklist li").removeClass("not-in-tagpreview");
  addFilterTag($($$_self).attr("tag"), $($$_self).attr("tagid"), event.metaKey || event.ctrlKey ? true : false);
  return $$logExit("$$anonym54", false)
}
function $$anonym55(event, prioPopup, getLiTaskId, $$_self, origCallee) {
  $$logEntry(this, "$$anonym55", arguments, origCallee);
  var id = parseInt(getLiTaskId($$_self));
  if(!id) {
    return $$logExit("$$anonym55")
  }
  if(event.type == "mouseover") {
    prioPopup(1, $$_self, id)
  }else {
    prioPopup(0, $$_self)
  }
  $$logExit("$$anonym55")
}
function $$anonym56(cancelTaskNote, getLiTaskId, $$_self, origCallee) {
  $$logEntry(this, "$$anonym56", arguments, origCallee);
  var id = parseInt(getLiTaskId($$_self));
  if(id) {
    cancelTaskNote(id)
  }
  return $$logExit("$$anonym56", false)
}
function $$anonym57(saveTaskNote, getLiTaskId, $$_self, origCallee) {
  $$logEntry(this, "$$anonym57", arguments, origCallee);
  var id = parseInt(getLiTaskId($$_self));
  if(id) {
    saveTaskNote(id)
  }
  return $$logExit("$$anonym57", false)
}
function $$anonym58($, sel, origCallee) {
  $$logEntry(this, "$$anonym58", arguments, origCallee);
  $("#tasklist " + sel).addClass("not-in-tagpreview");
  $$logExit("$$anonym58")
}
function $$anonym59(event, $$anonym58, $, _mtt, $$_self, origCallee) {
  $$logEntry(this, "$$anonym59", arguments, origCallee);
  var cl = "tag-id-" + $($$_self).attr("tagid");
  var sel = event.metaKey || event.ctrlKey ? "li." + cl : "li:not(." + cl + ")";
  if(event.type == "mouseover") {
    _mtt.timers.previewtag = setTimeout(_mtt.options.tagPreviewDelay, function() {
      return $$anonym58($, sel, arguments.callee)
    })
  }else {
    clearTimeout(_mtt.timers.previewtag);
    $("#tasklist li").removeClass("not-in-tagpreview")
  }
  $$logExit("$$anonym59")
}
function $$anonym60(r, s, $, origCallee) {
  $$logEntry(this, "$$anonym60", arguments, origCallee);
  $("#msg").hide().removeClass("mtt-error mtt-info").find(".msg-details").hide();
  $("#loading").show();
  $$logExit("$$anonym60")
}
function $$anonym61(r, s, $, origCallee) {
  $$logEntry(this, "$$anonym61", arguments, origCallee);
  $("#loading").fadeOut();
  $$logExit("$$anonym61")
}
function $$anonym62(event, request, settings, _mtt, flashError, origCallee) {
  $$logEntry(this, "$$anonym62", arguments, origCallee);
  var errtxt;
  if(request.status == 0) {
    errtxt = "Bad connection"
  }else {
    if(request.status != 200) {
      errtxt = "HTTP: " + request.status + "/" + request.statusText
    }else {
      errtxt = request.responseText
    }
  }
  flashError(_mtt.lang.get("error"), errtxt);
  $$logExit("$$anonym62")
}
function $$anonym63($, origCallee) {
  $$logEntry(this, "$$anonym63", arguments, origCallee);
  $("#msg>.msg-details").toggle();
  $$logExit("$$anonym63")
}
function $$anonym64(showAuth, $$_self, origCallee) {
  $$logEntry(this, "$$anonym64", arguments, origCallee);
  showAuth($$_self);
  return $$logExit("$$anonym64", false)
}
function $$anonym65(logout, origCallee) {
  $$logEntry(this, "$$anonym65", arguments, origCallee);
  logout();
  return $$logExit("$$anonym65", false)
}
function $$anonym66(doAuth, $$_self, origCallee) {
  $$logEntry(this, "$$anonym66", arguments, origCallee);
  doAuth($$_self);
  return $$logExit("$$anonym66", false)
}
function $$anonym67(saveSettings, $$_self, origCallee) {
  $$logEntry(this, "$$anonym67", arguments, origCallee);
  saveSettings($$_self);
  return $$logExit("$$anonym67", false)
}
function $$anonym68(_mtt, $$_self, origCallee) {
  $$logEntry(this, "$$anonym68", arguments, origCallee);
  _mtt.pageBack();
  $$_self.blur();
  return $$logExit("$$anonym68", false)
}
function $$anonym69(flag, _mtt, origCallee) {
  $$logEntry(this, "$$anonym69", arguments, origCallee);
  if(_mtt.pages.current.page == "taskedit" && flag.editFormChanged) {
    return $$logExit("$$anonym69", _mtt.lang.get("confirmLeave"))
  }
  $$logExit("$$anonym69")
}
function $$anonym70(options, $$anonym30, $$anonym31, $$anonym32, mttMenu, tabSelect, toggleAllNotes, completeTask, $$anonym27, $$anonym26, $$anonym29, $$anonym28, $$anonym23, $$anonym22, $$anonym25, $$anonym24, $$anonym20, $$anonym21, $, addEditTag, curList, $$anonym19, $$anonym18, $$anonym17, jQuery, $$anonym16, $$anonym15, $$anonym14, $$anonym13, $$anonym12, $$anonym11, saveTaskNote, cmenuOnListRenamed, $$anonym50, $$anonym51, $$anonym52, slmenuOnListsLoaded, $$anonym53, setTaskview, $$anonym54,
listOrderChanged, showAuth, prioPopup, cmenuOnListAdded, $$anonym45, $$anonym44, $$anonym47, $$anonym46, $$anonym49, toggleEditAllTags, $$anonym48, editTask, hideTab, taskContextMenu, prioClick, $$anonym42, sortStart, $$anonym43, tasklistClick, $$anonym40, showEditForm, $$anonym41, saveTask, logout, $$anonym36, taskList, $$anonym35, $$anonym34, $$anonym33, $$anonym39, $$anonym38, cmenuOnListHidden, $$anonym37, $$anonym55, $$anonym56, $$anonym57, addFilterTag, submitNewTask, $$anonym58, $$anonym59,
cmenuOnListsLoaded, flashError, tabmenuOnListSelected, slmenuSelect, searchTasks, $$anonym61, $$anonym60, $$anonym63, slmenuOnListRenamed, $$anonym62, $$anonym65, $$anonym64, $$anonym68, $$anonym69, $$anonym66, $$anonym67, getLiTaskId, listMenu, showSettings, flag, cancelTagFilter, saveSettings, orderChanged, doAuth, _mtt, $$anonym10, cmenuOnListOrderChanged, addList, findParentNode, slmenuOnListSelected, slmenuOnListAdded, loadTags, cancelTaskNote, cmenuOnListSelected, slmenuOnListHidden, liveSearchToggle,
$$_self, origCallee) {
  $$logEntry(this, "$$anonym70", arguments, origCallee);
  jQuery.extend($$_self.options, options);
  flag.needAuth = options.needAuth ? true : false;
  flag.isLogged = options.isLogged ? true : false;
  if($$_self.options.showdate) {
    $("#page_tasks").addClass("show-inline-date")
  }
  if($$_self.options.singletab) {
    $("#lists .mtt-tabs").addClass("mtt-tabs-only-one")
  }
  $$_self.parseAnchor();
  $(".mtt-tabs-add-button").click(function() {
    return $$anonym10(addList, arguments.callee)
  });
  $(".mtt-tabs-select-button").click(function(event) {
    return $$anonym11(event, mttMenu, _mtt, slmenuSelect, this, arguments.callee)
  });
  $("#newtask_form").submit(function() {
    return $$anonym12(submitNewTask, this, arguments.callee)
  });
  $("#newtask_submit").click(function() {
    return $$anonym13($, arguments.callee)
  });
  $("#newtask_adv").click(function() {
    return $$anonym14(showEditForm, arguments.callee)
  });
  $("#task").keydown(function(event) {
    return $$anonym15(event, $, this, arguments.callee)
  }).focusin(function() {
    return $$anonym16($, arguments.callee)
  }).focusout(function() {
    return $$anonym17($, this, arguments.callee)
  });
  $("#search_form").submit(function() {
    return $$anonym18(searchTasks, arguments.callee)
  });
  $("#search_close").click(function() {
    return $$anonym19(liveSearchToggle, arguments.callee)
  });
  $("#search").keyup(function(event) {
    return $$anonym21(event, $$anonym20, $, searchTasks, this, arguments.callee)
  }).keydown(function(event) {
    return $$anonym22(event, $, searchTasks, liveSearchToggle, this, arguments.callee)
  }).focusin(function() {
    return $$anonym23($, this, arguments.callee)
  }).focusout(function() {
    return $$anonym24($, arguments.callee)
  });
  $("#taskview").click(function() {
    return $$anonym25(mttMenu, _mtt, this, arguments.callee)
  });
  $("#mtt_filters .tag-filter .mtt-filter-close").live("click", function() {
    return $$anonym26($, cancelTagFilter, this, arguments.callee)
  });
  $("#tagcloudbtn").click(function() {
    return $$anonym29(loadTags, flag, $, curList, $$anonym27, mttMenu, $$anonym28, _mtt, this, arguments.callee)
  });
  $("#tagcloudcancel").click(function() {
    return $$anonym30(_mtt, arguments.callee)
  });
  $("#tagcloudcontent .tag").live("click", function() {
    return $$anonym31(addFilterTag, $, _mtt, this, arguments.callee)
  });
  $("#mtt-notes-show").click(function() {
    return $$anonym32(toggleAllNotes, this, arguments.callee)
  });
  $("#mtt-notes-hide").click(function() {
    return $$anonym33(toggleAllNotes, this, arguments.callee)
  });
  $("#taskviewcontainer li").click(function() {
    return $$anonym34(setTaskview, this, arguments.callee)
  });
  $("#lists li.mtt-tab").live("click", function(event) {
    return $$anonym35(event, hideTab, tabSelect, this, arguments.callee)
  });
  $("#list_all").click(function(event) {
    return $$anonym36(event, hideTab, tabSelect, arguments.callee)
  });
  $("#lists li.mtt-tab .list-action").live("click", function() {
    return $$anonym37(listMenu, this, arguments.callee)
  });
  $("#list_all .list-action").click(function(event) {
    return $$anonym38(event, listMenu, this, arguments.callee)
  });
  $("#priopopup .prio-neg-1").click(function() {
    return $$anonym39(prioClick, this, arguments.callee)
  });
  $("#priopopup .prio-zero").click(function() {
    return $$anonym40(prioClick, this, arguments.callee)
  });
  $("#priopopup .prio-pos-1").click(function() {
    return $$anonym41(prioClick, this, arguments.callee)
  });
  $("#priopopup .prio-pos-2").click(function() {
    return $$anonym42(prioClick, this, arguments.callee)
  });
  $("#priopopup").mouseleave(function() {
    return $$anonym43($, this, arguments.callee)
  });
  $("#alltags_show").click(function() {
    return $$anonym44(toggleEditAllTags, arguments.callee)
  });
  $("#alltags_hide").click(function() {
    return $$anonym45(toggleEditAllTags, arguments.callee)
  });
  $("#taskedit_form").submit(function() {
    return $$anonym46(saveTask, this, arguments.callee)
  });
  $("#alltags .tag").live("click", function() {
    return $$anonym47($, addEditTag, this, arguments.callee)
  });
  $("#duedate").datepicker({dateFormat:_mtt.duedatepickerformat(), firstDay:_mtt.options.firstdayofweek, showOn:"button", buttonImage:_mtt.templateUrl + "images/calendar.png", buttonImageOnly:true, constrainInput:false, duration:"", dayNamesMin:_mtt.lang.daysMin, dayNames:_mtt.lang.daysLong, monthNamesShort:_mtt.lang.monthsLong});
  $("#edittags").autocomplete("ajax.php?suggestTags", {scroll:false, multiple:true, selectFirst:false, max:8, extraParams:{list:function() {
    return $$anonym48(taskList, arguments.callee)
  }}});
  $("#taskedit_form").find("select,input,textarea").bind("change keypress", function() {
    return $$anonym49(flag, arguments.callee)
  });
  $("#tasklist").bind("click", tasklistClick);
  $("#tasklist li").live("dblclick", function() {
    return $$anonym50(editTask, findParentNode, this, arguments.callee)
  });
  $("#tasklist .taskactionbtn").live("click", function() {
    return $$anonym51(taskContextMenu, getLiTaskId, this, arguments.callee)
  });
  $("#tasklist input[type=checkbox]").live("click", function() {
    return $$anonym52(completeTask, getLiTaskId, this, arguments.callee)
  });
  $("#tasklist .task-toggle").live("click", function() {
    return $$anonym53($, getLiTaskId, this, arguments.callee)
  });
  $("#tasklist .tag").live("click", function(event) {
    return $$anonym54(event, addFilterTag, $, _mtt, this, arguments.callee)
  });
  if(!$$_self.options.touchDevice) {
    $("#tasklist .task-prio").live("mouseover mouseout", function(event) {
      return $$anonym55(event, prioPopup, getLiTaskId, this, arguments.callee)
    })
  }
  $("#tasklist .mtt-action-note-cancel").live("click", function() {
    return $$anonym56(cancelTaskNote, getLiTaskId, this, arguments.callee)
  });
  $("#tasklist .mtt-action-note-save").live("click", function() {
    return $$anonym57(saveTaskNote, getLiTaskId, this, arguments.callee)
  });
  if($$_self.options.tagPreview) {
    $("#tasklist .tag").live("mouseover mouseout", function(event) {
      return $$anonym59(event, $$anonym58, $, _mtt, this, arguments.callee)
    })
  }
  $("#tasklist").sortable({items:"> :not(.task-completed)", cancel:"span,input,a,textarea", delay:150, start:sortStart, update:orderChanged, placeholder:"mtt-task-placeholder"});
  $("#lists ul").sortable({delay:150, update:listOrderChanged});
  $$_self.applySingletab();
  $("#msg").ajaxSend(function(r, s) {
    return $$anonym60(r, s, $, arguments.callee)
  });
  $("#msg").ajaxStop(function(r, s) {
    return $$anonym61(r, s, $, arguments.callee)
  });
  $("#msg").ajaxError(function(event, request, settings) {
    return $$anonym62(event, request, settings, _mtt, flashError, arguments.callee)
  });
  $("#msg>.msg-text").click(function() {
    return $$anonym63($, arguments.callee)
  });
  $("#bar_login").click(function() {
    return $$anonym64(showAuth, this, arguments.callee)
  });
  $("#bar_logout").click(function() {
    return $$anonym65(logout, arguments.callee)
  });
  $("#login_form").submit(function() {
    return $$anonym66(doAuth, this, arguments.callee)
  });
  $("#settings").click(showSettings);
  $("#settings_form").live("submit", function() {
    return $$anonym67(saveSettings, this, arguments.callee)
  });
  $(".mtt-back-button").live("click", function() {
    return $$anonym68(_mtt, this, arguments.callee)
  });
  $(window).bind("beforeunload", function() {
    return $$anonym69(flag, _mtt, arguments.callee)
  });
  $$_self.addAction("listSelected", tabmenuOnListSelected);
  $$_self.addAction("listsLoaded", cmenuOnListsLoaded);
  $$_self.addAction("listRenamed", cmenuOnListRenamed);
  $$_self.addAction("listAdded", cmenuOnListAdded);
  $$_self.addAction("listSelected", cmenuOnListSelected);
  $$_self.addAction("listOrderChanged", cmenuOnListOrderChanged);
  $$_self.addAction("listHidden", cmenuOnListHidden);
  $$_self.addAction("listsLoaded", slmenuOnListsLoaded);
  $$_self.addAction("listRenamed", slmenuOnListRenamed);
  $$_self.addAction("listAdded", slmenuOnListAdded);
  $$_self.addAction("listSelected", slmenuOnListSelected);
  $$_self.addAction("listHidden", slmenuOnListHidden);
  return $$logExit("$$anonym70", $$_self)
}
function $$anonym71(v, $$_self, origCallee) {
  $$logEntry(this, "$$anonym71", arguments, origCallee);
  console.log.apply($$_self, arguments);
  $$logExit("$$anonym71")
}
function $$anonym72(action, proc, Array, $$_self, origCallee) {
  $$logEntry(this, "$$anonym72", arguments, origCallee);
  if(!$$_self.actions[action]) {
    $$_self.actions[action] = new Array
  }
  $$_self.actions[action].push(proc);
  $$logExit("$$anonym72")
}
function $$anonym73(action, opts, i, $$_self, origCallee) {
  $$logEntry(this, "$$anonym73", arguments, origCallee);
  if(!$$_self.actions[action]) {
    return $$logExit("$$anonym73")
  }
  for(var i in $$_self.actions[action]) {
    $$_self.actions[action][i](opts)
  }
  $$logExit("$$anonym73")
}
function $$anonym74(opts, jQuery, $$_self, origCallee) {
  $$logEntry(this, "$$anonym74", arguments, origCallee);
  jQuery.extend($$_self.options, opts);
  $$logExit("$$anonym74")
}
function $$anonym75(i, item, tabLists, ti, origCallee) {
  $$logEntry(this, "$$anonym75", arguments, origCallee);
  tabLists.add(item);
  ti += '<li id="list_' + item.id + '" class="mtt-tab' + (item.hidden ? " mtt-tabs-hidden" : "") + '">' + '<a href="#list/' + item.id + '" title="' + item.name + '"><span>' + item.name + "</span>" + '<div class="list-action"></div></a></li>';
  $$logExit("$$anonym75")
}
function $$anonym76(res, tabLists, $, _mtt, $$anonym75, tabSelect, origCallee) {
  $$logEntry(this, "$$anonym76", arguments, origCallee);
  var ti = "";
  var openListId = 0;
  if(res && res.total) {
    for(var i = 0;i < res.list.length;i++) {
      if(_mtt.options.openList) {
        if(_mtt.options.openList == res.list[i].id) {
          openListId = res.list[i].id;
          break
        }
      }else {
        if(!res.list[i].hidden) {
          openListId = res.list[i].id;
          break
        }
      }
    }
    if(_mtt.options.openList == -1) {
      openListId = -1
    }
    if(!openListId) {
      openListId = res.list[0].id
    }
    $.each(res.list, function(i, item) {
      return $$anonym75(i, item, tabLists, ti, arguments.callee)
    })
  }
  if(openListId) {
    $("#mtt_body").removeClass("no-lists");
    $(".mtt-need-list").removeClass("mtt-item-disabled")
  }else {
    curList = 0;
    $("#mtt_body").addClass("no-lists");
    $(".mtt-need-list").addClass("mtt-item-disabled")
  }
  _mtt.options.openList = 0;
  $("#lists ul").html(ti);
  $("#lists").show();
  _mtt.doAction("listsLoaded");
  tabSelect(openListId);
  $("#page_tasks").show();
  $$logExit("$$anonym76")
}
function $$anonym77(onInit, updateAccessStatus, tabLists, $, _mtt, $$anonym76, $$anonym75, tabSelect, filter, $$_self, origCallee) {
  $$logEntry(this, "$$anonym77", arguments, origCallee);
  if(filter.search != "") {
    filter.search = "";
    $("#searchbarkeyword").text("");
    $("#searchbar").hide()
  }
  $("#page_tasks").hide();
  $("#tasklist").html("");
  tabLists.clear();
  $$_self.db.loadLists(null, function(res) {
    return $$anonym76(res, tabLists, $, _mtt, $$anonym75, tabSelect, arguments.callee)
  });
  if(onInit) {
    updateAccessStatus()
  }
  $$logExit("$$anonym77")
}
function $$anonym78(t, s, origCallee) {
  $$logEntry(this, "$$anonym78", arguments, origCallee);
  switch(t) {
    case "Y":
      return $$logExit("$$anonym78", "yy");
    case "y":
      return $$logExit("$$anonym78", "y");
    case "d":
      return $$logExit("$$anonym78", "dd");
    case "j":
      return $$logExit("$$anonym78", "d");
    case "m":
      return $$logExit("$$anonym78", "mm");
    case "n":
      return $$logExit("$$anonym78", "m");
    case "/":
    ;
    case ".":
    ;
    case "-":
      return $$logExit("$$anonym78", t);
    default:
      return $$logExit("$$anonym78", "")
  }
}
function $$anonym79($$anonym78, $$_self, origCallee) {
  $$logEntry(this, "$$anonym79", arguments, origCallee);
  if(!$$_self.options.duedatepickerformat) {
    return $$logExit("$$anonym79", "yy-mm-dd")
  }
  var s = $$_self.options.duedatepickerformat.replace(/(.)/g, function(t, s) {
    return $$anonym78(t, s, arguments.callee)
  });
  if(s == "") {
    return $$logExit("$$anonym79", "yy-mm-dd")
  }
  return $$logExit("$$anonym79", s)
}
function $$anonym80(flashError, $$_self, origCallee) {
  $$logEntry(this, "$$anonym80", arguments, origCallee);
  flashError($$_self.lang.get("denied"));
  $$logExit("$$anonym80")
}
function $$anonym81(page, pageClass, $, showhide, $$_self, origCallee) {
  $$logEntry(this, "$$anonym81", arguments, origCallee);
  var prev = $$_self.pages.current;
  prev.lastScrollTop = $(window).scrollTop();
  $$_self.pages.prev.push($$_self.pages.current);
  $$_self.pages.current = {page:page, pageClass:pageClass};
  showhide($("#page_" + $$_self.pages.current.page).addClass("mtt-page-" + $$_self.pages.current.pageClass), $("#page_" + prev.page));
  $$logExit("$$anonym81")
}
function $$anonym82($, showhide, $$_self, origCallee) {
  $$logEntry(this, "$$anonym82", arguments, origCallee);
  if($$_self.pages.current.page == "tasks") {
    return $$logExit("$$anonym82", false)
  }
  var prev = $$_self.pages.current;
  $$_self.pages.current = $$_self.pages.prev.pop();
  showhide($("#page_" + $$_self.pages.current.page), $("#page_" + prev.page).removeClass("mtt-page-" + prev.page.pageClass));
  $(window).scrollTop($$_self.pages.current.lastScrollTop);
  $$logExit("$$anonym82")
}
function $$anonym83(yesno, $, $$_self, origCallee) {
  $$logEntry(this, "$$anonym83", arguments, origCallee);
  if(yesno == null) {
    yesno = $$_self.options.singletab
  }else {
    $$_self.options.singletab = yesno
  }
  if(yesno) {
    $("#lists .mtt-tabs").addClass("mtt-tabs-only-one");
    $("#lists ul").sortable("disable")
  }else {
    $("#lists .mtt-tabs").removeClass("mtt-tabs-only-one");
    $("#lists ul").sortable("enable")
  }
  $$logExit("$$anonym83")
}
function $$anonym84($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym84", arguments, origCallee);
  $$_self._filters = [];
  $("#mtt_filters").html("");
  $$logExit("$$anonym84")
}
function $$anonym85(tagId, tag, exclude, $, _mtt, i, $$_self, origCallee) {
  $$logEntry(this, "$$anonym85", arguments, origCallee);
  for(var i in $$_self._filters) {
    if($$_self._filters[i].tagId && $$_self._filters[i].tagId == tagId) {
      return $$logExit("$$anonym85", false)
    }
  }
  $$_self._filters.push({tagId:tagId, tag:tag, exclude:exclude});
  $("#mtt_filters").append('<span class="tag-filter tag-id-' + tagId + (exclude ? " tag-filter-exclude" : "") + '"><span class="mtt-filter-header">' + _mtt.lang.get("tagfilter") + "</span>" + tag + '<span class="mtt-filter-close" tagid="' + tagId + '"></span></span>');
  return $$logExit("$$anonym85", true)
}
function $$anonym86(tagId, $, i, $$_self, origCallee) {
  $$logEntry(this, "$$anonym86", arguments, origCallee);
  for(var i in $$_self._filters) {
    if($$_self._filters[i].tagId && $$_self._filters[i].tagId == tagId) {
      $$_self._filters.splice(i, 1);
      $("#mtt_filters .tag-filter.tag-id-" + tagId).remove();
      return $$logExit("$$anonym86", true)
    }
  }
  return $$logExit("$$anonym86", false)
}
function $$anonym87(withExcluded, i, $$_self, origCallee) {
  $$logEntry(this, "$$anonym87", arguments, origCallee);
  var a = [];
  for(var i in $$_self._filters) {
    if($$_self._filters[i].tagId) {
      if($$_self._filters[i].exclude && withExcluded) {
        a.push("^" + $$_self._filters[i].tag)
      }else {
        if(!$$_self._filters[i].exclude) {
          a.push($$_self._filters[i].tag)
        }
      }
    }
  }
  return $$logExit("$$anonym87", a.join(", "))
}
function $$anonym88($$_self, origCallee) {
  $$logEntry(this, "$$anonym88", arguments, origCallee);
  if(location.hash == "") {
    return $$logExit("$$anonym88", false)
  }
  var h = location.hash.substr(1);
  var a = h.split("/");
  var p = {};
  var s = "";
  for(var i = 0;i < a.length;i++) {
    s = a[i];
    switch(s) {
      case "list":
        if(a[++i].match(/^-?\d+$/)) {
          p[s] = a[i]
        }
        break;
      case "alltasks":
        p.list = "-1";
        break
    }
  }
  if(p.list) {
    $$_self.options.openList = p.list
  }
  return $$logExit("$$anonym88", p)
}
function $$anonym89(json, mytinytodo, tabLists, $, _mtt, origCallee) {
  $$logEntry(this, "$$anonym89", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym89")
  }
  var item = json.list[0];
  var i = tabLists.length();
  tabLists.add(item);
  if(i > 0) {
    $("#lists ul").append('<li id="list_' + item.id + '" class="mtt-tab">' + '<a href="#" title="' + item.name + '"><span>' + item.name + "</span>" + '<div class="list-action"></div></a></li>');
    mytinytodo.doAction("listAdded", item)
  }else {
    _mtt.loadLists()
  }
  $$logExit("$$anonym89")
}
function $$anonym90(json, mytinytodo, tabLists, $, origCallee) {
  $$logEntry(this, "$$anonym90", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym90")
  }
  var item = json.list[0];
  curList = item;
  tabLists.replace(item);
  $("#lists ul>.mtt-tabs-selected>a").attr("title", item.name).find("span").html(item.name);
  mytinytodo.doAction("listRenamed", item);
  $$logExit("$$anonym90")
}
function $$anonym91(json, _mtt, origCallee) {
  $$logEntry(this, "$$anonym91", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym91")
  }
  _mtt.loadLists();
  $$logExit("$$anonym91")
}
function $$anonym92(json, $, curList, origCallee) {
  $$logEntry(this, "$$anonym92", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym92")
  }
  curList.published = curList.published ? 0 : 1;
  if(curList.published) {
    $("#btnPublish").addClass("mtt-item-checked");
    $("#btnRssFeed").removeClass("mtt-item-disabled")
  }else {
    $("#btnPublish").removeClass("mtt-item-checked");
    $("#btnRssFeed").addClass("mtt-item-disabled")
  }
  $$logExit("$$anonym92")
}
function $$anonym93(i, item, taskOrder, changeTaskCnt, prepareTaskStr, taskList, tasks, origCallee) {
  $$logEntry(this, "$$anonym93", arguments, origCallee);
  tasks += prepareTaskStr(item);
  taskList[item.id] = item;
  taskOrder.push(parseInt(item.id));
  changeTaskCnt(item, 1);
  $$logExit("$$anonym93")
}
function $$anonym94(json, opts, $, changeTaskCnt, prepareTaskStr, taskOrder, taskList, $$anonym93, taskCnt, refreshTaskCnt, origCallee) {
  $$logEntry(this, "$$anonym94", arguments, origCallee);
  taskList.length = 0;
  taskOrder.length = 0;
  taskCnt.total = taskCnt.past = taskCnt.today = taskCnt.soon = 0;
  var tasks = "";
  $.each(json.list, function(i, item) {
    return $$anonym93(i, item, taskOrder, changeTaskCnt, prepareTaskStr, taskList, tasks, arguments.callee)
  });
  if(opts.beforeShow && opts.beforeShow.call) {
    opts.beforeShow()
  }
  refreshTaskCnt();
  $("#tasklist").html(tasks);
  $$logExit("$$anonym94")
}
function $$anonym95(json, taskOrder, form, changeTaskOrder, $, prepareTaskStr, taskList, _mtt, taskCnt, refreshTaskCnt, origCallee) {
  $$logEntry(this, "$$anonym95", arguments, origCallee);
  if(!json.total) {
    return $$logExit("$$anonym95")
  }
  $("#total").text(parseInt($("#total").text()) + 1);
  taskCnt.total++;
  form.task.value = "";
  var item = json.list[0];
  taskList[item.id] = item;
  taskOrder.push(parseInt(item.id));
  $("#tasklist").append(prepareTaskStr(item));
  changeTaskOrder(item.id);
  $("#taskrow_" + item.id).effect("highlight", {color:_mtt.theme.newTaskFlashColor}, 2E3);
  refreshTaskCnt();
  $$logExit("$$anonym95")
}
function $$anonym96(a, b, taskList, origCallee) {
  $$logEntry(this, "$$anonym96", arguments, origCallee);
  if(taskList[a].compl != taskList[b].compl) {
    return $$logExit("$$anonym96", taskList[a].compl - taskList[b].compl)
  }
  return $$logExit("$$anonym96", taskList[a].ow - taskList[b].ow)
}
function $$anonym97(a, b, taskList, origCallee) {
  $$logEntry(this, "$$anonym97", arguments, origCallee);
  if(taskList[a].compl != taskList[b].compl) {
    return $$logExit("$$anonym97", taskList[a].compl - taskList[b].compl)
  }
  if(taskList[a].prio != taskList[b].prio) {
    return $$logExit("$$anonym97", taskList[b].prio - taskList[a].prio)
  }
  if(taskList[a].dueInt != taskList[b].dueInt) {
    return $$logExit("$$anonym97", taskList[a].dueInt - taskList[b].dueInt)
  }
  return $$logExit("$$anonym97", taskList[a].ow - taskList[b].ow)
}
function $$anonym98(a, b, taskList, origCallee) {
  $$logEntry(this, "$$anonym98", arguments, origCallee);
  if(taskList[a].compl != taskList[b].compl) {
    return $$logExit("$$anonym98", taskList[a].compl - taskList[b].compl)
  }
  if(taskList[a].prio != taskList[b].prio) {
    return $$logExit("$$anonym98", taskList[a].prio - taskList[b].prio)
  }
  if(taskList[a].dueInt != taskList[b].dueInt) {
    return $$logExit("$$anonym98", taskList[b].dueInt - taskList[a].dueInt)
  }
  return $$logExit("$$anonym98", taskList[b].ow - taskList[a].ow)
}
function $$anonym99(a, b, taskList, origCallee) {
  $$logEntry(this, "$$anonym99", arguments, origCallee);
  if(taskList[a].compl != taskList[b].compl) {
    return $$logExit("$$anonym99", taskList[a].compl - taskList[b].compl)
  }
  if(taskList[a].dueInt != taskList[b].dueInt) {
    return $$logExit("$$anonym99", taskList[a].dueInt - taskList[b].dueInt)
  }
  if(taskList[a].prio != taskList[b].prio) {
    return $$logExit("$$anonym99", taskList[b].prio - taskList[a].prio)
  }
  return $$logExit("$$anonym99", taskList[a].ow - taskList[b].ow)
}
function $$anonym100(a, b, taskList, origCallee) {
  $$logEntry(this, "$$anonym100", arguments, origCallee);
  if(taskList[a].compl != taskList[b].compl) {
    return $$logExit("$$anonym100", taskList[a].compl - taskList[b].compl)
  }
  if(taskList[a].dueInt != taskList[b].dueInt) {
    return $$logExit("$$anonym100", taskList[b].dueInt - taskList[a].dueInt)
  }
  if(taskList[a].prio != taskList[b].prio) {
    return $$logExit("$$anonym100", taskList[a].prio - taskList[b].prio)
  }
  return $$logExit("$$anonym100", taskList[b].ow - taskList[a].ow)
}
function $$anonym101(a, b, taskList, origCallee) {
  $$logEntry(this, "$$anonym101", arguments, origCallee);
  if(taskList[a].compl != taskList[b].compl) {
    return $$logExit("$$anonym101", taskList[a].compl - taskList[b].compl)
  }
  if(taskList[a].dateInt != taskList[b].dateInt) {
    return $$logExit("$$anonym101", taskList[a].dateInt - taskList[b].dateInt)
  }
  if(taskList[a].prio != taskList[b].prio) {
    return $$logExit("$$anonym101", taskList[b].prio - taskList[a].prio)
  }
  return $$logExit("$$anonym101", taskList[a].ow - taskList[b].ow)
}
function $$anonym102(a, b, taskList, origCallee) {
  $$logEntry(this, "$$anonym102", arguments, origCallee);
  if(taskList[a].compl != taskList[b].compl) {
    return $$logExit("$$anonym102", taskList[a].compl - taskList[b].compl)
  }
  if(taskList[a].dateInt != taskList[b].dateInt) {
    return $$logExit("$$anonym102", taskList[b].dateInt - taskList[a].dateInt)
  }
  if(taskList[a].prio != taskList[b].prio) {
    return $$logExit("$$anonym102", taskList[a].prio - taskList[b].prio)
  }
  return $$logExit("$$anonym102", taskList[b].ow - taskList[a].ow)
}
function $$anonym103(a, b, taskList, origCallee) {
  $$logEntry(this, "$$anonym103", arguments, origCallee);
  if(taskList[a].compl != taskList[b].compl) {
    return $$logExit("$$anonym103", taskList[a].compl - taskList[b].compl)
  }
  if(taskList[a].dateEditedInt != taskList[b].dateEditedInt) {
    return $$logExit("$$anonym103", taskList[a].dateEditedInt - taskList[b].dateEditedInt)
  }
  if(taskList[a].prio != taskList[b].prio) {
    return $$logExit("$$anonym103", taskList[b].prio - taskList[a].prio)
  }
  return $$logExit("$$anonym103", taskList[a].ow - taskList[b].ow)
}
function $$anonym104(a, b, taskList, origCallee) {
  $$logEntry(this, "$$anonym104", arguments, origCallee);
  if(taskList[a].compl != taskList[b].compl) {
    return $$logExit("$$anonym104", taskList[a].compl - taskList[b].compl)
  }
  if(taskList[a].dateEditedInt != taskList[b].dateEditedInt) {
    return $$logExit("$$anonym104", taskList[b].dateEditedInt - taskList[a].dateEditedInt)
  }
  if(taskList[a].prio != taskList[b].prio) {
    return $$logExit("$$anonym104", taskList[a].prio - taskList[b].prio)
  }
  return $$logExit("$$anonym104", taskList[b].ow - taskList[a].ow)
}
function $$anonym105(json, origCallee) {
  $$logEntry(this, "$$anonym105", arguments, origCallee);
  $$logExit("$$anonym105")
}
function $$anonym106($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym106", arguments, origCallee);
  $($$_self).remove();
  $$logExit("$$anonym106")
}
function $$anonym107(json, id, taskOrder, $$anonym106, $, changeTaskCnt, taskList, refreshTaskCnt, origCallee) {
  $$logEntry(this, "$$anonym107", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym107")
  }
  var item = json.list[0];
  taskOrder.splice($.inArray(id, taskOrder), 1);
  $("#taskrow_" + id).fadeOut("normal", function() {
    return $$anonym106($, this, arguments.callee)
  });
  changeTaskCnt(taskList[id], -1);
  refreshTaskCnt();
  delete taskList[id];
  $$logExit("$$anonym107")
}
function $$anonym108($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym108", arguments, origCallee);
  $($$_self).remove();
  $$logExit("$$anonym108")
}
function $$anonym109($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym109", arguments, origCallee);
  $($$_self).css("display", "");
  $$logExit("$$anonym109")
}
function $$anonym110(id, changeTaskOrder, $, $$anonym109, _mtt, $$_self, origCallee) {
  $$logEntry(this, "$$anonym110", arguments, origCallee);
  changeTaskOrder(id);
  $($$_self).effect("highlight", {color:_mtt.theme.editTaskFlashColor}, "normal", function() {
    return $$anonym109($, this, arguments.callee)
  });
  $$logExit("$$anonym110")
}
function $$anonym111(json, $$anonym110, changeTaskOrder, $, prepareTaskStr, changeTaskCnt, $$anonym109, $$anonym108, _mtt, id, taskOrder, curList, taskList, refreshTaskCnt, origCallee) {
  $$logEntry(this, "$$anonym111", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym111")
  }
  var item = json.list[0];
  if(item.compl) {
    $("#taskrow_" + id).addClass("task-completed")
  }else {
    $("#taskrow_" + id).removeClass("task-completed")
  }
  taskList[id] = item;
  changeTaskCnt(taskList[id], 0);
  if(item.compl && !curList.showCompl) {
    delete taskList[id];
    taskOrder.splice($.inArray(id, taskOrder), 1);
    $("#taskrow_" + id).fadeOut("normal", function() {
      return $$anonym108($, this, arguments.callee)
    })
  }else {
    if(curList.showCompl) {
      $("#taskrow_" + item.id).replaceWith(prepareTaskStr(taskList[id]));
      $("#taskrow_" + id).fadeOut("fast", function() {
        return $$anonym110(id, changeTaskOrder, $, $$anonym109, _mtt, this, arguments.callee)
      })
    }
  }
  refreshTaskCnt();
  $$logExit("$$anonym111")
}
function $$anonym112(json, prepareHtml, id, cancelTaskNote, $, taskList, origCallee) {
  $$logEntry(this, "$$anonym112", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym112")
  }
  var item = json.list[0];
  taskList[id].note = item.note;
  taskList[id].noteText = item.noteText;
  $("#tasknote" + id + ">span").html(prepareHtml(item.note));
  if(item.note == "") {
    $("#taskrow_" + id).removeClass("task-has-note task-expanded")
  }else {
    $("#taskrow_" + id).addClass("task-has-note task-expanded")
  }
  cancelTaskNote(id);
  $$logExit("$$anonym112")
}
function $$anonym113(json, form, $, origCallee) {
  $$logEntry(this, "$$anonym113", arguments, origCallee);
  if(!json) {
    return $$logExit("$$anonym113")
  }
  form.task.value = json.title;
  form.tags.value = form.tags.value != "" ? form.tags.value + ", " + json.tags : json.tags;
  form.prio.value = json.prio;
  $("#task").val("");
  $$logExit("$$anonym113")
}
function $$anonym114($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym114", arguments, origCallee);
  $($$_self).css("display", "");
  $$logExit("$$anonym114")
}
function $$anonym115(json, $$anonym114, changeTaskOrder, $, changeTaskCnt, prepareTaskStr, _mtt, curList, taskList, refreshTaskCnt, origCallee) {
  $$logEntry(this, "$$anonym115", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym115")
  }
  var item = json.list[0];
  changeTaskCnt(item, 0, taskList[item.id]);
  taskList[item.id] = item;
  var noteExpanded = item.note != "" && $("#taskrow_" + item.id).is(".task-expanded") ? 1 : 0;
  $("#taskrow_" + item.id).replaceWith(prepareTaskStr(item, noteExpanded));
  if(curList.sort != 0) {
    changeTaskOrder(item.id)
  }
  _mtt.pageBack();
  refreshTaskCnt();
  $("#taskrow_" + item.id).effect("highlight", {color:_mtt.theme.editTaskFlashColor}, "normal", function() {
    return $$anonym114($, this, arguments.callee)
  });
  $$logExit("$$anonym115")
}
function $$anonym116(i, item, cloud, origCallee) {
  $$logEntry(this, "$$anonym116", arguments, origCallee);
  cloud += ' <a href="#" tag="' + item.tag + '" tagid="' + item.id + '" class="tag w' + item.w + '" >' + item.tag + "</a>";
  $$logExit("$$anonym116")
}
function $$anonym117(json, flag, $, $$anonym116, callback, origCallee) {
  $$logEntry(this, "$$anonym117", arguments, origCallee);
  if(!parseInt(json.total)) {
    tagsList = []
  }else {
    tagsList = json.cloud
  }
  var cloud = "";
  $.each(tagsList, function(i, item) {
    return $$anonym116(i, item, cloud, arguments.callee)
  });
  $("#tagcloudcontent").html(cloud);
  flag.tagsChanged = false;
  callback();
  $$logExit("$$anonym117")
}
function $$anonym118(json, taskOrder, form, changeTaskOrder, $, changeTaskCnt, prepareTaskStr, taskList, _mtt, refreshTaskCnt, origCallee) {
  $$logEntry(this, "$$anonym118", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym118")
  }
  form.task.value = "";
  var item = json.list[0];
  taskList[item.id] = item;
  taskOrder.push(parseInt(item.id));
  $("#tasklist").append(prepareTaskStr(item));
  changeTaskOrder(item.id);
  _mtt.pageBack();
  $("#taskrow_" + item.id).effect("highlight", {color:_mtt.theme.newTaskFlashColor}, 2E3);
  changeTaskCnt(item, 1);
  refreshTaskCnt();
  $$logExit("$$anonym118")
}
function $$anonym119(menu, $$_self, origCallee) {
  $$logEntry(this, "$$anonym119", arguments, origCallee);
  menu.onclick($$_self, menu);
  return $$logExit("$$anonym119", false)
}
function $$anonym120(submenu, $$_self, origCallee) {
  $$logEntry(this, "$$anonym120", arguments, origCallee);
  submenu.root.onclick($$_self, submenu);
  return $$logExit("$$anonym120", false)
}
function $$anonym121(curSubmenu, origCallee) {
  $$logEntry(this, "$$anonym121", arguments, origCallee);
  curSubmenu.hide();
  curSubmenu.hideTimer = null;
  $$logExit("$$anonym121")
}
function $$anonym122(menu, submenu, origCallee) {
  $$logEntry(this, "$$anonym122", arguments, origCallee);
  menu.curSubmenu = submenu;
  submenu.showSub();
  $$logExit("$$anonym122")
}
function $$anonym123($$anonym122, $, $$anonym121, menu, submenu, $$_self, origCallee) {
  $$logEntry(this, "$$anonym123", arguments, origCallee);
  if(!$($$_self).is(".mtt-menu-item-active")) {
    menu.$container.find("li").removeClass("mtt-menu-item-active")
  }
  clearTimeout(menu.showTimer);
  if(menu.hideTimer && menu.parent) {
    clearTimeout(menu.hideTimer);
    menu.hideTimer = null;
    menu.$caller.addClass("mtt-menu-item-active");
    clearTimeout(menu.parent.showTimer)
  }
  if(menu.curSubmenu && menu.curSubmenu.menuOpen && menu.curSubmenu != submenu && !menu.curSubmenu.hideTimer) {
    menu.$container.find("li").removeClass("mtt-menu-item-active");
    var curSubmenu = menu.curSubmenu;
    curSubmenu.hideTimer = setTimeout(300, function() {
      return $$anonym121(curSubmenu, arguments.callee)
    })
  }
  if(!submenu || menu.curSubmenu == submenu && menu.curSubmenu.menuOpen) {
    return $$logExit("$$anonym123")
  }
  menu.showTimer = setTimeout(400, function() {
    return $$anonym122(menu, submenu, arguments.callee)
  });
  $$logExit("$$anonym123")
}
function $$anonym124(origCallee) {
  $$logEntry(this, "$$anonym124", arguments, origCallee);
  $$logExit("$$anonym124")
}
function $$anonym125($$anonym124, $$anonym123, $$anonym122, $, $$anonym121, menu, $$anonym120, mttMenu, $$_self, origCallee) {
  $$logEntry(this, "$$anonym125", arguments, origCallee);
  var submenu = 0;
  if($($$_self).is(".mtt-menu-indicator")) {
    submenu = new mttMenu($($$_self).attr("submenu"));
    submenu.$caller = $($$_self);
    submenu.parent = menu;
    if(menu.root) {
      submenu.root = menu.root
    }else {
      submenu.root = menu
    }
    menu.submenu.push(submenu);
    submenu.ts = submenu.container.mttmenu = submenu.root.ts;
    submenu.$container.find("li").click(function() {
      return $$anonym120(submenu, this, arguments.callee)
    })
  }
  $($$_self).hover(function() {
    return $$anonym123($$anonym122, $, $$anonym121, menu, submenu, this, arguments.callee)
  }, function() {
    return $$anonym124(arguments.callee)
  });
  $$logExit("$$anonym125")
}
function $$anonym126(item, fromMenu, $, menu, $$_self, origCallee) {
  $$logEntry(this, "$$anonym126", arguments, origCallee);
  if($(item).is(".mtt-item-disabled,.mtt-menu-indicator,.mtt-item-hidden")) {
    return $$logExit("$$anonym126")
  }
  menu.close();
  if($$_self.options.onclick) {
    $$_self.options.onclick(item, fromMenu)
  }
  $$logExit("$$anonym126")
}
function $$anonym127(i, $$_self, origCallee) {
  $$logEntry(this, "$$anonym127", arguments, origCallee);
  for(var i in $$_self.submenu) {
    $$_self.submenu[i].hide()
  }
  clearTimeout($$_self.showTimer);
  $$_self.$container.hide();
  $$_self.$container.find("li").removeClass("mtt-menu-item-active");
  $$_self.menuOpen = false;
  $$logExit("$$anonym127")
}
function $$anonym128(event, $, $$_self, origCallee) {
  $$logEntry(this, "$$anonym128", arguments, origCallee);
  if(!$$_self.menuOpen) {
    return $$logExit("$$anonym128")
  }
  if(event) {
    var t = event.target;
    if(t == $$_self.caller || t.mttmenu && t.mttmenu == $$_self.ts) {
      return $$logExit("$$anonym128")
    }
    while(t.parentNode) {
      if(t.parentNode == $$_self.caller || t.mttmenu && t.mttmenu == $$_self.ts) {
        return $$logExit("$$anonym128")
      }
      t = t.parentNode
    }
  }
  $$_self.hide();
  $($$_self.caller).removeClass("mtt-menu-button-active");
  $(document).unbind("mousedown.mttmenuclose");
  $$logExit("$$anonym128")
}
function $$anonym129(e, menu, origCallee) {
  $$logEntry(this, "$$anonym129", arguments, origCallee);
  menu.close(e);
  $$logExit("$$anonym129")
}
function $$anonym130(caller, $, $$anonym129, $$_self, origCallee) {
  $$logEntry(this, "$$anonym130", arguments, origCallee);
  if($$_self.menuOpen) {
    $$_self.close();
    if($$_self.caller && $$_self.caller == caller) {
      return $$logExit("$$anonym130")
    }
  }
  $(document).triggerHandler("mousedown.mttmenuclose");
  $$_self.caller = caller;
  var $caller = $(caller);
  if($$_self.options.beforeShow && $$_self.options.beforeShow.call) {
    $$_self.options.beforeShow()
  }
  if($$_self.options.adjustWidth && $$_self.$container.outerWidth(true) > $(window).width()) {
    $$_self.$container.width($(window).width() - ($$_self.$container.outerWidth(true) - $$_self.$container.width()))
  }
  $caller.addClass("mtt-menu-button-active");
  var offset = $caller.offset();
  var x2 = $(window).width() + $(document).scrollLeft() - $$_self.$container.outerWidth(true) - 1;
  var x = offset.left < x2 ? offset.left : x2;
  if(x < 0) {
    x = 0
  }
  var y = offset.top + caller.offsetHeight - 1;
  if(y + $$_self.$container.outerHeight(true) > $(window).height() + $(document).scrollTop()) {
    y = offset.top - $$_self.$container.outerHeight()
  }
  if(y < 0) {
    y = 0
  }
  $$_self.$container.css({position:"absolute", top:y, left:x, width:$$_self.$container.width()}).show();
  var menu = $$_self;
  $(document).bind("mousedown.mttmenuclose", function(e) {
    return $$anonym129(e, menu, arguments.callee)
  });
  $$_self.menuOpen = true;
  $$logExit("$$anonym130")
}
function $$anonym131($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym131", arguments, origCallee);
  $$_self.$caller.addClass("mtt-menu-item-active");
  var offset = $$_self.$caller.offset();
  var x = offset.left + $$_self.$caller.outerWidth();
  if(x + $$_self.$container.outerWidth(true) > $(window).width() + $(document).scrollLeft()) {
    x = offset.left - $$_self.$container.outerWidth() - 1
  }
  if(x < 0) {
    x = 0
  }
  var y = offset.top + $$_self.parent.$container.offset().top - $$_self.parent.$container.find("li:first").offset().top;
  if(y + $$_self.$container.outerHeight(true) > $(window).height() + $(document).scrollTop()) {
    y = $(window).height() + $(document).scrollTop() - $$_self.$container.outerHeight(true) - 1
  }
  if(y < 0) {
    y = 0
  }
  $$_self.$container.css({position:"absolute", top:y, left:x, width:$$_self.$container.width()}).show();
  $$_self.menuOpen = true;
  $$logExit("$$anonym131")
}
function $$anonym132(i, $$_self, origCallee) {
  $$logEntry(this, "$$anonym132", arguments, origCallee);
  for(var i in $$_self.submenu) {
    $$_self.submenu[i].destroy();
    delete $$_self.submenu[i]
  }
  $$_self.$container.find("li").unbind();
  $$logExit("$$anonym132")
}
function $$anonym133($, taskList, _mtt, origCallee) {
  $$logEntry(this, "$$anonym133", arguments, origCallee);
  $("#cmenupriocontainer li").removeClass("mtt-item-checked");
  $("#cmenu_prio\\:" + taskList[_mtt.menus.cmenu.tag].prio).addClass("mtt-item-checked");
  $$logExit("$$anonym133")
}
function $$anonym134($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym134", arguments, origCallee);
  $($$_self).css("display", "");
  $$logExit("$$anonym134")
}
function $$anonym135($, $$_self, origCallee) {
  $$logEntry(this, "$$anonym135", arguments, origCallee);
  $($$_self).remove();
  $$logExit("$$anonym135")
}
function $$anonym136(json, taskId, changeTaskOrder, $$anonym135, $, $$anonym134, changeTaskCnt, prepareTaskStr, _mtt, taskOrder, curList, taskList, refreshTaskCnt, origCallee) {
  $$logEntry(this, "$$anonym136", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym136")
  }
  if(curList.id == -1) {
    var item = json.list[0];
    changeTaskCnt(item, 0, taskList[item.id]);
    taskList[item.id] = item;
    var noteExpanded = item.note != "" && $("#taskrow_" + item.id).is(".task-expanded") ? 1 : 0;
    $("#taskrow_" + item.id).replaceWith(prepareTaskStr(item, noteExpanded));
    if(curList.sort != 0) {
      changeTaskOrder(item.id)
    }
    refreshTaskCnt();
    $("#taskrow_" + item.id).effect("highlight", {color:_mtt.theme.editTaskFlashColor}, "normal", function() {
      return $$anonym134($, this, arguments.callee)
    })
  }else {
    changeTaskCnt(taskList[taskId], -1);
    delete taskList[taskId];
    taskOrder.splice($.inArray(taskId, taskOrder), 1);
    $("#taskrow_" + taskId).fadeOut("normal", function() {
      return $$anonym135($, this, arguments.callee)
    });
    refreshTaskCnt()
  }
  $$logExit("$$anonym136")
}
function $$anonym137(json, flag, curList, loadTasks, origCallee) {
  $$logEntry(this, "$$anonym137", arguments, origCallee);
  if(!parseInt(json.total)) {
    return $$logExit("$$anonym137")
  }
  flag.tagsChanged = true;
  if(curList.showCompl) {
    loadTasks()
  }
  $$logExit("$$anonym137")
}
function $$anonym138(json, flag, form, $, _mtt, flashError, origCallee) {
  $$logEntry(this, "$$anonym138", arguments, origCallee);
  form.password.value = "";
  if(json.logged) {
    flag.isLogged = true;
    window.location.reload()
  }else {
    flashError(_mtt.lang.get("invalidpass"));
    $("#password").focus()
  }
  $$logExit("$$anonym138")
}
function $$anonym139(json, flag, origCallee) {
  $$logEntry(this, "$$anonym139", arguments, origCallee);
  flag.isLogged = false;
  window.location.reload();
  $$logExit("$$anonym139")
}
function $$anonym140(_mtt, origCallee) {
  $$logEntry(this, "$$anonym140", arguments, origCallee);
  _mtt.pageSet("ajax", "settings");
  $$logExit("$$anonym140")
}
function $$anonym141(params, $$_self, origCallee) {
  $$logEntry(this, "$$anonym141", arguments, origCallee);
  params[$$_self.name || "__"] = $$_self.value;
  $$logExit("$$anonym141")
}
function $$anonym142(json, _mtt, flashInfo, origCallee) {
  $$logEntry(this, "$$anonym142", arguments, origCallee);
  if(json.saved) {
    flashInfo(_mtt.lang.get("settingsSaved"));
    setTimeout("window.location.reload();", 1E3)
  }
  $$logExit("$$anonym142")
}


$$logExit("$$script$$")