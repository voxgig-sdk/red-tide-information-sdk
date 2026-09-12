import { RedTideInformationEntityBase } from '../RedTideInformationEntityBase';
import type { RedTideInformationSDK } from '../RedTideInformationSDK';
import type { Control } from '../types';
import type { SimplifiedChinese, SimplifiedChineseListMatch } from '../RedTideInformationTypes';
declare class SimplifiedChineseEntity extends RedTideInformationEntityBase<SimplifiedChinese> {
    constructor(client: RedTideInformationSDK, entopts: any);
    make(this: SimplifiedChineseEntity): SimplifiedChineseEntity;
    list(this: any, reqmatch?: SimplifiedChineseListMatch, ctrl?: Control): Promise<SimplifiedChineseEntity[]>;
}
export { SimplifiedChineseEntity };
