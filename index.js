import * as graphLib from "spinalgraph";
import {AbstractElement} from "spinal-models-building-elements";
import bimobjService from 'spinal-env-viewer-plugin-bimobjectservice';

import * as constants from "./constants";

const GeographicContext = {
  constants: constants,
  /**
   * It Takes as parameter a context name, returns true if a context with the same name does not exist, else returns false.
   * @param {string} contextName
   * @returns {Promise<Boolean>}
   */
  async createContext(contextName) {
    if (typeof contextName !== "string") {
      throw Error(
        "contextName must be a string");
    }

    var _graph = spinal.ForgeViewer.forgeFile.graph;

    var context = await _graph.getContext(contextName);

    if (typeof context !== "undefined") return false;

    var contextGeo = new graphLib.SpinalContext(
      contextName,
      constants.CONTEXT_TYPE,
      new AbstractElement(contextName)
    );
    await _graph.addContext(contextGeo);
    return true;
  },

  /**
   * This method takes as parameters a context (SpinalContext), a parent node (must be a SpinalNode) and a string representing the abstract element type;
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} elementName - The AbstactElement Name
   * @returns {Boolean}
   */
  addAbstractElement(context, node, elementName) {
    if (
      !(context instanceof graphLib.SpinalContext) ||
      !(node instanceof graphLib.SpinalNode) ||
      typeof elementName !== "string"
    ) {
      throw Error(
        "the parameters types must be (SpinalContext, SpinalNode, string) check if its case"
      );
    }

    var childType = constants.MAP_TYPE_RELATION.get(node.info.type.get());

    if (!childType) {
      throw Error(
        `${node.info.type.get()} is not a valid type in geographical context`
      );
    }

    var childNode = new graphLib.SpinalNode(
      elementName,
      childType.type,
      new AbstractElement(elementName)
    );

    node.addChildInContext(childNode, childType.relation, graphLib.SPINAL_RELATION_TYPE,
      context);
    return true;
  },

  /**
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} buildingName - Building Name
   */
  addBuilding(context, node, buildingName) {
    return GeographicContext.addAbstractElement(context, node, buildingName);
  },


  /**
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} floorName - the floor Name
   */
  addFloor(context, node, floorName) {
    return GeographicContext.addAbstractElement(context, node, floorName);
  },


  /**
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} zoneName - Zone name
   */
  addZone(context, node, zoneName) {
    return GeographicContext.addAbstractElement(context, node, zoneName);
  },


  /**
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} roomName - Room Name
   */
  addRoom(context, node, roomName) {
    return GeographicContext.addAbstractElement(context, node, roomName);
  },

  /**
   * it uses bimObject service to add all dbIds passed as parameters.
   * the parameter dbIds can be a simple dbIds or a list of dbIds.
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {Number | Array<Number>} dbIds - Can be
   */
  addBimElement(context, node, dbIds) {
    if (!Array.isArray(dbIds)) dbIds = [dbIds];

    dbIds.forEach(element => {
      bimobjService.addBIMObject(context, node, element, "bimObject_" +
        element);
    });
  }
};

export default GeographicContext;
