/* tslint:disable */
/* eslint-disable */
/**
 * Athene
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorBudget,
    ErrorBudgetFromJSON,
    ErrorBudgetToJSON,
    MultiBurnrateAlert,
    MultiBurnrateAlertFromJSON,
    MultiBurnrateAlertToJSON,
    Objective,
    ObjectiveFromJSON,
    ObjectiveToJSON,
    ObjectiveStatus,
    ObjectiveStatusFromJSON,
    ObjectiveStatusToJSON,
    QueryRange,
    QueryRangeFromJSON,
    QueryRangeToJSON,
} from '../models';

export interface GetMultiBurnrateAlertsRequest {
    name: string;
}

export interface GetObjectiveRequest {
    name: string;
}

export interface GetObjectiveErrorBudgetRequest {
    name: string;
    start?: number;
    end?: number;
}

export interface GetObjectiveStatusRequest {
    name: string;
}

export interface GetREDErrorsRequest {
    name: string;
    start?: number;
    end?: number;
}

export interface GetREDRequestsRequest {
    name: string;
    start?: number;
    end?: number;
}

/**
 * 
 */
export class ObjectivesApi extends runtime.BaseAPI {

    /**
     * Get the MultiBurnrateAlerts for the Objective
     */
    async getMultiBurnrateAlertsRaw(requestParameters: GetMultiBurnrateAlertsRequest): Promise<runtime.ApiResponse<Array<MultiBurnrateAlert>>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getMultiBurnrateAlerts.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/objectives/{name}/alerts`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MultiBurnrateAlertFromJSON));
    }

    /**
     * Get the MultiBurnrateAlerts for the Objective
     */
    async getMultiBurnrateAlerts(requestParameters: GetMultiBurnrateAlertsRequest): Promise<Array<MultiBurnrateAlert>> {
        const response = await this.getMultiBurnrateAlertsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get Objective
     */
    async getObjectiveRaw(requestParameters: GetObjectiveRequest): Promise<runtime.ApiResponse<Objective>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getObjective.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/objectives/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ObjectiveFromJSON(jsonValue));
    }

    /**
     * Get Objective
     */
    async getObjective(requestParameters: GetObjectiveRequest): Promise<Objective> {
        const response = await this.getObjectiveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get ErrorBudget graph sample pairs
     */
    async getObjectiveErrorBudgetRaw(requestParameters: GetObjectiveErrorBudgetRequest): Promise<runtime.ApiResponse<ErrorBudget>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getObjectiveErrorBudget.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = requestParameters.end;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/objectives/{name}/errorbudget`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ErrorBudgetFromJSON(jsonValue));
    }

    /**
     * Get ErrorBudget graph sample pairs
     */
    async getObjectiveErrorBudget(requestParameters: GetObjectiveErrorBudgetRequest): Promise<ErrorBudget> {
        const response = await this.getObjectiveErrorBudgetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get objective status
     */
    async getObjectiveStatusRaw(requestParameters: GetObjectiveStatusRequest): Promise<runtime.ApiResponse<ObjectiveStatus>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getObjectiveStatus.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/objectives/{name}/status`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ObjectiveStatusFromJSON(jsonValue));
    }

    /**
     * Get objective status
     */
    async getObjectiveStatus(requestParameters: GetObjectiveStatusRequest): Promise<ObjectiveStatus> {
        const response = await this.getObjectiveStatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a matrix of error percentage by label
     */
    async getREDErrorsRaw(requestParameters: GetREDErrorsRequest): Promise<runtime.ApiResponse<QueryRange>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getREDErrors.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = requestParameters.end;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/objectives/{name}/red/errors`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryRangeFromJSON(jsonValue));
    }

    /**
     * Get a matrix of error percentage by label
     */
    async getREDErrors(requestParameters: GetREDErrorsRequest): Promise<QueryRange> {
        const response = await this.getREDErrorsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a matrix of requests by label
     */
    async getREDRequestsRaw(requestParameters: GetREDRequestsRequest): Promise<runtime.ApiResponse<QueryRange>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getREDRequests.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = requestParameters.end;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/objectives/{name}/red/requests`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryRangeFromJSON(jsonValue));
    }

    /**
     * Get a matrix of requests by label
     */
    async getREDRequests(requestParameters: GetREDRequestsRequest): Promise<QueryRange> {
        const response = await this.getREDRequestsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List Objectives
     */
    async listObjectivesRaw(): Promise<runtime.ApiResponse<Array<Objective>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/objectives`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ObjectiveFromJSON));
    }

    /**
     * List Objectives
     */
    async listObjectives(): Promise<Array<Objective>> {
        const response = await this.listObjectivesRaw();
        return await response.value();
    }

}
