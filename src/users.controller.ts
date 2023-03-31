import { Controller, Get, Headers, HttpCode, Param, Query, Redirect, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

interface videoParams {
    id:number;
    name:string;
}
interface videoQuery {
    id:number;
    name:string;
}

@Controller('/users')
export class UserController {
    @Get('/vedio/:id/:name')
    getVideo(@Param() params:videoParams ){
        console.log(params.id);
        return params;
    }

    @Get('/vedio')
    getVideos(@Query() query:videoQuery ){
        console.log(query.id);
        return query;
    }
    
    @Get('/vedios')
    getHeader(@Headers() headers:Record<string, any> ){
        console.log(headers)
        return headers
    }
}