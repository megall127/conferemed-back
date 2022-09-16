"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Proc_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Proc"));
class ProcsController {
    async create({ request, response, auth }) {
        const proc = new Proc_1.default();
        const check = await auth.use('api').authenticate();
        if (check) {
            proc.clinica = request.input('clinica');
            proc.convenio = request.input('convenio');
            proc.nome_paciente = request.input('nome_paciente');
            proc.nome_proc = request.input('nome_proc');
            proc.valor_repasse = request.input('valor_repasse');
            proc.quantidade = request.input('quantidade');
            proc.valor_auxiliar = request.input('valor_auxiliar');
            proc.valor_proc = request.input('valor_proc');
            proc.stats_proc = request.input('stats_proc');
            proc.stats_pay = request.input('stats_pay');
            proc.date_proc = request.input('date_proc');
            proc.users_id = request.input('id');
            await proc.save();
        }
        else {
            return "Nao deu";
        }
    }
    async editDados({ auth, request, response }) {
        const proc = await Proc_1.default.findOrFail(request.input("id"));
        const newStats = request.input("newStats");
        const newPayment = request.input("newPayment");
        const checkValue = (newValue, value) => {
            if (newValue === null) {
                return value;
            }
            else {
                return newValue;
            }
        };
        try {
            await auth.check();
            proc.stats_proc = checkValue(newStats, proc.stats_proc);
            proc.stats_pay = checkValue(newPayment, proc.stats_pay);
            await proc?.save();
            return {
                message: "Editado com Sucesso!",
                data: newStats
            };
        }
        catch (error) {
            return {
                message: "Falhou"
            };
        }
    }
}
exports.default = ProcsController;
//# sourceMappingURL=ProcsController.js.map