import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Seat } from "./Seat.entity";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookingNumber: string;

  @Column()
  localDateTime: string;

  @OneToMany(() => Seat, seat => seat.booking)
  bookedSeats: Seat[];

  @Column()
  startStation: string;

  @Column()
  endStation: string;

  @Column()
  totalPrice: number;

}