import { Controller, Get, Res, Req, HttpCode, Header } from '@nestjs/common';

@Controller('ca*s')
export class CatsController {

	@Get()
	findAllCats( @Res() response, @Req() request): string {
        console.log("DEBUG: CatsController -> findAllCats -> request", request)
		return response.status(203).send("hello cats")
		// return "hello cats"
	}
	@Get("black")
	@HttpCode(205)
	@Header("myHeader", "none")
	@Header("myCustomHeader", "10")
	findAllBlackCats(): string {
		
		return "hello black cats"
	}
}
