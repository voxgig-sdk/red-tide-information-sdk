import { EnglishEntity } from './entity/EnglishEntity';
import { SimplifiedChineseEntity } from './entity/SimplifiedChineseEntity';
import { TraditionalChineseEntity } from './entity/TraditionalChineseEntity';
export type * from './RedTideInformationTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RedTideInformationEntityBase } from './RedTideInformationEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class RedTideInformationSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    English(entopts?: Record<string, any>): EnglishEntity;
    SimplifiedChinese(entopts?: Record<string, any>): SimplifiedChineseEntity;
    TraditionalChinese(entopts?: Record<string, any>): TraditionalChineseEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RedTideInformationSDK;
    tester(testopts?: any, sdkopts?: any): RedTideInformationSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RedTideInformationSDK;
export { stdutil, config, BaseFeature, RedTideInformationEntityBase, RedTideInformationSDK, SDK, };
