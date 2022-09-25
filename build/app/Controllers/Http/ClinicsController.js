"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Clinic_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Clinic"));
class ClinicsController {
    async create({ request }) {
        const user = new Clinic_1.default();
        user.name = request.input('name');
        user.local = request.input('local');
        user.cep = request.input('cep');
        await user.save();
    }
    async getAllClinics({ auth }) {
        const check = await auth.use('api').authenticate();
        if (check) {
            return Clinic_1.default.all();
        }
        else {
            return "Nao Permitido";
        }
    }
}
exports.default = ClinicsController;
//# sourceMappingURL=ClinicsController.js.map