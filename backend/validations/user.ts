import {body} from 'express-validator'

export const userStoreValidate = [
    body("firstName").escape().not().isEmpty().withMessage("Nome Obrigatório"),
    body("lastName").escape().not().isEmpty().withMessage("sobrenome é Obrigatório"),
    body("email").escape().not().isEmpty().isEmail().withMessage("e-mail obrigatório"),
    body("password").escape().not().isEmpty().withMessage("senha obrigatória"),
]
