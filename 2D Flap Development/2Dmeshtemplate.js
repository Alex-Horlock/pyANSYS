//Define the variables - Change these with python


//Make sure collsion avoidance is on for boundary layer meshing

var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doGraphicsPickGeometry(1)
ListView.ActivateItem("Physics Preference")
ListView.ItemValue = "Explicit"

//Execute the Commands


var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)

//Adjust the Cab Edge Sizing

ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "cabin"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = Cab_edge_size
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)

//Adjust the Flaps edge sizing

ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "flap1"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = Flaps_edge_size
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)

ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "flap2"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = Flaps_edge_size
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)

//Adjust the Lorry Edge Sizing

ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "trailer"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = Trailer_edge_size
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)

//Adjust the Face Sizing

ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "FACE"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = "0.088388"
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

//Put inflation on CAB edge

var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertInflation(1)

ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "FACE"
ListView.ActivateItem("Boundary Scoping Method")
ListView.ItemValue = "Named Selections"
ListView.ActivateItem("Boundary")
ListView.ItemValue = "cabin"
ListView.ActivateItem("Inflation Option")
ListView.ItemValue = "First Layer Thickness"
ListView.ActivateItem("First Layer Height")
ListView.ItemValue = First_layer_H_cabin
ListView.ActivateItem("Maximum Layers")
ListView.ItemValue = Cab_No_layers
ListView.ActivateItem("Growth Rate")
ListView.ItemValue = "1.2"

//Put inflation on Lorry edge

var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertInflation(1)

ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "FACE"
ListView.ActivateItem("Boundary Scoping Method")
ListView.ItemValue = "Named Selections"
ListView.ActivateItem("Boundary")
ListView.ItemValue = "trailer"
ListView.ActivateItem("Inflation Option")
ListView.ItemValue = "First Layer Thickness"
ListView.ActivateItem("First Layer Height")
ListView.ItemValue = First_layer_H_trailer
ListView.ActivateItem("Maximum Layers")
ListView.ItemValue = Trailer_No_layers
ListView.ActivateItem("Growth Rate")
ListView.ItemValue = "1.2"

//Put inflation on Flaps edge

var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertInflation(1)

ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "FACE"
ListView.ActivateItem("Boundary Scoping Method")
ListView.ItemValue = "Named Selections"
ListView.ActivateItem("Boundary")
ListView.ItemValue = "flap1"
ListView.ActivateItem("Inflation Option")
ListView.ItemValue = "First Layer Thickness"
ListView.ActivateItem("First Layer Height")
ListView.ItemValue = First_layer_H_flaps
ListView.ActivateItem("Maximum Layers")
ListView.ItemValue = Flaps_No_layers
ListView.ActivateItem("Growth Rate")
ListView.ItemValue = "1.2"

var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertInflation(1)

ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "FACE"
ListView.ActivateItem("Boundary Scoping Method")
ListView.ItemValue = "Named Selections"
ListView.ActivateItem("Boundary")
ListView.ItemValue = "flap2"
ListView.ActivateItem("Inflation Option")
ListView.ItemValue = "First Layer Thickness"
ListView.ActivateItem("First Layer Height")
ListView.ItemValue = First_layer_H_flaps
ListView.ActivateItem("Maximum Layers")
ListView.ItemValue = Flaps_No_layers
ListView.ActivateItem("Growth Rate")
ListView.ItemValue = "1.2"
DS.Script.doModelPreviewMeshFromToolbar(1)


DS.Script.doFileExport(mesh_save_name)