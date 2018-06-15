const Router = require('express').Router
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')
const medicamentoRoutes = require('./medicamento')
const dietaRoutes = require('./dieta')
const prescricaoRoutes = require('./prescricao')
const loginRoutes = require('./login')
const loginMiddleware = require('./application/loginMiddleware')

module.exports = (models, passport) => {
  const router = Router()

  router.use(loginMiddleware())

  applicationRoutes(router)
  acolhidoRoutes(models.Acolhido, models.Prescricao, router)
  prescricaoRoutes(models.Prescricao, models.Cuidado, models.Dieta, models.Medicamento, models.Acolhido, router)
  dietaRoutes(models.Dieta, models.Prescricao, models.Acolhido, router)
  cuidadoRoutes(models.Cuidado, models.Prescricao, models.Acolhido, router)
  medicamentoRoutes(models.Medicamento, models.Prescricao, models.Acolhido, router)
  loginRoutes(passport, router)

  return router
}