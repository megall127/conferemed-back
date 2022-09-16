"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Proc_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Proc"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async create({ request, response }) {
        const user = new User_1.default();
        user.email = request.input('email');
        user.password = request.input('password');
        user.name = request.input('name');
        user.tell = request.input('tell');
        user.crm = request.input('crm');
        user.cidade = request.input('cidade');
        user.cpf = request.input('cpf');
        user.especialit = request.input('especialit');
        user.aux = request.input('aux');
        await user.save();
        return user;
    }
    async login({ auth, request, response }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            const token = await auth.use('api').attempt(email, password);
            return token;
        }
        catch {
            return response.unauthorized('Invalid credentials');
        }
    }
    async takeDocDados({ auth, request, response }) {
        const check = await auth.use('api').authenticate();
        const user = await User_1.default.findBy('id', request.input('id'));
        let procFilter = [];
        const procFound = (await Proc_1.default.all()).map((itens) => {
            if (itens.users_id === user?.id) {
                procFilter.push(itens);
            }
            else {
            }
        });
        if (check) {
            return {
                data: {
                    doctor: user,
                    proc: procFilter
                }
            };
        }
        else {
            return "Usuário não autenticado.";
        }
    }
    async checkRoute({ auth }) {
        const check = await auth.use('api').authenticate();
        if (check) {
            return 1;
        }
        else {
            return 2;
        }
    }
    async getAllDoctors({ auth }) {
        const user = new User_1.default();
        const check = await auth.use('api').authenticate();
        if (check) {
            return User_1.default.all();
        }
        else {
            return 'Falhou';
        }
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map