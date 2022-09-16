"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class Proc extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Proc.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Proc.prototype, "clinica", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Proc.prototype, "convenio", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Proc.prototype, "nome_paciente", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Proc.prototype, "nome_proc", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Proc.prototype, "valor_repasse", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Proc.prototype, "quantidade", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Proc.prototype, "valor_auxiliar", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Proc.prototype, "valor_proc", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Proc.prototype, "stats_proc", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Proc.prototype, "stats_pay", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", luxon_1.DateTime)
], Proc.prototype, "date_proc", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Proc.prototype, "users_id", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Proc.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Proc.prototype, "updatedAt", void 0);
exports.default = Proc;
//# sourceMappingURL=Proc.js.map