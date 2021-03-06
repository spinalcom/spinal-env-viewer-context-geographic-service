"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const CONTEXT_TYPE = "geographicContext";
const SITE_TYPE = "geographicSite";
const BUILDING_TYPE = "geographicBuilding";
const FLOOR_TYPE = "geographicFloor";
const ZONE_TYPE = "geographicZone";
const ROOM_TYPE = "geographicRoom";
const EQUIPMENT_TYPE = "BIMObject";
const REFERENCE_TYPE = "geographicReference";

const SITE_RELATION = "hasGeographicSite";
const BUILDING_RELATION = "hasGeographicBuilding";
const FLOOR_RELATION = "hasGeographicFloor";
const ZONE_RELATION = "hasGeographicZone";
const ROOM_RELATION = "hasGeographicRoom";
const EQUIPMENT_RELATION = "hasBimObject";
const REFERENCE_RELATION = "hasReferenceObject";

const SITE_REFERENCE_CONTEXT = ".SiteContext";
const BUILDING_REFERENCE_CONTEXT = ".BuildingContext";
const FLOOR_REFERENCE_CONTEXT = ".FloorContext";
const ZONE_REFERENCE_CONTEXT = ".ZoneContext";
const ROOM_REFERENCE_CONTEXT = ".RoomContext";

const GEOGRAPHIC_TYPES = Object.freeze([SITE_TYPE, BUILDING_TYPE, FLOOR_TYPE, ZONE_TYPE, ROOM_TYPE]);

const GEOGRAPHIC_TYPES_ORDER = Object.freeze([CONTEXT_TYPE, SITE_TYPE, BUILDING_TYPE, FLOOR_TYPE, ZONE_TYPE, ROOM_TYPE, EQUIPMENT_TYPE]);

const GEOGRAPHIC_RELATIONS = Object.freeze([SITE_RELATION, BUILDING_RELATION, FLOOR_RELATION, ZONE_RELATION, ROOM_RELATION, EQUIPMENT_RELATION]);

const GEOGRAPHIC_RELATIONS_ORDER = Object.freeze([SITE_RELATION, BUILDING_RELATION, FLOOR_RELATION, ZONE_RELATION, ROOM_RELATION, EQUIPMENT_RELATION]);

const MAP_TYPE_RELATION = Object.freeze(new Map([[SITE_TYPE, SITE_RELATION], [BUILDING_TYPE, BUILDING_RELATION], [FLOOR_TYPE, FLOOR_RELATION], [ZONE_TYPE, ZONE_RELATION], [ROOM_TYPE, ROOM_RELATION], [EQUIPMENT_TYPE, EQUIPMENT_RELATION]]));

const MAP_RELATION_TYPE = Object.freeze(new Map([[SITE_RELATION, SITE_TYPE], [BUILDING_RELATION, BUILDING_TYPE], [FLOOR_RELATION, FLOOR_TYPE], [ZONE_RELATION, ZONE_TYPE], [ROOM_RELATION, ROOM_TYPE], [EQUIPMENT_RELATION, EQUIPMENT_TYPE]]));

