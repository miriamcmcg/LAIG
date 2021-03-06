/**
 * MyCylinderBase
 * @constructor
 */
function MyCylinderBase(scene, radius, slices) {
 	CGFobject.call(this,scene);
	
	this.radius = radius;
	this.slices = slices;

 	this.initBuffers();
 };

 MyCylinderBase.prototype = Object.create(CGFobject.prototype);
 MyCylinderBase.prototype.constructor = MyCylinderBase;

 MyCylinderBase.prototype.initBuffers = function() {

	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];


	var ang = (2*Math.PI) / this.slices;
	var start = 1;
	var texCenter;
	
	this.vertices.push(0, 0, 0);
	this.normals.push(0, 0, 1);
	this.texCoords.push(0.5, 0.5);
	for (var slice = 0; slice <= this.slices; slice++) {


		this.vertices.push(this.radius * Math.cos(slice * ang), this.radius *Math.sin(slice * ang), 0);
		this.normals.push(0, 0, 1);
		this.texCoords.push(0.5 + 0.5 * Math.cos(slice * ang), 0.5 - 0.5 *Math.sin(slice * ang));

		if (slice > 1)
			this.indices.push(start++, start, 0);
	}

	this.indices.push(0, start, 1);


	this.primitiveType = this.scene.gl.TRIANGLES;
	this.initGLBuffers();
 };