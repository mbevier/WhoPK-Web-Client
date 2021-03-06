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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable, of }                                        from 'rxjs';

import { Alignment } from '../model/alignment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AlignmentService {

    protected basePath = 'http://localhost:62640';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public alignmentGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<Alignment>;
    public alignmentGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Alignment>>;
    public alignmentGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Alignment>>;
    public alignmentGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling alignmentGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Alignment>(`${this.basePath}/api/Character/Alignment/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public alignmentGetAll(observe?: 'body', reportProgress?: boolean): Observable<Array<Alignment>>;
    public alignmentGetAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Alignment>>>;
    public alignmentGetAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Alignment>>>;
    public alignmentGetAll(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Alignment>>(`${this.basePath}/api/Character/Alignment`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param value 
     * @param id 
     * @param name 
     * @param dateCreated 
     * @param createdBy 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public alignmentPost(value?: number, id?: number, name?: string, dateCreated?: Date, createdBy?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public alignmentPost(value?: number, id?: number, name?: string, dateCreated?: Date, createdBy?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public alignmentPost(value?: number, id?: number, name?: string, dateCreated?: Date, createdBy?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public alignmentPost(value?: number, id?: number, name?: string, dateCreated?: Date, createdBy?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (value !== undefined && value !== null) {
            queryParameters = queryParameters.set('Value', <any>value);
        }
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', <any>id);
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('Name', <any>name);
        }
        if (dateCreated !== undefined && dateCreated !== null) {
            queryParameters = queryParameters.set('DateCreated', <any>dateCreated.toISOString());
        }
        if (createdBy !== undefined && createdBy !== null) {
            queryParameters = queryParameters.set('CreatedBy', <any>createdBy);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/api/Character/Alignment`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
