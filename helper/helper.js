function getLimit(limit) {
  limit = parseInt(limit, 10);
  if (isNaN(limit)) {
    limit = 10;
  } else if (limit > 50) {
    limit = 50;
  } else if (limit < 1) {
    limit = 1;
  }
  return limit;
}
function getPage(page) {
  page = parseInt(page, 10);
  return isNaN(page) || page < 1 ? 1 : page;
}

function getFilter(query) {
  let filter = {};
  if (query.name) {
    filter["name"] = query.name;
  }
  if (query.type) {
    filter["type"] = query.type;
  }
  if (query.description) {
    filter["description"] = query.description;
  }
  return filter;
}

function notFound(res) {
  res.status(404).json({
    status_message: "resources not found "
  });
}

function serverError(err, res) {
  res.status(500).json({
    status_code: 500,
    status_message: "internal server error",
    err: err.message
  });
}
module.exports = {
  getLimit,
  getPage,
  getFilter,
  notFound,
  serverError
};
