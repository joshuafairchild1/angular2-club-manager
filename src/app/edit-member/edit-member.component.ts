import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Member } from './../member.model';
import { ClubService } from './../club-manager.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember: any;
  @Output() endEditSender = new EventEmitter();

  constructor(
    private clubService: ClubService,
  ) { }

  ngOnInit(): void {
  }

  stopEditing(member: any): void {
    this.endEditSender.emit();
    this.clubService.updateMember(member);
  }

  deleteSelectedMember(member: any): void {
    this.clubService.deleteMember(member);
  }
}
