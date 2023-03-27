import * as express from 'express'
import { IReqUser } from '../../interfaces'

declare global{
    namespace Express{
        interface Request {
            user: IReqTokenUser
        }
    }
}