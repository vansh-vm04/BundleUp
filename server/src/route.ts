import express from "express"
const router = express.Router()

enum ResponseCode{
    Success = 200,
    NotFound = 404,
    ServerError = 500,
    UnAuthorized = 401
}

router.post('/sign-up',)
router.post('/sign-in',)
router.post('/content',)
router.get('/content',)
router.patch('/content',)
router.delete('/content',)
router.post('/bundle',)
router.get('/bundle',)
router.delete('/bundle',)
router.patch('/bundle')
router.post('/share')
router.get('/share/:hash')

export default router