import { Controller, Get, HttpCode, Redirect, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('/users')
export class UserController {

    @Get("/profile")
    @HttpCode(200)
    // @Redirect('/users/account',302)
    getProfile(@Req() req:Request){
        // return {"name":"Himanshu Saini"}
        let rand = (Math.random()*10+1)
        console.log("object--------->",rand)
        if(rand<5) {
            return {
                url:'/users/account',
            };
        }
        else {
            return {
                url:'/users/wallet',
            };
        }
    }

    @Get('/account')
    getAccount(){
        return {
            "account":"Saving Account"
        }
    }

    @Get('/wallet')
    getWallet(){
        return {
            "account":"Wallet Account"
        }
    }
}