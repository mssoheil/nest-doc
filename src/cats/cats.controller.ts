import { Controller, Get, Res, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {

	@Get()
	findAllCats( @Res() response, @Req() request): string {
        console.log("DEBUG: CatsController -> findAllCats -> request", request)
		return response.status(203).send("hello cats")
		// return "hello cats"
	}
}
