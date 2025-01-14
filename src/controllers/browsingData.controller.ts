import { Request, Response } from 'express';
import { BrowsingDataModel } from './../models/BrowsingData.model';
import axios from 'axios';
import { IIPGeoLocationResponse } from 'ipGeoLocation.interface';

export class BrowsingData {
  public async saveBrowsingLoc(req: Request, res: Response): Promise<void> {
    try {
      const apiRes = await axios.get<IIPGeoLocationResponse>(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEOLOCATION_API_KEY}`);
      res.status(200).json({ success: true, data: 'Kavya is a Good Girl!' });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Error fetching users' });
    }
  }

}