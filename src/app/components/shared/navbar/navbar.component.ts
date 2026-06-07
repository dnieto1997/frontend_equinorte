import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  collapsed = false;
  sidebarOpen = false;
  isDesktop = false;

  ngOnInit(): void {
    this.checkScreen();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkScreen();
  }

  private checkScreen(): void {
    this.isDesktop = window.innerWidth >= 768;

    if (this.isDesktop) {
      this.sidebarOpen = true;
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  toggleMobile(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    if (!this.isDesktop) {
      this.sidebarOpen = false;
    }
  }

}