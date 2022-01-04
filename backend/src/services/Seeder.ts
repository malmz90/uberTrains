import { getRepository } from "typeorm";
import { Seat } from "../models/Seat.entity";
import { TrainUnit } from "../models/TrainUnit.entity";
import { TravelPlan } from "../models/TravelPlan.entity";
import { RouteEvent } from "../models/RouteEvent.entity";
import { PriceModel } from "../models/PriceModel.entity";

export async function seed() {
let seatsA: Seat[] = [
    { seatNumber: "6a" } as Seat,
    { seatNumber: "7a" } as Seat
];
let seatsB: Seat[] = [
  { seatNumber: "2a" } as Seat,
  { seatNumber: "3a" } as Seat
];

  let trainUnits: TrainUnit[] = [{
    name: "Vagn 4",
    seats: seatsA,
    type: "carriage",
  } as TrainUnit,
  {
    name: "Vagn 5",
    seats: seatsB,
    type: "carriage",
  } as TrainUnit];

  let routeEvents: RouteEvent[] = [
    {
      latitude: 57.7072326,
      longitude: 11.9670171,
      dateTime: "2012-04-23T18:30:43.511Z",
      location: "goteborg",
      specifiedLocation: "Platform 5",
      event: "Departure",
    } as RouteEvent,
    {
      latitude: 57.7825634,
      longitude: 14.165719,
      dateTime: "2012-04-23T20:30:43.511Z",
      specifiedLocation: "Platform 1",
      location: "jonkoping",
      event: "Arrival",
    } as RouteEvent,
    {
      latitude: 57.7825634,
      longitude: 14.165719,
      dateTime: "2012-04-23T20:35:43.511Z",
      specifiedLocation: "Platform 1",
      location: "jonkoping",
      event: "Departure",
    } as RouteEvent,
    {
      latitude: 59.3251172,
      longitude: 18.0710935,
      dateTime: "2012-04-23T22:30:43.511Z",
      specifiedLocation: "Platform 10a",
      location: "stockholm",
      event: "Arrival",
    } as RouteEvent,
  ];
  
  
  let travelPlan = {
    trainUnits: trainUnits,
    planId: "1111-1111-1111-1111",
    tripName: "X2000 GBG-Sthlm",
    routeEvents: routeEvents
  } as TravelPlan;
  
  let priceModel = {
    name: 'Commuter Train',
    priceConstant: 2,
    trainTypeMultiplyer: 0.8,
    travelPlans: [travelPlan]
  } as PriceModel
  

  let seatRepository = await getRepository(Seat);
  await seatRepository.save(seatsA[0]);
  await seatRepository.save(seatsA[1]);
  await seatRepository.save(seatsB[0]);
  await seatRepository.save(seatsB[1]);

  //let bookingRepository = await getRepository(Booking);
  //await bookingRepository.save(booking);

  let trainUnitRepository = await getRepository(TrainUnit);
  await trainUnitRepository.save(trainUnits[0]);
  await trainUnitRepository.save(trainUnits[1]);



let routeEventRepository = await getRepository(RouteEvent);

await routeEventRepository.save(routeEvents[0]);
await routeEventRepository.save(routeEvents[1]);
await routeEventRepository.save(routeEvents[2]);
await routeEventRepository.save(routeEvents[3]);

  // routeEvents.forEach(async (x) => {
  //   await routeEventRepository.save(x);
  // })

  let travelPlanRepository = await getRepository(TravelPlan);
  await travelPlanRepository.save(travelPlan);

  await PriceModel.save(priceModel);
}