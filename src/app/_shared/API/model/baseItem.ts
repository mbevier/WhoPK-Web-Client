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
import { Description } from './description';


export interface BaseItem { 
    uuid?: string;
    id: number;
    name?: string;
    level: number;
    knownByName: boolean;
    description?: Description;
    keywords?: Array<string>;
    isHiddenInRoom: boolean;
    hidden: boolean;
    stuck: boolean;
    decayTimer: number;
    condition: number;
    questItem: boolean;
}
