import {
  SPINAL_RELATION_TYPE,
  SPINAL_RELATION_LST_PTR_TYPE,
  SpinalGraphService
} from "spinal-env-viewer-graph-service";
import {
  AbstractElement
} from "spinal-models-building-elements";

// import bimobjService from 'spinal-env-viewer-plugin-bimobjectservice';

const bimobjService = window.spinal.BimObjectService;

import * as constants from "./constants";
import {
  Model
} from "spinal-core-connectorjs_type";

const GeographicContext = {
  constants: constants,

  /**
   * Returns the child type of the type given as parameter.
   * @param {string} parentType
   * @return {string} Child type
   */
  getChildType(parentType) {
    let parentTypeIndex = constants.GEOGRAPHIC_TYPES_ORDER.indexOf(
      parentType);

    if (parentTypeIndex === -1) {
      return "";
    }

    return constants.GEOGRAPHIC_TYPES_ORDER[parentTypeIndex + 1];
  },

  /**
   * It Takes as parameter a context name, returns true if a context with the same name does not exist, else returns false.
   * @param {string} contextName
   * @returns {Boolean}
   */
  createContext(contextName) {
    if (typeof contextName !== "string") {
      throw Error(
        "contextName must be a string");
    }

    const context = SpinalGraphService.getContext(contextName);

    if (typeof context !== "undefined") return Promise.resolve(context);


    return SpinalGraphService.addContext(contextName,
      constants.CONTEXT_TYPE,
      new AbstractElement(contextName));


  },

  /**
   * This method takes as parameters a context (SpinalContext), a parent node (must be a SpinalNode) and a string representing the abstract element type;
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} elementName - The AbstactElement Name
   * @returns {Boolean}
   */
  addAbstractElement(context, node, elementName) {
    const parentType = node.type.get();
    const childType = this.getChildType(parentType);

    if (!childType) {
      throw Error(
        `${parentType} is not a valid type in geographic context`
      );
    }

    const childRelation = constants.MAP_TYPE_RELATION.get(childType);

    const childNode = SpinalGraphService.createNode({
        name: elementName,
        type: childType
      },
      new AbstractElement(elementName)
    );
    SpinalGraphService.addChildInContext(node.id.get(), childNode, context.id
      .get(), childRelation, SPINAL_RELATION_TYPE);

    this.addToReferenceContext(childNode);

    return true;
  },

  /**
   * @param {string} contextId - The Context geographic Id
   * @param {string} parentId - The parent Node Id
   * @param {string} buildingName - Building Name
   */
  addBuilding(contextId, parentId, buildingName) {

    let nodeId = SpinalGraphService.createNode({
      name: buildingName,
      type: constants.BUILDING_TYPE
    }, new AbstractElement(buildingName));

    this.addToReferenceContext(nodeId);


    return SpinalGraphService.addChildInContext(parentId, nodeId, contextId,
      constants.BUILDING_RELATION, SPINAL_RELATION_TYPE)

  },





  /**
   * @param {string} contextId - The Context geographic Id
   * @param {string} parentId - The parent Node Id
   * @param {string} floorName - the floor Name
   */
  addFloor(contextId, parentId, floorName) {

    let nodeId = SpinalGraphService.createNode({
      name: floorName,
      type: constants.FLOOR_TYPE
    }, new AbstractElement(floorName));

    this.addToReferenceContext(nodeId);

    return SpinalGraphService.addChildInContext(parentId, nodeId, contextId,
      constants.FLOOR_RELATION, SPINAL_RELATION_TYPE)

  },


  /**
   * @param {string} contextId - The Context geographic Id
   * @param {string} parentId - The parent Node Id
   * @param {string} siteName - the site Name
   */
  addSite(contextId, parentId, siteName) {

    let nodeId = SpinalGraphService.createNode({
      name: siteName,
      type: constants.SITE_TYPE
    }, new AbstractElement(siteName));

    this.addToReferenceContext(nodeId);

    return SpinalGraphService.addChildInContext(parentId, nodeId, contextId,
      constants.SITE_RELATION, SPINAL_RELATION_TYPE)

  },


  /**
   * @param {string} contextId - The Context geographic Id
   * @param {string} parentId - The parent Node Id
   * @param {string} zoneName - Zone name
   */
  addZone(contextId, parentId, zoneName) {
    let nodeId = SpinalGraphService.createNode({
      name: zoneName,
      type: constants.ZONE_TYPE
    }, new AbstractElement(zoneName));

    this.addToReferenceContext(nodeId);

    return SpinalGraphService.addChildInContext(parentId, nodeId, contextId,
      constants.ZONE_RELATION, SPINAL_RELATION_TYPE);

  },


  /**
   * @param {string} contextId - The Context geographic
   * @param {string} parentId - The parent Node
   * @param {string} roomName - Room Name
   */
  addRoom(contextId, parentId, roomName) {
    let nodeId = SpinalGraphService.createNode({
      name: roomName,
      type: constants.ROOM_TYPE
    }, new AbstractElement(roomName));

    this.addToReferenceContext(nodeId);

    return SpinalGraphService.addChildInContext(parentId, nodeId, contextId,
      constants.ROOM_RELATION, SPINAL_RELATION_TYPE);
  },

  /**
   * it uses bimObject service to add all dbIds passed as parameters.
   * the parameter dbIds can be a simple dbIds or a list of dbIds.
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {Number | Array<Number>} dbIds - Can be
   */
  addBimElement(context, node, dbIds, model) {

    if (!Array.isArray(dbIds)) dbIds = [dbIds];


    // le bimObjectService
    // let c = SpinalGraphService.getRealNode(context.id.get());
    // let n = SpinalGraphService.getRealNode(node.id.get());

    let contextId = context.id.get();
    let parentId = node.id.get();

    dbIds.forEach(element => {
      // bimobjService.addBIMObject(c, n, element.dbId, element.name);
      window.spinal.BimObjectService.addBIMObject(contextId, parentId,
        element.dbId,
        element.name, model)
    });
  },


  _getReferenceContextName(nodeId) {
    let node = SpinalGraphService.getInfo(nodeId);

    switch (node.type.get()) {
      case constants.SITE_TYPE:
        return {
          name: constants.SITE_REFERENCE_CONTEXT,
            relation: constants.SITE_RELATION
        };
      case constants.BUILDING_TYPE:
        return {
          name: constants.BUILDING_REFERENCE_CONTEXT,
            relation: constants.BUILDING_RELATION
        };

      case constants.FLOOR_TYPE:
        return {
          name: constants.FLOOR_REFERENCE_CONTEXT,
            relation: constants.FLOOR_RELATION
        };

      case constants.ZONE_TYPE:
        return {
          name: constants.ZONE_REFERENCE_CONTEXT,
            relation: constants.ZONE_RELATION
        };

      case constants.ROOM_TYPE:
        return {
          name: constants.ROOM_REFERENCE_CONTEXT,
            relation: constants.ROOM_RELATION
        };

      default:
        return undefined;
    }
  },

  /**
   *
   * @param {string} nodeId
   */
  addToReferenceContext(nodeId) {
    let obj = this._getReferenceContextName(nodeId);

    if (typeof obj !== "undefined") {
      let context = SpinalGraphService.getContext(obj.name);

      if (typeof context !== "undefined") {

        return SpinalGraphService.addChild(context.info.id.get(), nodeId,
          obj.relation,
          SPINAL_RELATION_LST_PTR_TYPE);
      }

      return SpinalGraphService.addContext(obj.name, obj.name.replace(
        ".", ""), new Model({
        name: obj.name
      })).then(c => {
        return SpinalGraphService.addChild(c.info.id.get(), nodeId,
          obj.relation,
          SPINAL_RELATION_LST_PTR_TYPE);
      });


    }

  },

  /**
   *
   * @param {string} contextId
   */
  addContextToReference(contextId) {
    let context = SpinalGraphService.getRealNode(contextId);

    if (typeof context !== "undefined") {
      return context.forEach(constants.GEOGRAPHIC_RELATIONS, (node) => {
        SpinalGraphService._addNode(node);
        this.addToReferenceContext(node.info.id.get());
      })
    }

  }

};

export default GeographicContext;
