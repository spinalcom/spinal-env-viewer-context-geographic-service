declare const CONTEXT_TYPE = "geographicContext";
declare const SITE_TYPE = "geographicSite";
declare const BUILDING_TYPE = "geographicBuilding";
declare const FLOOR_TYPE = "geographicFloor";
declare const ZONE_TYPE = "geographicZone";
declare const ROOM_TYPE = "geographicRoom";
declare const EQUIPMENT_TYPE = "BIMObject";
declare const REFERENCE_TYPE = "geographicReference";
declare const SITE_RELATION = "hasGeographicSite";
declare const BUILDING_RELATION = "hasGeographicBuilding";
declare const FLOOR_RELATION = "hasGeographicFloor";
declare const ZONE_RELATION = "hasGeographicZone";
declare const ROOM_RELATION = "hasGeographicRoom";
declare const EQUIPMENT_RELATION = "hasBimObject";
declare const REFERENCE_RELATION = "hasReferenceObject";
declare const REFERENCE_ROOM_RELATION = "hasReferenceObject.ROOM";
declare const SITE_REFERENCE_CONTEXT = ".SiteContext";
declare const BUILDING_REFERENCE_CONTEXT = ".BuildingContext";
declare const FLOOR_REFERENCE_CONTEXT = ".FloorContext";
declare const ZONE_REFERENCE_CONTEXT = ".ZoneContext";
declare const ROOM_REFERENCE_CONTEXT = ".RoomContext";
declare const GEOGRAPHIC_TYPES: string[];
declare const GEOGRAPHIC_TYPES_ORDER: string[];
declare const GEOGRAPHIC_RELATIONS: string[];
declare const GEOGRAPHIC_RELATIONS_ORDER: string[];
declare const MAP_TYPE_RELATION: Map<string, string>;
declare const MAP_RELATION_TYPE: Map<string, string>;
export { CONTEXT_TYPE, SITE_TYPE, BUILDING_TYPE, FLOOR_TYPE, ZONE_TYPE, ROOM_TYPE, GEOGRAPHIC_TYPES, EQUIPMENT_TYPE, GEOGRAPHIC_TYPES_ORDER, SITE_RELATION, BUILDING_RELATION, FLOOR_RELATION, ZONE_RELATION, ROOM_RELATION, GEOGRAPHIC_RELATIONS, EQUIPMENT_RELATION, GEOGRAPHIC_RELATIONS_ORDER, MAP_TYPE_RELATION, MAP_RELATION_TYPE, REFERENCE_TYPE, REFERENCE_RELATION, SITE_REFERENCE_CONTEXT, BUILDING_REFERENCE_CONTEXT, FLOOR_REFERENCE_CONTEXT, ZONE_REFERENCE_CONTEXT, ROOM_REFERENCE_CONTEXT, REFERENCE_ROOM_RELATION };
