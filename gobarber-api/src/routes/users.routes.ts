import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import CreateUserService from '../services/CreateUserService'
import UpdateUseravatarService from '../services/UpdateUserAvatarService'


const usersRouter = Router()

const upload = multer(uploadConfig)

usersRouter.post('/', async (request, response) => {
	const { name, email, password } = request.body

	const CreateUser = new CreateUserService()

	const user = await CreateUser.execute({
		name,
		email,
		password,
	})

	//delete user.password;

	return response.send(user)
})


usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async(request, response) => {
	const updateUserAvatar = new UpdateUseravatarService()

	const user = await updateUserAvatar.execute({
		user_id: request.user.id,
		avatarFilename: request.file.filename
	})

	//delete user.password;

	return response.json(user)
})

export default usersRouter
