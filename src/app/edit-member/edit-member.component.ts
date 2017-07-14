import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Member } from './../member.model';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember: any;
  @Output() endEditSender = new EventEmitter();

  constructor(
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
  }

  stopEditing(member: any): void {
    this.endEditSender.emit();
    this.memberService.updateMember(member);
  }

  deleteSelectedMember(member: any): void {
    this.memberService.deleteMember(member);
  }
}
