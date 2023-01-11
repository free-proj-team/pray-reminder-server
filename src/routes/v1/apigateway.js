import { Router } from "express";
import { router as praiesRouter } from './praies.js'
import { router as usersRouter } from './users.js'

const router = Router()

router.use('/users', usersRouter)
router.use('/praies', praiesRouter)

export { router }
