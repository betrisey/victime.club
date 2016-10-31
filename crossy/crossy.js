// Happy crossy Mael
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Symbole6 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlWAAQgBgYgGgVQAygCB1gOQCVgJCmAjIDZAAQgCAUAAAaIABArIg2ABQgKAAgRADIpgAFQAAgogCgXgAASgZIARAcQAXAeAZAAQAQAAAFgIIAEgOQgKgWgTgNQgPgKgPAAQgPAAgQAJgAi7gtQgNAMAAARQAAAQAHAFIAEACIACAOQAHAHAPAFQAMgFAHgKQAGgIAAgHIgGgGIABgBQAPgNAAgOQAAgPgCgBQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQgOgFgLAAQgQAAgLAKgAhGghQgPABgEAQIgBAEIABABIgBAFQAAAXADABIAJADQANACAPAAQAUAAAHgIQAHgNAGgHQgcgWgUgFIgHgDIgFACgAj7gZQgJAHAAAGIADANQAHAHAPAFQAMgFAHgIQAGgIAAgHQgJgNgQgHQgHACgJAIg");
	this.shape.setTransform(87,99.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AGSBcQgrgEg7gDQgJgDgHgGIgZAJIm0AAIA6gxIAFgDIFxgDIA5gDQA2geASADQAPAAAbASIABACQAkgDARADQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABIACALIAAAFQABALgIgBIgIgBIAXAQIACABIgBACQgGAJgEAMQgHAHgfAAIgrgDgAnVBVIgPgFIgDgBQgGgFgBgQQABgQAIgEQAFgCALgBIEQgCQgDgDgBgFQgCgGAAgQQAAgIACgIIhNAAQAmgZAegZIAVAAQAHADAKACQAFACACAEIANAEQAIADAAAQQAAAKgDAPIgwAmIg7AzgAClgeQAAgyAZgCQAFgBAFADQAxgaCXAXQAGADALACQAHADABAQQAAAQgJAFQgCACgOADIhuAAQg1AAgXgNIAAARQAAAagCAVQgDAAgGADIgNAEQgZgYAAgfgAmYgNQgMgDgGgKQgIgKAAgMIAFgFQAFgGAGgBQAHgCAdAAIBQgBQgSAVgOAWIABAHg");
	this.shape_1.setTransform(86.4,58.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("Ai1CwQgDgBgCgDQgDgGAAgLQABgHBjhWIA7gzIAugmQB/hoAqgKQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQADABgBAPQABAQiNB0IgFADIg4AxQhHA6hCAzIgOALIgSgGgAiigWQgFgEgBgKIgBgHQAOgWASgVIAagdQBDhGAxAEIACAFQADADgBAPQABAZg2AuIgBABQgeAZgmAZIgfAUIgSgGg");
	this.shape_2.setTransform(69.9,60.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AqTJyQALhngFhoQALgGAHgJQAGgIAAgHIErAAIgEAJQgjBlAABiQAAAWACAJQADAMAIAJQjxgMg+gLgAFuKEQgcicgOhGIgHgdIDAAAQACAPACAGQAKAdApAAIBGAAQAKgDAHgEQgCAjAAAxQAAA8ACAXQACAdAHAVgAC9qEIAAgEIACAEg");
	this.shape_3.setTransform(87.9,83.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ar5HwIAUhUIAiiRQAdAdAjANQgZAWAAAtQgBAfAFAIQAKARAzASIBbAAQgKAMgVAIQhEAZg3ACIhfgBgAKEG0QhAgigbgNQBjgGA3hBQAMgQAJgOIABAEQAXBIAKB/Qg0gUhCgjgAhjnUQgFgOgLgOIFrACQg6ApgJAhQgNgXgigWQgPgLgLgEIgBgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQgqgFg2AdQhBAlgrANg");
	this.shape_4.setTransform(87.9,56);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CCFF").s().p("AnzBLIAQAFIDWAAQhjBWAAAGQAAALADAGIieABQgLAAgFADIgDABQARgqAahNgAjABQIG1AAIAZgKQAGAHAJADQA7ADArAEIArADQAgAAAGgIQAEgLAHgKIABAFIAAAPQAoBDAXAgQgzABgWAEIsfAEQBCgzBHg6gAHGAqIAIACQAIAAAAgLIAAgEIAIAeIgYgRgAmsiyIBzAAIAPgFIETgFQAIgDCsgCICtAAQAOAEBqABIAAAUIAKCOIAHArQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQgRgDgjACIgCgBQgagQgPgCQgTgDg2AeIg5ADIlxACQCLhzAAgRQAAgOgDgCQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQgoAKh+BoQADgPAAgLQAAgPgIgEIgOgDQgCgFgEgCQgLgCgGgCIgWAAIABgBQA4gvAAgZQAAgOgDgEIgCgEQgygEhEBGIgaAdIhQAAQgdAAgHACQgGACgFAFIgEAGQAAALAHAKQAHAKALAEIBLAAQABAKAGAEIASAEIAfgSIBMAAQgCAIAAAJQAAAPACAGQABAEAEAEIkQACQA0idADgzgACvhYQgZADAAAxQAAAiAZAWIANgFQAHgDACAAQADgUAAgbIgBgRQAXAOA1AAIBuAAQAOgEACgBQAJgGAAgQQAAgPgIgEQgLgCgGgCQiXgYgxAaQgEgCgEAAIgCAAg");
	this.shape_5.setTransform(87.8,59);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("ALzIqIhLAAIgCgTQgGgbgbgPQhcgVgZAsQgGAKgBAcIyTAAIgBgGIgCAGIh9AAIAOg9IBuAAQCMgWApgXQAigTAAgrQAAgSgEgIQgDgEgGgFIgFgDIgHgEIgGABIgEgBIhmgDIgQgLIgRgLQAMgOAsgdIAUgOIAAgBQAOgEAAgTIAAgBQAAgKgBgEIgBgCQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIggADQhHgNglgsIgSgXQAahzAPhJQAojTABiNIAIgBIIKgDQAYAEBjAKQBZAKALAEIHMAAIAJgEIAHADIgBA2QAACMAcCAQAPBCArCOQgIASgHAXQgHARgaALQgNAFgtAMQhZAYgfApIADAKQgHABgGACQAbAlA5ASQBAATAWAXQAJAIAmAvQAmAkArAFIABANIABALQgFADgGAEQgIAHgBAFIgEgBgAl6EfQgPAGgQANIADAPQAEAEAGADIAAABQgCAPAAAjQAAAgAGAfQAKArASASQAKgDAIgIIADABIJfAAQAKgDA9gDIAfgCQADAFAGADIAMgEQAHgDADAAIAAgDQAMgDACgBQAJgGAAgQQgBgPgHgEIgNgDIAAgrQAAgkgDgYQADgGAAgJQAAgQgHgDIgEAAQgGgLgHACQgGAAgDAEQiQgGjugNQiHgJhJADQhpAGgrALIgCgBIgEADgAobC6QAAAQAIAGIASAFIPvAAQAJgCAugFIAtgDQAPgDACgBQAJgGAAgQQAAgPgIgEIgHgBQgOgsgWgjIgCgCIACgIQgggygNg8QgJg1AFg0QgFgtgSgkQACgFABgIQgBgQgHgDQgLgCgGgCQhKgEgjgEIgWgCIlcAAQAAACgOACIkKAGQgPAFh8AEQgHgMgNgHQgbA3g1CsQg3CwAAAqQAAARACAGQAEANASAGQAGgIAJgVIAAACgADwmtQAbguA+gjQAagQAKgKQAGgHADgHIBpAAIAQADQATACAQABIABAAIgBAAIAAAOQgBALAmBEIANAWgAAOm8IgQgBIAxgZQAigQASgMIAaAiQARAWAMANIiMgPgAo8nGQBEhFAFgfIEeABQAhAgAVAiIAUAhg");
	this.shape_6.setTransform(86.9,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("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");
	this.shape_7.setTransform(87.9,76.5);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175.9,153);


(lib.Symbole3 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AELBSQgoATggAQIhGAAQg+g2gJgXQgEgKAAg3QAAgHgCgXQABgVAIgOQAagoBmAJQAZAdAAAcQAAAngIAKQgVAfhPgeIgCAAQAAAaAMAZQAPAcAXAAQAlAAAmgXQAggXAIgCQAMADAFADQAIAFAAARQAAAWgXAPgAE2hrQAAhlABgVQAEhKAUgaQASAcAFBLQACAaAABbQAACNgDBLQgBAAgHAEQgJAFgFABQgUgngEhLQgBgTAAhbgAImDdQAAAQgJAFQgBACgPADItqAAQAKAIALAKQBrBhAMAhQAAAEgBADIg5AAQgigYg3hAQglgqgUgZIhvAAQgLgDgHgKQgHgKAAgMQAEgEAMgGQAJgEAAgBIQZAAQAMADAFACQAIAEAAAPgADSk1QgKAFgFADQgPgNgGgSQgEgLAAgIQAAgKADgLQAHgSAPgLQAPAGAKAOIAABDQgDAAgHAFgAB4lOQAAAegDAXQgBAAgHAEQgJAEgFACQgTgLgFgVQgBgGAAgXQAAhBAZADQAZACAAA6gAhng2QgIADgSAZIAAAzQAygDAJgaQACgFACgRQAAgNAFgFQgfgNgLADgAhUBNIhGAAQgNgPgHgdQgFgTAAgNQAAg7AJgQQAZgvBlAKQAqAWABA6QACA+AdAaQgJAQgEAFQgHAJgTAAQgXAAgNgJQgKgHgdAGgAkbkIQAIALALA+QANBDALBgQALBZAAAaQAAAPgBAKIgBAFQgBAAgIAEQgIAFgGABQgigygIhHQgDgXAAhjQAAguACgfQgFAKgGANQgfBEgCAXQgDAAgHADQgIAEgFABQgSgGgFgOQAAgBAAAAQgbgHgaggQABAcAABMQAACBgCBEQgDAAgHACQgIAEgFABQgTgjgEhEQgCgSAAhVQAAhWACgTQACgkAGgYQgFgLgFgMQAAgyAPgCQALgCAZAeQAmA1AaAfQAJgSAPgYQAmg8AZgGQAAgBABAAQABAAABAAQAAAAABACg");
	this.shape.setTransform(55,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AkLGSQgigYg3hAQgkgqgVgZIhuAAQgMgDgGgLQgIgKAAgLQAEgEAMgFQAKgFAAgBIQXAAQANADAEACQAJADgBAQQAAAQgIAFIgRAFItpAAIAVATQBrBgANAgIgBAIgAnnBKQgBgSAAhUQAAhXABgTQADgkAGgXIgKgYQAAgxAOgDQALgCAZAeQAmA1AaAfQAKgSAOgYQAng7AYgHIABAAIACgBIABADQAIAKAMA/QAMBCALBgQAMBYAAAbIgCAZIgBAFIgJAEQgIAFgFABQgjgygIhHQgCgXAAhjQgBguACgfIgLAXQgeBEgDAXQgDAAgHAEIgMAEQgTgHgFgNIAAgBQgbgHgagfIABBnQABCBgDBDQgDAAgGADIgOAFQgTgjgEhEgAE3ADQgBgTAAhbQAAhlABgUQAEhLATgZQATAbAFBLQACAagBBbQABCNgDBLIgIAEQgJAEgGACQgSgmgFhMgAB9B1Qg+g2gJgXQgFgKABg3IgBgeQAAgVAJgOQAZgoBmAJQAZAcgBAdQAAAngGAKQgWAfhPgdIgDAAQABAaANAXQAOAcAXAAQAlABAlgXQAhgXAIgCQAMADAEAEQAIAEAAAQQAAAXgWAOIhIAkgAB0hCQgIABgGAHQgCAHgBANQAKgIAzgSIAAgFQgiABgKACgAgtBOQgJgHgdAGIhGAAQgOgPgHgdQgEgTgBgNQAAg7AJgPQAZgvBlAJQAqAXACA5QAAA+AdAaQgIARgEAEQgIAJgSAAQgYAAgMgJgAhng2QgIADgRAZIAAAzQAxgCAJgaQACgGACgRQAAgNAFgFQgZgLgMAAIgFABgABHkvQgCgGABgXQAAhBAZADQAZADgBA5QAAAfgCAWIgJAEQgIAEgFACQgUgLgEgVgACtlMQgDgLAAgIQAAgKADgKQAGgTAQgLQAPAGAKAOIAABDQgDABgHAEIgPAIQgPgNgHgSg");
	this.shape_1.setTransform(55,40.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,112,82.5);


(lib.Symbole2 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjjJZIgOjiIAAoYQgHgPgCgSQgBgLAAgYQAAgOADgQQADgOAFgKIgBgVQAAgLCqjHQCXixA5hFQABgZAIAGIADAEIBnSwIgKAAQgWAAgXjrQAKgUAAgKQAAgBgPgVQgLh8gMivIgDg6QALgOAAgFQAAgPgEgBIgJgCQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBAAIgKiwQADgIAAgDQAAgVgDgGIgCgDIgMjXQhCBLhKBgIjHD7IgBABQADAJAAALQACA8AEAMIAAIYQAFAnAFBOQAFBTAFAoIAAC0IgiABQgPhJgHhrg");
	this.shape.setTransform(25.3,78.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("AisLdIgJgDIgRAAIAAi0QgFgogFhTQgFhOgFgnIAAoZQgEgLgCg8QAAgLgDgJIABgBIDHj7QBKhgBChLIAMDXIACACQADAHAAAUQAAAEgDAHIAKCxIABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIAJADQAEABAAAPQAAAEgLAPIADA6QAMCxALB6QAPAUAAACQAAAJgKAVQAXDrAWAAIAKgBIADAcQg7A4hSBFQheBTihCFQgBgKgDAAg");
	this.shape_1.setTransform(28,83.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.8,157.5);


(lib.Symbole1 = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AjJMdQAHgBACgDIAEgEIABgMIABgVQAAgRgVj6QgZkbgEhDQgIhygCiCIgHgHIgDgPIAKgNIAAgbQgKhngbhTIAlgqQB7iFDXixQBShDBDgzIgFA4QgEBPAAC3IAFF7QAMFnAjAPQiACij3EtQgmAvhFBDg");
	this.shape.setTransform(30.5,90.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkzlfIAPgTQBeh5CXh9QCXh+CKhCQAMhLAYBCIAALIIAeF9QgCAQgCACQgEAHgRAAIgDgBQgjgPgMlmIgFl7QAAi4AFhPIAEg4QhDA0hRBCQjXCxh8CGIglApQAbBTAKBnIAAAbIgKANIADAPIAIAHQABCCAIByQAFBDAYEbQAVD6AAARIAAAVIgCANIgEAEQgCACgGABg");
	this.shape_1.setTransform(30.9,85);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.8,172.7);


(lib.RL = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABxAIQgQAqgXAjQhEBphfAAQgZAAAAgFQgDgEgFgBQgCgCAAgQQAAgWAfgHQAqgHAYgKQBeglgCivQgCiLAeBEQAgBFAABBQAAALgMAeg");
	this.shape.setTransform(12.5,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AhyC5QgDgEgFgBQgCgCAAgQQABgWAegHQAqgHAYgKQBeglgDivQgBiLAeBEQAgBFAABBQgBALgMAeQgPAqgXAjQhDBphfAAQgaAAAAgFg");
	this.shape_1.setTransform(12.5,19.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,27,40.1);


(lib.RH = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACEijQADABAAAPQAAAUghASQgUAMg2AdQhqBFgICcQgBAAgIAEQgIAFgGABQgNgNgHgdQgFgUAAgOQAAhbAygyQA3g4Cfg8QAAABACACg");
	this.shape.setTransform(13.5,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AiBB9QgEgUgBgOQAAhbAzgyQA2g4Ceg8QAAAAABABQAAAAAAAAQAAABABAAQAAABABAAQACABABAPQAAAUgiATIhJAoQhqBFgICcIgJAEQgIAEgFACQgOgOgHgcg");
	this.shape_1.setTransform(13.5,16.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,29,35.5);


(lib.LL = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiGiVQAfgcBtATQBjAQAeAVIAAETQgDAAgHAFQgJAFgGADQgbgmABhiQAChhgVgeQiGgDgdgOQgFgDgJgJQgGgGgNgDg");
	this.shape.setTransform(13.5,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("ABUAfQAChhgWgeQiEgDgegOQgFgDgJgJQgFgGgOgDIgDgPQAggcBtATQBiAQAeAVIAAETQgDAAgHAFIgQAIQgagmABhig");
	this.shape_1.setTransform(13.5,16.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,29,35.5);


(lib.LH = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABnAbQhpBihNAAQg2AAgighQgGgGgagnIAAhJQACAAAEgDQAFgEAOAAQATAAAOA0QAOA1AVAAQB0AABziAQA3g+ABgBQATgPAAAoQAAANgcAkQgdAlgoAjg");
	this.shape.setTransform(20,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AinBcQgFgGgbgnIAAhJQACAAAFgDQAEgEAPAAQASAAAOA0QAOA1AVAAQB0AAByiAIA5g/QASgPAAAoQAAANgbAkQgdAlgoAjQhpBihNAAQg2AAgighg");
	this.shape_1.setTransform(20,12.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,42,27);


(lib.head = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADfgIQgWAsggApQhcB0hyAAQiXAAgng6QgUgeAKgkQAAhKAagiQAegnCGhZQgQgKgOgMQBvgLBdAbQByAhAABOQAAAQgSAmgAABiAQhRATg2AvQg/A3AABJQAAAkAQAPQAiAgBrAAQBxAABMhsQAmgzAOgxQAAgxg+gTQg7gShPARg");
	this.shape.setTransform(24.2,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AjjCHQgUgeAKgkQAAhKAagiQAegnCGhZQgQgKgOgMQBvgLBdAbQByAhAABOQAAAQgSAmQgWAsggApQhcB0hyAAQiXAAgng6gAgoCVQBxAABMhsQAmgzAOgxQAAgxg+gTQgegJgjgBIAAAAIAAAAQgeABgiAGIgBABIgDAAIgCAAIgBABIgCAAIACAAIABgBIACAAIADAAIABgBQAigGAegBIAAAAIAAAAQAjABAeAJQA+ATAAAxQgOAxgmAzQhMBshxAAQhrAAgiggQgQgPAAgkQAAhJA/g3QA2gvBRgTQhRATg2AvQg/A3AABJQAAAkAQAPQAiAgBrAAIAAAAg");
	this.shape_1.setTransform(24.2,19.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,50.4,40.7);


(lib.Car = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("AgEBJQgKgKgFgWQgDgQgBgHIABgpIABgGQADgTAIgLQAGgKAHgGIAMAJIAFAFQADAGAAAOIgDAsQgEAngBAXQgBABgGADIgIAEIgDACIgBgCg");
	this.shape.setTransform(67.2,62.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("AAABbQgbgBgGgcQgEgPADgPIAAgEQABglAGgRIAHgOQAKgTAVgaIAFgFIADABIALADQAGAFAAAMQAAAMgQAlQgQAiAAAMQAAAFAYAlIgLASQgFAFgIAAIgEAAg");
	this.shape_1.setTransform(40.3,61.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AhlBYIAEAAQAIAAAFgGIALgSQgYgkAAgGQAAgLAQgjQAQgkAAgMQAAgNgGgEIgLgDQATgMAFAhQBGAhA9AAQAoAAApgIQgIALgDATIgBAGIgBAGQgIAfAAAkQAAAOAGAFQACACAHACIjXACIgCAEQgDAEgNAAQgHAAgJgIgAiZgIIACgMQAIgCAHgBIgBgFIAOgPIgHAOQgGARgBAlIgQghg");
	this.shape_2.setTransform(50.6,61.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AhRAqQgFhDgDggQgFgigGgZIAGADQAKgFAGgIIACgEICEAAIAHgBIABAdQAFA+AHAjQAIA4AHAoQAFAVAFAQIgMgEQhJABABAEIhcADIgGhag");
	this.shape_3.setTransform(69.1,27.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhzBUQgIgCgCgCQgFgFgBgOQABgkAHgfIABgGIgBApQABAHADAQQAFAWAKAKIgCAAIgFACIgEgCgAhaBQQAGgDABgBQABgXAEgnIADgsQAAgOgDgGIgFgFIAXgIQBAgWB1AAIAHAEQADAFAAAMQAAAmgnA6IgiA0IicAAIAIgEg");
	this.shape_4.setTransform(77.2,61.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AEhDOQg3gbgJgFQgHgGgBgWQAAgVARgkQAJgTAJgNIAZgBIApABQALgBABgLIAAgIQBfACAIAFIAABCQgIASgaAdQgfAhgbAQgAo/CuQhUgTgSgYQgIgJAAgnQAAghAHgMQAbAFA7AYQA+AaAOAPIAABCgAoRApQAHgBABgEIAFgKQgUg4ghguIABAAQAlAAAHgaQADgPgDgbQgBgxgCgIIgCgEQAeAYAeAVQAdATAaAPQgWAZgLAUIgNAPIAAAFQgHAAgIADIgCAMIARAiIAAAEQgDANADAPQAHAcAdACIgRAAIgKABQgXgCgHADQgDABgJAPQgLgKgZgRgAJ4AqIAAgxQAAghACgQIAbgCQAFA7ATApg");
	this.shape_5.setTransform(83,65.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AHsEfQgrgVg8AKQg1AKgnAgIiQALIgZAAQASgUAMgbQAUgsAAg0QAIgTgKgRQgUghhfgBQg+AAg5AXQg5AVhCAAQg3AAiThJQhIglgfgKIgSgbQgNAJgFAMQgCAIAAAEQAAAGALAkQAMAlAAALQAAAQgCAFQgDAEgIABQgQgFgSABQgZgQAAArQAAgKAyBKIArBAIg5glQhZgWgbAyIAAAAQAAgMgCgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQgRgEggAIIgQAEQAchFA9jOQBKj1AOhBIA4AAQAggBAdgGIBAgMQBugSDzgDIgBAEQgBANAAAqIAAAGIgFgBQiQAAgHAEQAAAAAAAAQAAAAABAAQAAABABAAQABABABABQAEADgMACIAAAFQgFABgEAFIgCACIgFgKQgQglgBBiQADBBAGBAQAGBDAIAhQgHADAAALQABANAFAEIAOAGIBZAAQAOgFBQgDIAMgEQAHgEABgKQAJARAKABQAIAAAFgCQAAAJAFADIAPAGICAAAQARgFBYgLIBogMIEqgEIABB6QgggCgUAbQgUAbgBAZQAAAYAIAZQAEAOAFAJIh9AAQABABgIAEIgCABQgLgcgdgPg");
	this.shape_6.setTransform(76.6,37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AD5GSQgLgQgEgUQgCgLgBgHQABgxAdglQg5AIhAAWIoPAAIgEgCQgHACgIAAQgLAAgHgCQACAHAAAIIgBAsQAAAfgBAFQgDAWgPANIhRAAQhvgbgbgpQgKgQgBgVQAAgMACgYIgCgSQACgTAFgOQgFAIgYALQgdAMgMAAQgcABgKgLIgCgLIABAAIgBgIQABgdAoh3QAviGAJgoQAKgxAXiCQAahwAxgcIAFADQAEgCAGgBQBfgDAZgGQAGgBAGgIQAKgLELgHQgBgBASgBQAcgBBbgBIAGACIACgCIABADIACABQAHADgBAMIAAAHQAMAgACAwQACBUAHAZQAQBDAGAhQAKA4ABAvQAFgBAIgBQBfgCB8gMQA/gGA1gIIAAgDIFYAAIAPADQAFADAAANQAAANgGAEIgMADQALAOAAATIAABlQgBBbgCA1QACAFABAGQgBAOgGAEIgOAEIjYAAIgDgCIAAABQAAAnghA1QgtBNhOgBQhYABgjgygAEyECQgJAOgJATQgRAjAAAWQABAWAHAFQAJAGA3AbIA0AAQAbgRAfggQAagdAIgSIAAhCQgIgFhfgCIAAAIQgBAKgLABIgpAAIgZAAgAp3EdQAAAnAIAIQASAZBUASIA7AAIAAhBQgOgPg+gaQg7gZgbgEQgHALAAAigAnODkIgFAKQgBADgHACQAZAQALAKQAJgPADAAQAHgDAXACIAKgCIARAAQAIAJAIgBQAMAAADgDIADgFIDZgCIAEACIAFgCIACAAIABACIAFgCICcAAIAig0QAng8AAgmQAAgMgDgFIgHgEQh1AAhAAWIgXAIIgMgJQgJAGgGAKQgpAIgoAAQg9AAhIghQgFghgTAMIgCgBIgGAFQgagOgcgTQgfgVgegWIACADQACAHABAwQADAcgDAOQgHAaglAAIgBAAQAhAuAUA7gAHiDOQAdAPALAcIACgBQAIgEgBgBIB9AAQgFgJgEgOQgIgZAAgYQABgZAUgbQAUgbAgACIgBh4IkqAEIhoAMQhYAKgRAEIiAAAIgPgEQgFgDAAgJQgFACgIAAQgKgBgJgRQgBAKgHAEIgMAEQhQADgOAFIhZAAIgOgGQgFgEgBgNQAAgLAHgDQgIghgGhFQgGhAgDhBQABhiAQAlIAFAKIACgCQAEgFAFgBIAAgFQAMgCgEgDQgBgBgBgBQgBAAAAgBQgBAAAAAAQAAAAAAAAQAHgECQAAIAFABIAAgGQAAgqABgNIABgEQjzADhuASIhAAMQgdAGggABIg4AAQgOBBhKD3Qg9DMgcBFIAQgEQAggIARAEQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAQACABAAALIAAABQAbgyBZAWIA5AlIgrhAQgyhKAAAKQAAgrAZAQQASgBAQAFQAIgBADgEQACgFAAgQQAAgLgMglQgLgiAAgGQAAgEACgIQAFgMANgJIASAbQAfAKBIAjQCTBJA3AAQBCAAA5gVQA5gXA+AAQBfABAUAhQAKARgIATQAAA0gUAsQgMAbgSAUIAZAAICQgLQAnggA1gKQAUgDASAAQAkAAAdAOgAKwCPQgCARAAAhIAAAyIA1AAQgTgogFg+IgbACgAiujqQADAgAFBFIAGBaIBegDQgBgEBHgBIAMAEQgFgQgFgVQgGgogHg6QgHgjgFg+IgBgdIgHABIiGAAIgCAEQgGAIgKAFIgGgDQAGAZAFAig");
	this.shape_7.setTransform(77.6,45.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,155.2,90.4);


(lib.body = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgdiUQgEhfAngfQAQAHAJANIAAIEQgDAAgHAFQgJAFgGADQgSgygEhXQgBgZAAhxQAAgngMhtg");
	this.shape.setTransform(3.1,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgQCKQgBgYAAhyQAAgngMhtQgEhfAngfQAQAHAJANIAAIEQgDAAgHAEIgPAIQgSgygEhWg");
	this.shape_1.setTransform(3.1,27.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,8.3,57);


(lib.Symbole5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Symbole6();
	this.instance.setTransform(87.9,76.5,1,1,0,0,0,87.9,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:88.9},0).wait(1).to({x:89.9},0).wait(1).to({x:90.9},0).wait(1).to({x:91.9},0).wait(1).to({x:90.7},0).wait(1).to({x:89.5},0).wait(1).to({x:88.3},0).wait(1).to({x:87.1},0).wait(1).to({x:85.9},0).wait(1).to({x:84.7,y:77},0).wait(1).to({x:83.4,y:77.5},0).wait(1).to({x:82.2,y:78},0).wait(1).to({x:80.9,y:78.5},0).wait(1).to({x:81.7,y:77.7},0).wait(1).to({x:82.5,y:76.9},0).wait(1).to({x:83.3,y:76.1},0).wait(1).to({x:84.1,y:75.3},0).wait(1).to({x:84.9,y:74.5},0).wait(1).to({x:84.3,y:75.1},0).wait(1).to({x:83.7,y:75.7},0).wait(1).to({x:83.1,y:76.3},0).wait(1).to({x:82.5,y:76.9},0).wait(1).to({x:81.9,y:77.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.9,153);


(lib.Pseudo = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.Symbole3();
	this.instance.setTransform(55,40.2,1,1,0,0,0,55,40.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,111,81.5);


(lib.Symbole4 = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.body();
	this.instance.setTransform(32.2,78.5,0.609,0.511,0,0,0,3.1,27.5);

	this.instance_1 = new lib.Pseudo();
	this.instance_1.setTransform(33.5,20.6,0.609,0.511,0,0,0,55,40.2);

	this.instance_2 = new lib.head();
	this.instance_2.setTransform(31.1,52.3,0.609,0.511,0,0,0,24.2,19.4);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.2,67.6,93.1);


(lib.Mael = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.instance = new lib.Symbole4();
	this.instance.setTransform(22.5,65.1,0.672,0.717,0,0,0,33.5,46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:46.3,y:65.2},0).wait(15));

	// Calque 6
	this.instance_1 = new lib.LL();
	this.instance_1.setTransform(30.5,105.4,0.409,0.367,0,0,0,13.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:16.7,rotation:9.4,x:28.6,y:105.2},0).wait(1).to({rotation:18.8,x:26.7,y:105},0).wait(1).to({rotation:28.1,x:24.7,y:104.8},0).wait(1).to({rotation:37.5,x:22.8,y:104.6},0).wait(1).to({rotation:46.9,x:20.9,y:104.5},0).wait(1).to({rotation:56.3,x:19,y:104.3},0).wait(1).to({rotation:65.6,x:17.1,y:104.1},0).wait(1).to({rotation:75,x:15.2,y:103.9},0).wait(1).to({rotation:66.4,x:17.1,y:104.1},0).wait(1).to({rotation:57.9,x:19.1,y:104.4},0).wait(1).to({rotation:49.3,x:21.1,y:104.6},0).wait(1).to({rotation:40.7,x:23.1,y:104.8},0).wait(1).to({rotation:32.1,x:25.2,y:105},0).wait(1).to({rotation:23.6,x:27.1,y:105.1},0).wait(1).to({rotation:15,x:29.1,y:105.4},0).wait(1));

	// Calque 4
	this.instance_2 = new lib.RL();
	this.instance_2.setTransform(16.6,106,0.409,0.367,0,0,0,12.5,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-9.4,x:18.3,y:105.6},0).wait(1).to({rotation:-18.8,x:20.1,y:105.3},0).wait(1).to({rotation:-28.1,x:21.8,y:104.9},0).wait(1).to({rotation:-37.5,x:23.6,y:104.6},0).wait(1).to({rotation:-46.9,x:25.3,y:104.2},0).wait(1).to({rotation:-56.3,x:27.1,y:103.9},0).wait(1).to({rotation:-65.6,x:28.9,y:103.5},0).wait(1).to({rotation:-75,x:30.6,y:103.1},0).wait(1).to({rotation:-62.1,x:28.4,y:103.5},0).wait(1).to({rotation:-49.3,x:26.3,y:103.7},0).wait(1).to({rotation:-36.4,x:24.1,y:104.1},0).wait(1).to({rotation:-23.6,x:21.9,y:104.4},0).wait(1).to({rotation:-10.7,x:19.7,y:104.8},0).wait(1).to({rotation:2.1,x:17.5,y:105.1},0).wait(1).to({rotation:15,x:15.4,y:105.4},0).wait(1));

	// Calque 3
	this.instance_3 = new lib.RH();
	this.instance_3.setTransform(12.5,86,0.409,0.367,0,0,0,13.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-15,x:15,y:85.4},0).wait(1).to({rotation:-30,x:17.5,y:84.9},0).wait(1).to({rotation:-45,x:20,y:84.3},0).wait(1).to({rotation:-60,x:22.5,y:83.7},0).wait(1).to({rotation:-75,x:25,y:83.2},0).wait(1).to({rotation:-90,x:27.5,y:82.7},0).wait(1).to({rotation:-105,x:30,y:82.1},0).wait(1).to({rotation:-120,x:32.6,y:81.5},0).wait(1).to({rotation:-105,x:29.7,y:82.3},0).wait(1).to({rotation:-90,x:27,y:83.1},0).wait(1).to({rotation:-74.9,x:24.2,y:83.9},0).wait(1).to({rotation:-59.9,x:21.4,y:84.7},0).wait(1).to({rotation:-44.9,x:18.6,y:85.5},0).wait(1).to({rotation:-29.9,x:15.8,y:86.3},0).wait(1).to({rotation:-14.9,x:13.1,y:87.1},0).wait(1));

	// Calque 5
	this.instance_4 = new lib.LH();
	this.instance_4.setTransform(32.7,80.2,0.409,0.367,0,0,0,19.9,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:20,regY:12.5,rotation:16.9,x:30.1,y:80.8},0).wait(1).to({rotation:33.8,x:27.4,y:81.4},0).wait(1).to({rotation:50.6,x:24.8,y:82},0).wait(1).to({rotation:67.5,x:22.1,y:82.6},0).wait(1).to({rotation:84.4,x:19.4,y:83.2},0).wait(1).to({rotation:101.3,x:16.8,y:83.8},0).wait(1).to({rotation:118.1,x:14.1,y:84.4},0).wait(1).to({rotation:135,x:11.5,y:85},0).wait(1).to({rotation:116.9,x:14.6,y:84.3},0).wait(1).to({rotation:98.7,x:17.7,y:83.6},0).wait(1).to({rotation:80.6,x:20.9,y:82.9},0).wait(1).to({rotation:62.4,x:24,y:82.2},0).wait(1).to({rotation:44.3,x:27.1,y:81.5},0).wait(1).to({rotation:26.1,x:30.2,y:80.7},0).wait(1).to({rotation:8,x:33.3,y:80.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,31.8,45.4,81.4);


// stage content:



(lib.Crossyhtml = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CAR2
	this.instance = new lib.Symbole5();
	this.instance.setTransform(630.2,1067.2,1,1,0,0,0,87.9,76.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).wait(1).to({regX:86.4,scaleX:0.97,scaleY:0.97,x:616.2,y:1030.6},0).wait(1).to({scaleX:0.94,scaleY:0.95,x:603.7,y:994.1},0).wait(1).to({scaleX:0.91,scaleY:0.92,x:591.2,y:957.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:578.8,y:921.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:566.3,y:884.6},0).wait(1).to({scaleX:0.83,scaleY:0.84,x:553.8,y:848.1},0).wait(1).to({scaleX:0.8,scaleY:0.81,x:541.3,y:811.6},0).wait(1).to({scaleX:0.77,scaleY:0.78,x:528.8,y:775.1},0).wait(1).to({scaleX:0.74,scaleY:0.75,x:516.3,y:738.6},0).wait(1).to({scaleX:0.71,scaleY:0.73,x:503.8,y:702.1},0).wait(1).to({scaleX:0.68,scaleY:0.7,x:491.3,y:665.6},0).wait(1).to({scaleX:0.65,scaleY:0.67,x:478.8,y:629.1},0).wait(1).to({scaleX:0.63,scaleY:0.64,x:466.3,y:592.6},0).wait(1).to({scaleX:0.6,scaleY:0.62,x:453.8,y:556.1},0).wait(1).to({scaleX:0.57,scaleY:0.59,x:441.4,y:519.5},0).wait(1).to({scaleX:0.54,scaleY:0.56,x:428.9,y:483},0).wait(1).to({scaleX:0.51,scaleY:0.53,x:416.4,y:446.5},0).wait(1).to({scaleX:0.48,scaleY:0.51,x:403.9,y:410},0).wait(1).to({scaleX:0.45,scaleY:0.48,x:391.4,y:373.5},0).wait(1).to({scaleX:0.42,scaleY:0.45,x:378.9,y:337},0).wait(1).to({scaleX:0.39,scaleY:0.42,x:366.4,y:300.5},0).wait(1).to({scaleX:0.37,scaleY:0.4,x:353.9,y:264},0).wait(1).to({scaleX:0.34,scaleY:0.37,x:341.4,y:227.5},0).wait(1).to({scaleX:0.31,scaleY:0.34,x:328.9,y:191},0).wait(1).to({scaleX:0.28,scaleY:0.31,x:316.4,y:154.5},0).wait(18));

	// House-2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AB3G1QgrgfhRg4IichnQhJhtgfglQgNgQgKgLQB0hADtjdQCuiiAyhAIAAKTIgHA9QgEAngJAYQgUA6g5AiQg2gDgTACgAAAAWQAAANAyA+QA1BBAWAAQAQAAAEgJQADgEACgKQgdhCg4g/QgeghgQAAQgTAAAAAtg");
	this.shape.setTransform(531.5,322.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AlkK9Qg/hKgbguQgyh5hLg+QgLgKgKgFQKIo2IDp9QAIAJAOAAQgxBhAFBTQAFBBgOBSQgKA3gXBbQgIAghIDmQhEDmAABgIABAiQgEAEgDAGQg8AXhRBVQhfBwgtAsQhSBSiLBpIhmBMQhPhZgagfg");
	this.shape_1.setTransform(525.5,243.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AC2Q6IgHABQgdAAgfgKQhoggiBiPQg9hCgvhGQgrg/AAgRIAAgFQABgJACgFIgDAAQgIAAggggQgzg0htiGIh1iPQARgKABgOQgBgPgCgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQgEAAglAIIgVgYIgPgFQgIgFABgQQgBgDAJgJQAVgaBRhNQAKAMAFAAQAPAAAEgHQADgEADgJIgDgbQA7g4BUhLIAtgqIAQgOQGWl4CZiqQBmhzBxiUIAhgrIBRhvQAPATAVAOIAIABIACAFQACACAAAGQAHgJAHgDQAQgHABAoQAAATgsDpQgwD6gJBXQgFA7gbBQIg1CQQhEC3ALBzQgDAAgGADIgIADQADAcACAoQAFBEAAC6IAEBmQACBygGBbQgYElh1AAIgOgBQgJACggAAQgTAAgNgCgAEGQPQA5giAUg6QAJgYAEgnIAHg9IAAqVQgxBAivCiQjtDfh0BAQAKALANAQQAfAlBJBtICaBnQBTA4ArAfIATgBQAUAAAiACgApGDIQAKAFALAKQBLA/AyB4QAbAvA/BKQAaAeBPBZIBmhMQCLhpBShSQAtgrBfhwQBRhWA8gWQADgHAEgEIgBghQAAhfBEjoQBIjmAIggQAXhaAKg4QAOhRgFhCQgFhTAxhhQgOAAgIgIQoDJ8qII2gAB4K6Qgzg+ABgNQgBhXBCBLQA4A/AdBCQgCAKgDAEQgEAJgQAAQgWAAg1hBg");
	this.shape_2.setTransform(524.5,262);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(96));

	// House-1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(0.1,1,1).p("ABuhZIgsAkIivCP");
	this.shape_3.setTransform(159.5,115.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(0.1,1,1).p("AgPAAIAfAA");
	this.shape_4.setTransform(55.8,326.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("Ag+EXQgHgFAAgRQAAgfBAhOQBRhkANgXIAAhYQhHAHgqAhQgoAcgeAAQgPAAgPgDIgMgCQgDgNAAgqQAAgOAMgrQANgxARgoQAyhzArAtIADgEQABAAAAAPQAAAFgsBVQgtBWAAAkIAAACIBngtQBigqACAAQAVAAAEAwQACAYgCAaQAABXgpBKQgsBPhiBQIgSgGg");
	this.shape_5.setTransform(54.5,152);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag/DsQhcgLgZhzQgIgmAAh3QgFhFANgyQAahiBbAqQAOANAGAQQAEALABARQgfAEgLgEQgGgFgCAAIgyADIAAD1QAKAPANAoQASAjAlANIBkAAQAWg5AGhDQACgbABgyQheBqgFAAQgPAAgEgDIgBgCIgIgFQgCgCAAgQQAAgMBKheQBXhvA+grQAHACAKACQAIAEAAAPQAAAThOBcQAGAMACAYQACAZgCAZQAABZgEAUQgLA1gyA4g");
	this.shape_6.setTransform(140.4,70.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("Ah1CwQgBgXAAhWQAAiKACgkQAJhpAihBQA8A8A5BtIAKgHQAAABABAAQAAAAAAABQAAAAABAAQAAAAABABQADABAAAPIgBARIADAGQA5BxAAAcQAAAZgCAFQAAADgDACQgEAFgPAAQgaAAg1hsQgYAUg8AeIAAAFIgDDVIgIAEQgJAFgGABQgSgjgFhDgAhAgjIAZgUIAYgQQgcg+gKgRIgGAAQgDA0gCA/g");
	this.shape_7.setTransform(112.5,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCFF00").s().p("AhECyQh2iBgRguIAIgDQAHgDAOAAQAVAABaBjQA+BFA/BQQgEhQAAgwQAChcAoAAQACAAAQANQARAOAHADIAEhwQAChEAHgwQgTgnADgmQAEghAQgOQARgPANARQAPAUAAA0QgMFwgbAAQgZAAgXgWQgDAZAIBVQgBBIg0AAQgWAAhzh/g");
	this.shape_8.setTransform(77,104);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AvcdfQAAkMgVn6QgTn7gBklIABlyIAQgDQAZgGAGgCID9gDIgBAAIADAPIAHAJQAEAEARAAQAgAAAqgTQAPgHAUgEIAtAAIAGgBIAAAGIAAAtQADAXAKAMIgBARQAAAVAFAzQAEAsgBAPQgGAzACBiIAEBqQAABaAMD6QAMDwAFArIAALHQAWAYgCBFQgBAyAPAbQgEAEAAADIgJgBIgVAEIkSAEQgKAEh5ADIheADIAAg4gAmicoQAAgHgIgpQgHgrgFgSIAAq/QgKgTgCg/QgBg8gSgXIAAuCIgHgBIgEgMQgFgUgHgRQBshlBbh8QA/hWBaiWQBlirAqhAQBYiCBjhjID2jqQCLiEBBhZQAggtAxhNQArhAArguQAigmBohnIBVhTIAAVsIgEBKIiwCQQgZhCgMBLQiKBCiZB/QiXB6heB5IgPATIgEgDQgHgHgCAaQg5BEiYCxQipDHAAAMIABAVQgEAKgDAOQgDAPgBAPQABAXABALQACASAGAPIAAIaIAPDiQAHBrAPBJQiNAFhMA5QgcAWglArQgbAggSASIABgsgAAAgXQgLAXhTBiQhBBOABAgQgBAQAIAFIASAGQBjhQArhPQAphKgBhWQACgbgCgYQgEgwgVAAQgCAAhgArIhoAtIAAgDQgBgkAuhVQAthVAAgFQAAgQgDAAIgDAFQgrgugxBzQgSAogNAxQgMArAAAPQABApACAPIAMACQAPADAPAAQAeAAApgeQArghBGgHgAg8oRIgIAEQARAuB0CAQB1CAAWAAQA0AAABhJQgIhUADgaQAXAXAZAAQAbAAAMlyQAAg0gPgUQgNgRgRAOQgQAPgEAhQgDAmATAnQgHAvgCBFIgEByQgHgDgRgOQgQgNgCAAQgoAAgCBcQAAAwAEBQQhBhRg+hEQhYhlgVAAQgOAAgHAEgAF0r4QgCAjAACMQAABXABAXQAFBDASAjQAGgCAJgEIAIgEIADjVIAAgFQA8geAagVQA1BtAaAAQAPAAAEgFQADgCAAgDQACgFAAgZQAAgdg5hyIgDgGIABgRQAAgPgDgCQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgKAHQg7hug8g7QgiBBgJBpgAJMwDQgNAzAFBEQgBB5AJAmQAYBzBdALIB3AAQAyg4ALg1QAEgUAAhYQADgcgDgZQgCgYgFgMQBNhcAAgSQABgQgJgDQgKgCgHgDQg+AshWBuQhNBgAAAMQABAQACACIAIAFIAAACQAEADAQAAQAEAABghsQgBA1gCAaQgGBDgVA5IhnAAQglgMgSgkQgNgogJgOIAAj4IAxgCQACAAAGAEQALAEAggEQgCgRgEgLQgGgPgNgOQgcgNgVAAQgyAAgSBFgAvxoBIAAqUQATh7AGiiQAFh2ABirIgBhMIH6AAIJ7g9QGRgjG2gXQh1A8hjCAQhxCng8BCQhRBZiMCMIj0D0QhXBahiCTIiXDkIjXEeQhVBygbAtQgOgPgFAfIgHAAIgCgBIm4AAIAAAFIgrAHQAEi/AOjTgAGtsjIAGAAQAKARAcA+IgYAQIgZAUQAChAADgzg");
	this.shape_9.setTransform(63.5,157);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AwLepQgFgGAAgOIABgJQgCgXAAgbQADhqgMggIAAmGQgXjqgFkyQgChsAAmrQAAlRABhNQAEjfAPjFIAAqNQAFhHAFiOQAFiPAFhHQAViYANhGQgEgGAAgMQAAgQAJgEIADAAQAJggAFAdIICgFIJ+g3QHIgoDvgRIATgBQAmgCBdAAQAGADALACQAIAEAAAPQAAAJgDAFIACADIAEgDQAMgHAAgBQAcBCAAB0QgDBegBA2IABAyQADB4gDDlQAAGcgHDrQgDAEAAADIACAOIgCA/IgsAkIAEhJIAA1tIhVBUQhnBmgiAmQgsAugrBBQgxBMggAtQhBBaiKCEIj3DpQhjBjhYCCQgqBAhlCrQhaCWg/BXQhbB8hsBkQAHARAGAVIADALIAIABIAAOCQASAYABA7QACA/AJATIAALAQAFARAIArQAHApAAAIIgBAsQATgTAagfQAlgsAdgVQBLg5COgGIAhAAIARAAIAJADQADAAABAJIAAAHQAAACiKBMIgwAaQi6BmgDAAIgFAAQAAAHgGAIIgFAGQgFAFgJAEIAAAAIgFgCIgBAFQgEAJgJAIQgMAJgJABIkWAFIgMAFIjiAAIgBAoIgJAEQgIAEgGACQgOgXgGgjgAvWhdQgHADgZAFIgPADIgBFzQAAElAUH6QAUH7AAEMIAAA3IBfgCQB5gEAJgDIETgFIAVgDIAJAAQAAgDADgEQgOgaABgzQAChFgWgYIAArHQgFgrgMjwQgNj6AAhaIgDhqQgDhiAGgzQABgPgEgsQgEgzgBgVIACgPQgKgNgEgYIAAgtIAAgGIgFABIgtABQgVADgOAHQgrATggAAQgQAAgFgDIgHgJIgCgPIAAgBgAvU7rQAACqgFB2QgHCigSB7IAAKUQgPDTgDC/IArgHIAAgFIG4AAIACABIAGAAQAGgfAOAPQAbgtBUhxIDYkfICXjkQBhiTBXhaID1j0QCMiMBQhYQA9hCBwinQBkiBB0g8Qm1AXmSAkIp7A8In6AAIABBNg");
	this.shape_10.setTransform(63.7,159.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(96));

	// Calque 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC0000").s().p("ABeDrQgTgWgSAAIgJAMQgLAMgHAEIhAAAIgLgJIgBgBIgIAKQgJgEgCgHQgBgCAAgJQAAgOAcgYQAbgYAAgQQAAgVgYgXQgJgKgqgfQhLg4AAgyQAAgKAEgQQAGgVAHgKIAIgeQADgJAHgDQAEgSAgAIQAjAJAuAfQB0BPAAA7QAAAZgIAZQgHAZAAASQAAAfAWAaQAoAvANAXIgCADQgDADgGABQgCAEgCACQgDAEgMAAQgYAAgTgVgAjYCgIAAgCIgEgCQgBgBAAgIIAHgbQAIgaAAgVQAAgTgUguQgUgrAAgTQAAgUAMgIQAHAWAaA5QAUApAAAiQAAAVgFAcQgHAogNAAQgIAAgCgBgADeA9IAAgqQASgGAGAKQABADAAAQQAAAOgCAKIgLAFQgKgDgCgHgAhTi4IgNgWQAAgcAaAVQALAJAXAbIgHAKQgDAFgFAAQgPAAgRgWgAjHi3QgCgDAAgEQgBgRAEgQQAKggAdAAIACABQABAAAAAIQAAAHgOAgQgPAggEADIgKgLg");
	this.shape_11.setTransform(330.5,201.6);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(77).to({_off:false},0).wait(19));

	// Mael
	this.instance_1 = new lib.Mael();
	this.instance_1.setTransform(-76,251.1,1,1,0,0,0,33.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:22.5,regY:72.8,x:-84.3,y:267.1},0).wait(1).to({x:-81.7,y:266.9},0).wait(1).to({x:-79,y:266.6},0).wait(1).to({x:-76.4,y:266.4},0).wait(1).to({x:-73.7,y:266.1},0).wait(1).to({x:-71.1,y:265.9},0).wait(1).to({x:-68.5,y:265.7},0).wait(1).to({x:-65.8,y:265.4},0).wait(1).to({x:-63.2,y:265.2},0).wait(1).to({x:-60.5,y:264.9},0).wait(1).to({x:-57.9,y:264.7},0).wait(1).to({x:-55.2,y:264.4},0).wait(1).to({x:-52.6,y:264.2},0).wait(1).to({x:-50,y:264},0).wait(1).to({x:-47.3,y:263.7},0).wait(1).to({x:-44.7,y:263.5},0).wait(1).to({x:-42,y:263.2},0).wait(1).to({x:-39.4,y:263},0).wait(1).to({x:-36.7,y:262.7},0).wait(1).to({x:-34.1,y:262.5},0).wait(1).to({x:-31.5,y:262.3},0).wait(1).to({x:-28.8,y:262},0).wait(1).to({x:-26.2,y:261.8},0).wait(1).to({x:-23.5,y:261.5},0).wait(1).to({x:-20.9,y:261.3},0).wait(1).to({x:-18.2,y:261},0).wait(1).to({x:-15.6,y:260.8},0).wait(1).to({x:-13,y:260.6},0).wait(1).to({x:-10.3,y:260.3},0).wait(1).to({x:-7.7,y:260.1},0).wait(1).to({x:-5,y:259.8},0).wait(1).to({x:-2.4,y:259.6},0).wait(1).to({x:0.3,y:259.3},0).wait(1).to({x:2.9,y:259.1},0).wait(1).to({x:5.5,y:258.9},0).wait(1).to({x:14.5},0).wait(1).to({x:23.3},0).wait(1).to({x:32.3},0).wait(1).to({x:41.2},0).wait(1).to({x:50.1},0).wait(1).to({x:59},0).wait(1).to({x:67.9},0).wait(1).to({x:76.9},0).wait(1).to({x:85.8},0).wait(1).to({x:94.7},0).wait(1).to({x:103.6},0).wait(1).to({x:112.5},0).wait(1).to({x:121.5},0).wait(1).to({x:130.4},0).wait(1).to({x:139.3},0).wait(1).to({x:148.2},0).wait(1).to({x:157.1},0).wait(1).to({x:166.1},0).wait(1).to({x:175},0).wait(1).to({x:183.9},0).wait(1).to({x:192.8},0).wait(1).to({x:201.7},0).wait(1).to({x:210.7},0).wait(1).to({x:219.6},0).wait(1).to({x:228.5},0).wait(1).to({x:237.4},0).wait(1).to({x:246.3},0).wait(1).to({x:255.3},0).wait(1).to({x:264.2},0).wait(1).to({x:273.1},0).wait(1).to({x:282},0).wait(1).to({x:290.9},0).wait(1).to({x:299.9},0).wait(1).to({x:308.8},0).wait(1).to({x:317.7},0).wait(1).to({x:326.6},0).wait(1).to({x:335.6},0).wait(4).to({_off:true},1).wait(19));

	// House-1-b
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(0.1,1,1).p("AgBgiIADBF");
	this.shape_12.setTransform(151.5,226.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AhJDFQg9ghgxg7IAGgIQAGgIAAgHIgBgDQAfgSApiaQAhiAAFgtIDMAAIAGgCIAEACIAgADQgkAVgqBOQgGARgIARIgcA4IgEAIQgNAhgMAhIgBAcQgUASgJAvQgFAcAAAhIgLAGQgKApAAAVQAAATAFATIABAGIgNABIAAABQgYgogVgfgAhThAQgSADAAAYIABAPQAAAKACABIAJACQANADAPAAQAUAAAHgHQAEgGAJgRQgigcgXAAIgFAAg");
	this.shape_13.setTransform(426.6,193.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AAaJcIiFgFQAAh0gchIQAHgFAFgHIAEgGQALABAQAAQBJAAAqgMQANACAUAAIAggBQgDAQgCATQgCAbAABdQAAAmACAOIADAPIgrAEQgLgCgGgDgAh1jvQAAjfgeiIIgCgIIAHACIAIgEIAKAKQAZAXAlAWQBkA7BsAAIAEAAQgMAXgEApQgDAcAABRQAAAPACADIAIAEIAAACIAAABIAAAHIABAbIgGgCQhwAOgfALg");
	this.shape_14.setTransform(430.3,87);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("ABGTkQgLgCgGgCIm/AAQA1hQBKi6QB3kkCLnMQCDm8BamHQBgmiAAimIgBgdQgBgHgDgGIAEgLIAGACIBkAAIAMgFIGsgFIARgFQgQCkgEDoQgCBrAAEYIgPACQgLAAgFADQgJADAAAQQAAARAHAFIASAGIAPAAIAAAFIgBCtQgBCtACBXQACBJgFCYQAAByAUBMQhwCUhnByQiYCqmZF5IgPAOQgCgDgCgBgAoqQSIgIgQIACgBQAAgLAFgUQAEgRABgMIAAgEIAAgBQABgmAJgtQAWgSAGgZQACgJAAgvIAAgEQAXhAAlhKIBFiFQAfg+AAgUIAAgGIAPADIAUgFIADgJQACgEAAgPQAAgQgIgFIgRgGQg4ACgbADIAAgBQgLgCgGgCIjKAAIgaABIgCgBIgBABIgJABQgFACgFAFIgFAGQAAAIAEAIQgjA+ghByQgkB9AAAoIABAPQgOgUgNgXQghg7gPgTIgFgFQAGgEADAAQAAgUAFgfQAFggAAgLIgBgLQAkhngBkDQAAhwgHiWIgFhsIgCgtIAAgBQAClcgHisQgFi0AAhSQAAhsgZhBQAIAAAEgCIQlAAQAKADAnAAQguBFgLCrQgCAzgCCGQgCB1gGA5QgjBtg2DUQg6DngZBUQhyF/jRHeQhVDFhGCWQg9h5gfg6gAn5EMIBGAAIARgDIAHgTIABgBIAAgEQAAgwAFhbIAFhlQAAgegBgIQgFgbgTgQQgKAPgGATIgTgBQAAgOgDgCQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgSgCg/AKIh3ARQgLAAgFADQgJADAAAQIgIAFQgFgJgGgCQgLgEAAAXQAACCABAMQAHBaAlApICgAAIAGgCIAEACgAknooQgZACgUAMIACAPIAfAQQgXBjAAAyQAABQACAaQAEBDATAjICgAAQAOgEACgBQAGgEACgIIAaAEQATADALAAQAPAAAHgIIAAAAIAAgBIANgVIgMgJIABgfQAViNAAgfQAAgqgZgsQgOgXgFAPIgBAAQgLgBgFAgQgxgng+gaQg0gXgoAAQgCgHgCgBIAAAAQgDAAgEAJgArGwFQgKAMAABVQAAA0gJCMQgBB7AtAvICMAAQBhgnAzABIAPAAQABgBABgFIAFAEIAQgIQAGgFADAAIAAkBQgEgHgGgEQAEgGAGgNQgfgaiDg0Qh6gwgrAAIgIgEQgHACgJAHIgDADQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgCABg");
	this.shape_15.setTransform(484.6,125.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AhXEhIAArGICviQIgBAOIgFEEIAAAoIAAAIIgBBXIAAAIQgBBMgbCyQgCAYAAAWIABA4QAGBCAZAqIgBAaIgBAJIAAAIIABAOQgmAngtA8IhABWIABAHIgBABg");
	this.shape_16.setTransform(157.8,166.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("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");
	this.shape_17.setTransform(362.8,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(96));

	// Car
	this.instance_2 = new lib.Car();
	this.instance_2.setTransform(-91.7,118.7,0.505,0.558,0,0,0,77.6,45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-79.1,y:118.5},0).wait(1).to({x:-66.5,y:118.3},0).wait(1).to({x:-53.9,y:118},0).wait(1).to({x:-41.3,y:117.8},0).wait(1).to({x:-28.7,y:117.6},0).wait(1).to({x:-16.1,y:117.4},0).wait(1).to({x:-3.5,y:117.1},0).wait(1).to({x:9.1,y:116.9},0).wait(1).to({x:21.7,y:116.7},0).wait(1).to({x:34.3,y:116.5},0).wait(1).to({x:46.8,y:116.3},0).wait(1).to({x:59.4,y:116},0).wait(1).to({x:72,y:115.8},0).wait(1).to({x:84.6,y:115.6},0).wait(1).to({x:97.2,y:115.4},0).wait(1).to({x:109.8,y:115.2},0).wait(1).to({x:122.4,y:114.9},0).wait(1).to({x:135,y:114.7},0).wait(1).to({x:147.6,y:114.5},0).wait(1).to({x:160.2,y:114.3},0).wait(1).to({x:172.8,y:114},0).wait(1).to({x:185.4,y:113.8},0).wait(1).to({x:198,y:113.6},0).wait(1).to({x:210.6,y:113.4},0).wait(1).to({x:223.2,y:113.2},0).wait(1).to({x:235.8,y:112.9},0).wait(1).to({x:248.4,y:112.7},0).wait(1).to({x:260.9,y:112.5},0).wait(1).to({x:273.5,y:112.3},0).wait(1).to({x:286.1,y:112.1},0).wait(1).to({x:298.7,y:111.8},0).wait(1).to({x:311.3,y:111.6},0).wait(1).to({x:323.9,y:111.4},0).wait(1).to({x:336.5,y:111.2},0).wait(1).to({x:349.1,y:110.9},0).wait(1).to({x:361.7,y:110.7},0).wait(1).to({x:374.3,y:110.5},0).wait(1).to({x:386.9,y:110.3},0).wait(1).to({x:399.5,y:110.1},0).wait(1).to({x:412.1,y:109.8},0).wait(1).to({x:424.7,y:109.6},0).wait(1).to({x:437.3,y:109.4},0).wait(1).to({x:449.9,y:109.2},0).wait(1).to({x:462.5,y:109},0).wait(1).to({x:475.1,y:108.7},0).wait(1).to({x:487.7,y:108.5},0).wait(1).to({x:500.3,y:108.3},0).wait(1).to({x:512.9,y:108.1},0).wait(1).to({x:525.5,y:107.8},0).wait(1).to({x:538.1,y:107.6},0).wait(1).to({x:550.7,y:107.4},0).wait(1).to({x:563.3,y:107.2},0).wait(1).to({x:575.9,y:107},0).wait(1).to({x:588.5,y:106.7},0).wait(1).to({x:601.1,y:106.5},0).wait(1).to({x:613.6,y:106.3},0).wait(22).to({_off:true},1).wait(17));

	// Background
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("A/d0dIABAyAECz0ICDgBIA0AAAe+G9IAggsAR4UeIAugr");
	this.shape_18.setTransform(372.9,124.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8E9999").s().p("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");
	this.shape_19.setTransform(277.8,258.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0033FF").s().p("AioBgQgtgogYgxQgQggAAgSQgBgmAWg4QAZg+AdgOQCtgHBXAYQA/AQAAAVQgBARghAoQgjApgVADIAAB2QAoAoBWAmQBJAgAAAKQABAPgFAIQgIAMgXAAQj/AAiEh3g");
	this.shape_20.setTransform(346.9,71.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CC00").s().p("AgBCUQgZgBgWgFQhUgQgYg5QgLgZACghIAEghIgDglQgBgaAEgQQANgwBDABQBzgBBMBBQA5AyAAAjQAAAxgUAlQghA+hSAAIghgBg");
	this.shape_21.setTransform(366.6,36.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#996600").s().p("AgWBAQgCgXABhMQgBhQACgaIACgVQAUAEAZACIAAEzQgDAAgHAEIgPAIQgRgpgFg6g");
	this.shape_22.setTransform(363.9,67.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66FF33").s().p("ApxHzQgNgFlhgFIh/gFIAAABQgHACgHAHIgGAGQAHjrAAmaQADjlgDh4IDhAAIARgFIfsgEQgIADgOAIQgUALgMAKIADAPQACADAGACIgBAaIAUOhgAG4AYQgcAOgZA+QgWA4AAAmQAAASARAiQAYAxAtAoQCEB3EBAAQAXAAAIgMQAEgIAAgPQAAgKhJggQhXgmgogoIAAh4QAWgDAjgpQAhgoAAgRQAAgVg+gQQhEgSh1AAQglAAgpABgAqmGAQAhAAAIgKQAEgGAAgYQAAgKgOgWQgIgMgIgJIABgMIgBiDIgEhgQgCgzAAgjIAVAAQAlgOAogFQASgCAAgPIAAgGQADgCACgDQADgEACgJQgLgXAChEQABg0gXgXIABgKQAAgQgIgDIgRgFQi0ABgJAEQgBAAAGAEQAEAEgPACQAAAIAEAIQgHACgIAHQgJAHAAAGIADAPIAEAEQgHAWAAAxQAAAhACAMQAEAWAPAQIgBAHQAAAQAHAFIASAGIA9AAQgJATgEAWQgGAmAHBQQAIBZgDAkQgFBDgiAoIADAPQAMAMAeAAIAIgBIAWABgAKQjYQgEAQABAZIACAlIgEAjQgCAiAMAZQAYA3BUAQIgCAWQgCAZAABQQAABPACAXQAFA5ASApIAQgIQAHgEACAAIAAk1IAjABQBSAAAig8QATglAAgyQAAgkg5gyQhLhBh2AAQhDAAgMAwg");
	this.shape_23.setTransform(284.8,48);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF33").s().p("AhPAOQAAgzgKgWIAEgEQAGgIAAgHIBXAAQgIAXAAA3QAAAdABAPQADAUAGAMIhbAEQACgbAAgngAAvBKQACgdAAgtQAAg3gJgXIAsAAIAGgBQgLAYAAAwIAAAxQADAUAGAMIgpAAg");
	this.shape_24.setTransform(216.4,31.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AGoW4IANgFQAHgDACAAQADgPAAgWIgBgGIAaABQAGACALACQAEACABAFQADAFAAAIQAAAQgJAFIgQAFgAi4W4Qh0gGgrgJQgygLgzgEQgLgEgHgKQgHgKAAgLIABgBQALgHASgDIAAgCQAAgFAJgIIABAAQAAgLAKghQgKAsAAALQAAAHAEAMQAHARAOAOIAPgIQAHgFADAAQApirAkijQBJlAAAg5IgBgjIFxAFQAJADBzADIBxACIAOANQgTAjgCBIQgBBJALCPQAABYANCVQAIBZAIA0IgCALIAEAAQAHAlAHAOgABTqbQAPhBALg0QAABXAQA/QARBAAHBrIh+ACQAXg2AliYgABlxfQgCgPAAgeQAAheAZAAQAZAAAABdQAAA0gDAeIgIAEQgJAFgFABQgSgJgFglgAtL1TQgLgDgHgKQgHgKAAgMIAEgFQAGgGAFgBQAIgCAgAAIDbgBQAGADALACQAIADAAAQQAAAQgJAFQgCACgOADgAjg1nQgLgDgHgKQgHgKAAgMIAEgFQAFgGAGgBQAHgCAdAAIDCgBQAEADALACQAIADAAAQQAAAQgJAFQgCACgMADgAD+1xQgLgDgHgKQgHgKAAgMQAGgGATgDQAYgEA4gCQAGADALACQAIADAAAQQAAAQgJAFQgCACgOADgAIg2FQgLgDgHgKQgHgKAAgMQAEgEALgFQAKgFAAgBIEsAAQAGADALACQAIADAAAQQAAAQgJAFQgCACgOADg");
	this.shape_25.setTransform(278.4,275.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("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");
	this.shape_26.setTransform(342.4,241.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("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");
	this.shape_27.setTransform(271,268);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AvTEGQjpgBhGgHQBlhnBwiVQCJi2AOhTID6AEIAPAFIBZAAQg0BBgvCiQg3C+AAB9QAAAFAFAMIABABQhKgkjBgIgAmyEwIBEkNQA1jNAEheQA9AFAPAFICRAAIAAADIACAPQAIAHAPAFQAMgFAHgKIACgEIAHAEQggAkgMAzQgLAxAEBhQADBrgGAtQgLBVgwA4IABAHIiBACQgbABAAACIiCAFIgBAAIAAAAgAC+jsIAHgJQADgFAAgQIgBgHQCFAFANAEIBcAAQgGAVADAlQAEA+AWBRQAABBASBeQAVBqAfA5QgpACgKAMIgEAMQhNABg0AFIicANgAM0D5QAAghgriWQgqiRgKgPQgfh0gWg8IgMgdIAPAFIDSAAIAegLQDlH9B+AAIALAAIABAIIABAAQgRAKgQAHQinAKgpADQg3AFgRAMIiWAFIAAgPg");
	this.shape_28.setTransform(285.3,280);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCFF00").s().p("AgVAMIgDgNQABgGAIgHQAJgHAGgCQAPAGAKAOQAAAEgHAJQgGAJgMAFQgNgEgIgIg");
	this.shape_29.setTransform(752.9,-113);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D6D6D6").s().p("AkbBIIAAg5QB0gMDLgbIFNgvQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAQACACAAAOQAAAikiAqQkzAogkAJgAldBIIgSgGQgGgFAAgRQAAgPAJgEQAFgDAKAAIAPgBIAAAzg");
	this.shape_30.setTransform(602.9,76.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ay8AdIgBgvIEAgGIAAgEMAhiAAAQAHACAKACQAIAEAAAPQAAAPgJAFIgQAEIiDABI/sAFIgRAEg");
	this.shape_31.setTransform(292.9,-4.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("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");
	this.shape_32.setTransform(283.4,221.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(96));

	// Door-2
	this.instance_3 = new lib.Symbole1();
	this.instance_3.setTransform(120.7,207.9,1,1,0,0,0,30.9,86.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({x:123.4,y:205.4},0).wait(1).to({x:126.1,y:202.9},0).wait(1).to({x:128.9,y:200.4},0).wait(1).to({x:131.6,y:197.9},0).wait(1).to({x:134.3,y:195.4},0).wait(1).to({x:137.1,y:192.9},0).wait(1).to({x:139.8,y:190.4},0).wait(1).to({x:142.5,y:187.9},0).wait(1).to({x:145.3,y:185.4},0).wait(1).to({x:148,y:182.9},0).wait(1).to({x:150.7,y:180.5},0).wait(1).to({x:153.5,y:178},0).wait(1).to({x:156.2,y:175.5},0).wait(1).to({x:158.9,y:173},0).wait(1).to({x:161.7,y:170.5},0).wait(1).to({x:164.4,y:168},0).wait(1).to({x:167.1,y:165.5},0).wait(1).to({x:169.9,y:163},0).wait(1).to({x:172.6,y:160.5},0).wait(1).to({x:175.3,y:158},0).wait(1).to({x:178.1,y:155.6},0).to({_off:true},1).wait(60));

	// Door-1
	this.instance_4 = new lib.Symbole2();
	this.instance_4.setTransform(74.9,249.5,1,1,0,0,0,25.4,78.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({x:72.9,y:251.2},0).wait(1).to({x:70.8,y:253},0).wait(1).to({x:68.8,y:254.8},0).wait(1).to({x:66.8,y:256.6},0).wait(1).to({x:64.7,y:258.4},0).wait(1).to({x:62.7,y:260.2},0).wait(1).to({x:60.7,y:262},0).wait(1).to({x:58.6,y:263.8},0).wait(1).to({x:56.6,y:265.6},0).wait(1).to({x:54.5,y:267.4},0).wait(1).to({x:52.5,y:269.1},0).wait(1).to({x:50.5,y:270.9},0).wait(1).to({x:48.4,y:272.7},0).wait(1).to({x:46.4,y:274.5},0).wait(1).to({x:44.4,y:276.3},0).wait(1).to({x:42.3,y:278.1},0).wait(1).to({x:40.3,y:279.9},0).wait(1).to({x:38.3,y:281.7},0).wait(1).to({x:36.2,y:283.5},0).wait(1).to({x:34.2,y:285.3},0).wait(1).to({x:32.2,y:287.1},0).to({_off:true},1).wait(60));

	// Shop
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ADAk6IhSBnAA3iQIAggnAi/E7IAAh5AhPAaIhnCAAAdhuIhgB5");
	this.shape_33.setTransform(73.3,205);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF00FF").s().p("AhdCXQgBgEAAgOQgBggAVACQATADAAAdQAAAPgBAMIgIACIgKADQgPgEgEgMgAA5hnIgEgIQgFgSAAgKQgBgNAGgGQAEgFALgDQAOAEAFALIAIATIAAAdIAAAHIgDAEQgFAGgLAAQgLgBgIgQg");
	this.shape_34.setTransform(80.4,215.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("AitCvIAAAAQgCgFAAgNQABggATACQAVACAAAdIgBARIgCAKIgHADIgLADQgPgFgDgLgACLCsIgCgFQgCgEABgOQAAggATACQAUACAAAdIgBAWIAAAFIgIADIgLADQgLgEgFgHgAgiAAQgFgJAAgGQABgHADgJQAFgPALgJQANAFAGALIAAA0QAAAAgGAEIgNAGQgKgKgFgNgAAyiCIgGgMQgFgJAAgFIABgFQABgdASAAIAEAAQARACAAAfQAAAPgCALIgBAEQgJAGgJACIgJgLg");
	this.shape_35.setTransform(78,202.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00FF00").s().p("AhkBwQgJgKgFgNQgEgKgBgGQAAgHAEgJQAFgPAMgJQAMAFAIALIAAA2QgCAAgGAEIgKAFIgCABIgCgBgABYgRIgFgOQgEgQABgIQgBg7AVACQATACAAA4IAAAjIgBAQIgIADIgKABQgHgFgFgNg");
	this.shape_36.setTransform(91.6,221.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("Ai3EKQgIgKgHgQQgJgWAAgRQAAgWAZAHQAYAIgBAgQAAATgBARIgBADIgSAGIgEgFgAATBtIgCgHQgBgGgBgSQABgwATAAQAVAAgBAvIgBAgIgBAKQgKAGgIACQgLgGgFgMgACrjeQgDgJAAgFQAAgjATABQAVAAgBAhQAAASgCAMQgKAGgIACQgKgKgGgNg");
	this.shape_37.setTransform(81.2,209.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CC0033").s().p("ACRD9QgFgNAAgOQgBgnAVgCQATgCABAsIgBAZIgBAOIgIADIgKADQgKgJgFgKgABLD9QgEgGgCgIQgBgGAAgSQAAgpAOgGIAGgBIAFABQAOAGAAAoQAAAWgBARIAAADQgLAGgHACQgIgEgFgHgAiWB/IgJgPQgTgkAAgGQgBgMABgEIABgCQAmgEAQAgQAIAPAGAfIACAQIgDAFQgFAFgLAAQgIAAgQgZgABLgWQgHgOAAgQQgBgnAVgCQATgDAAAtIAAAdIgBAKIgIADIgKADQgIgIgFgIgAAciwQgMgIgDgPQgCgGAAgSQAAgwAVAAQATAAABAvQAAAYgCASQgIAFgHACIgDABIgEgCg");
	this.shape_38.setTransform(86.4,207.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCCCC").s().p("AkSE7IAAh5IGUAAQgOAGAAApQAAASABAGQACAIAEAGIh5ABIAKgFQAGgDACAAIAAg2QgIgLgMgFQgKAJgFAOQgDAJAAAIQAAAGAEAKQAFAMAJAKIhWACQgrAOgjAIQACgRAAgSQAAgggYgIQgYgIAAAXQAAARAJAVQAGARAIAKQgjAGgcABIgYgBgAhqDwQAAAOABAEQAEALAPAFIAKgEIAIgCQACgMAAgPQAAgdgUgCIgDgBQgRAAAAAfgACcDwQAAgpgPgFIBDAAQAGgDAigEIANgBQAHA0AHAeIgLAGIgFgGIABAIQgWAAgKACIgBAAIABgZQAAgtgUACQgUACAAAoQAAAOAGAMIgoABQACgRAAgWgAiiAaIAAACQAAANAFAEIAPAFICmAAIAKgEIDGgEIANgEIAAAAQAFA9AGAvIglABIABgiQAAg4gUgCQgUgCAAA7QAAAIADAPIAFAPIgyAAIACgVQAAgdgUgCQgUgCAAAgQAAAOABAEIACAEIg0ABIABgfQAAgwgUABQgUAAAAAwQAAASABAGIACAGIhMABQgGgggHgOQgRggglAEIgBABQgBAEAAANQAAAFAUAlIAIAOIhFABIABgQQAAgdgUgCQgUgCAAAgQAAANABAEIg4ABgAg0huQAFAHAJADQB6AEAMAEICAAAIAKgDIAIBjIgKgCIhNAAIABgbQAAgtgUACQgUADAAAnQAAAQAHAMIgnAAIAAgcIgJgTQgFgKgOgFQgLADgEAFQgFAGAAAOQAAAJAGASIADAHIgVAAIAAAEIimAEIgIABgAhHg0QgDAJAAAHQAAAGAEAKQAFANALAJIAMgFQAGgDACAAIAAg2QgIgLgMgFQgMAJgFAPgADgiEQhcgMgxgFQAHgDAIgEQACgSAAgYQAAgvgUAAQgUgBAAAxQAAASABAGQADAOANAJIgCAAIghgCQACgLAAgPQAAgggRgCIBShnQAFAFAGACIBuAAQgCAbAAA5QAAAeAEBAIgIgCgACkjBQAAAEAEAJQAFANALALQAIgCAKgGQACgMAAgSQAAgigUAAIgBAAQgTAAAAAjgAD4knIgDgPIAFgBIgDAFQATBEAGBhQgPhqgJgwgAAEi3IAAAGQAAAEAEAJIAGANQgVABgTAGg");
	this.shape_39.setTransform(81.6,205);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9999CC").s().p("AnmFSIAQo6IAAhJQALAGAZgBQAGABApgIQAwgIA7gFIFEgDQAVgJAhgFQAOgDABgNQAAgLgCgBQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAIgHgCIACgBQACgSgBggQAAgygLhTIFigCQAOByAZAhQg2AxhkB7IkIFHQhUBjjCChQisCOhKBAQgdh1gBhmgABFlyIgEAAIgCgHIAFAFIAMgFIADAHIgOAAg");
	this.shape_40.setTransform(101.1,269.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AhnGYQgFgrgCgqIAAgeIAAgHIABgqIgEgdQgGhhgThEIADgFIADgBQAHgEAAgNQAAgNgGgDIgOgDIhpABIAJgJQCBiTDdijQBMg3A/gqIgEA9QgDBNAAC2IgCBsQgCCDAEBsQADBUAHBAg");
	this.shape_41.setTransform(120.3,169.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AkQQSIgDgMIAXgUQgNgoghjFQAAgUAEhkQAGhzAGhEIAAlpIljADQgDACgsAHQgtAHgOAEIgOgFQgFgEgBgNQAAgQAjgHQAygIAfgHIAAgEIFtAAIAAigQALgfAJAKQAaglBQhiQAEgMAIgCIAzg9QBoh/BKhUIgCgIIALgCIACgDQgCgBgHgCIANgBIAogtQAagcAZgjIAsg7QATgWA4geQBBgjATgPQBOhIA4grQBLg6BEgYQAKhAATA3IAAAAIATgEQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAABQACABABALIgYAPIAAK2QAOAgAUBwQATBmACA4IAFgCQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABABQACABAAAJQAAA1jTD0QhmB3iDCLQhpBtjOC3QjcDGgcAAQgYAAgJgKgAjzDHIgQI9QABBmAdB0QBKhACqiOQDCigBWhkIEIlIQBkh8A2gxQgZgegOhzIliADQALBTAAAvQABAhgCASIgCABIAHABQAAABABAAQAAAAAAABQAAAAABAAQAAAAABABQACABAAALQgBANgOADQghAFgVAIIlEAEQg7AFgwAIQgpAHgGAAQgZAAgLgFIAABIgAjaBmQAcAAAjgHIAEAFIASgGIABgEQAjgIArgOIBUgBIACABIACgBIB5gCQAFAHAIAEQAHgCALgGIAAgDIAnAAQAFAKAKAJIAKgDIAIgDIABgOIABAAQAKgCAWAAIAEAAIAOAAIgDgIQgHgdgHgzIgNACQgiAEgGACIhDAAIgFgBIgGABImVAAIAAB4IAFAAIAUAAgAgugiQALAAAFgFIADgFIgCgQIBMAAQAFALALAHQAIgCAKgGIABgLIA1AAQAFAHALAEIALgDIAIgDIAAgFIAygBQAFANAHAHIAKgDIAIgDIABgQIAkgCQgFgvgFg8IAAAAIgOADIjGAEIgKAEIilAAIgPgFQgGgEAAgNIAAgCIhmCAIA4AAIAAAAQADALAPAFIALgDIAHgDIACgLIBFAAQAQAZAIAAgAEeouQAFADABAMQgBANgGAFIgDAAIgFACIACAOQAKAxAPBqIADAcIgBAqIAAAHIABAeQACArAFAqIFjAAQgGg/gDhUQgEhtABiDIAChuQAAi1AEhOIAEg8Qg/AqhMA3QjfCiiBCVIgJAKIBogCIAPAEgACbjSQAFAJAIAHIAKgDIAIgDIABgKIBMAAIALADIgIhmIgKADIiBAAQgMgEh6gEQgIgDgFgHIhiB7IAIgBIClgEIAAgEIAWAAQAIAQALAAQALAAAFgFIADgFIAAgGgAEHlXQgEhAABgfQgBg5ACgbIhuAAQgGgCgEgEIhSBnIgEAAQgSAAgBAdIggAnQATgGAXgCIAJALQAJgCAJgGIABgEIAhACIABAAIAEACIADgBQAxAFBcAMIAHADIAAAAg");
	this.shape_42.setTransform(78.4,226.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144.1,84.5,886.3,540);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
