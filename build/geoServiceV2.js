"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContextToReference = exports.addToReferenceContext = exports._getReferenceContextName = exports.addBimElement = exports.addRoom = exports.addZone = exports.addSite = exports.addFloor = exports.addBuilding = exports.addAbstractElement = exports.createContext = exports.getChildType = void 0;
/*
 * Copyright 2023 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */
const spinal_model_graph_1 = require("spinal-model-graph");
const constants_1 = require("./constants");
const graphservice_1 = require("./graphservice");
/**
 * Returns the child type of the type given as parameter.
 * @param {string} parentType
 * @return {string} Child type
 */
function getChildType(parentType) {
    let parentTypeIndex = constants_1.GEOGRAPHIC_TYPES_ORDER.indexOf(parentType);
    if (parentTypeIndex === -1) {
        return '';
    }
    return constants_1.GEOGRAPHIC_TYPES_ORDER[parentTypeIndex + 1];
}
exports.getChildType = getChildType;
function createContext(contextName) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof contextName !== 'string') {
            throw Error('contextName must be a string');
        }
        const graph = (0, graphservice_1.getGraph)();
        const context = yield graph.getContext(contextName);
        if (typeof context !== 'undefined')
            return Promise.resolve(context);
        const contextRes = new spinal_model_graph_1.SpinalContext(contextName, constants_1.CONTEXT_TYPE);
        yield graph.addContext(contextRes);
        (0, graphservice_1.addNodeGraphService)(contextRes);
        return contextRes;
    });
}
exports.createContext = createContext;
function addAbstractElement(context, parent, elementName) {
    return __awaiter(this, void 0, void 0, function* () {
        const parentType = parent.type.get();
        const childType = getChildType(parentType);
        if (!childType) {
            throw Error(`${parentType} is not a valid type in geographic context`);
        }
        const childRelation = constants_1.MAP_TYPE_RELATION.get(childType);
        const childNode = new spinal_model_graph_1.SpinalNode(elementName, childType);
        yield parent.addChildInContext(childNode, childRelation, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, context);
        addToReferenceContext(childNode);
        return childNode;
    });
}
exports.addAbstractElement = addAbstractElement;
function addBuilding(context, parent, elementName) {
    const child = new spinal_model_graph_1.SpinalNode(elementName, constants_1.BUILDING_TYPE);
    addToReferenceContext(child);
    return parent.addChildInContext(child, constants_1.BUILDING_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, context);
}
exports.addBuilding = addBuilding;
function addFloor(context, parent, elementName) {
    const child = new spinal_model_graph_1.SpinalNode(elementName, constants_1.FLOOR_TYPE);
    addToReferenceContext(child);
    return parent.addChildInContext(child, constants_1.FLOOR_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, context);
}
exports.addFloor = addFloor;
function addSite(context, parent, elementName) {
    const child = new spinal_model_graph_1.SpinalNode(elementName, constants_1.SITE_TYPE);
    addToReferenceContext(child);
    return parent.addChildInContext(child, constants_1.SITE_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, context);
}
exports.addSite = addSite;
function addZone(context, parent, elementName) {
    const child = new spinal_model_graph_1.SpinalNode(elementName, constants_1.ZONE_TYPE);
    addToReferenceContext(child);
    return parent.addChildInContext(child, constants_1.ZONE_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, context);
}
exports.addZone = addZone;
function addRoom(context, parent, elementName) {
    const child = new spinal_model_graph_1.SpinalNode(elementName, constants_1.ROOM_TYPE);
    addToReferenceContext(child);
    return parent.addChildInContext(child, constants_1.ROOM_RELATION, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE, context);
}
exports.addRoom = addRoom;
function addBimElement(context, parent, elements, model) {
    const elems = Array.isArray(elements) ? elements : [elements];
    let contextId = context.info.id.get();
    let parentId = parent.info.id.get();
    addToReferenceContext(context);
    addToReferenceContext(parent);
    return Promise.all(elems.map((element) => {
        return window.spinal.BimObjectService.addBIMObject(contextId, parentId, element.dbId, element.name, model);
    }));
}
exports.addBimElement = addBimElement;
function _getReferenceContextName(node) {
    switch (node.info.type.get()) {
        case constants_1.SITE_TYPE:
            return {
                name: constants_1.SITE_REFERENCE_CONTEXT,
                relation: constants_1.SITE_RELATION,
            };
        case constants_1.BUILDING_TYPE:
            return {
                name: constants_1.BUILDING_REFERENCE_CONTEXT,
                relation: constants_1.BUILDING_RELATION,
            };
        case constants_1.FLOOR_TYPE:
            return {
                name: constants_1.FLOOR_REFERENCE_CONTEXT,
                relation: constants_1.FLOOR_RELATION,
            };
        case constants_1.ZONE_TYPE:
            return {
                name: constants_1.ZONE_REFERENCE_CONTEXT,
                relation: constants_1.ZONE_RELATION,
            };
        case constants_1.ROOM_TYPE:
            return {
                name: constants_1.ROOM_REFERENCE_CONTEXT,
                relation: constants_1.ROOM_RELATION,
            };
        default:
            return undefined;
    }
}
exports._getReferenceContextName = _getReferenceContextName;
function addToReferenceContext(node) {
    return __awaiter(this, void 0, void 0, function* () {
        const obj = _getReferenceContextName(node);
        const graph = (0, graphservice_1.getGraph)();
        if (typeof obj !== 'undefined') {
            let context = yield graph.getContext(obj.name);
            if (typeof context !== 'undefined') {
                const ids = context.getChildrenIds();
                if (ids.includes(node.info.id.get()))
                    return;
                yield context.addChild(node, obj.relation, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
            }
            context = new spinal_model_graph_1.SpinalContext(obj.name, obj.name.replace('.', ''));
            (0, graphservice_1.addNodeGraphService)(context);
            yield graph.addContext(context);
            yield context.addChild(node, obj.relation, spinal_model_graph_1.SPINAL_RELATION_PTR_LST_TYPE);
        }
    });
}
exports.addToReferenceContext = addToReferenceContext;
function addContextToReference(context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof context !== 'undefined') {
            yield context.map(constants_1.GEOGRAPHIC_RELATIONS, (node) => {
                (0, graphservice_1.addNodeGraphService)(node);
                return addToReferenceContext(node);
            });
        }
    });
}
exports.addContextToReference = addContextToReference;
//# sourceMappingURL=geoServiceV2.js.map