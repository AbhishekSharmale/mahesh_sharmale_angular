import { Component, OnInit, Renderer2 } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mahesh-sharmale-landing';
  isMenuOpen = false;
  window = window;
  showScrollTop = false;
  isScrolled = false;
  currentLang = 'mr'; // Default language is Marathi

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Add Font Awesome
    this.addFontAwesome();
    
    // Add scroll reveal effect
    window.addEventListener('scroll', this.revealOnScroll);
    this.revealOnScroll(); // Check on load
    
    // Add scroll event for navbar
    window.addEventListener('scroll', this.handleNavbarScroll);
    
    // Add scroll event for scroll-to-top button
    window.addEventListener('scroll', this.handleScrollToTop.bind(this));
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu() {
    this.isMenuOpen = false;
  }
  
  switchLanguage(lang: string) {
    this.currentLang = lang;
    // In a real implementation, this would trigger language change throughout the app
    // For now, we'll just update the UI to show the language toggle working
  }
  
  private addFontAwesome() {
    const fontAwesomeLink = this.renderer.createElement('link');
    this.renderer.setAttribute(fontAwesomeLink, 'rel', 'stylesheet');
    this.renderer.setAttribute(fontAwesomeLink, 'href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    this.renderer.appendChild(document.head, fontAwesomeLink);
  }
  
  private revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  private handleNavbarScroll() {
    if (window.scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  private handleScrollToTop() {
    this.showScrollTop = window.scrollY > 300;
  }
}