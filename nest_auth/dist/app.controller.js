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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authenticated_guard_1 = require("./auth/authenticated.guard");
const get_user_dto_1 = require("./auth/dto/get-user.dto");
const local_auth_guard_1 = require("./auth/local-auth.guard");
let AppController = class AppController {
    login(username) {
        const user = {
            'name': username
        };
        return user;
    }
    getApi() { }
    getHello() {
        return "<H1> HELLO WORLD !!! <H1>";
    }
};
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'username', description: "nothing" }),
    (0, swagger_1.ApiQuery)({ name: 'password', description: "nothing" }),
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    __param(0, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", get_user_dto_1.GetUserDto)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Redirect)('api'),
    (0, swagger_1.ApiOkResponse)({ 'description': 'redirection to /api' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getApi", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, swagger_1.ApiOkResponse)({ 'description': 'redirection to /api' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('App')
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map