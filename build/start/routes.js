"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.group(() => {
    Route_1.default.post('/register', 'UsersController.create').as('user.create');
    Route_1.default.post('/login', 'UsersController.login').as('user.login');
    Route_1.default.get('/getalldoctors', 'UsersController.getAllDoctors').as('user.getall');
    Route_1.default.post('/takedoctors', 'UsersController.takeDocDados').as('user.take');
    Route_1.default.get('/checkroute', 'UsersController.checkRoute').as('user.checkroute');
    Route_1.default.post('/registerclinic', 'ClinicsController.create').as('clinic.create');
    Route_1.default.get('/getallclinics', 'ClinicsController.getAllClinics').as('clinic.getAll');
    Route_1.default.post('/proc', 'ProcsController.create').as('proc.create');
    Route_1.default.post('/procedit', 'ProcsController.editDados').as('proc.edit');
}).prefix('api');
//# sourceMappingURL=routes.js.map