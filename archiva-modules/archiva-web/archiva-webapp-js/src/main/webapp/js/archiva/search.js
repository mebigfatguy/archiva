/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$(function() {

  BrowseTopViewModel=function(groupIds){
    this.groupIds=groupIds;


  }

  displayBrowse=function(){
    var mainContent = $("#main-content");
    mainContent.html(mediumSpinnerImg());
    $.ajax("restServices/archivaServices/browseService/rootGroups", {
        type: "GET",
        dataType: 'json',
        success: function(data) {
          var groupdIds = $.map(data.groupIdList.groupIds,function(item){
            return item;
          });
          $.log("size:"+groupdIds.length);
          var browseTopViewModel = new BrowseTopViewModel(groupdIds);
          mainContent.html($("#browse-tmpl" ).tmpl());
          ko.applyBindings(browseTopViewModel,mainContent.find("#browse_result" ).get(0));
        }
    });
  }

  displaySearch=function(){
    $("#main-content" ).html("coming soon :-)");
  }
});