
"use strict";

let ResetPose = require('./ResetPose.js')
let DetectMoreLoopClosures = require('./DetectMoreLoopClosures.js')
let AddLink = require('./AddLink.js')
let GetMap = require('./GetMap.js')
let PublishMap = require('./PublishMap.js')
let GetPlan = require('./GetPlan.js')
let GetNodesInRadius = require('./GetNodesInRadius.js')
let GlobalBundleAdjustment = require('./GlobalBundleAdjustment.js')
let ListLabels = require('./ListLabels.js')
let SetLabel = require('./SetLabel.js')
let CleanupLocalGrids = require('./CleanupLocalGrids.js')
let RemoveLabel = require('./RemoveLabel.js')
let SetGoal = require('./SetGoal.js')
let GetMap2 = require('./GetMap2.js')
let LoadDatabase = require('./LoadDatabase.js')
let GetNodeData = require('./GetNodeData.js')

module.exports = {
  ResetPose: ResetPose,
  DetectMoreLoopClosures: DetectMoreLoopClosures,
  AddLink: AddLink,
  GetMap: GetMap,
  PublishMap: PublishMap,
  GetPlan: GetPlan,
  GetNodesInRadius: GetNodesInRadius,
  GlobalBundleAdjustment: GlobalBundleAdjustment,
  ListLabels: ListLabels,
  SetLabel: SetLabel,
  CleanupLocalGrids: CleanupLocalGrids,
  RemoveLabel: RemoveLabel,
  SetGoal: SetGoal,
  GetMap2: GetMap2,
  LoadDatabase: LoadDatabase,
  GetNodeData: GetNodeData,
};
