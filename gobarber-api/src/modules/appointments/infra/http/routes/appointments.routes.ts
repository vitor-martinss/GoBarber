import { Router } from 'express'
import {celebrate, Segments, Joi} from 'celebrate'
import AppointmentController from '../controllers/AppointmentsController'
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

const appointmentsRouter = Router()
const appointmentsController = new AppointmentController()
const providerAppointmentsController = new ProviderAppointmentsController()

appointmentsRouter.use(ensureAuthenticated)

appointmentsRouter.post('/', celebrate({
	[Segments.BODY]: {
		provider_id: Joi.string().uuid().required(),
		date: Joi.date(),
	}
}), appointmentsController.create)
appointmentsRouter.post('/', appointmentsController.create)
appointmentsRouter.post('/me', providerAppointmentsController.index)

export default appointmentsRouter
