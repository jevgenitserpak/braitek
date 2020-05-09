import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('hamburger').addEventListener('click', function(){
      this.classList.toggle('active');
      document.querySelector('.mobile-menu').classList.toggle('active');
    });
  }

}
