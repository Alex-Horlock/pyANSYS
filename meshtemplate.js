var Mesh_Mod=DS.Tree.FirstActiveBranch.MeshControlGroup
//TrailerSizing
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "trailer"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = facesizing
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

//CabSizing
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "cab"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = facesizing
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

//WheelSizing
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "wheels"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = wheelfacesizing
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

//LHSDomain
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "lhsdomain"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = domainfacesizing
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

//RHSDomain
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "rhsdomain"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = domainfacesizing
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

//TopDomain
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "topdomain"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = domainfacesizing
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

//InletDomain
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "inlet"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = domainfacesizing
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

//OutletDomain
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "outlet"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = domainfacesizing
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Hard"

//GroundPlaneSizing
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertMeshSize(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue = "Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue = "groundplane"
ListView.ActivateItem("Type")
ListView.ItemValue = "Element Size"
ListView.ActivateItem("Element Size")
ListView.ItemValue = groundfacesizing
ListView.ActivateItem("Behavior")
ListView.ItemValue = "Soft"

//Inflation on trailer
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertInflation(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue="Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue="ANSYS_Persist_Key_1"
ListView.ActivateItem("Boundary Scoping Method")
ListView.ItemValue="Named Selections"
ListView.ActivateItem("Boundary")
ListView.ItemValue="trailer"
ListView.ActivateItem("Inflation Option")
ListView.ItemValue="First Layer Thickness"
ListView.ActivateItem("First Layer Height")
ListView.ItemValue=flhtrailer
ListView.ActivateItem("Maximum Layers")
ListView.ItemValue=numlayerstrailer
ListView.ActivateItem("Growth Rate")
ListView.ItemValue=growth

//Inflation on cab
DS.Script.SelectItems(""+Mesh_Mod.ID)
DS.Script.SelectItems("")
DS.Script.doInsertInflation(1)
DS.Script.doGraphicsSurfaceSelect(1)
ListView.ActivateItem("Scoping Method")
ListView.ItemValue="Named Selection"
ListView.ActivateItem("Named Selection")
ListView.ItemValue="ANSYS_Persist_Key_1"
ListView.ActivateItem("Boundary Scoping Method")
ListView.ItemValue="Named Selections"
ListView.ActivateItem("Boundary")
ListView.ItemValue="cab"
ListView.ActivateItem("Inflation Option")
ListView.ItemValue="First Layer Thickness"
ListView.ActivateItem("First Layer Height")
ListView.ItemValue=flhcab
ListView.ActivateItem("Maximum Layers")
ListView.ItemValue=numlayerscab
ListView.ActivateItem("Growth Rate")
ListView.ItemValue=growth

//Update Mesh
DS.Script.doModelPreviewMeshFromToolbar(1)

//Export Mesh
DS.Script.doFileExport(MESHNAME)