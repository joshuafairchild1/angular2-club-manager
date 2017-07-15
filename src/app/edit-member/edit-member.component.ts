import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember: any;
  @Output() endEditSender = new EventEmitter();
  clubId: string;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.forEach(param => {
      this.clubId = param['clubId'];
    });
  }

  stopEditing(member: any): void {
    this.endEditSender.emit();
    this.memberService.updateMember(member);
  }

  deleteSelectedMember(member: any): void {
    this.memberService.deleteMember(member, this.clubId);
  }
}
