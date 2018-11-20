var graphLib = require("spinalgraph");
const { AbstractElement } = require("spinal-models-building-elements");

export default class ContextGeographic {
  constructor() {}

  formatRelationName(type) {
    return "has" + type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  }

  async createContext(contextName) {

    var _graph = spinal.ForgeViewer.forgeFile.graph;

    var context = await _graph.getContext(contextName);

    if (typeof context !== "undefined") return false;

    var contextGeo = new graphLib.SpinalContext(
      contextName,
      "context",
      new AbstractElement(contextName)
    );
    _graph.addContext(contextGeo);
    return true;
  }

  addAbstractElement(parentNode, childName, type) {
    var types = ["building", "floor", "zone", "room", "equipment"];

    // le nom de la relation est généré en fonction du type, c'est pourquoi je verifie si c'est valide
    if (!types.includes(type.toLowerCase())) throw "The type is not Valid";

    var childNode = new graphLib.SpinalNode(
      childName,
      type,
      new AbstractElement(childName)
    );

    parentNode.addChild(childNode, this.formatRelationName(type), "Ref");
    return true;
  }

  addBuilding(parentNode, buildingName) {
    return this.addAbstractElement(parentNode, buildingName, "building");
  }

  addFloor(parentNode, floorName) {
    return this.addAbstractElement(parentNode, floorName, "floor");
  }

  addZone(parentNode, zoneName) {
    return this.addAbstractElement(parentNode, zoneName, "zone");
  }

  addRoom(parentNode, roomName) {
    return this.addAbstractElement(parentNode, roomName, "room");
  }
}

var contextGeographic = new ContextGeographic();

module.exports = contextGeographic;
