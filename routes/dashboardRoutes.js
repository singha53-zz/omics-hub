const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');
const keys = require('../config/keys');

function subsetArr(labels, group) {
  let indices = [];
  let idx = labels.indexOf(group);
  while (idx != -1) {
  indices.push(idx);
  idx = labels.indexOf(group, idx + 1);
  }
  return indices
}

module.exports = app => {

  app.post('/api/analyze', requireLogin, async (req, res) => {

    // console.log(req.body.exp)
    // const dataset = req.body.exp
    // console.log(dataset.map(d => +d[0]))
    const labels = JSON.parse(req.body.labels).map(d=>d.outcome)
    console.log(labels)
    const enet = await axios.post(keys.rAPI, {
      "data": JSON.parse(req.body.exp),
      "outcome": labels,
      "key": "pwd"
    }).catch(err => {
      console.log(err)
    })
    console.log(enet.data)

    let analysis = {}
    // Number of samples
    analysis.n = enet.data.n[0].toString()
    // Number of variables
    analysis.p = enet.data.p[0].toString()
    // Selected variable by Enet
    analysis.p_selected = enet.data.p_selected[0].toString()
    // AUROC
    analysis.auc = enet.data.auc[0].toString()
    // Sensitivity/Specificity
    analysis.perf = enet.data.perf[0].toString()
    // data for pca plot 
    analysis.scatterData = enet.data.scatterData
    // console.log(enet.data.scatterData)
    // enet.data.scatterData[0].id.toString()
    // enet.data.scatterData[1].id.toString()
    console.log(analysis.scatterData)
    console.log(analysis.scatterData[0])

//     // Analyze expression data and store results
//     // Format explanatory data
//     let features = JSON.parse(req.body.exp)[0]
//     const datasetKeys = Object.keys(JSON.parse(req.body.exp)).filter(d => d !== "0")
//     const X = datasetKeys.map(i => JSON.parse(req.body.exp)[i]).map(x => x.map(d => +d))
//     // Format response data
//     const y = JSON.parse(req.body.labels).map(d => +d)
//     // console.log(X, y)

//     // Run PCA
//     const pca = new PCA(X.slice(1, X.length-1), 
//       { center: true, scale: true });
//     // Proportion of variation explained
//     analysis.var_prop = pca.getExplainedVariance().splice(0,6);
//     analysis.var = Math.round(100*(analysis.var_prop[0]+analysis.var_prop[1]))+'%';
//     // loadings
//     let loadings = pca.U.map(d => d[0])

//     // Only keep top 5 features with the largest loadings
//     // make list with indices and values
//     indexedTest = loadings.map(function(e,i){return {ind: i, val: Math.abs(e)}});
//     // sort index/value couples, based on values
//     indexedTest.sort(function(x, y){return x.val > y.val ? 1 : x.val == y.val ? 0 : -1});
//     // make list keeping only indices
//     indices = indexedTest.map(function(e){return e.ind});
//     analysis.features = indices.map(d => features[d]).splice(features.length-6, features.length-1)
//     analysis.loadings = indices.map(d => Math.abs(loadings[d])).splice(features.length-6, features.length-1)


//     // components
//     const comps = pca.predict(X)
//     const compOne = comps.map(d => d[0])
//     const compTwo = comps.map(d => d[1])

//     analysis.comps = {
//       gpOne:{compOne:subsetArr(y, 0).map(d => compOne[d]), compTwo:subsetArr(y, 0).map(d => compTwo[d])},
//       gpTwo:{compOne:subsetArr(y, 1).map(d => compOne[d]), compTwo:subsetArr(y, 1).map(d => compTwo[d])}
//     }

// // var foo = new Array(analysis.n);
// // foo.map(d => console.log(d))

// // var A = new Matrix(analysis.comp2);
// // console.log(foo.length)
//     // Classification model using knn with PCs
//     const confusionMatrix = crossValidation.leaveOneOut(KNN, X, y);
//     analysis.confusionMatrix = confusionMatrix.matrix
//     analysis.accuracy = Math.round(100*(confusionMatrix.getAccuracy()))+'%';
    // console.log(analysis)
    
    req.user.analysis = analysis
    const user = await req.user.save()
    res.send(user)
  })

}