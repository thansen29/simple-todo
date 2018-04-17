import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  isOpen: boolean = false;
  selected: string = "Contact Info";
  items: string[] = ['Github', 'LinkedIn', 'Portfolio'];

  constructor() { }

  ngOnInit() {
  }

  handleSelect() {
    this.isOpen = !this.isOpen;
  }

  handleBlur() {
    this.isOpen = false;
  }

  selectItem(item) {
    const git = "https://github.com/thansen29";
    const linked = "https://www.linkedin.com/in/thomas-hansen-1a0a51132/";
    const port = "http://www.tomhansen.io";
    switch (item) {
      case "Github":
        window.open(git, '_blank');
        break;
      case "LinkedIn":
        window.open(linked, '_blank');
        break;
      case "Portfolio":
        window.open(port, '_blank');
        break;
    }

  }

}
