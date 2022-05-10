import { Router } from "express";
import multer from "multer";
import { CreateStudentController } from "../../../../modules/user/useCases/createStudent/CreateStudentController";
import { UpdateStudentAvatarController } from "../../../../modules/user/useCases/updateStudentAvatar/UpdateStudentAvatarController";
import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListStudentsController } from "../../../../modules/user/useCases/listStudents/ListStudentsController";

const studentsRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createStudentController = new CreateStudentController();
const listStudentsController = new ListStudentsController();

const updateStudentAvatarController = new UpdateStudentAvatarController();

studentsRoutes.post("/", createStudentController.handle);

studentsRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateStudentAvatarController.handle
);

studentsRoutes.get("/list", listStudentsController.handle)

export { studentsRoutes };
