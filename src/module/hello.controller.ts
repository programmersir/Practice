import { Controller,Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('hello')
@Controller()
export class HelloController{
    @Get('/hello')
    getHello():{time:string}{
        const currentDatetime = new Date().toString();
        return{time:currentDatetime};
    }
}