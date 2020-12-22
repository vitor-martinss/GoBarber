import { Router } from 'express'
import { container } from 'tsyringe'
import multer from 'multer'
import uploadConfig from '@config/upload'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import CreateUserService from '@modules/users/services/CreateUserService'
import UpdateUseravatarService from '@modules/users/services/UpdateUserAvatarService'


const usersRouter = Router()

const upload = multer(uploadConfig)


usersRouter.post('/', async (request, response) => {
	const { name, email, password } = request.body

	const CreateUser = container.resolve(CreateUserService)

	const user = await CreateUser.execute({
		name,
		email,
		password,
	})

	//delete user.password;

	return response.send(user)
})


usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async(request, response) => {
	const updateUserAvatar = container.resolve(UpdateUseravatarService)

	const user = await updateUserAvatar.execute({
		user_id: request.user.id,
		avatarFilename: request.file.filename
	})

	//delete user.password;

	return response.json(user)
})

export default usersRouter
