/**
 * My Title
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Affects } from './affects';
import { ArmourRating } from './armourRating';
import { Attributes } from './attributes';
import { Config } from './config';
import { Equipment } from './equipment';
import { Item } from './item';
import { Money } from './money';
import { Stats } from './stats';
import { Status } from './status';


export interface Character { 
    connectionId?: string;
    accountId: string;
    id: string;
    name?: string;
    longName?: string;
    gender?: string;
    race?: string;
    className?: string;
    level: number;
    description?: string;
    alignmentScore: number;
    totalExperience: number;
    experience: number;
    experienceToNextLevel: number;
    equipped?: Equipment;
    inventory?: Array<Item>;
    stats?: Stats;
    status: Status;
    maxStats?: Stats;
    attributes?: Attributes;
    maxAttributes?: Attributes;
    target?: string;
    armorRating?: ArmourRating;
    money?: Money;
    affects?: Affects;
    config?: Config;
    roomId: number;
    recallId: number;
    defaultAttack?: string;
}
