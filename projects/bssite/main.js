var mapsList = [
  {
    "title": "The Secret Island",
    "shortDescription": "Explore a stunning minigame filled island",
    "longDescription": "This is the Secret Island! (https://i.imgur.com/CZ1dMV0.png)(https://www.youtube.com/embed/v_H9utcYumo)(https://www.youtube.com/embed/BeCDsT-8TUM)",
    "version": "1.13.2",
    "download": "https://www.minecraftmaps.com/adventure-maps/the-secret-island/download",
    "creators": "",
    "creatorIcons": "",
    "images": ["https://static.planetminecraft.com/files/resource_media/screenshot/1927/screen-1-1562541561.png",
              "https://static.planetminecraft.com/files/resource_media/screenshot/1927/screen-2-1562541585.png",
              "https://static.planetminecraft.com/files/resource_media/screenshot/1927/screen-9-1562541596.png",
              "https://static.planetminecraft.com/files/resource_media/screenshot/1927/screen-12-1562541612.png",
              "https://static.planetminecraft.com/files/resource_media/screenshot/1927/screen-3-1562541624.png",
              "https://static.planetminecraft.com/files/resource_media/screenshot/1927/screen-4-1562541651.png",
              "https://static.planetminecraft.com/files/resource_media/screenshot/1927/screen-5-1562541659.png",
              "https://static.planetminecraft.com/files/resource_media/screenshot/1927/dungeon-escape-1562541687.png"],
    "icon": "https://static.planetminecraft.com/files/resource_media/screenshot/1928/island-thumbnail-1562716697.png",
    "url": "the_secret_island"
  }
]

//const mapPage = require('mapPage')

function loadMapsList() {
  var mapSection = ""
  for (var map in mapsList) {
      mapSection += "<a href='maps/" + mapsList[map]["url"] + "'> <div class='listItem'> <img src='" + mapsList[map]["icon"] + "'/> <p class='listItemHeader_hiddenUntilHover'>" +  mapsList[map]["title"] + "</p> <p class='listItemText_hiddenUntilHover'>" + mapsList[map]["shortDescription"] + "</div> </a>"
      console.log(fixMapDescription())
  }
  document.getElementsByClassName("sectionlistMaps")[0].innerHTML = mapSection
}

function doMapPage() {
  var mapPageData = "<div class='content'> <div class='section'> <span class='sectionheader'>"
  for (var map in mapsList) {
    mapPageData += mapsList[map]["title"] + "</span> <p class='mapDesc'>" + fixMapDescription + ""
  }
}

function fixMapDescription() {
  var fixedDesc = ""
  for (var map in mapsList) {
    var desc = mapsList[map]["longDescription"]
    while(desc.includes(')')) {
      var linkStart = desc.indexOf("(")+1
      var linkEnd = desc.indexOf(")")
      var tempDesc = desc.substring(linkStart, linkEnd)
      if (tempDesc.includes("youtube")) {
        tempDesc = "<iframe width='655' height='398' src='" + tempDesc + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe>"
      } else if (tempDesc.includes('.png') || tempDesc.includes('.jpg')) {
        tempDesc = "<img src='" + tempDesc + "' alt='map image'/>"
      } else {
        tempDesc = "<a href='" + tempDesc + "'>This shouldn't be here!/<a>"
      }
      fixedDesc += tempDesc
      desc = desc.substr(linkEnd+1)
    }
  }
  return fixedDesc
}
