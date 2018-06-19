module.exports = Cuidado => (req, res) => {
  return Cuidado
  .findOne({
    where: {
      id: req.params.cuidado_id
    }
  }).then(cuidado => {
    cuidado.update(req.body).then(() => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
  })
}