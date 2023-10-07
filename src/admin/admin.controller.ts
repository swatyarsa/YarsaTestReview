// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   ParseIntPipe,
//   Patch,
//   Post,
//   Put,
//   Query,
//   UseGuards,
// } from '@nestjs/common';
// import { PlayerService } from '../player/player.service';
// import {
//   ApiBearerAuth,
//   ApiOperation,
//   ApiQuery,
//   ApiResponse,
//   ApiTags,
// } from '@nestjs/swagger';
// import { AdminAuthGuard } from '../user/guard/admin.auth.guard';
// import { PlayerGetDto, PlayerUpdateDto } from '../player/Dto/player.dto';
// import {
//   RefreshDto,
//   RefreshResponseDto,
//   SeedDto,
//   UserDto,
//   UserLoginDto,
//   UserLoginResponseDto,
//   UserResponseDto,
//   UserUpdateDto,
// } from '../user/Dto/user.dto';
// import { PlayerAuthGuard } from '../player/guard/playerAuth.guard';
// import { UserService } from '../user/user.service';
//
// @Controller('admin')
// @UseGuards(AdminAuthGuard)
// @ApiTags('Admin Controllers')
export class AdminController {}
//   constructor(
//     private readonly playerService: PlayerService,
//     private readonly userService: UserService,
//   ) {}
//
//   @UseGuards(AdminAuthGuard)
//   @ApiOperation({ summary: 'Admin route to delete a player' })
//   @ApiBearerAuth()
//   @Delete('player/:id')
//   async deletePlayer(@Param('id') id: string) {
//     return this.playerService.deletePlayer(id);
//   }
//
//   @UseGuards(AdminAuthGuard)
//   @ApiOperation({ summary: 'Admin route to update a player' })
//   @ApiBearerAuth()
//   @Put('player/:id')
//   async updatePlayer(
//     @Body() playerData: PlayerUpdateDto,
//     @Param('id') id: string,
//   ) {
//     return this.playerService.updatePlayer(id, playerData);
//   }
//
//   @UseGuards(AdminAuthGuard)
//   @ApiBearerAuth()
//   @ApiResponse({ type: UserResponseDto })
//   @ApiOperation({
//     summary: 'Set the player to inactive state',
//   })
//   @Patch('setInactive/:id')
//   setInactive(@Param('id') id: string) {
//     return this.playerService.setInactive(id);
//   }
//
//   @UseGuards(PlayerAuthGuard)
//   @ApiBearerAuth()
//   @ApiQuery({ name: 'searchKey', required: false, type: String })
//   @ApiQuery({ name: 'page', required: true, type: Number })
//   @ApiQuery({ name: 'pageSize', required: true, type: Number })
//   @ApiQuery({ name: 'country', required: false, type: String })
//   @Get('players')
//   @ApiResponse({ type: [PlayerGetDto] })
//   @ApiOperation({
//     summary: 'Get all the players',
//   })
//   getAllPlayers(
//     @Query('searchKey') searchKey = '',
//     @Query('page', ParseIntPipe) page = 1,
//     @Query('pageSize', ParseIntPipe) pageSize = 10,
//     @Query('country') country = '',
//   ) {
//     const skip = page ? (page - 1) * pageSize : 0;
//     return this.playerService.getAllPlayers(searchKey, pageSize, skip, country);
//   }
//
//   @UseGuards(AdminAuthGuard)
//   @ApiBearerAuth()
//   @ApiOperation({
//     summary: 'Adding a new user (admin/staff)',
//   })
//   @Post()
//   @ApiResponse({
//     type: UserResponseDto,
//     description: '**role must be one of the following values: admin, staff**',
//   })
//   addUser(@Body() userDto: UserDto) {
//     return this.userService.addUser(userDto);
//   }
//
//   @Post('seed')
//   @ApiResponse({ type: UserResponseDto })
//   @ApiOperation({ summary: 'Seed the first admin user' })
//   seedAdmin(@Body() seedDto: SeedDto) {
//     return this.userService.seedAdmin(seedDto);
//   }
//
//   @Post('login')
//   @ApiResponse({
//     type: UserLoginResponseDto,
//   })
//   @ApiOperation({
//     summary: 'User(admin/staff) login',
//   })
//   loginUser(@Body() loginDto: UserLoginDto) {
//     return this.userService.loginUser(loginDto);
//   }
//
//   @Post('generaterefresh')
//   @ApiResponse({ type: RefreshResponseDto })
//   @ApiOperation({
//     summary: 'generate a new access and refresh token',
//   })
//   expireRefreshToken(@Body() refreshDto: RefreshDto) {
//     console.log(refreshDto);
//     return this.userService.generateNewTokens(refreshDto);
//   }
//
//   @UseGuards(AdminAuthGuard)
//   @ApiBearerAuth()
//   @ApiOperation({
//     summary: 'Updating the user data of given id',
//     description: '**role must be one of the following values: admin, staff**',
//   })
//   @Put('/:id')
//   @ApiResponse({ type: UserResponseDto })
//   updateUser(@Body() userDto: UserUpdateDto, @Param('id') id: string) {
//     return this.userService.updateUser(id, userDto);
//   }
//
//   @UseGuards(AdminAuthGuard)
//   @ApiBearerAuth()
//   @ApiOperation({
//     summary: 'Delete a specific user with given id',
//   })
//   @Delete('/:id')
//   @ApiResponse({ type: UserResponseDto })
//   deleteUser(@Param('id') id: string) {
//     return this.userService.deleteUser(id);
//   }
// }