import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
// import { AppService } from './app.service';

@Controller()
@ApiTags('App')
export class AppController {
    // constructor(private readonly appService: AppService) { }
    constructor() { }

    @Get()
    @Redirect('api')
    @ApiOkResponse({ 'description': 'edirection to /api' })
    getHello() { }
}
