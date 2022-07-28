import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrderService } from "./order.service";

@Controller("order")
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Post()
  AddOrder(@Body() data: any) {
    // console.log(data);
    return this.orderService.createOrder(data);
  }
  @Get()
  GetOrder() {
    return this.orderService.getAll();
  }
}
