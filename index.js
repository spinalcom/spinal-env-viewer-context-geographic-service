var graphLib = require("spinalgraph");
const { AbstractElement } = require("spinal-models-building-elements");

const CONTEXT_TYPE = "context";
const BUILDING_TYPE = "building";
const FLOOR_TYPE = "floor";
const ZONE_TYPE = "zone";
const ROOM_TYPE = "room";
const EQUIPMENT_TYPE = "equipment";

export default class ContextGeographic {
  constructor() {}

  getChildType(parentType) {
    switch (parentType) {
      case CONTEXT_TYPE:
        return { type: BUILDING_TYPE, relation: "hasBuilding" };
      case BUILDING_TYPE:
        return { type: FLOOR_TYPE, relation: "hasFloor" };
      case FLOOR_TYPE:
        return { type: ZONE_TYPE, relation: "hasZone" };
      case ZONE_TYPE:
        return { type: ROOM_TYPE, relation: "hasRoom" };
      case ROOM_TYPE:
        return { type: EQUIPMENT_TYPE, relation: "hasBimObject" };
      default:
        return undefined;
    }
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

  addAbstractElement(context, parentNode, childName) {
    var childType = this.getChildType(parentNode.info.type.get());


    // le nom de la relation est généré en fonction du type, c'est pourquoi je verifie si c'est valide
    if (!childType) throw `${parentNode.info.type.get()} is not a valid type in geographical context`;

    var childNode = new graphLib.SpinalNode(
      childName,
      childType.type,
      new AbstractElement(childName)
    );

    parentNode.addChildInContext(childNode, childType.relation, "Ref", context);
    return true;
  }

  addBuilding(context, parentNode, buildingName) {
    return this.addAbstractElement(context, parentNode, buildingName);
  }

  addFloor(context, parentNode, floorName) {
    return this.addAbstractElement(context, parentNode, floorName);
  }

  addZone(context, parentNode, zoneName) {
    return this.addAbstractElement(context, parentNode, zoneName);
  }

  addRoom(parentNode, roomName) {
    return this.addAbstractElement(context, parentNode, roomName);
  }
}

var contextGeographic = new ContextGeographic();

module.exports = contextGeographic;
