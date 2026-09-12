import { RedTideInformationEntityBase } from '../RedTideInformationEntityBase';
import type { RedTideInformationSDK } from '../RedTideInformationSDK';
import type { Control } from '../types';
import type { TraditionalChinese, TraditionalChineseListMatch } from '../RedTideInformationTypes';
declare class TraditionalChineseEntity extends RedTideInformationEntityBase<TraditionalChinese> {
    constructor(client: RedTideInformationSDK, entopts: any);
    make(this: TraditionalChineseEntity): TraditionalChineseEntity;
    list(this: any, reqmatch?: TraditionalChineseListMatch, ctrl?: Control): Promise<TraditionalChineseEntity[]>;
}
export { TraditionalChineseEntity };
