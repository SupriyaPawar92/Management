const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/test/all", controller.allAccess);
  app.get("/api/test/procurement_manager", [authJwt.verifyToken], controller.procurement_managerBoard);
  app.get(
    "/api/test/inspection_manager",
    [authJwt.verifyToken, authJwt.isInspection_manager],
    controller.inspection_managerBoard
  );
  app.get(
    "/api/test/client",
    [authJwt.verifyToken, authJwt.isClient],
    controller.clientBoard
  );
  
};