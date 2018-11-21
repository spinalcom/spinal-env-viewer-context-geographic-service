## Functions

<dl>
<dt><a href="#getChildType">getChildType(parentType)</a> ⇒ <code>Object</code></dt>
<dd><p>This method takes as parameter a type (parent type), depending on this type, it returns the type of the child and the name of the relationship</p>
</dd>
<dt><a href="#createContext">createContext(contextName)</a> ⇒ <code>Promise.&lt;Boolean&gt;</code></dt>
<dd><p>It Takes as parameter a context name, returns true if a context with the same name does not exist, else returns false.</p>
</dd>
<dt><a href="#addAbstractElement">addAbstractElement(context, node, elementName)</a> ⇒ <code>Boolean</code></dt>
<dd><p>This method takes as parameters a context (SpinalContext), a parent node (must be a SpinalNode) and a string representing the abstract element type;</p>
</dd>
<dt><a href="#addBuilding">addBuilding(context, node, buildingName)</a></dt>
<dd></dd>
<dt><a href="#addFloor">addFloor(context, node, floorName)</a></dt>
<dd></dd>
<dt><a href="#addZone">addZone(context, node, zoneName)</a></dt>
<dd></dd>
<dt><a href="#addRoom">addRoom(context, node, roomName)</a></dt>
<dd></dd>
</dl>

<a name="getChildType"></a>

## getChildType(parentType) ⇒ <code>Object</code>
This method takes as parameter a type (parent type), depending on this type, it returns the type of the child and the name of the relationship

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| parentType | <code>string</code> | it allows to determine the type to the child |

<a name="createContext"></a>

## createContext(contextName) ⇒ <code>Promise.&lt;Boolean&gt;</code>
It Takes as parameter a context name, returns true if a context with the same name does not exist, else returns false.

**Kind**: global function  

| Param | Type |
| --- | --- |
| contextName | <code>string</code> | 

<a name="addAbstractElement"></a>

## addAbstractElement(context, node, elementName) ⇒ <code>Boolean</code>
This method takes as parameters a context (SpinalContext), a parent node (must be a SpinalNode) and a string representing the abstract element type;

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>SpinalContext</code> | The Context geographic |
| node | <code>SpinalNode</code> | The parent Node |
| elementName | <code>string</code> | The AbstactElement Name |

<a name="addBuilding"></a>

## addBuilding(context, node, buildingName)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>SpinalContext</code> | The Context geographic |
| node | <code>SpinalNode</code> | The parent Node |
| buildingName | <code>string</code> |  |

<a name="addFloor"></a>

## addFloor(context, node, floorName)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>SpinalContext</code> | The Context geographic |
| node | <code>SpinalNode</code> | The parent Node |
| floorName | <code>string</code> |  |

<a name="addZone"></a>

## addZone(context, node, zoneName)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>SpinalContext</code> | The Context geographic |
| node | <code>SpinalNode</code> | The parent Node |
| zoneName | <code>string</code> |  |

<a name="addRoom"></a>

## addRoom(context, node, roomName)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>SpinalContext</code> | The Context geographic |
| node | <code>SpinalNode</code> | The parent Node |
| roomName | <code>string</code> |  |

