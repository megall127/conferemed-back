"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'procs';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table
                .integer('users_id')
                .unsigned()
                .references('users.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.string('clinica');
            table.string('convenio');
            table.string('nome_paciente');
            table.string('nome_proc');
            table.bigint('valor_repasse');
            table.mediumint('quantidade');
            table.bigint('valor_auxiliar');
            table.date('date_proc');
            table.bigint('valor_proc');
            table.smallint('stats_proc');
            table.smallint('stats_pay');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1660863546742_procs.js.map