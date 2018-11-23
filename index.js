var graphLib = require("spinalgraph");
const { AbstractElement } = require("spinal-models-building-elements");
import bimobjService from 'spinal-env-viewer-plugin-bimobjectservice';


const CONTEXT_TYPE = "context";
const BUILDING_TYPE = "building";
const FLOOR_TYPE = "floor";
const ZONE_TYPE = "zone";
const ROOM_TYPE = "room";
const EQUIPMENT_TYPE = "equipment";

export default class ContextGeographic {
  constructor() {}

  /**
   * This method takes as parameter a type (parent type), depending on this type, it returns the type of the child and the name of the relationship
   * @param  {string} parentType - it allows to determine the type to the child
   * @returns {{name : childName, relation : relationName}}
   */
  getChildType(parentType) {
    if (typeof parentType !== "string") throw "The parentType must be a string";

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

  /**
   * It Takes as parameter a context name, returns true if a context with the same name does not exist, else returns false.
   * @param  {string} contextName
   * @returns {Promise<Boolean>}
   */
  async createContext(contextName) {
    if (typeof contextName !== "string") throw "contextName must be a string";

    var _graph = spinal.ForgeViewer.forgeFile.graph;

    var context = await _graph.getContext(contextName);

    if (typeof context !== "undefined") return false;

    var contextGeo = new graphLib.SpinalContext(
      contextName,
      "context",
      new AbstractElement(contextName)
    );
    await _graph.addContext(contextGeo);
    return true;
  }

  /**
   * This method takes as parameters a context (SpinalContext), a parent node (must be a SpinalNode) and a string representing the abstract element type;
   * @param  {SpinalContext} context - The Context geographic
   * @param  {SpinalNode} node - The parent Node
   * @param  {string} elementName - The AbstactElement Name
   * @returns {Boolean}
   */
  addAbstractElement(context, node, elementName) {
    if (
      !(context instanceof graphLib.SpinalContext) ||
      !(node instanceof graphLib.SpinalNode) ||
      typeof elementName !== "string"
    )
      throw "the parameters types must be (SpinalContext, SpinalNode, string) check if its case";

    var childType = this.getChildType(node.info.type.get());

    // le nom de la relation est généré en fonction du type, c'est pourquoi je verifie si c'est valide
    if (!childType)
      throw `${node.info.type.get()} is not a valid type in geographical context`;

    var childNode = new graphLib.SpinalNode(
      elementName,
      childType.type,
      new AbstractElement(elementName)
    );

    node.addChildInContext(childNode, childType.relation, "Ref", context);
    return true;
  }

  /**
   * @param  {SpinalContext} context - The Context geographic
   * @param  {SpinalNode} node - The parent Node
   * @param  {string} buildingName - Building Name
   */
  addBuilding(context, node, buildingName) {
    return this.addAbstractElement(context, node, buildingName);
  }


  /**
   * @param  {SpinalContext} context - The Context geographic
   * @param  {SpinalNode} node - The parent Node
   * @param  {string} floorName - the floor Name
   */
  addFloor(context, node, floorName) {
    return this.addAbstractElement(context, node, floorName);
  }


  /**
   * @param  {SpinalContext} context - The Context geographic
   * @param  {SpinalNode} node - The parent Node
   * @param  {string} zoneName - Zone name
   */
  addZone(context, node, zoneName) {
    return this.addAbstractElement(context, node, zoneName);
  }


  /**
   * @param  {SpinalContext} context - The Context geographic
   * @param  {SpinalNode} node - The parent Node
   * @param  {string} roomName - Room Name
   */
  addRoom(context, node, roomName) {
    return this.addAbstractElement(context, node, roomName);
  }

  /**
   * it uses bimObject service to add all dbIds passed as parameters.
   * the parameter dbIds can be a simple dbIds or a list of dbIds.
   * 
   * @param  {SpinalContext} context - The Context geographic
   * @param  {SpinalNode} node - The parent Node
   * @param  {Number | Array<Number>} dbIds - Can be
   */
  addBimElement(context, node, dbIds) {
    if(!Array.isArray(dbIds)) dbIds = [dbIds];

    dbIds.forEach(element => {
      bimobjService.addBIMObject(context,node,element,"bimObject_" + element );
    });

  }

}

var contextGeographic = new ContextGeographic();

module.exports = contextGeographic;
