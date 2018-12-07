import {
  SPINAL_RELATION_TYPE,
  SpinalGraphService
} from "spinal-env-viewer-graph-service";
import { AbstractElement } from "spinal-models-building-elements";
import bimobjService from 'spinal-env-viewer-plugin-bimobjectservice';

import * as constants from "./constants";

const GeographicContext = {
  constants: constants,

  /**
   * Returns the child type of the type given as parameter.
   * @param {string} parentType
   * @return {string} Child type
   */
  getChildType( parentType ) {
    let parentTypeIndex = constants.GEOGRAPHIC_TYPES_ORDER.indexOf( parentType );

    return constants.GEOGRAPHIC_TYPES_ORDER[parentTypeIndex + 1];
  },

  /**
   * It Takes as parameter a context name, returns true if a context with the same name does not exist, else returns false.
   * @param {string} contextName
   * @returns {Boolean}
   */
  createContext( contextName ) {
    if (typeof contextName !== "string") {
      throw Error(
        "contextName must be a string" );
    }

    const context = SpinalGraphService.getContext( contextName );

    if (typeof context !== "undefined") return false;


    SpinalGraphService.addContext( contextName,
      constants.CONTEXT_TYPE,
      new AbstractElement( contextName ) );

    return true;
  },

  /**
   * This method takes as parameters a context (SpinalContext), a parent node (must be a SpinalNode) and a string representing the abstract element type;
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} elementName - The AbstactElement Name
   * @returns {Boolean}
   */
  addAbstractElement( context, node, elementName ) {
    const parentType = node.type.get();
    const childType = this.getChildType( parentType );

    if (!childType) {
      throw Error(
        `${parentType} is not a valid type in geographical context`
      );
    }

    const childRelation = constants.MAP_TYPE_RELATION.get( childType );

    const childNode = SpinalGraphService.createNode(
      { name: elementName, type: childType },
      new AbstractElement( elementName )
    );
    SpinalGraphService.addChildInContext( node.id.get(), childNode, context.id.get(), childRelation, SPINAL_RELATION_TYPE );
    return true;
  },

  /**
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} buildingName - Building Name
   */
  addBuilding( context, node, buildingName ) {
    return GeographicContext.addAbstractElement( context, node, buildingName );
  },


  /**
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} floorName - the floor Name
   */
  addFloor( context, node, floorName ) {
    return GeographicContext.addAbstractElement( context, node, floorName );
  },


  /**
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} zoneName - Zone name
   */
  addZone( context, node, zoneName ) {
    return GeographicContext.addAbstractElement( context, node, zoneName );
  },


  /**
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {string} roomName - Room Name
   */
  addRoom( context, node, roomName ) {
    return GeographicContext.addAbstractElement( context, node, roomName );
  },

  /**
   * it uses bimObject service to add all dbIds passed as parameters.
   * the parameter dbIds can be a simple dbIds or a list of dbIds.
   * @param {SpinalContext} context - The Context geographic
   * @param {SpinalNode} node - The parent Node
   * @param {Number | Array<Number>} dbIds - Can be
   */
  addBimElement( context, node, dbIds ) {
    if (!Array.isArray( dbIds )) dbIds = [dbIds];

    dbIds.forEach( element => {
      bimobjService.addBIMObject( context, node, element, "bimObject_" +
        element );
    } );
  }
};

export default GeographicContext;
