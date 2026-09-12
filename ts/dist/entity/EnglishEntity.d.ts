import { RedTideInformationEntityBase } from '../RedTideInformationEntityBase';
import type { RedTideInformationSDK } from '../RedTideInformationSDK';
import type { Control } from '../types';
import type { English, EnglishListMatch } from '../RedTideInformationTypes';
declare class EnglishEntity extends RedTideInformationEntityBase<English> {
    constructor(client: RedTideInformationSDK, entopts: any);
    make(this: EnglishEntity): EnglishEntity;
    list(this: any, reqmatch?: EnglishListMatch, ctrl?: Control): Promise<EnglishEntity[]>;
}
export { EnglishEntity };
