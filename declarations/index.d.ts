import { SpinalNodeRef } from 'spinal-env-viewer-graph-service';
import { SpinalContext, SpinalNode } from 'spinal-model-graph';
import * as constants from './constants';
declare const GeographicContext: {
    constants: typeof constants;
    /**
     * Returns the child type of the type given as parameter.
     * @param {string} parentType
     * @return {string} Child type
     */
    getChildType(parentType: string): string;
    /**
     * It Takes as parameter a context name, returns true if a context with the same name does not exist, else returns false.
     * @param {string} contextName
     * @returns {Boolean}
     */
    createContext(contextName: string): Promise<SpinalContext>;
    /**
     * This method takes as parameters a context (SpinalContext), a parent node (must be a SpinalNode) and a string representing the abstract element type;
     * @param {SpinalContext | SpinalNodeRef} context - The Context geographic
     * @param {SpinalNode | SpinalNodeRef} node - The parent Node
     * @param {string} elementName - The AbstactElement Name
     * @returns {Boolean}
     */
    addAbstractElement(context: SpinalNodeRef | SpinalContext, node: SpinalNodeRef | SpinalNode, elementName: string): Promise<boolean>;
    /**
     * @param {string} contextId - The Context geographic Id
     * @param {string} parentId - The parent Node Id
     * @param {string} buildingName - Building Name
     */
    addBuilding(contextId: any, parentId: any, buildingName: any): Promise<SpinalNode<any>>;
    /**
     * @param {string} contextId - The Context geographic Id
     * @param {string} parentId - The parent Node Id
     * @param {string} floorName - the floor Name
     */
    addFloor(contextId: any, parentId: any, floorName: any): Promise<SpinalNode<any>>;
    /**
     * @param {string} contextId - The Context geographic Id
     * @param {string} parentId - The parent Node Id
     * @param {string} siteName - the site Name
     */
    addSite(contextId: any, parentId: any, siteName: any): Promise<SpinalNode<any>>;
    /**
     * @param {string} contextId - The Context geographic Id
     * @param {string} parentId - The parent Node Id
     * @param {string} zoneName - Zone name
     */
    addZone(contextId: any, parentId: any, zoneName: any): Promise<SpinalNode<any>>;
    /**
     * @param {string} contextId - The Context geographic
     * @param {string} parentId - The parent Node
     * @param {string} roomName - Room Name
     */
    addRoom(contextId: any, parentId: any, roomName: any): Promise<SpinalNode<any>>;
    /**
     * it uses bimObject service to add all dbIds passed as parameters.
     * the parameter dbIds can be a simple dbIds or a list of dbIds.
     * @param {SpinalContext} context - The Context geographic
     * @param {SpinalNode} node - The parent Node
     * @param {Number | Array<Number>} dbIds - Can be
     */
    addBimElement(context: any, node: any, dbIds: any, model: any): void;
    _getReferenceContextName(nodeId: any): {
        name: string;
        relation: string;
    };
    /**
     *
     * @param {string} nodeId
     */
    addToReferenceContext(nodeId: any): Promise<boolean>;
    /**
     *
     * @param {string} contextId
     */
    addContextToReference(contextId: any): Promise<void>;
};
export default GeographicContext;
