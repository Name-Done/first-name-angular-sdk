export * from './emailDomainName.service';
import { EmailDomainNameService } from './emailDomainName.service';
export * from './familyName.service';
import { FamilyNameService } from './familyName.service';
export * from './givenName.service';
import { GivenNameService } from './givenName.service';
export * from './topLevelDomainName.service';
import { TopLevelDomainNameService } from './topLevelDomainName.service';
export const APIS = [EmailDomainNameService, FamilyNameService, GivenNameService, TopLevelDomainNameService];