exports.CONTEXT_TYPE = CONTEXT_TYPE;
exports.SITE_TYPE = SITE_TYPE;
exports.BUILDING_TYPE = BUILDING_TYPE;
exports.FLOOR_TYPE = FLOOR_TYPE;
exports.ZONE_TYPE = ZONE_TYPE;
exports.ROOM_TYPE = ROOM_TYPE;
exports.GEOGRAPHIC_TYPES = GEOGRAPHIC_TYPES;
exports.EQUIPMENT_TYPE = EQUIPMENT_TYPE;
exports.GEOGRAPHIC_TYPES_ORDER = GEOGRAPHIC_TYPES_ORDER;
exports.SITE_RELATION = SITE_RELATION;
exports.BUILDING_RELATION = BUILDING_RELATION;
exports.FLOOR_RELATION = FLOOR_RELATION;
exports.ZONE_RELATION = ZONE_RELATION;
exports.ROOM_RELATION = ROOM_RELATION;
exports.GEOGRAPHIC_RELATIONS = GEOGRAPHIC_RELATIONS;
exports.EQUIPMENT_RELATION = EQUIPMENT_RELATION;
exports.GEOGRAPHIC_RELATIONS_ORDER = GEOGRAPHIC_RELATIONS_ORDER;
exports.MAP_TYPE_RELATION = MAP_TYPE_RELATION;
exports.MAP_RELATION_TYPE = MAP_RELATION_TYPE;
exports.REFERENCE_TYPE = REFERENCE_TYPE;
exports.REFERENCE_RELATION = REFERENCE_RELATION;
exports.SITE_REFERENCE_CONTEXT = SITE_REFERENCE_CONTEXT;
exports.BUILDING_REFERENCE_CONTEXT = BUILDING_REFERENCE_CONTEXT;
exports.FLOOR_REFERENCE_CONTEXT = FLOOR_REFERENCE_CONTEXT;
exports.ZONE_REFERENCE_CONTEXT = ZONE_REFERENCE_CONTEXT;
exports.ROOM_REFERENCE_CONTEXT = ROOM_REFERENCE_CONTEXT;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiQ09OVEVYVF9UWVBFIiwiU0lURV9UWVBFIiwiQlVJTERJTkdfVFlQRSIsIkZMT09SX1RZUEUiLCJaT05FX1RZUEUiLCJST09NX1RZUEUiLCJFUVVJUE1FTlRfVFlQRSIsIlJFRkVSRU5DRV9UWVBFIiwiU0lURV9SRUxBVElPTiIsIkJVSUxESU5HX1JFTEFUSU9OIiwiRkxPT1JfUkVMQVRJT04iLCJaT05FX1JFTEFUSU9OIiwiUk9PTV9SRUxBVElPTiIsIkVRVUlQTUVOVF9SRUxBVElPTiIsIlJFRkVSRU5DRV9SRUxBVElPTiIsIlNJVEVfUkVGRVJFTkNFX0NPTlRFWFQiLCJCVUlMRElOR19SRUZFUkVOQ0VfQ09OVEVYVCIsIkZMT09SX1JFRkVSRU5DRV9DT05URVhUIiwiWk9ORV9SRUZFUkVOQ0VfQ09OVEVYVCIsIlJPT01fUkVGRVJFTkNFX0NPTlRFWFQiLCJHRU9HUkFQSElDX1RZUEVTIiwiT2JqZWN0IiwiZnJlZXplIiwiR0VPR1JBUEhJQ19UWVBFU19PUkRFUiIsIkdFT0dSQVBISUNfUkVMQVRJT05TIiwiR0VPR1JBUEhJQ19SRUxBVElPTlNfT1JERVIiLCJNQVBfVFlQRV9SRUxBVElPTiIsIk1hcCIsIk1BUF9SRUxBVElPTl9UWVBFIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLGVBQWUsbUJBQXJCO0FBQ0EsTUFBTUMsWUFBWSxnQkFBbEI7QUFDQSxNQUFNQyxnQkFBZ0Isb0JBQXRCO0FBQ0EsTUFBTUMsYUFBYSxpQkFBbkI7QUFDQSxNQUFNQyxZQUFZLGdCQUFsQjtBQUNBLE1BQU1DLFlBQVksZ0JBQWxCO0FBQ0EsTUFBTUMsaUJBQWlCLFdBQXZCO0FBQ0EsTUFBTUMsaUJBQWlCLHFCQUF2Qjs7QUFHQSxNQUFNQyxnQkFBZ0IsbUJBQXRCO0FBQ0EsTUFBTUMsb0JBQW9CLHVCQUExQjtBQUNBLE1BQU1DLGlCQUFpQixvQkFBdkI7QUFDQSxNQUFNQyxnQkFBZ0IsbUJBQXRCO0FBQ0EsTUFBTUMsZ0JBQWdCLG1CQUF0QjtBQUNBLE1BQU1DLHFCQUFxQixjQUEzQjtBQUNBLE1BQU1DLHFCQUFxQixvQkFBM0I7O0FBR0EsTUFBTUMseUJBQXlCLGNBQS9CO0FBQ0EsTUFBTUMsNkJBQTZCLGtCQUFuQztBQUNBLE1BQU1DLDBCQUEwQixlQUFoQztBQUNBLE1BQU1DLHlCQUF5QixjQUEvQjtBQUNBLE1BQU1DLHlCQUF5QixjQUEvQjs7QUFJQSxNQUFNQyxtQkFBbUJDLE9BQU9DLE1BQVAsQ0FBYyxDQUNyQ3JCLFNBRHFDLEVBRXJDQyxhQUZxQyxFQUdyQ0MsVUFIcUMsRUFJckNDLFNBSnFDLEVBS3JDQyxTQUxxQyxDQUFkLENBQXpCOztBQVNBLE1BQU1rQix5QkFBeUJGLE9BQU9DLE1BQVAsQ0FBYyxDQUMzQ3RCLFlBRDJDLEVBRTNDQyxTQUYyQyxFQUczQ0MsYUFIMkMsRUFJM0NDLFVBSjJDLEVBSzNDQyxTQUwyQyxFQU0zQ0MsU0FOMkMsRUFPM0NDLGNBUDJDLENBQWQsQ0FBL0I7O0FBV0EsTUFBTWtCLHVCQUF1QkgsT0FBT0MsTUFBUCxDQUFjLENBQ3pDZCxhQUR5QyxFQUV6Q0MsaUJBRnlDLEVBR3pDQyxjQUh5QyxFQUl6Q0MsYUFKeUMsRUFLekNDLGFBTHlDLEVBTXpDQyxrQkFOeUMsQ0FBZCxDQUE3Qjs7QUFTQSxNQUFNWSw2QkFBNkJKLE9BQU9DLE1BQVAsQ0FBYyxDQUMvQ2QsYUFEK0MsRUFFL0NDLGlCQUYrQyxFQUcvQ0MsY0FIK0MsRUFJL0NDLGFBSitDLEVBSy9DQyxhQUwrQyxFQU0vQ0Msa0JBTitDLENBQWQsQ0FBbkM7O0FBU0EsTUFBTWEsb0JBQW9CTCxPQUFPQyxNQUFQLENBQWMsSUFBSUssR0FBSixDQUFRLENBQzlDLENBQUMxQixTQUFELEVBQVlPLGFBQVosQ0FEOEMsRUFFOUMsQ0FBQ04sYUFBRCxFQUFnQk8saUJBQWhCLENBRjhDLEVBRzlDLENBQUNOLFVBQUQsRUFBYU8sY0FBYixDQUg4QyxFQUk5QyxDQUFDTixTQUFELEVBQVlPLGFBQVosQ0FKOEMsRUFLOUMsQ0FBQ04sU0FBRCxFQUFZTyxhQUFaLENBTDhDLEVBTTlDLENBQUNOLGNBQUQsRUFBaUJPLGtCQUFqQixDQU44QyxDQUFSLENBQWQsQ0FBMUI7O0FBU0EsTUFBTWUsb0JBQW9CUCxPQUFPQyxNQUFQLENBQWMsSUFBSUssR0FBSixDQUFRLENBQzlDLENBQUNuQixhQUFELEVBQWdCUCxTQUFoQixDQUQ4QyxFQUU5QyxDQUFDUSxpQkFBRCxFQUFvQlAsYUFBcEIsQ0FGOEMsRUFHOUMsQ0FBQ1EsY0FBRCxFQUFpQlAsVUFBakIsQ0FIOEMsRUFJOUMsQ0FBQ1EsYUFBRCxFQUFnQlAsU0FBaEIsQ0FKOEMsRUFLOUMsQ0FBQ1EsYUFBRCxFQUFnQlAsU0FBaEIsQ0FMOEMsRUFNOUMsQ0FBQ1Esa0JBQUQsRUFBcUJQLGNBQXJCLENBTjhDLENBQVIsQ0FBZCxDQUExQjs7UUFVRU4sWSxHQUFBQSxZO1FBQ0FDLFMsR0FBQUEsUztRQUNBQyxhLEdBQUFBLGE7UUFDQUMsVSxHQUFBQSxVO1FBQ0FDLFMsR0FBQUEsUztRQUNBQyxTLEdBQUFBLFM7UUFDQWUsZ0IsR0FBQUEsZ0I7UUFDQWQsYyxHQUFBQSxjO1FBQ0FpQixzQixHQUFBQSxzQjtRQUNBZixhLEdBQUFBLGE7UUFDQUMsaUIsR0FBQUEsaUI7UUFDQUMsYyxHQUFBQSxjO1FBQ0FDLGEsR0FBQUEsYTtRQUNBQyxhLEdBQUFBLGE7UUFDQVksb0IsR0FBQUEsb0I7UUFDQVgsa0IsR0FBQUEsa0I7UUFDQVksMEIsR0FBQUEsMEI7UUFDQUMsaUIsR0FBQUEsaUI7UUFDQUUsaUIsR0FBQUEsaUI7UUFDQXJCLGMsR0FBQUEsYztRQUNBTyxrQixHQUFBQSxrQjtRQUNBQyxzQixHQUFBQSxzQjtRQUNBQywwQixHQUFBQSwwQjtRQUNBQyx1QixHQUFBQSx1QjtRQUNBQyxzQixHQUFBQSxzQjtRQUNBQyxzQixHQUFBQSxzQiIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05URVhUX1RZUEUgPSBcImdlb2dyYXBoaWNDb250ZXh0XCI7XG5jb25zdCBTSVRFX1RZUEUgPSBcImdlb2dyYXBoaWNTaXRlXCI7XG5jb25zdCBCVUlMRElOR19UWVBFID0gXCJnZW9ncmFwaGljQnVpbGRpbmdcIjtcbmNvbnN0IEZMT09SX1RZUEUgPSBcImdlb2dyYXBoaWNGbG9vclwiO1xuY29uc3QgWk9ORV9UWVBFID0gXCJnZW9ncmFwaGljWm9uZVwiO1xuY29uc3QgUk9PTV9UWVBFID0gXCJnZW9ncmFwaGljUm9vbVwiO1xuY29uc3QgRVFVSVBNRU5UX1RZUEUgPSBcIkJJTU9iamVjdFwiO1xuY29uc3QgUkVGRVJFTkNFX1RZUEUgPSBcImdlb2dyYXBoaWNSZWZlcmVuY2VcIjtcblxuXG5jb25zdCBTSVRFX1JFTEFUSU9OID0gXCJoYXNHZW9ncmFwaGljU2l0ZVwiO1xuY29uc3QgQlVJTERJTkdfUkVMQVRJT04gPSBcImhhc0dlb2dyYXBoaWNCdWlsZGluZ1wiO1xuY29uc3QgRkxPT1JfUkVMQVRJT04gPSBcImhhc0dlb2dyYXBoaWNGbG9vclwiO1xuY29uc3QgWk9ORV9SRUxBVElPTiA9IFwiaGFzR2VvZ3JhcGhpY1pvbmVcIjtcbmNvbnN0IFJPT01fUkVMQVRJT04gPSBcImhhc0dlb2dyYXBoaWNSb29tXCI7XG5jb25zdCBFUVVJUE1FTlRfUkVMQVRJT04gPSBcImhhc0JpbU9iamVjdFwiO1xuY29uc3QgUkVGRVJFTkNFX1JFTEFUSU9OID0gXCJoYXNSZWZlcmVuY2VPYmplY3RcIjtcblxuXG5jb25zdCBTSVRFX1JFRkVSRU5DRV9DT05URVhUID0gXCIuU2l0ZUNvbnRleHRcIjtcbmNvbnN0IEJVSUxESU5HX1JFRkVSRU5DRV9DT05URVhUID0gXCIuQnVpbGRpbmdDb250ZXh0XCI7XG5jb25zdCBGTE9PUl9SRUZFUkVOQ0VfQ09OVEVYVCA9IFwiLkZsb29yQ29udGV4dFwiO1xuY29uc3QgWk9ORV9SRUZFUkVOQ0VfQ09OVEVYVCA9IFwiLlpvbmVDb250ZXh0XCI7XG5jb25zdCBST09NX1JFRkVSRU5DRV9DT05URVhUID0gXCIuUm9vbUNvbnRleHRcIjtcblxuXG5cbmNvbnN0IEdFT0dSQVBISUNfVFlQRVMgPSBPYmplY3QuZnJlZXplKFtcbiAgU0lURV9UWVBFLFxuICBCVUlMRElOR19UWVBFLFxuICBGTE9PUl9UWVBFLFxuICBaT05FX1RZUEUsXG4gIFJPT01fVFlQRVxuXSk7XG5cblxuY29uc3QgR0VPR1JBUEhJQ19UWVBFU19PUkRFUiA9IE9iamVjdC5mcmVlemUoW1xuICBDT05URVhUX1RZUEUsXG4gIFNJVEVfVFlQRSxcbiAgQlVJTERJTkdfVFlQRSxcbiAgRkxPT1JfVFlQRSxcbiAgWk9ORV9UWVBFLFxuICBST09NX1RZUEUsXG4gIEVRVUlQTUVOVF9UWVBFXG5dKTtcblxuXG5jb25zdCBHRU9HUkFQSElDX1JFTEFUSU9OUyA9IE9iamVjdC5mcmVlemUoW1xuICBTSVRFX1JFTEFUSU9OLFxuICBCVUlMRElOR19SRUxBVElPTixcbiAgRkxPT1JfUkVMQVRJT04sXG4gIFpPTkVfUkVMQVRJT04sXG4gIFJPT01fUkVMQVRJT04sXG4gIEVRVUlQTUVOVF9SRUxBVElPTlxuXSk7XG5cbmNvbnN0IEdFT0dSQVBISUNfUkVMQVRJT05TX09SREVSID0gT2JqZWN0LmZyZWV6ZShbXG4gIFNJVEVfUkVMQVRJT04sXG4gIEJVSUxESU5HX1JFTEFUSU9OLFxuICBGTE9PUl9SRUxBVElPTixcbiAgWk9ORV9SRUxBVElPTixcbiAgUk9PTV9SRUxBVElPTixcbiAgRVFVSVBNRU5UX1JFTEFUSU9OXG5dKTtcblxuY29uc3QgTUFQX1RZUEVfUkVMQVRJT04gPSBPYmplY3QuZnJlZXplKG5ldyBNYXAoW1xuICBbU0lURV9UWVBFLCBTSVRFX1JFTEFUSU9OXSxcbiAgW0JVSUxESU5HX1RZUEUsIEJVSUxESU5HX1JFTEFUSU9OXSxcbiAgW0ZMT09SX1RZUEUsIEZMT09SX1JFTEFUSU9OXSxcbiAgW1pPTkVfVFlQRSwgWk9ORV9SRUxBVElPTl0sXG4gIFtST09NX1RZUEUsIFJPT01fUkVMQVRJT05dLFxuICBbRVFVSVBNRU5UX1RZUEUsIEVRVUlQTUVOVF9SRUxBVElPTl1cbl0pKTtcblxuY29uc3QgTUFQX1JFTEFUSU9OX1RZUEUgPSBPYmplY3QuZnJlZXplKG5ldyBNYXAoW1xuICBbU0lURV9SRUxBVElPTiwgU0lURV9UWVBFXSxcbiAgW0JVSUxESU5HX1JFTEFUSU9OLCBCVUlMRElOR19UWVBFXSxcbiAgW0ZMT09SX1JFTEFUSU9OLCBGTE9PUl9UWVBFXSxcbiAgW1pPTkVfUkVMQVRJT04sIFpPTkVfVFlQRV0sXG4gIFtST09NX1JFTEFUSU9OLCBST09NX1RZUEVdLFxuICBbRVFVSVBNRU5UX1JFTEFUSU9OLCBFUVVJUE1FTlRfVFlQRV1cbl0pKTtcblxuZXhwb3J0IHtcbiAgQ09OVEVYVF9UWVBFLFxuICBTSVRFX1RZUEUsXG4gIEJVSUxESU5HX1RZUEUsXG4gIEZMT09SX1RZUEUsXG4gIFpPTkVfVFlQRSxcbiAgUk9PTV9UWVBFLFxuICBHRU9HUkFQSElDX1RZUEVTLFxuICBFUVVJUE1FTlRfVFlQRSxcbiAgR0VPR1JBUEhJQ19UWVBFU19PUkRFUixcbiAgU0lURV9SRUxBVElPTixcbiAgQlVJTERJTkdfUkVMQVRJT04sXG4gIEZMT09SX1JFTEFUSU9OLFxuICBaT05FX1JFTEFUSU9OLFxuICBST09NX1JFTEFUSU9OLFxuICBHRU9HUkFQSElDX1JFTEFUSU9OUyxcbiAgRVFVSVBNRU5UX1JFTEFUSU9OLFxuICBHRU9HUkFQSElDX1JFTEFUSU9OU19PUkRFUixcbiAgTUFQX1RZUEVfUkVMQVRJT04sXG4gIE1BUF9SRUxBVElPTl9UWVBFLFxuICBSRUZFUkVOQ0VfVFlQRSxcbiAgUkVGRVJFTkNFX1JFTEFUSU9OLFxuICBTSVRFX1JFRkVSRU5DRV9DT05URVhULFxuICBCVUlMRElOR19SRUZFUkVOQ0VfQ09OVEVYVCxcbiAgRkxPT1JfUkVGRVJFTkNFX0NPTlRFWFQsXG4gIFpPTkVfUkVGRVJFTkNFX0NPTlRFWFQsXG4gIFJPT01fUkVGRVJFTkNFX0NPTlRFWFRcbn07XG4iXX0=