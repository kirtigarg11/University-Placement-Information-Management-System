var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
showcompvisit: function*(next){
    console.log(23);
    var queryString='select comp_name,job_rol,visit_date,course,branch,pkg from tb_comp where visit_date<=curdate()';
    var query=util.format(queryString);
    var res=yield databaseUtils.executeQuery(query);
    console.log(res);

    yield this.render('companyvisited',{
      res:res
    });

},
showcompvisited: function*(next){
  console.log(23);
  var queryString='select comp_name,job_rol,visit_date,course,branch,pkg from tb_comp where visit_date<=curdate()';
  var query=util.format(queryString);
  var res=yield databaseUtils.executeQuery(query);
  console.log(res);

  yield this.render('compvisittpa',{
    res:res
  });

}
}