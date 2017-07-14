import { Member } from './member.model';

export class Club {
  constructor(
    public title: string,
    public about: string,
    public memberList: Member[]
  ) {}
}
