let routes = [];

exports.register = (data) => {
  routes.push(...data.routes);
};

exports.getRoutes = () => routes;