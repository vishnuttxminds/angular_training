import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  name: string = 'Suvasu';
  role: string = 'Staff';
  active: boolean = false;

  // nameText: string = '';
  // roleText: string = '';

  userProfile = {
    name: this.name,
    role: this.role,
    active: this.active,
    image: '/assets/images/staff.jpg',
  };

  activeTrueFalse() {
    this.userProfile.active = !this.userProfile.active;
  }

  onNameChange(event: any) {
    this.name = event.target.value;
  }

  updateSearchText(event: any) {
    this.name = event.target.value;
  }
}
