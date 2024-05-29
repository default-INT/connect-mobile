import { EventType } from '@root/api/events/dto';
import {
  BeachIcon, BicycleIcon,
  CompassIcon, FillCocktailIcon,
  FillTalkIcon, FillWeightIcon,
  ForkKnifeIcon, InstagramIcon,
  MapPinLocationIcon, PinQuestionIcon,
  RouteIcon,
} from '@root/assets/icons';

export const iconByType = {
  [EventType.Sport]: FillWeightIcon,
  [EventType.RestaurantAndCafe]: ForkKnifeIcon,
  [EventType.Walking]: MapPinLocationIcon,
  [EventType.Tourism]: CompassIcon,
  [EventType.TalkingClub]: FillTalkIcon,
  [EventType.BarAndDrinks]: FillCocktailIcon,
  [EventType.Bicycle]: BicycleIcon,
  [EventType.Beach]: BeachIcon,
  [EventType.Activities]: RouteIcon,
  [EventType.Photos]: InstagramIcon,
  [EventType.Other]: PinQuestionIcon,
};
