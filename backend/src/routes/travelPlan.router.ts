import express, { Request, Response } from 'express';
import { TravelPlanner } from '../services/TravelPlanner';

const router = express.Router();
router.get("/api/travelPlanInfo", async (req: Request, res: Response) => {
  const {end, start, date} = req.query;
  const travelPlanner = new TravelPlanner();
  const info = await travelPlanner.getTravelPlanInfo((start as string).toLowerCase(), (end as string).toLowerCase(), date as string);
  
  res.json(info);
});
router.get("/api/journey", async (req: Request, res: Response) => {
  const {end, start, date} = req.query;
  const travelPlanner = new TravelPlanner();
  const info = await travelPlanner.getFullTravelPlanByStartStopDate((start as string).toLowerCase(), (end as string).toLowerCase(), date as string);
  res.json(info);
});
router.get("/api/travelPlan/:id", async (req: Request, res: Response) => {
  const travelPlanner = new TravelPlanner();
  const travelPlan = await travelPlanner.getFullTravelPlanById(parseInt(req.params.id));
  res.json(travelPlan);
});

export {router as travelPlanRouter}