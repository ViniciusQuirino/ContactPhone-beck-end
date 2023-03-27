import { Router } from "express";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import retrieveUserController from "../controllers/user/retrieveUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import { User } from "../entities/user.entities";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";
import {
  ensureDataIsValidMiddleware,
  ensureUpdateDataIsValidMiddleware,
} from "../middlewares/ensureDataIsValid.middlewares";
import ensureItIsExistMiddleware from "../middlewares/ensureItIsExist.middleware";
import phoneNumberValidationMiddleware from "../middlewares/phoneNumberValidation.middlewares";
import { userSchema, userSchemaUpdate } from "../schemas/user.schemas";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  phoneNumberValidationMiddleware,
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);

userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureItIsExistMiddleware(User),
  retrieveUserController
);

userRoutes.patch(
  "",
  ensureAuthMiddleware,
  ensureItIsExistMiddleware(User),
  ensureUpdateDataIsValidMiddleware(userSchemaUpdate),
  updateUserController
);

userRoutes.delete("", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
