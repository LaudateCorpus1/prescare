
const create = require('./create')
const get = require('./get')
const edit = require('./edit')
const update = require('./update')
const destroy = require('./destroy')

module.exports = Cuidado => {
  router.post('/', create(Cuidado))
  router.get('/:cuidado_id', get(Cuidado))
  router.get('/:cuidado_id/edit', edit(Cuidado))
  router.post('/:cuidado_id/edit', update(Cuidado))
  return router;
}
