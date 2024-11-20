import { Router } from "express"
import multer from "multer"

import uploadConfig from "./config/multer"

import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailUserController"

import { isAuthenticated } from "./middlewares/isAuthenticated"
import { CreateCategoryController } from "./controllers/category/CreateCategoryController"
import { ListCategoryController } from "./controllers/category/ListCategoryController"
import { CreateProductController } from "./controllers/product/CreateProductController"
import { ListByCategoryController } from "./controllers/product/ListByCategoryController"

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

// aqui tinha dado conflito de versão, resolvi com esse comentario do video fda:
/*
npm uninstall @types/express
Depois vai na pasta e apaga a pasta node_modules

Volta no cmd e roda:
npm install

E ai instale:
npm install --save-dev @types/express@4.17.13
*/

// routes user
router.post("/users", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)
router.get("/me", isAuthenticated, new DetailUserController().handle)

// routes categories
router.post("/category", isAuthenticated, new CreateCategoryController().handle)
router.get("/category", isAuthenticated, new ListCategoryController().handle)

// routes product
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
)
router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
)

export { router }
