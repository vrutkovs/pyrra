/* tslint:disable */
/* eslint-disable */
/**
 * Pyrra
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Indicator,
    IndicatorFromJSON,
    IndicatorFromJSONTyped,
    IndicatorToJSON,
} from './';

/**
 * 
 * @export
 * @interface Objective
 */
export interface Objective {
    /**
     * 
     * @type {string}
     * @memberof Objective
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Objective
     */
    namespace: string;
    /**
     * 
     * @type {string}
     * @memberof Objective
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof Objective
     */
    target: number;
    /**
     * 
     * @type {number}
     * @memberof Objective
     */
    window: number;
    /**
     * 
     * @type {string}
     * @memberof Objective
     */
    config: string;
    /**
     * 
     * @type {Indicator}
     * @memberof Objective
     */
    indicator?: Indicator;
}

export function ObjectiveFromJSON(json: any): Objective {
    return ObjectiveFromJSONTyped(json, false);
}

export function ObjectiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): Objective {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'namespace': json['namespace'],
        'description': json['description'],
        'target': json['target'],
        'window': json['window'],
        'config': json['config'],
        'indicator': !exists(json, 'indicator') ? undefined : IndicatorFromJSON(json['indicator']),
    };
}

export function ObjectiveToJSON(value?: Objective | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'namespace': value.namespace,
        'description': value.description,
        'target': value.target,
        'window': value.window,
        'config': value.config,
        'indicator': IndicatorToJSON(value.indicator),
    };
}


