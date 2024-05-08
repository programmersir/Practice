import { Controller,Get } from "@nestjs/common";
@Controller()
export class HelloController{
    @Get('/hello')
    getHello():{time:string}{
        const currentDatetime = new Date().toString();
        return{time:currentDatetime};
    }
}